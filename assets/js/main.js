// assets/js/main.js
"use strict";

import {
  lerEstadoDiaDoDOM,
  lerPeriodosDoDOM,
  lerTarefasDoDOM,
  habilitarCheckboxes,
  aplicarStatusNoDOM,
  feedback,
} from "./ui.js";

import { criarSistema, STATUS } from "./data.js";
import { aplicarRegras, marcarComoFeita } from "./rules.js";
import { carregarStatusDasTarefas, salvarStatusDasTarefas } from "./storage.js";

const SELECTORS = {
  tarefa: (id) => `article.tarefa[data-id="${id}"]`,
  checkboxAcao: 'input[type="checkbox"][data-action="toggle-status"]',
};

function montarSistemaDoDOM() {
  const snapshot = {
    estadoDia: lerEstadoDiaDoDOM(),
    periodos: lerPeriodosDoDOM(),
    tarefas: lerTarefasDoDOM(),
  };
  return criarSistema(snapshot);
}

function indexarTarefasPorId(tarefas) {
  return new Map(tarefas.map((t) => [t.id, t]));
}

function restaurarStatusSalvo(tarefasPorId) {
  const statusSalvoPorId = carregarStatusDasTarefas();

  tarefasPorId.forEach((tarefa, id) => {
    const statusSalvo = statusSalvoPorId[id];
    if (!statusSalvo) return;

    // Não sobrescreve bloqueada (regra do sistema)
    if (tarefa.status === STATUS.BLOQUEADA) return;

    tarefasPorId.set(id, { ...tarefa, status: statusSalvo });
  });
}

function sincronizarDOMComEstado(tarefasPorId) {
  tarefasPorId.forEach((tarefa, id) => {
    const el = document.querySelector(SELECTORS.tarefa(id));
    if (el) aplicarStatusNoDOM(el, tarefa.status);
  });
}

function salvarEstado(tarefasPorId) {
  salvarStatusDasTarefas(tarefasPorId);
}

function lidarComToggleCheckbox(event, tarefasPorId) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;

  if (target.type !== "checkbox") return;
  if (target.dataset.action !== "toggle-status") return;

  const tarefaEl = target.closest("article.tarefa");
  if (!tarefaEl) return;

  const tarefaId = tarefaEl.dataset.id || "";
  const tarefaBase = tarefasPorId.get(tarefaId);
  if (!tarefaBase) return;

  // Segurança: bloqueada não pode ser marcada
  if (tarefaBase.status === STATUS.BLOQUEADA) {
    target.checked = false;
    feedback("⛔ Esta tarefa está bloqueada (dependência não atendida).");
    return;
  }

  // checked = true → feita
  if (target.checked) {
    const tarefaFeita = marcarComoFeita(tarefaBase);
    tarefasPorId.set(tarefaId, tarefaFeita);
    aplicarStatusNoDOM(tarefaEl, tarefaFeita.status);
    salvarEstado(tarefasPorId);
    feedback(`✅ Salvo! Tarefa feita: ${tarefaFeita.titulo}`);
    return;
  }

  // checked = false → pendente
  const tarefaPendente = { ...tarefaBase, status: STATUS.PENDENTE };
  tarefasPorId.set(tarefaId, tarefaPendente);
  aplicarStatusNoDOM(tarefaEl, tarefaPendente.status);
  salvarEstado(tarefasPorId);
  feedback(`↩️ Salvo! Voltou para pendente: ${tarefaPendente.titulo}`);
}

function initApp() {
  feedback("✅ Fase 3 (JavaScript): estado será salvo automaticamente.");

  // 1) DOM → sistema
  const sistema = montarSistemaDoDOM();

  // 2) regras automáticas
  const tarefasComRegras = aplicarRegras(sistema.tarefas, sistema.periodos);

  // 3) index por id
  const tarefasPorId = indexarTarefasPorId(tarefasComRegras);

  // 4) restaurar status salvo (persistência)
  restaurarStatusSalvo(tarefasPorId);

  // 5) refletir no DOM
  sincronizarDOMComEstado(tarefasPorId);

  // 6) habilitar checkboxes conforme status
  habilitarCheckboxes();

  // 7) listener único
  document.addEventListener("change", (e) => lidarComToggleCheckbox(e, tarefasPorId));
}

document.addEventListener("DOMContentLoaded", initApp);
