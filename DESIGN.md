---
name: WebNest Site
description: Sistema visual do site institucional WebNest, alinhado à implementação React/Vite e às decisões confirmadas da marca.
colors:
  navy: "#03045E"
  blue: "#0077B6"
  blue-deep: "#005F99"
  blue-bright: "#0987B7"
  cyan: "#00B4D8"
  sky: "#90E0EF"
  ice: "#CAF0F8"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "'Manrope Variable', Manrope, sans-serif"
    fontSize: "clamp(3.15rem, 6.1vw, 5.85rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Manrope Variable', Manrope, sans-serif"
    fontSize: "clamp(2.35rem, 4.3vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Manrope Variable', Manrope, sans-serif"
    fontSize: "clamp(1.65rem, 2.4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "'Manrope Variable', Manrope, sans-serif"
    fontSize: "1.06rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "'Manrope Variable', Manrope, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 780
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  compact: "5px"
  control: "9px"
  image: "10px"
  card: "16px"
  navigation: "8px"
  circle: "50%"
  scrollbar: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "30px"
  xxl: "48px"
  shell: "min(1180px, calc(100% - 48px))"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "13px 20px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "13px 20px"
    height: "48px"
  project-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
  project-badge:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.navy}"
    rounded: "{rounded.compact}"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
---

# Design System: WebNest Site

## Overview

**Creative North Star: “O Estúdio Azul Editorial”**

O site apresenta a WebNest como um estúdio digital contemporâneo, claro e organizado. A tipografia editorial dá presença às mensagens; campos alternados de azul, ciano, azul-céu, azul-gelo e branco criam ritmo sem deixar a experiência excessivamente escura ou monocromática.

A interface é direta: a página inicial explica a proposta e encaminha os projetos para suas áreas próprias. Capturas reais são mostradas diretamente, sem moldura que simule navegador. O Hoody Bot é a exceção temática: uma página de projeto em linguagem espacial diurna, com imagens de fundo e transições suaves exclusivas dessa página.

**Key Characteristics:**

- Paleta oficial WebNest aplicada em campos claros e escuros; marinho reservado para contraste e áreas menores.
- Manrope Variable auto-hospedada, com hierarquia editorial e corpo arejado.
- Projetos demonstrativos separados de projetos reais e apresentados com honestidade.
- Superfícies simples, cantos contidos, foco acessível e movimento respeitoso.
- Fundos espaciais e fades entre imagens e fundos sólidos somente no case Hoody Bot.

**The Clear Blue Studio Rule.** Priorize superfícies brancas e claras em áreas de leitura extensas. Use azul-marinho para texto, contraste e detalhes; campos grandes devem alternar tons para evitar blocos de azul muito escuros ou saturados.

## Colors

### Paleta oficial

- **Azul-marinho `#03045E`:** contraste de texto e detalhes de identidade; não usar como campo dominante em extensas áreas claras.
- **Azul `#0077B6`:** superfícies institucionais e fundos de seção, equilibrado com branco e cores claras.
- **Ciano `#00B4D8`:** ação, destaques e estados ativos.
- **Azul-céu `#90E0EF`:** apoio claro, superfícies e elementos secundários.
- **Azul-gelo `#CAF0F8`:** fundo claro de leitura e áreas de respiro.
- **Branco `#FFFFFF`:** cartões, capturas, superfícies e texto de alto contraste.

### Tons de implementação

O CSS também define `--blue-deep: #005F99` e `--blue-bright: #0987B7` como tons auxiliares de contraste e variação. Eles são detalhes internos da implementação, não novas cores canônicas da marca.

**The Contrast First Rule.** Texto sobre fundos claros usa azul-marinho ou o tom profundo de leitura; texto branco ou azul-gelo fica restrito a fundos escuros com contraste suficiente. Ciano é destaque, não cor para parágrafos longos.

**The Blue Rhythm Rule.** Varie campos extensos entre branco, azul-gelo, azul-céu e azul. Evite blocos extensos consecutivos em azul saturado ou marinho.

