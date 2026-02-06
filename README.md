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
│  └─ css/
│     ├─ base.css        # Tokens e estilos globais
│     ├─ components.css # Componentes reutilizáveis
│     ├─ pages.css      # Ajustes específicos por página
│     └─ style.css      # Entry point (imports)
└─ README.md

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

## 📌 Status atual do projeto

✔ Estrutura HTML sólida  
✔ Layout global estabilizado  
✔ Identidade visual centralizada em variáveis  
✔ Navegação clara e acessível  
✔ Boas práticas reais de HTML e CSS  
✔ Projeto pronto para evoluir sem retrabalho  

---

## 🔜 Próximas fases (planejadas)

O projeto está preparado para evoluir em dois caminhos possíveis:

### CSS mais avançado
- responsividade ampliada  
- temas  
- refinamento visual  

### Introdução gradual de JavaScript
- interações simples  
- aplicação de regras  
- automação do sistema de rotina  

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

Basta abrir qualquer um dos arquivos `.html` no navegador e navegar entre as páginas pelo menu superior.
