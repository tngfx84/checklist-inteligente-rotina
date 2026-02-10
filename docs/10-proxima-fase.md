# Próxima fase — Preparação (refino vendável e evolução .NET)

## Estado atual (Fase JS)
- Dashboard funcional: tarefas mudam de status via checkbox.
- Regras automáticas aplicadas ao carregar.
- Persistência via localStorage (status por id).
- Arquitetura preservada: dados / regras / UI / storage / orquestração.

## Próximas evoluções (sem escopo imediato)

### 1) Refino de linguagem vendável (UI)
Objetivo: manter valores internos estáveis e melhorar textos para humanos.

- Criar dicionários de rótulos (ex.: `p1` → "Crítica")
- Padronizar mensagens de feedback
- Substituir termos técnicos por linguagem de produto:
  - "adiada" → "reprogramada" (apenas na exibição)
  - "p1/p2/p3" → "crítica/importante/opcional" (apenas na exibição)

Regra: valores internos (data-*, storage) continuam usando os códigos.

### 2) Cadastro de tarefas (rotina.html)
Objetivo: usuário criar/editar tarefas.

- Ativar formulário (remover disabled via JS)
- Validar campos e criar tarefa no padrão do sistema
- Salvar lista completa de tarefas no storage
- Renderizar tarefas dinamicamente no dashboard

### 3) Evolução para back-end (.NET)
Objetivo: trocar persistência local por API.

- Manter o mesmo modelo de domínio (Tarefa, Periodo, Sistema)
- Criar endpoints básicos:
  - GET tarefas do dia
  - POST nova tarefa
  - PATCH status da tarefa
- Persistência em banco (futuro)
