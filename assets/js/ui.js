// assets/js/ui.js
"use strict";

import { PERIODOS, STATUS } from "./data.js";

/**
 * Lê os períodos do DOM na ordem (Manhã, Tarde, Noite)
 * e devolve um array com { id, estado }.
 */
export function lerPeriodosDoDOM() {
  const secoes = Array.from(document.querySelectorAll(".periodo"));
  return secoes.map((secao, index) => {
    const id = PERIODOS[index] ?? `periodo_${index}`;
    const estado = secao.dataset.estadoPeriodo || "normal";
    return { id, estado };
  });
}

/**
 * Lê as tarefas do DOM e devolve array de objetos Tarefa (sem lógica).
 * Observação: o período é inferido pela seção .periodo onde a tarefa está.
 */
export function lerTarefasDoDOM() {
  const secoes = Array.from(document.querySelectorAll(".periodo"));
  const tarefas = [];

  secoes.forEach((secao, index) => {
    const periodo = PERIODOS[index] ?? `periodo_${index}`;
    const cards = Array.from(secao.querySelectorAll("article.tarefa"));

    cards.forEach((card) => {
      const tituloEl = card.querySelector(".tarefa-titulo");
      const titulo = tituloEl ? tituloEl.textContent.trim() : "(sem título)";

      tarefas.push({
        id: card.dataset.id || "",
        titulo,
        categoria: card.dataset.categoria || "",
        prioridade: card.dataset.prioridade || "",
        tipo: card.dataset.tipo || "",
        status: card.dataset.status || "",
        temDependencia: (card.dataset.temDependencia || "nao") === "sim",
        periodo,
      });
    });
  });

  return tarefas;
}

/**
 * Lê o estado geral do dia do <main> (data-estado-dia)
 */
export function lerEstadoDiaDoDOM() {
  const main = document.querySelector("main[data-estado-dia]");
  return main?.dataset?.estadoDia || "em_execucao";
}

function limparClassesDeStatus(el) {
  el.classList.remove(
    "status-pendente",
    "status-feita",
    "status-adiada",
    "status-bloqueada"
  );
}

export function aplicarStatusNoDOM(tarefaEl, status) {
  tarefaEl.dataset.status = status;

  limparClassesDeStatus(tarefaEl);
  tarefaEl.classList.add(`status-${status}`);
}

/**
 * Deixa os checkboxes ativos e sincroniza o "checked" com o status atual.
 */
export function habilitarCheckboxes() {
  const checkboxes = Array.from(
    document.querySelectorAll(
      'input[type="checkbox"][data-action="toggle-status"]'
    )
  );

  checkboxes.forEach((cb) => {
    const tarefaEl = cb.closest("article.tarefa");
    const status = tarefaEl?.dataset?.status;

    // Se estiver bloqueada, não deixa interagir (nesta fase)
    if (status === STATUS.BLOQUEADA) {
      cb.checked = false;
      cb.setAttribute("disabled", "disabled");
      return;
    }

    cb.removeAttribute("disabled");
    cb.checked = status === STATUS.FEITA;
  });
}

/**
 * Feedback simples: console + atualiza alvo com data-feedback (se existir).
 */
export function feedback(mensagem) {
  console.log("ℹ️", mensagem);

  const alvo = document.querySelector("[data-feedback]");
  if (alvo) alvo.textContent = mensagem;
}

/**
 * Renderiza o resumo do dia no bloco já existente no HTML.
 * Espera este markup no index.html:
 *  [data-resumo] com spans:
 *   [data-resumo-total], [data-resumo-feitas], [data-resumo-criticas], [data-resumo-progresso]
 */
export function renderizarResumoDoDia(resumo) {
  const root = document.querySelector("[data-resumo]");
  if (!root) return;

  const totalEl = root.querySelector("[data-resumo-total]");
  const feitasEl = root.querySelector("[data-resumo-feitas]");
  const criticasEl = root.querySelector("[data-resumo-criticas]");
  const progressoEl = root.querySelector("[data-resumo-progresso]");

  if (totalEl) totalEl.textContent = String(resumo.total ?? 0);
  if (feitasEl) feitasEl.textContent = String(resumo.feitas ?? 0);
  if (criticasEl) criticasEl.textContent = String(resumo.criticas ?? 0);
  if (progressoEl) progressoEl.textContent = String(resumo.progresso ?? 0);
}
