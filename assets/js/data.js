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
 * @typedef {Object} Tarefa
 * @property {string} id
 * @property {string} titulo
 * @property {string} categoria
 * @property {string} prioridade
 * @property {string} tipo
 * @property {string} status
 * @property {boolean} temDependencia
 * @property {string} periodo
 */

/**
 * @typedef {Object} Periodo
 * @property {string} id  // manha|tarde|noite
 * @property {string} estado // normal|cheio|comprometido
 */

/**
 * @typedef {Object} Sistema
 * @property {string} estadoDia
 * @property {Periodo[]} periodos
 * @property {Tarefa[]} tarefas
 */

/**
 * Cria uma tarefa no formato padrão do sistema
 * @param {Object} dados
 * @returns {Object}
 */
export function criarTarefa(dados) {
  return {
    id: dados.id,
    titulo: dados.titulo,
    categoria: dados.categoria,
    prioridade: dados.prioridade,
    tipo: dados.tipo,
    status: dados.status,
    temDependencia: dados.temDependencia ?? false,
    periodo: dados.periodo,
  };
}

/**
 * Cria o estado inicial do sistema
 * @param {Object} snapshot
 * @returns {Object}
 */
export function criarSistema(snapshot) {
  return {
    estadoDia: snapshot.estadoDia,
    periodos: snapshot.periodos,
    tarefas: snapshot.tarefas.map(criarTarefa),
  };
}
