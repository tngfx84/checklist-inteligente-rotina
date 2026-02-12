# Checklist Inteligente de Rotina

Sistema em evolução que trata a rotina como um motor de decisão sob restrição, aplicando Pensamento Computacional, arquitetura modular em JavaScript e evolução incremental por fases.

Este projeto não documenta apenas código. Documenta decisões de engenharia.

---

## Problema que o sistema resolve

A maioria das ferramentas organiza tarefas.

Poucas ajudam a decidir o que fazer agora, especialmente quando:

- o dia muda inesperadamente
- o tempo é limitado
- existem dependências entre tarefas
- prioridades entram em conflito

O Checklist Inteligente de Rotina busca reduzir o esforço cognitivo diário organizando decisões, não apenas listas.

---

## Proposta Central

Não organizar tarefas.  
Organizar decisões sob restrição.

O sistema:

- interpreta contexto (estado do período)
- aplica regras automaticamente
- bloqueia tarefas com dependência
- reprograma tarefas opcionais sob restrição
- recalcula o progresso em tempo real

---

## Abordagem Arquitetural

O projeto é guiado explicitamente por Pensamento Computacional.

### Decomposição

Separação clara entre:

- domínio (`data.js`)
- regras (`rules.js`)
- interface (`ui.js`)
- persistência (`storage.js`)
- métricas (`stats.js`)
- orquestração (`main.js`)

### Abstração

Tarefas são entidades manipuláveis em memória.

A interface é apenas projeção do estado.

### Reconhecimento de padrões

Regras são funções puras aplicadas sobre listas.

Nada é espalhado pelo DOM.

### Algoritmo operacional

Fluxo atual do sistema:

```
ler DOM -> criar modelo -> aplicar regras ->
gerar métricas -> atualizar interface ->
persistir estado -> recalcular após interação
```

---

## Estrutura do Projeto

```
checklist-inteligente-rotina/
├─ index.html
├─ rotina.html
├─ regras.html
├─ revisao.html
├─ assets/
│  ├─ css/
│  │  ├─ base.css
│  │  ├─ components.css
│  │  ├─ pages.css
│  │  └─ style.css
│  └─ js/
│     ├─ config.js
│     ├─ data.js
│     ├─ rules.js
│     ├─ stats.js
│     ├─ ui.js
│     ├─ storage.js
│     └─ main.js
├─ docs/
└─ README.md
```

---

## Fase Atual — 3.1  
### Consolidação do Motor Lógico

Nesta fase o sistema evoluiu de funcional para recalculável e consistente.

### Implementado

- Motor lógico reaplicável após qualquer interação
- Bloqueio automático por dependência (modelo demonstrativo)
- Adiamento automático sob período comprometido
- Precedência correta entre regras
- Resumo dinâmico do dia:
  - total de tarefas
  - concluídas
  - críticas em aberto
  - percentual de progresso
- Persistência com localStorage
- Reset funcional do dia
- Labels aplicados apenas na camada visual
- Arquitetura modular preservada

---

## Comportamentos Atuais

### Dependência (modelo atual)

Se `data-tem-dependencia="sim"`:

- tarefa inicia bloqueada
- checkbox desabilitado
- status não pode ser alterado

Ainda não é dependência estrutural por ID. Essa evolução está planejada.

---

### Período comprometido

Se o período estiver:

```
data-estado-periodo="comprometido"
```

E a tarefa for:

- variável
- prioridade P3

Ela é automaticamente reprogramada (adiada).

---

### Reset do dia

Ao clicar em "Reiniciar dia":

- a persistência é limpa
- os status são redefinidos
- as regras são reaplicadas
- o resumo é recalculado
- a interface é sincronizada

---

## Status Atual do Produto

- Motor previsível
- Estado consistente entre memória e DOM
- Persistência estável
- Reset funcional
- Métricas dinâmicas
- Arquitetura sustentável
- Separação clara de responsabilidades

---

## Limitações Conscientes

- Dependência ainda é booleana (não estrutural por ID)
- Não há override manual de regra
- Não há explicabilidade detalhada por decisão
- Cadastro dinâmico ainda não implementado
- Não há integração com API ou calendário

Essas evoluções estão planejadas.

---

## Próxima Evolução (3.2)

Prioridades estratégicas:

1. Dependências reais por ID
2. Explicabilidade dinâmica das decisões
3. Controle manual do usuário
4. Estratégia anti-acúmulo
5. Evolução para modelo -> UI

---

## Como testar

1. Marque e desmarque tarefas.
2. Observe bloqueios automáticos.
3. Teste período comprometido.
4. Recarregue a página (persistência).
5. Clique em "Reiniciar dia".
6. Verifique o recálculo do resumo.

---

## Sobre o Projeto

Este projeto faz parte de um processo estruturado de evolução técnica que passará por:

- JavaScript avançado
- C#
- ASP.NET Core
- Identity
- Arquitetura .NET
- Testes automatizados
- DevOps
- Microsserviços
- Docker
- Kubernetes

A meta não é apenas concluir um app.  
É construir um sistema evolutivo com maturidade arquitetural crescente.

---

## Visualização

Projeto publicado:

https://tngfx84.github.io/checklist-inteligente-rotina/
