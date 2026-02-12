# 🏗️ Arquitetura Evolutiva — Lógica → JavaScript → Back-end .NET

Este documento descreve como o projeto evolui
de interface estática para sistema full-stack,
preservando princípios arquiteturais desde o início.

A evolução é incremental e orientada a domínio.

---

# 1️⃣ Fase de Lógica (modelo conceitual)

Antes da implementação técnica,
as regras foram formalizadas nos documentos:

- `docs/01-pensamento-computacional.md`
- `docs/02-regras-do-sistema.md`

Nesta fase:

- O domínio é descrito.
- O algoritmo é definido.
- As decisões são registradas.
- Não há dependência de tecnologia.

Essa etapa garante que o sistema tenha núcleo lógico
antes de qualquer automação.

---

# 2️⃣ Fase JavaScript — Camada de Comportamento

A fase JavaScript introduz:

- Leitura de estados no DOM
- Aplicação das regras como funções puras
- Orquestração do fluxo da aplicação
- Persistência local via `localStorage`

Separação de responsabilidades:

- `data.js` → estrutura e constantes do sistema
- `rules.js` → regras puras (núcleo lógico)
- `ui.js` → manipulação de interface
- `storage.js` → persistência
- `main.js` → orquestração

Essa separação antecipa uma arquitetura em camadas,
mesmo em ambiente front-end.

---

# 3️⃣ Evolução para Back-end (.NET)

Na fase .NET, o núcleo lógico será formalizado como domínio.

Estrutura prevista:

- **Domain**
  - Entidades (Task, Period, RoutineDay)
  - Serviços de regra (RuleEngine / PlannerService)
- **Application**
  - Casos de uso (GenerateDailyPlan, UpdateStatus, Reprioritize)
- **Infrastructure**
  - Persistência (banco de dados)
  - Implementação de repositórios
- **Interface**
  - API REST
  - Comunicação com front-end

Princípios preservados:

- Independência do domínio
- Separação de responsabilidades
- Testabilidade das regras

---

# 🔄 Continuidade Arquitetural

O front-end atual não será descartado.

Ele evolui de:

Interface estática  
→ Interface com comportamento  
→ Cliente de API

A lógica migra do JavaScript para o domínio .NET
sem reescrita estrutural do sistema.

---

# 🎯 Resultado Esperado

Ao final da evolução:

- O sistema terá domínio formalizado.
- As regras serão serviços testáveis.
- A persistência será substituível.
- A arquitetura será compatível com padrões como:
  - Camadas tradicionais
  - Clean Architecture (simplificada)
