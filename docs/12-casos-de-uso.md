# 🎯 Casos de Uso — Checklist Inteligente de Rotina

Este documento define as ações que o sistema executa
a partir do modelo de domínio.

Os casos de uso representam a camada de aplicação,
responsável por orquestrar entidades e regras.

---

# 1️⃣ Gerar Plano do Dia

## Objetivo
Organizar tarefas do dia segundo regras determinísticas.

## Fluxo
1. Receber lista de tarefas.
2. Validar integridade (dependências).
3. Ordenar tarefas por:
   - Período
   - Prioridade
   - Tipo
4. Retornar plano estruturado.

---

# 2️⃣ Atualizar Status da Tarefa

## Objetivo
Modificar estado da tarefa mantendo consistência do domínio.

## Regras
- Tarefa bloqueada não pode ser marcada como feita.
- Status deve ser válido.
- Mudança pode exigir revalidação de dependências.

---

# 3️⃣ Repriorizar Após Imprevisto

## Objetivo
Reorganizar plano quando nova tarefa é inserida.

## Fluxo
1. Inserir tarefa extraordinária.
2. Recalcular ordenação.
3. Ajustar tarefas variáveis de menor prioridade.
4. Garantir que tarefas fixas permaneçam.

---

# 4️⃣ Validar Dependências

## Objetivo
Garantir que tarefas dependentes só sejam executadas quando possível.

## Regras
- Se tarefa base não estiver concluída → status = bloqueada.
- Revalidação ocorre após cada atualização de estado.

---

# 5️⃣ Persistir Estado

## Objetivo
Salvar e restaurar estado do sistema.

## Implementação Atual
- Persistência via `localStorage`.

## Evolução Planejada
- Substituição por repositório via API (.NET).

---

# 🧠 Observação Arquitetural

Os casos de uso:

- não manipulam diretamente a interface
- não dependem de tecnologia específica
- operam exclusivamente sobre o modelo de domínio

Essa separação permite:

- testabilidade
- migração de tecnologia
- manutenção controlada
