# Checklist Inteligente de Rotina

Sistema para organização e execução de rotinas diárias, com foco em
priorização, adaptação a imprevistos e revisão contínua.

---

## Problema que resolve
Pessoas têm dificuldade em manter rotinas consistentes ao lidar com
múltiplas tarefas, prioridades concorrentes, tempo limitado e imprevistos.

---

## Objetivo
Criar uma solução simples e evolutiva para planejar, executar e revisar
rotinas diárias, preparada para crescer tecnicamente ao longo do tempo.

---

## Estrutura do produto
- **Dashboard do dia (`index.html`)**  
  Visualização da rotina por períodos do dia e status das tarefas.
- **Planejamento (`rotina.html`)**  
  Organização de tarefas, prioridades e períodos.
- **Regras (`regras.html`)**  
  Catálogo de regras de organização e adaptação.
- **Revisão (`revisao.html`)**  
  Espaço para análise e aprendizado da rotina.

---

## Pensamento Computacional aplicado
- **Decomposição:** o problema foi dividido em páginas que representam
  etapas do fluxo (planejar, executar, revisar).
- **Abstração:** tarefas foram tratadas como entidades reutilizáveis,
  com atributos e estados bem definidos.
- **Reconhecimento de padrões:** estados e atributos seguem padrões
  consistentes e repetíveis.
- **Algoritmo:** regras foram documentadas como passos claros antes
  de qualquer automação.
- **Organização:** separação entre produto, estilo e documentação.

---

## Estrutura do projeto
```text
checklist-inteligente-rotina/
├─ index.html
├─ rotina.html
├─ regras.html
├─ revisao.html
├─ assets/
│  ├─ css/
│  │  ├─ style.css
│  │  ├─ base.css
│  │  ├─ components.css
│  │  └─ pages.css
├─ docs/
│  ├─ 00-visao-geral.md
│  ├─ 01-pensamento-computacional.md
│  ├─ 02-regras-do-sistema.md
│  ├─ 03-wireframe.md
│  └─ 04-pensamento-computacional-aplicado.md
└─ README.md
