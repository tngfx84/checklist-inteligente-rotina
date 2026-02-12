// assets/js/storage.js
"use strict";

import { APP } from "./config.js";

const STORAGE_KEY = APP.storageKey;
const STORAGE_VERSION = APP.storageVersion;


/**
 * Salva um objeto no localStorage
 * @param {Object} estado
 */
export function salvarEstado(estado) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

/**
 * Carrega um objeto do localStorage
 * @returns {Object|null}
 */
export function carregarEstado() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.warn("⚠️ Falha ao ler localStorage, limpando estado inválido.", err);
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

/**
 * Salva apenas o status das tarefas (id -> status)
 * @param {Map<string, Object>} tarefasPorId
 */
export function salvarStatusDasTarefas(tarefasPorId) {
  const tarefas = {};

  tarefasPorId.forEach((tarefa, id) => {
    tarefas[id] = tarefa.status;
  });

  salvarEstado({
    version: STORAGE_VERSION,
    updatedAt: new Date().toISOString(),
    tarefas,
  });
}

/**
 * Carrega apenas o status das tarefas (id -> status)
 * @returns {Object<string, string>}
 */
export function carregarStatusDasTarefas() {
  const estado = carregarEstado();
  if (!estado || !estado.tarefas) return {};
  return estado.tarefas;
}

/**
 * Limpa o estado salvo (usado no "Reiniciar dia").
 */
export function limparEstado() {
  localStorage.removeItem(STORAGE_KEY);
}
