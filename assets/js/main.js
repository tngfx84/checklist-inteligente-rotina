// assets/js/main.js
"use strict";

import { gerarResumoDoDia } from "./stats.js";

import {
  lerEstadoDiaDoDOM,
  lerPeriodosDoDOM,
  lerTarefasDoDOM,
  habilitarCheckboxes,
  aplicarStatusNoDOM,
  feedback,
  renderizarResumoDoDia,
} from "./ui.js";

import { criarSistema, STATUS } from "./data.js";
import { aplicarRegras } from "./rules.js";

import {
  carregarStatusDasTarefas,
  salvarStatusDasTarefas,
  limparEstado,
} from "./storage.js";

import {
  aplicarToggleStatus,
  recalcularEstado,
} from "./app.js";

const SELECTORS = {
  tarefa: (id) => `article.tarefa[data-id="${id}"]`,
  checkboxAcao: 'input[type="checkbox"][data-action="toggle-status"]',
  resetDia: '[data-action="reset-dia"]',
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

function atualizarUIAposMudanca(tarefasPorId, sistemaPeriodos) {
  const { tarefasRecalculadas, resumo } = recalcularEstado({
    tarefasPorId,
    periodos: sistemaPeriodos,
  });

  const novoMap = new Map(tarefasRecalculadas.map((t) => [t.id, t]));

  sincronizarDOMComEstado(novoMap);
  renderizarResumoDoDia(resumo);

  salvarEstado(novoMap);
  habilitarCheckboxes();

  return novoMap;
}

function lidarComToggleCheckbox(event, tarefasPorId, sistemaPeriodos) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return tarefasPorId;
  if (target.type !== "checkbox") return tarefasPorId;
  if (target.dataset.action !== "toggle-status") return tarefasPorId;

  const tarefaEl = target.closest("article.tarefa");
  if (!tarefaEl) return tarefasPorId;

  const tarefaId = tarefaEl.dataset.id || "";
  if (!tarefaId) return tarefasPorId;

  const { tarefasPorId: novoMap, mensagem } = aplicarToggleStatus({
    tarefasPorId,
    tarefaId,
    checked: target.checked,
    periodos: sistemaPeriodos,
  });

  if (mensagem) feedback(mensagem);

  const tarefaAtual = novoMap.get(tarefaId);
  if (tarefaAtual?.status === STATUS.BLOQUEADA) {
    target.checked = false;
  }

  return atualizarUIAposMudanca(novoMap, sistemaPeriodos);
}

/**
 * 🔁 Reinicia o dia
 */
function reiniciarDia(sistemaPeriodos) {
  limparEstado();
  feedback("🔄 Dia reiniciado. Reaplicando regras...");

  const sistema = montarSistemaDoDOM();

  const tarefasComRegras = aplicarRegras(
    sistema.tarefas,
    sistema.periodos
  );

  let novoMap = indexarTarefasPorId(tarefasComRegras);

  sincronizarDOMComEstado(novoMap);

  const resumo = gerarResumoDoDia(
    Array.from(novoMap.values())
  );
  renderizarResumoDoDia(resumo);

  habilitarCheckboxes();

  return novoMap;
}

function initApp() {
  feedback("✅ Fase 3.1: motor lógico recalculável ativo.");

  const sistema = montarSistemaDoDOM();
  const sistemaPeriodos = sistema.periodos;

  const tarefasComRegras = aplicarRegras(
    sistema.tarefas,
    sistema.periodos
  );

  let tarefasPorId = indexarTarefasPorId(tarefasComRegras);

  restaurarStatusSalvo(tarefasPorId);
  sincronizarDOMComEstado(tarefasPorId);

  const resumo = gerarResumoDoDia(
    Array.from(tarefasPorId.values())
  );
  renderizarResumoDoDia(resumo);

  habilitarCheckboxes();

  document.addEventListener("change", (e) => {
    tarefasPorId = lidarComToggleCheckbox(
      e,
      tarefasPorId,
      sistemaPeriodos
    );
  });

  const botaoReset = document.querySelector(SELECTORS.resetDia);
  if (botaoReset) {
    botaoReset.addEventListener("click", () => {
      tarefasPorId = reiniciarDia(sistemaPeriodos);
    });
  }
}

document.addEventListener("DOMContentLoaded", initApp);