## Typography

**Display Font:** Manrope Variable, auto-hospedada (Manrope e sans-serif como fallback)  
**Body Font:** Manrope Variable, auto-hospedada (Manrope e sans-serif como fallback)

**Character:** títulos firmes e compactos, corpo confortável e rótulos curtos. Uma família tipográfica preserva unidade entre páginas institucionais, demonstrações e case.

### Hierarchy

- **Display:** 700, `clamp(3.15rem, 6.1vw, 5.85rem)`, entrelinha `0.98`, espaçamento `-0.035em`. Até 720px: `clamp(2.7rem, 13vw, 4.2rem)`.
- **Headline:** 700, `clamp(2.35rem, 4.3vw, 4.4rem)`, entrelinha `1.02`, espaçamento `-0.035em`. Até 720px: `clamp(2.1rem, 10vw, 3.4rem)`.
- **Title:** 700, `clamp(1.65rem, 2.4vw, 2.5rem)`, entrelinha `1.08`.
- **Body:** 400, `1.06rem`, entrelinha `1.72`.
- **Label:** 780, `0.78rem`, entrelinha `1.2`, espaçamento `0.08em`.

### Variações por componente

Os papéis acima formam a escala comum; tamanhos responsivos adicionais são variantes intencionais para componentes específicos, não níveis globais concorrentes. Preserve os limites e contextos abaixo ao ajustar a interface:

- **Lead:** `clamp(1.08rem, 1.5vw, 1.28rem)` em chamadas de abertura; na descrição do projeto, o limite superior é `1.24rem`.
- **Navegação:** `0.94rem`; rótulos de botão usam `1rem`.
- **Marca:** nome `1.34rem` (mobile `1.16rem`); assinatura “Desenvolvimento de sites” `0.7rem`, em caixa alta e com espaçamento amplo.
- **Títulos de projeto:** cartão demonstrativo `clamp(2rem, 3.5vw, 3.5rem)`; projeto real `clamp(2.2rem, 4vw, 4rem)`; próxima etapa `clamp(2.6rem, 5vw, 5rem)`.
- **Títulos de seção/componentes:** serviços `clamp(2.3rem, 4vw, 4rem)`; preços `clamp(2rem, 3vw, 3rem)`; processo `clamp(1.5rem, 2.4vw, 2.4rem)`; narrativa do projeto `clamp(2.1rem, 3.2vw, 3.6rem)`.
- **Leitura de apoio:** texto “Sobre” `clamp(1.12rem, 1.6vw, 1.28rem)`; FAQ `1.08rem`; descrições de captura Hoody `1.02rem`; introdução de projeto `1.15rem`.
- **Metadados:** badge demonstrativo `0.72rem`; badge de projeto `0.78rem`; fatos do projeto `0.7rem` (rótulo compacto); legal `1.3rem` (lead) e `1.8rem` (subtítulo); numeral 404 `clamp(5rem, 12vw, 10rem)`.
- **Preço nos cartões:** valor `clamp(2.5rem, 4vw, 3.6rem)`, peso `780` e algarismos tabulares; “A partir de” em `0.9rem`.
- **Mobile (até 720px):** display `clamp(2.7rem, 13vw, 4.2rem)` e headline `clamp(2.1rem, 10vw, 3.4rem)`; manter ajustes locais somente quando necessários para evitar quebra ou overflow.

**The Component Fit Rule.** Variantes compactas servem a metadados e assinatura; conteúdo de leitura mantém tamanho confortável. Não reduzir o corpo para acomodar layout — reflow, espaço e largura vêm primeiro.

**The Editorial Scale Rule.** Mantenha diferença clara entre títulos e corpo. Animações de revelação de títulos não podem impedir seleção, cortar glifos ou comprometer acentos e descendentes; respeite `prefers-reduced-motion`.

## Layout

