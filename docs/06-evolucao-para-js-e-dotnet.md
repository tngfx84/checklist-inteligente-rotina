# Evolução planejada: Lógica → JavaScript → Back-end .NET

## 1) Lógica de Programação
As regras documentadas em `regras.html` e `docs/02-regras-do-sistema.md`
serão convertidas para:
- pseudocódigo
- fluxos (planejar → organizar → adaptar)
- casos de teste (cenários de rotina)

## 2) JavaScript (camada de comportamento)
A fase JavaScript irá:
- ler estados e atributos no DOM (`data-*` e classes)
- aplicar regras de ordenação e adaptação
- atualizar estados das tarefas (ex.: `data-status="feita"`)
- habilitar interações já previstas na UI:
  - checkbox “marcar como feita”
  - filtros por categoria/prioridade/status
  - botões “gerar plano do dia” e “aplicar regras”

## 3) Back-end .NET (camada de persistência e serviços)
A fase .NET irá:
- transformar os dados do domínio em modelos (DTO/Entity)
- persistir tarefas e rotinas (histórico por data)
- implementar regras como serviços (ex.: `RoutinePlannerService`)
- expor endpoints para:
  - CRUD de tarefas
  - gerar plano do dia
  - registrar revisão/insights

## 4) Portfólio (o que este projeto demonstra)
Este repositório evidencia:
- Pensamento Computacional aplicado (decisões rastreáveis)
- organização e arquitetura desde o início
- evolução por camadas (HTML/CSS → JS → .NET)
- documentação como parte do produto (padrão profissional)
