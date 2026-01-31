# Decisão técnica: sem JavaScript nesta fase

## Conceito aplicado
- **Abstração:** o HTML descreve o que existe no sistema (estrutura e estados possíveis).
- **Decomposição:** primeiro uma interface estável; depois comportamento e lógica.

## Decisão
Nesta fase do projeto, não há implementação em JavaScript.

O foco é:
- estruturar corretamente as páginas
- padronizar componentes
- explicitar estados e regras
- preparar o terreno para automação futura

## Preparação para evolução
Mesmo sem JavaScript, o HTML já foi projetado com:
- nomes consistentes de componentes
- classes e atributos `data-*` para estados
- áreas reservadas para ações futuras (botões, inputs e filtros)

Essa abordagem reduz retrabalho e facilita a evolução para:
- JavaScript (interações e regras)
- Back-end (.NET) com persistência e histórico
