# 🖥️ Estrutura de Interface (Wireframe Funcional)

Este documento descreve a organização estrutural da interface,
independente de estilo visual.

O objetivo é registrar a relação entre
fluxo do sistema e páginas existentes.

---

## 📄 Páginas do Sistema

### `index.html` — Execução
- Visualização da rotina organizada por períodos do dia
- Exibição do estado atual das tarefas
- Interação principal (marcar como feita)

### `rotina.html` — Planejamento
- Estrutura para organização e futura criação de tarefas
- Separação lógica por períodos

### `regras.html` — Transparência
- Catálogo de regras do sistema
- Registro explícito das decisões aplicadas

### `revisao.html` — Aprendizado
- Espaço para reflexão e melhoria do processo
- Preparação para histórico futuro

---

## 🧩 Componentes Principais

- Período do dia (container lógico)
- Card de tarefa (entidade visual padronizada)
- Áreas reservadas para ações futuras (filtros, botões, inputs)

---

## 🎯 Princípio de Design

A interface foi projetada para:

- suportar evolução sem refatoração estrutural
- separar estrutura de comportamento
- permitir leitura automatizada por JavaScript
