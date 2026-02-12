# 🧠 Pensamento Computacional Aplicado — Rastreabilidade Arquitetural

Este documento demonstra como o Pensamento Computacional
foi aplicado de forma concreta nas decisões estruturais do projeto.

O objetivo é tornar explícita a relação entre:

conceito → modelagem → implementação

---

## 1️⃣ Decomposição aplicada à estrutura do sistema

A rotina foi dividida em etapas claras,
refletidas nas páginas do projeto:

- **Planejar** → `rotina.html`
- **Executar** → `index.html`
- **Documentar regras** → `regras.html`
- **Revisar** → `revisao.html`

Cada página representa uma fase do algoritmo conceitual,
não apenas uma divisão visual.

---

## 2️⃣ Abstração aplicada ao componente “Tarefa”

A tarefa foi tratada como entidade reutilizável,
representada por um card padronizado.

A estrutura do card contém:

- metadados (via `data-*`)
- classes que representam estado
- separação entre estrutura e comportamento

Essa decisão permite:

- leitura por JavaScript
- futura serialização para API
- evolução para modelo de domínio no back-end

---

## 3️⃣ Reconhecimento de padrões aplicado aos estados

Estados e atributos seguem convenção previsível:

- `status-*`
- `prioridade-*`
- `tipo-*`
- `data-status`
- `data-prioridade`

Esse padrão não é apenas visual.
Ele prepara o sistema para:

- leitura automatizada
- aplicação de regras
- integração com serviços

---

## 4️⃣ Algoritmo aplicado ao catálogo de regras

As regras do sistema foram registradas separadamente da interface.

Isso garante:

- clareza de decisão
- testabilidade futura
- independência entre UI e lógica

A regra existe antes do código.

---

## 5️⃣ Separação estrutural como extensão da decomposição

O projeto organiza responsabilidades em:

- Interface (HTML)
- Estilo (CSS)
- Comportamento (JavaScript)
- Documentação (docs)

Essa separação evidencia intenção arquitetural,
facilitando manutenção e evolução incremental.

---

# 📌 Conclusão

O projeto não evolui apenas por implementação técnica,
mas por decisões estruturadas e rastreáveis.

Essa abordagem permite:

- crescimento controlado
- redução de retrabalho
- migração futura para arquitetura formal (ex.: .NET)
