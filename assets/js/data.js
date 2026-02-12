// assets/js/data.js
"use strict";

export const STATUS = {
  PENDENTE: "pendente",
  FEITA: "feita",
  ADIADA: "adiada",
  BLOQUEADA: "bloqueada",
};

export const TIPO = {
  FIXA: "fixa",
  VARIAVEL: "variavel",
};

export const PRIORIDADE = {
  P1: "p1",
  P2: "p2",
  P3: "p3",
};

export const PERIODOS = ["manha", "tarde", "noite"];

export const ESTADO_PERIODO = {
  NORMAL: "normal",
  CHEIO: "cheio",
  COMPROMETIDO: "comprometido",
};

/**
 * Validação simples para evitar status inválido.
 */
function validarValor(valor, conjunto, fallback) {
  return Object.values(conjunto).includes(valor) ? valor : fallback;
}

/**
 * @typedef {Object} Tarefa
 * @property {string} id
 * @property {string} titulo
 * @property {string} categoria
 * @property {string} prioridade
 * @property {string} tipo
 * @property {string} status
 * @property {boolean} temDependencia
 * @property {string|null} dependsOnId
 * @property {string} periodo
 */

/**
 * @typedef {Object} Periodo
 * @property {string} id
 * @property {string} estado
 */

/**
 * @typedef {Object} Sistema
 * @property {string} estadoDia
 * @property {Periodo[]} periodos
 * @property {Tarefa[]} tarefas
 */

/**
 * Cria uma tarefa no formato padrão do sistema
 */
export function criarTarefa(dados) {
  return {
    id: dados.id,
    titulo: dados.titulo,
    categoria: dados.categoria,
    prioridade: validarValor(
      dados.prioridade,
      PRIORIDADE,
      PRIORIDADE.P3
    ),
    tipo: validarValor(
      dados.tipo,
      TIPO,
      TIPO.VARIAVEL
    ),
    status: validarValor(
      dados.status,
      STATUS,
      STATUS.PENDENTE
    ),
    temDependencia: dados.temDependencia ?? false,
    dependsOnId: dados.dependsOnId ?? null,
    periodo: dados.periodo,
  };
}

/**
 * Cria o estado inicial do sistema
 */
export function criarSistema(snapshot) {
  return {
    estadoDia: snapshot.estadoDia,
    periodos: snapshot.periodos,
    tarefas: snapshot.tarefas.map(criarTarefa),
  };
}
