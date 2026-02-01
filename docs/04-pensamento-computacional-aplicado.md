# Pensamento Computacional aplicado nas decisões do projeto

## 1) Páginas por etapa do algoritmo → Decomposição
O sistema foi dividido em páginas que representam etapas do fluxo:
planejar (rotina), executar (dashboard), documentar regras (regras) e revisar (revisão).

## 2) Card de tarefa padronizado → Abstração
A tarefa foi tratada como entidade reutilizável (card) com atributos e metadados,
independente de tecnologia. Isso facilita evolução para JavaScript e back-end.

## 3) Estados com classes + data-* → Reconhecimento de padrões
Status, prioridade, tipo e categoria são marcados com um padrão repetível:
- classes: status-*, prioridade-*, tipo-*
- atributos: data-status, data-prioridade, etc.
Esse padrão permite leitura futura por JavaScript e integração com APIs.

## 4) Catálogo de regras separado dos dados → Algoritmo
As regras foram registradas como catálogo (documento) e não embutidas na UI.
Isso transforma decisões em passos claros, prontos para virar funções e testes.

## 5) Estrutura de pastas + docs → Decomposição + Abstração
O projeto separa responsabilidades:
- produto (HTML)
- estilo (CSS)
- documentação (docs)
Isso evidencia método e facilita manutenção/evolução.
