// assets/js/stats.js
"use strict";

import { STATUS } from "./data.js";

/**
 * Conta tarefas por status.
 * @param {Array<{status: string}>} tarefas
 * @returns {Record<string, number>}
 */
export function contarPorStatus(tarefas) {
  return tarefas.reduce((acc, t) => {
    const key = t.status || "desconhecido";
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
}

/**
 * Calcula progresso do dia.
 * @param {Array<{status: string}>} tarefas
 * @returns {{ total: number, feitas: number, pendentes: number, progresso: number }}
 */
export function calcularProgresso(tarefas) {
  const total = tarefas.length;
  const feitas = tarefas.filter((t) => t.status === STATUS.FEITA).length;
  const pendentes = tarefas.filter((t) => t.status === STATUS.PENDENTE).length;

  const progresso = total === 0 ? 0 : Math.round((feitas / total) * 100);

  return { total, feitas, pendentes, progresso };
}

/**
 * Conta tarefas críticas em aberto (P1 que não estão feitas).
 * @param {Array<{status: string, prioridade: string}>} tarefas
 * @returns {number}
 */
export function contarCriticasEmAberto(tarefas) {
  return tarefas.filter((t) => t.prioridade === "p1" && t.status !== STATUS.FEITA).length;
}

/**
 * Gera um resumo completo do dia (pronto pra UI vendável).
 * @param {Array<{status: string, prioridade: string}>} tarefas
 * @returns {{
 *  total: number,
 *  feitas: number,
 *  pendentes: number,
 *  progresso: number,
 *  criticas: number,
 *  porStatus: Record<string, number>
 * }}
 */
export function gerarResumoDoDia(tarefas) {
  const porStatus = contarPorStatus(tarefas);
  const { total, feitas, pendentes, progresso } = calcularProgresso(tarefas);
  const criticas = contarCriticasEmAberto(tarefas);

  return { total, feitas, pendentes, progresso, criticas, porStatus };
}
