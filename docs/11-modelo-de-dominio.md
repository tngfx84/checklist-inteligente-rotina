# 🧠 Modelo de Domínio — Checklist Inteligente de Rotina

Este documento formaliza o núcleo lógico do sistema.

Ele define:

- Entidades
- Atributos
- Regras estruturais
- Relações internas

O objetivo é isolar o domínio
da tecnologia e da interface.

---

# 1️⃣ Entidades Principais

## 🗂️ Task (Tarefa)

Representa a unidade central do sistema.

### Atributos

- `Id` (identificador único)
- `Title`
- `Period` (manhã / tarde / noite)
- `Priority` (P1 / P2 / P3)
- `Type` (fixa / variável)
- `Status` (pendente / feita / adiada / bloqueada)
- `Category` (opcional)
- `DependsOn` (opcional — referência a outra tarefa)

---

## 📅 Period (Período)

Representa um bloco do dia.

### Atributos

- `Name` (manhã / tarde / noite)
- `Capacity` (opcional — limite de tarefas)
- `IsAvailable` (true / false)

---

## 📘 RoutineDay

Representa o conjunto de tarefas organizadas em um dia.

### Atributos

- `Date`
- `List<Task>`
- `Periods`

---

# 2️⃣ Regras Estruturais do Domínio

As seguintes regras devem ser sempre verdadeiras:

- Tarefas fixas não podem ser removidas automaticamente.
- Uma tarefa bloqueada não pode ser marcada como feita.
- Dependências devem ser verificadas antes da execução.
- A ordenação deve respeitar:
  Period → Priority → Type.

---

# 3️⃣ Serviços de Domínio (Planejados)

O domínio poderá conter serviços responsáveis por:

- `RoutinePlanner`
- `Reprioritizer`
- `DependencyValidator`

Esses serviços operam sobre as entidades
sem depender de UI ou banco de dados.

---

# 4️⃣ Independência Tecnológica

Este modelo é independente de:

- HTML
- JavaScript
- localStorage
- .NET

Ele representa o núcleo do sistema,
que pode ser implementado em qualquer linguagem.
