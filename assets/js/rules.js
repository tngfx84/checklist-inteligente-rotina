// assets/js/rules.js
"use strict";

import { STATUS, TIPO, PRIORIDADE } from "./data.js";

/**
 * Marca tarefa como feita.
 */
export function marcarComoFeita(tarefa) {
  return {
    ...tarefa,
    status: STATUS.FEITA,
  };
}

/**
 * Regra 1:
 * Se a tarefa tem dependência ativa e ainda não foi cumprida,
 * ela fica bloqueada.
 *
 * Nesta fase, dependência é binária (temDependencia: true/false).
 */
export function aplicarRegraDeDependencia(tarefa) {
  // Nunca sobrescreve tarefa já feita
  if (tarefa.status === STATUS.FEITA) return tarefa;

  if (tarefa.temDependencia) {
    return {
      ...tarefa,
      status: STATUS.BLOQUEADA,
    };
  }

  return tarefa;
}

/**
 * Regra 2:
 * Se o período estiver comprometido,
 * tarefas variáveis de baixa prioridade são adiadas.
 */
export function aplicarRegraPeriodoComprometido(tarefa, periodo) {
  // Não altera tarefa já feita
  if (tarefa.status === STATUS.FEITA) return tarefa;

  // Não altera tarefa bloqueada
  if (tarefa.status === STATUS.BLOQUEADA) return tarefa;

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
 * Mantém previsibilidade e evita sobrescritas indevidas.
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
