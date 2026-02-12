# ⚙️ Fase JavaScript — Camada de Comportamento (MVP Funcional)

Esta fase transformou o projeto de interface estática
em sistema com comportamento e estado persistente.

O objetivo foi introduzir lógica
sem reescrever HTML ou CSS.

---

# 🎯 Objetivo da Fase

- Aplicar regras do sistema de forma automatizada
- Introduzir estado real às tarefas
- Garantir persistência básica
- Manter separação de responsabilidades

---

# 🧠 Modelo de Funcionamento

O sistema opera a partir de três elementos principais:

1️⃣ Estado  
2️⃣ Regras  
3️⃣ Orquestração  

Fluxo simplificado:

Leitura do DOM → Aplicação das regras → Atualização de estado → Persistência

---

# 📦 Arquitetura do JavaScript

Separação por responsabilidade:

### `data.js`
Define estrutura e constantes do sistema.

### `rules.js`
Contém regras puras e determinísticas.
Não manipula DOM.

### `ui.js`
Responsável exclusivamente por:
- leitura do DOM
- atualização de atributos
- aplicação de classes
- feedback visual

### `storage.js`
Responsável por:
- salvar estado no `localStorage`
- restaurar estado no carregamento

### `main.js`
Orquestra o fluxo da aplicação,
conectando regras, UI e persistência.

---

# 💾 Persistência

O sistema salva:

- status das tarefas (id → status)

No carregamento:

- o estado é restaurado
- as regras são reaplicadas
- a consistência é mantida

---

# 🔐 Restrições Implementadas

- Tarefas com status `bloqueada` não podem ser marcadas como feitas.
- O estado é sempre restaurado antes da aplicação de regras.
- HTML/CSS não foram alterados estruturalmente nesta fase.

---

# 📈 Evolução Arquitetural

Esta fase representa:

- Separação inicial entre domínio e interface
- Introdução de camada de aplicação (orquestração)
- Preparação para migração futura do núcleo lógico para .NET

O núcleo lógico permanece isolável,
o que permitirá formalização como domínio técnico
nas próximas etapas.
