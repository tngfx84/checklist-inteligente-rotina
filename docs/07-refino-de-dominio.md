# 🧩 Linguagem de Domínio e Produto (Refino Controlado)

Este documento define a linguagem utilizada no sistema,
separando:

- valores internos (técnicos)
- representação externa (orientada ao usuário)

O objetivo é preservar consistência lógica
sem comprometer clareza de produto.

---

# 1️⃣ Princípio adotado

Valores internos devem ser:

- estáveis
- previsíveis
- fáceis de manipular programaticamente

Textos exibidos ao usuário podem evoluir
sem alterar o modelo lógico.

---

# 2️⃣ Prioridade

### Representação interna (atual)
- P1
- P2
- P3

### Representação externa (possível evolução)
- Crítica
- Importante
- Opcional

Decisão:

Manter códigos técnicos internamente
e aplicar dicionário de rótulos na camada de interface.

---

# 3️⃣ Status da tarefa

### Representação interna (atual)
- pendente
- feita
- adiada
- bloqueada

### Possível refinamento externo
- adiada → reprogramada

Motivo:
"Reprogramada" comunica adaptação,
enquanto "adiada" comunica atraso.

A alteração será apenas na camada de exibição.

---

# 4️⃣ Separação entre Domínio e Linguagem de Produto

O domínio define:

- comportamento
- regras
- consistência

A camada de produto define:

- narrativa
- experiência
- percepção de valor

Essa separação permite:

- evolução de produto sem refatoração estrutural
- adaptação a públicos diferentes
- maturidade arquitetural

---

# 📌 Importante

Mudanças de linguagem serão aplicadas apenas quando:

- o sistema possuir comportamento automatizado
- a decisão estiver sendo tomada pelo sistema
- houver necessidade real de comunicação com usuário final
