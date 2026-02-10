# Fase 3 — Lógica e JavaScript (MVP funcional)

## Objetivo
Transformar o projeto de interface estática em sistema funcional,
introduzindo lógica e comportamento em JavaScript sem refazer HTML/CSS.

## O que foi implementado (MVP)
- Leitura do DOM (tarefas, períodos e estado do dia) a partir de `data-*`.
- Regras do sistema aplicadas automaticamente (funções puras).
- Integração com UI:
  - checkbox “marcar como feita”
  - atualização de `data-status` e classes `status-*`
  - feedback simples via console
- Persistência local:
  - status das tarefas (id -> status) salvo no `localStorage`
  - restauração automática no reload
  - proteção: tarefas `bloqueada` não podem ser marcadas nesta fase

## Arquitetura do JavaScript (separação por responsabilidade)
- `assets/js/data.js` — domínio (constantes, estrutura do sistema)
- `assets/js/rules.js` — regras puras do sistema
- `assets/js/ui.js` — leitura/escrita no DOM + feedback
- `assets/js/storage.js` — persistência no localStorage
- `assets/js/main.js` — orquestração (fluxo da aplicação)

## Critérios validados
- HTML/CSS não foram refeitos.
- Sistema funciona com base em estado e regras.
- Estado sobrevive ao reload (persistência).
