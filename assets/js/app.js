// assets/js/app.js
"use strict";

import { STATUS } from "./data.js";
import { aplicarRegras, marcarComoFeita, ordenarTarefas } from "./rules.js";
import { gerarResumoDoDia } from "./stats.js";

/**
 * Gera o plano do dia (pipeline oficial).
 * - aplica regras
 * - preserva "feitas" quando recalcula
 */

export function gerarPlanoDoDia(tarefasAtuais, periodos) {
  // 1️⃣ Preservar feitas
  const idsFeitas = new Set(
    tarefasAtuais
      .filter((t) => t.status === STATUS.FEITA)
      .map((t) => t.id)
  );

  // 2️⃣ Aplicar regras
  const comRegras = aplicarRegras(tarefasAtuais, periodos);

  // 3️⃣ Restaurar feitas (regras não podem sobrescrever)
  const restauradas = comRegras.map((t) =>
    idsFeitas.has(t.id) ? { ...t, status: "feita" } : t
  );

  // 4️⃣ Ordenar oficialmente
  const ordenadas = ordenarTarefas(restauradas);

  return ordenadas;
}

/**
 * Alterna status via checkbox (caso de uso).
 * Retorna: { tarefasPorId, mensagem }
 */
export function aplicarToggleStatus({ tarefasPorId, tarefaId, checked, periodos }) {
  const tarefaBase = tarefasPorId.get(tarefaId);
  if (!tarefaBase) {
    return { tarefasPorId, mensagem: null };
  }

  if (tarefaBase.status === STATUS.BLOQUEADA) {
    return {
      tarefasPorId,
      mensagem: "⛔ Esta tarefa está bloqueada (dependência não atendida).",
    };
  }

  const novoMap = new Map(tarefasPorId);

  if (checked) {
    const tarefaFeita = marcarComoFeita(tarefaBase);
    novoMap.set(tarefaId, tarefaFeita);

    return {
      tarefasPorId: novoMap,
      mensagem: `✅ Salvo! Tarefa feita: ${tarefaFeita.titulo}`,
    };
  }

  const tarefaPendente = { ...tarefaBase, status: STATUS.PENDENTE };
  novoMap.set(tarefaId, tarefaPendente);

  return {
    tarefasPorId: novoMap,
    mensagem: `↩️ Salvo! Voltou para pendente: ${tarefaPendente.titulo}`,
  };
}

/**
 * Recalcula UI-ready: devolve tarefas recalculadas + resumo.
 */
export function recalcularEstado({ tarefasPorId, periodos }) {
  const tarefasAtuais = Array.from(tarefasPorId.values());
  const tarefasRecalculadas = gerarPlanoDoDia(tarefasAtuais, periodos);
  const resumo = gerarResumoDoDia(tarefasRecalculadas);

  return { tarefasRecalculadas, resumo };
}
