# 🧠 Pensamento Computacional — Base Lógica do Sistema

Este documento formaliza o raciocínio lógico que sustenta
o *Checklist Inteligente de Rotina*.

Ele representa a modelagem conceitual do sistema
antes da implementação técnica.

---

## 1️⃣ Decomposição

A rotina foi decomposta em elementos estruturais claros:

- **Períodos do dia** (manhã, tarde, noite)
- **Tarefas**
- **Prioridades**
- **Tipos de tarefa** (fixa / variável)
- **Status**
- **Restrições e dependências**

Essa decomposição permite tratar a rotina como sistema,
não apenas como lista.

---

## 2️⃣ Reconhecimento de Padrões

A rotina segue um ciclo recorrente:

Planejar → Organizar → Executar → Revisar

Padrões identificados:

- Tarefas recorrentes
- Dependências entre tarefas
- Períodos com capacidade limitada
- Prioridades que mudam conforme contexto

Esses padrões permitem aplicação de regras determinísticas.

---

## 3️⃣ Abstração

A **Tarefa** é tratada como entidade central do sistema.

Ela possui atributos mínimos:

- Identificador
- Período do dia
- Prioridade (P1 / P2 / P3)
- Tipo (fixa / variável)
- Status (pendente / feita / adiada / bloqueada)
- Categoria (opcional)

A abstração permite que a tarefa seja independente
da tecnologia usada para representá-la.

---

## 4️⃣ Modelo Conceitual de Funcionamento

O sistema opera a partir de um algoritmo lógico:

1. Definir períodos do dia
2. Listar tarefas
3. Classificar tarefas por tipo
4. Atribuir prioridades
5. Ordenar por período → prioridade → tipo
6. Aplicar regras de adaptação (se necessário)
7. Executar tarefas
8. Registrar estados e revisar

---

## 📌 Importante

Este modelo é independente de:

- HTML
- JavaScript
- .NET

Ele representa o núcleo conceitual do sistema,
que será formalizado em domínio técnico nas fases seguintes.