O shell principal usa `min(1180px, calc(100% - 48px))`; em telas estreitas a margem lateral passa a 16px. Em desktop (acima de 1280px), as seções principais usam pelo menos `100svh`, com fallback `100vh`, e crescem quando o conteúdo exige. Em tablet e celular (1280px ou menos), removemos esse mínimo para que a altura acompanhe o conteúdo e o espaçamento não fique excessivo. Âncoras internas posicionam a seção no topo do viewport.

### Breakpoints observados

- **1280px:** cartões de projeto passam para uma coluna e as seções deixam de forçar altura mínima de uma tela.
- **980px:** navegação compacta e estruturas largas adaptadas.
- **720px:** escala tipográfica e espaçamentos mobile.
- **390px:** ajustes para telas compactas; largura mínima suportada: 320px.

Cartões de projetos demonstrativos usam composição horizontal no desktop e invertem a imagem em um item alternado. Até 1280px, empilham captura e texto; imagens usam proporção próxima de `8 / 5`. Comparações e metadados devem quebrar em linhas sem rolagem horizontal.

**The Proof Leads Rule.** Use capturas reais como imagens diretas e com espaço suficiente para leitura. Não acrescente chrome, barra de endereço, bolinhas ou moldura que simule navegador.

**The Project Separation Rule.** A página inicial mantém projetos fora do hero; as áreas “Projetos demonstrativos” e “Nossos projetos reais” distinguem claramente a natureza de cada case.

## Elevation & Depth

Profundidade vem principalmente da mudança entre campos, bordas e composição. Use sombras somente em elementos sobrepostos ou cartões que precisem se separar claramente do fundo.

### Shadow Vocabulary

- **Ação ciano:** `0 11px 28px rgba(0, 180, 216, 0.2)` no botão primário; hover `0 15px 34px rgba(0, 180, 216, 0.28)`.
- **Cartão de projeto real:** `0 28px 70px rgba(3, 4, 94, 0.26)`.
- **Cartão elevado claro:** `0 18px 46px rgba(3, 4, 94, 0.1)`.
- **Captura em página de projeto:** `0 30px 70px rgba(0, 0, 40, 0.28)`.
- **Capturas do Hoody Bot:** sombras azuis suaves, variando entre `0 28px 62px` e `0 30px 70px` com opacidade aproximada de `0.18–0.26`.
- **Cabeçalho interno:** `0 14px 36px rgba(3, 4, 94, 0.18)` quando aplicado.

**The Quiet Elevation Rule.** Não use sombras para simular molduras ou construir profundidade decorativa; preserve as sombras fortes para capturas e cartões que precisam destacar-se.

## Shapes

- Elementos compactos e badges: `5px`.
- Botões e controles: `9px`.
- Imagens internas: `10px`.
- Cartões e capturas: `16px`.
- Lista de etapas: `12px`, aplicada ao contorno externo que agrupa as etapas.
- Navegação mobile: `8px`.
- Controles circulares: `50%`; polegar da barra de rolagem: `999px`.

**The Restrained Corners Rule.** Não transforme grandes superfícies em cápsulas nem aplique arredondamentos indiscriminadamente. Raios maiores ficam reservados a cartões e capturas.

## Components

### Buttons

- **Primary:** altura mínima `48px`, padding `13px 20px`, raio `9px`, fundo ciano e texto marinho; no hover desloca-se `2px` para cima, fica azul-céu e recebe sombra ciano.
- **Outline:** altura mínima `48px`, padding `13px 20px`, borda azul-céu, fundo transparente e texto branco sobre campos escuros; hover usa fundo ciano e texto marinho.
- **Focus:** indicador visível de `3px` marinho com afastamento de `2px` branco, conforme regra global.

### Project Badges

Badges usam fundo azul-céu, texto marinho, raio `5px`, caixa alta e espaçamento de letras. A classificação “Projeto demonstrativo” ou “Projeto real” deve ser explícita e factual.

### Project Cards

