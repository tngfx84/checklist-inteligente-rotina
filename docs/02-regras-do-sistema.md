# ⚙️ Regras do Sistema — Especificação de Comportamento

Este documento define as regras determinísticas
que orientam o funcionamento do sistema.

As regras são independentes de interface e tecnologia,
e representam o núcleo lógico do projeto.

---

# 1️⃣ Regra de Ordenação Padrão

Ao gerar ou organizar o plano do dia,
as tarefas devem ser ordenadas segundo o seguinte critério:

1. **Período do dia**
2. **Prioridade**
3. **Tipo de tarefa**

Ordem interna:

- P1 antes de P2
- P2 antes de P3
- Tarefas fixas antes de variáveis (quando mesma prioridade)

Essa ordenação é determinística
e deve produzir o mesmo resultado para o mesmo conjunto de dados.

---

# 2️⃣ Regras de Adaptação

As regras de adaptação são acionadas quando o contexto muda.

## 2.1 Período comprometido

Se um período estiver com capacidade excedida
ou marcado como indisponível:

- Tarefas variáveis de menor prioridade devem ser adiadas.
- Tarefas fixas devem ser mantidas,
  podendo mudar apenas de estado ou período.

---

## 2.2 Dependência não atendida

Se uma tarefa depender de outra que:

- não foi concluída
- ou está bloqueada

Então a tarefa dependente assume status:

bloqueada

Ela não pode ser executada até que a condição seja resolvida.

---

## 2.3 Inserção de imprevisto

Ao inserir tarefa extraordinária:

- O sistema deve recalcular a ordenação.
- Pode haver reclassificação de tarefas variáveis.
- Tarefas fixas não podem ser removidas.

---

# 3️⃣ Regra de Consistência

O sistema deve preservar integridade estrutural:

- Tarefas fixas não são removidas automaticamente.
- Status deve ser coerente com as regras aplicadas.
- Uma tarefa bloqueada não pode ser marcada como feita
  sem resolução da dependência.

---

# 📌 Observação Importante

Essas regras constituem o embrião
de um possível **Rule Engine**.

Na fase .NET, poderão ser implementadas como:

- Serviços de domínio
- Funções puras testáveis
- Casos de uso específicos

