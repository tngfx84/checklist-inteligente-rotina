# Checklist Inteligente de Rotina

Sistema em evolução que trata a rotina como um motor de decisão sob restrição, aplicando Pensamento Computacional, arquitetura modular e evolução incremental por fases.

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

# Arquitetura Atual do Projeto

O projeto possui atualmente duas implementações paralelas do mesmo domínio:

## 🌐 Versão Web (HTML + CSS + JavaScript)

Aplicação executada no navegador com:

- Motor lógico em JavaScript
- Persistência via localStorage
- Interface modular
- Regras aplicadas dinamicamente
- Métricas recalculáveis

---

## 🖥 Versão Console (C#) — Fase 4.0

Implementação em C# como aplicação Console, criada para consolidar fundamentos da linguagem e iniciar a transição para o ecossistema .NET.

📁 Pasta: `checklist-rotina-csharp`

### Como executar

```bash
cd checklist-rotina-csharp
dotnet run
```

### Implementado na Fase 4.0

- Aplicação Console via CLI .NET
- Classe `Tarefa` com tipagem forte
- Uso de `List<T>` para armazenar tarefas
- Menu interativo com `switch/case`
- Marcar tarefa como feita por ID
- Cálculo de resumo do dia:
  - total
  - concluídas
  - críticas em aberto
  - percentual de progresso
- Uso de `Dictionary<string, List<int>>`
- Registro de avaliações e cálculo de média

⚠️ Esta versão não possui interface gráfica nem integração com o front-end web.  
Seu objetivo é consolidar fundamentos da linguagem C# antes da evolução para ASP.NET.

---

## 🌐 Abordagem Arquitetural (Versão Web)

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

Fluxo atual do sistema Web:

ler DOM -> criar modelo -> aplicar regras ->
gerar métricas -> atualizar interface ->
persistir estado -> recalcular após interação

checklist-inteligente-rotina/
├─ index.html
├─ rotina.html
├─ regras.html
├─ revisao.html
├─ assets/
│  ├─ css/
│  └─ js/
├─ checklist-rotina-csharp/
│  ├─ Program.cs
│  └─ checklist-rotina-csharp.csproj
├─ docs/
└─ README.md

> Pastas `bin/` e `obj/` não fazem parte do versionamento (arquivos gerados automaticamente pelo .NET).

---

# Fase Atual

## 🌐 Web: Fase 3.1 — Consolidação do Motor Lógico

- Motor reaplicável
- Precedência correta entre regras
- Bloqueio automático por dependência
- Adiamento sob período comprometido
- Persistência estável
- Reset funcional
- Métricas dinâmicas
- Arquitetura modular preservada

---

## 🖥 Console C#: Fase 4.0 — Fundamentos da Linguagem

- Tipagem forte
- Coleções (`List`, `Dictionary`)
- Estruturas de decisão
- LINQ básico
- Organização inicial do domínio

---

# Limitações Conscientes

## Versão Web

- Dependência ainda parcialmente demonstrativa
- Sem override manual
- Sem explicabilidade detalhada

## Versão Console

- Sem regras automatizadas completas
- Sem persistência
- Sem integração com interface

Essas evoluções estão planejadas para as próximas fases.

---

# Próxima Evolução

- Formalização do domínio em C#
- Implementação do motor de regras em .NET
- Evolução para ASP.NET Core
- Criação de API
- Integração entre front-end e back-end

---

# Visualização (Versão Web)

https://tngfx84.github.io/checklist-inteligente-rotina/