Cartões demonstrativos alternam entre superfície branca, azul-céu e tom azul profundo; no desktop combinam captura direta e texto em proporções assimétricas, invertendo um cartão. Até 1280px, conteúdo e captura empilham. O cartão do Hoody é um projeto real e usa sua captura real sem moldura de navegador.

### Pricing Cards

Três cartões claros comparam Essencial, Profissional e Catálogo. Na home, mostram formato, preço inicial e três diferenças essenciais, com acesso à página `/servicos/`; um bloco azul separado apresenta a Solução sob medida. Na página própria, os cartões detalham escopo e CTA específico de WhatsApp. O valor “A partir de” usa algarismos tabulares; a nota explica que investimento final e condições dependem da proposta. Não mostrar preços internos de adicionais, manutenção ou sistemas.

### Navigation

No desktop, a marca fica à esquerda e a navegação à direita dentro de um cabeçalho de 92px. Em até 980px, usa menu compacto com botão acessível e transição curta de opacidade/deslocamento; links entram em sequência discreta. O estado do menu deve ser expresso também por `aria-expanded`; respeite redução de movimento. No mobile, o cabeçalho mede 78px.

A estrutura visual do cabeçalho é compartilhada, com dois conjuntos de navegação: home/projetos usa Projetos, Serviços, Investimento e Como funciona, apontando para seções distintas da home; `/servicos/` usa Início, Planos, Sob medida e Dúvidas, apontando para seções próprias da página.

Todas as rotas começam com o link “Pular para o conteúdo”. Seu alvo principal usa `tabIndex={-1}` para receber foco após a ativação sem entrar na ordem normal de tabulação.

### Text Links

Links textuais usam cor, peso, ícone e estados de foco/hover para indicar interação — não sublinhado. A seta pode deslocar-se sutilmente no hover.

### FAQ Disclosure

O FAQ é plano, organizado por divisores azul-céu. Cada pergunta é um botão de divulgação com `aria-expanded` e `aria-controls`; a resposta é anunciada como região vinculada. A abertura e o fechamento expandem/colapsam a resposta com uma leve subida e fade de `320ms`, enquanto o controle circular de `30px` gira `180deg`. `prefers-reduced-motion` reduz essas transições ao mínimo.

A home e `/servicos/` compartilham o mesmo componente de FAQ para manter botão e animação idênticos. Na página de serviços, a seção conserva seu fundo azul-céu e o círculo usa azul-gelo para se destacar dele.

### Hoody Bot Project Page

O case segue a direção espacial diurna: fundos espaciais em imagem, superfícies claras e texto escuro. Apenas essa página usa transições/fades entre imagens espaciais e fundo sólido. Capturas escuras recebem base branca e sombra azul suave. Não desenhe o cenário espacial em CSS, não escureça a página inteira e não invente métricas, depoimentos ou integrações.

**The Honest Portfolio Rule.** Não sugira que demonstrações sejam clientes reais nem invente preços, resultados, métricas, depoimentos ou capacidades não confirmadas.

## Do's and Don'ts

### Do:

- Use as cores canônicas e os tons auxiliares já presentes no CSS com contraste adequado.
- Preserve fundos brancos e claros em equilíbrio com os campos azuis; reserve marinho para texto e detalhes em áreas extensas.
- Use capturas de página diretas, reais e sem moldura de navegador.
- Mantenha min-height de uma tela somente acima de 1280px; em tablet e celular, deixe o conteúdo definir a altura.
- Preserve acessibilidade de foco, seleção de texto, navegação mobile e redução de movimento.
- Restrinja fundos espaciais e dissoluções de fundo ao case Hoody Bot.

### Don't:

- Não reintroduza simuladores de navegador nem elementos de endereço fictício.
- Não use marinho ou azul saturado como fundo dominante por longos trechos sem alternância clara.
- Não aplique transições de fundo às outras páginas/seções: são exclusivas do Hoody Bot.
- Não sublinhe chamadas textuais nem sacrifique legibilidade por animação.
- Não invente preços, resultados comerciais, clientes, métricas ou recursos.
