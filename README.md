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

---

## Fase 2 — HTML & CSS (Layout e Identidade Visual)

Nesta fase, o foco do projeto foi consolidar a interface visual do sistema,
transformando a estrutura HTML existente em uma interface organizada,
consistente e preparada para evolução futura.

### Objetivo da fase
- Definir uma base visual estável para o projeto
- Criar componentes reutilizáveis com CSS
- Aplicar Flexbox para posicionamento e organização
- Garantir consistência de tipografia, espaçamento e hierarquia visual
- Preparar a interface para futuras interações em JavaScript, sem implementar lógica

### O que foi implementado
- Organização do CSS em camadas:
  - `base.css` — reset, tipografia e fundação visual
  - `components.css` — componentes reutilizáveis (painéis, cards, períodos, navegação)
  - `pages.css` — ajustes específicos por página
  - `style.css` como entry point (apenas imports)
- Layout consistente nas quatro páginas do produto:
  - Dashboard
  - Planejamento
  - Regras
  - Revisão
- Estados visuais definidos para tarefas e períodos
- Botões, checkboxes e filtros preparados visualmente (desabilitados)

### O que permanece “em breve”
- Interações (checkbox, botões, filtros)
- Aplicação automática das regras do sistema
- Persistência de dados
- Implementação da lógica em JavaScript
- Evolução para back-end (.NET)

> Esta fase não implementa comportamento.
> Ela estabelece uma base visual e estrutural sólida,
> reduzindo retrabalho nas próximas etapas do projeto.
