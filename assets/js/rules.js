// assets/js/rules.js
"use strict";

import { STATUS, TIPO, PRIORIDADE } from "./data.js";

/**
 * Regra 1:
 * Se a tarefa for marcada como feita → atualizar status
 */
export function marcarComoFeita(tarefa) {
  return {
    ...tarefa,
    status: STATUS.FEITA,
  };
}

/**
 * Regra 2:
 * Se uma tarefa tem dependência não atendida → status bloqueada
 */
export function aplicarRegraDeDependencia(tarefa) {
  if (tarefa.temDependencia) {
    return {
      ...tarefa,
      status: STATUS.BLOQUEADA,
    };
  }
  return tarefa;
}

/**
 * Regra 3:
 * Se o período estiver comprometido,
 * tarefas variáveis de baixa prioridade são adiadas
 */
export function aplicarRegraPeriodoComprometido(tarefa, periodo) {
  if (
    periodo.estado === "comprometido" &&
    tarefa.tipo === TIPO.VARIAVEL &&
    tarefa.prioridade === PRIORIDADE.P3
  ) {
    return {
      ...tarefa,
      status: STATUS.ADIADA,
    };
  }
  return tarefa;
}

/**
 * Aplica todas as regras do sistema
 */
export function aplicarRegras(tarefas, periodos) {
  return tarefas.map((tarefa) => {
    const periodo = periodos.find((p) => p.id === tarefa.periodo);

    let tarefaAtualizada = tarefa;

    tarefaAtualizada = aplicarRegraDeDependencia(tarefaAtualizada);

    if (periodo) {
      tarefaAtualizada = aplicarRegraPeriodoComprometido(
        tarefaAtualizada,
        periodo
      );
    }

    return tarefaAtualizada;
  });
}

/**
 * Ordenação padrão:
 * período → prioridade → tipo (fixa antes de variável)
 */
export function ordenarTarefas(tarefas) {
  const ordemPeriodo = { manha: 1, tarde: 2, noite: 3 };
  const ordemPrioridade = { p1: 1, p2: 2, p3: 3 };
  const ordemTipo = { fixa: 1, variavel: 2 };

  // copia para não mutar o array original
  return [...tarefas].sort((a, b) => {
    const pA = ordemPeriodo[a.periodo] ?? 99;
    const pB = ordemPeriodo[b.periodo] ?? 99;
    if (pA !== pB) return pA - pB;

    const prA = ordemPrioridade[a.prioridade] ?? 99;
    const prB = ordemPrioridade[b.prioridade] ?? 99;
    if (prA !== prB) return prA - prB;

    const tA = ordemTipo[a.tipo] ?? 99;
    const tB = ordemTipo[b.tipo] ?? 99;
    return tA - tB;
  });
}
