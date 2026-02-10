# 📘 Checklist Inteligente de Rotina

Projeto em desenvolvimento que trata a **rotina como um sistema**, aplicando **Pensamento Computacional**, boas práticas de **HTML e CSS** e uma evolução por fases bem definidas.

Este repositório documenta não apenas o código, mas **o raciocínio arquitetural por trás das decisões**.

---

## 🎯 Problema que o projeto resolve

Pessoas têm dificuldade em manter rotinas consistentes no dia a dia devido a:

- múltiplas tarefas concorrentes  
- prioridades conflitantes  
- tempo limitado  
- imprevistos frequentes  

O projeto propõe organizar **planejamento, execução e revisão da rotina** de forma clara, adaptável e evolutiva, tratando a rotina como um **sistema**, e não como uma simples lista de tarefas.

---

## 🧠 Abordagem: Pensamento Computacional

O projeto é guiado explicitamente pelos quatro pilares do Pensamento Computacional:

- **Decomposição**  
  A rotina é dividida em etapas claras: planejar, executar, aplicar regras e revisar.

- **Abstração**  
  Tarefas, períodos do dia e estados são tratados como entidades genéricas e reutilizáveis, independentes de tecnologia.

- **Reconhecimento de padrões**  
  Componentes visuais, estados e estruturas que se repetem são resolvidos uma única vez.

- **Algoritmo (conceitual)**  
  Regras e fluxos são definidos como passos claros, mesmo antes da automação.

---

## 🗂 Estrutura do projeto

```text
checklist-inteligente-rotina/
├─ index.html        # Dashboard do dia
├─ rotina.html       # Planejamento da rotina
├─ regras.html       # Regras do sistema
├─ revisao.html      # Revisão do dia
├─ assets/
│  ├─ css/
│  │  ├─ base.css        # Tokens e estilos globais
│  │  ├─ components.css # Componentes reutilizáveis
│  │  ├─ pages.css      # Ajustes específicos por página
│  │  └─ style.css      # Entry point (imports)
│  └─ js/
│     ├─ data.js        # Domínio e constantes do sistema
│     ├─ rules.js       # Regras puras do sistema
│     ├─ ui.js          # Leitura e atualização do DOM
│     ├─ storage.js     # Persistência local (localStorage)
│     └─ main.js        # Orquestração da aplicação
├─ docs/              # Documentação das fases
└─ README.md
```

---

## 🧩 Fases do desenvolvimento

### ✅ Fase 1 — Estrutura e Arquitetura (HTML)

- Mapeamento do problema e do algoritmo conceitual  
- Definição das páginas do sistema  
- Estrutura semântica do HTML  
- Separação clara entre dados, regras e interface  
- Preparação do projeto para evolução futura  

---

### ✅ Fase 2 — Identidade Visual e Layout (CSS)

- Consolidação do layout com CSS  
- Criação de componentes visuais reutilizáveis  
- Uso de Flexbox para posicionamento e organização  
- Definição de estados visuais (sem JavaScript)  
- Interface consistente entre todas as páginas  

---

### ✅ Fase 3 — Layout Global, Navegação e Sistema de Design (HTML & CSS)

- Header e footer reutilizáveis em todas as páginas  
- Navegação funcional entre páginas HTML (sem JavaScript)  
- Sistema de variáveis CSS (`:root`) como fonte da verdade visual  
- Uso consistente de pseudo-classes (`:hover`, `:focus-visible`, `:active`)  
- CSS organizado em camadas (base, componentes, páginas)  
- Layout multi-página coeso, sustentável e preparado para evoluções  

---

### ✅ Fase 4 — Responsividade e Publicação (HTML & CSS)

- Adaptação do layout para mobile, tablet e desktop  
- Uso consistente de unidades relativas (`rem`, `%`)  
- Media queries aplicadas como refinamento (sem layouts paralelos)  
- Validação de responsividade como experiência de uso  
- Projeto publicado e acessível na web  

---

### ✅ Fase 5 — Lógica e JavaScript (Sistema Funcional)

- Introdução de JavaScript sem refatorar HTML ou CSS
- Representação do domínio (tarefas, períodos, estados)
- Regras do sistema implementadas como funções puras
- Interface reagindo a ações do usuário (checkbox)
- Persistência local com `localStorage`
- Separação clara entre:
  - dados
  - regras
  - UI
  - persistência
- Projeto deixa de ser estático e passa a funcionar como sistema

---

## 📌 Status atual do projeto

✔ Estrutura HTML sólida  
✔ Layout global estabilizado  
✔ Identidade visual centralizada em variáveis  
✔ Navegação clara e acessível  
✔ Boas práticas reais de HTML e CSS  
✔ Projeto funcional em JavaScript  
✔ Regras do sistema aplicadas automaticamente  
✔ Interface reagindo a ações do usuário  
✔ Estado preservado entre recarregamentos  
✔ Arquitetura preservada e sustentável  

---

## 🔜 Próximas fases (planejadas)

O projeto está preparado para evoluir em dois caminhos possíveis:

### CSS mais avançado
- responsividade ampliada  
- temas  
- refinamento visual  

### Evoluções planejadas

#### Refino de linguagem e UX
- termos técnicos convertidos em linguagem vendável
- mensagens de feedback mais claras
- melhoria de leitura dos estados do sistema

#### Cadastro de tarefas
- ativação do formulário de planejamento
- criação e edição de tarefas pelo usuário
- renderização dinâmica no dashboard

#### Evolução para back-end (.NET)
- substituição do `localStorage` por API
- persistência em banco de dados
- manutenção do mesmo modelo de domínio
  

Sem necessidade de refatoração estrutural.

---

## 👩‍💻 Sobre o projeto

Este projeto faz parte de um processo de **aprendizado em público**, com foco em:

- clareza arquitetural  
- código sustentável  
- evolução incremental  
- portfólio técnico  

Cada fase é documentada para evidenciar **o raciocínio**, não apenas o resultado final.

---

## 🚀 Como visualizar

O projeto está publicado e pode ser acessado publicamente:

🔗 **URL do projeto:**  
https://tngfx84.github.io/checklist-inteligente-rotina/

Também é possível visualizar localmente abrindo qualquer um dos arquivos
`.html` no navegador e navegando entre as páginas pelo menu superior.

✔ Projeto publicado e acessível na web  

