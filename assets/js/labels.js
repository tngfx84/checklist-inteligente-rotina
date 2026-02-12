// assets/js/labels.js
"use strict";

export const LABELS_STATUS = {
  pendente: "Pendente",
  feita: "Feita",
  adiada: "Reprogramada",
  bloqueada: "Bloqueada",
};

export const LABELS_PRIORIDADE = {
  p1: "Crítica",
  p2: "Importante",
  p3: "Opcional",
};

export const LABELS_TIPO = {
  fixa: "Fixa",
  variavel: "Variável",
};

/**
 * Acesso seguro aos labels
 */
export function getLabelStatus(valor) {
  return LABELS_STATUS[valor] ?? valor;
}

export function getLabelPrioridade(valor) {
  return LABELS_PRIORIDADE[valor] ?? valor;
}

export function getLabelTipo(valor) {
  return LABELS_TIPO[valor] ?? valor;
}
