# WebNest — planejamento do site

**Versão:** 1.0 · 16/10/2026  
**Status:** proposta para revisão; site ainda não implementado.  
**Fonte de verdade:** `../../WEBNEST_CONTEXT.md`.

## 1. A ideia central

Criar uma vitrine comercial da WebNest em que o visitante consiga entender a oferta, avaliar exemplos, comparar os dois tipos de site e começar uma conversa. O próprio site deve demonstrar cuidado com design, leitura e navegação.

**Conceito proposto:** “Sua marca merece um site à altura.”

O visitante chega pelo Instagram, por indicação ou por pesquisa. Pode estar montando sua primeira presença digital ou querendo apresentar melhor um negócio que já existe. A página responde, nessa ordem: o que vocês fazem, como fica um projeto, qual opção serve para mim, quanto custa e como começamos.

**Público confirmado:** pequenas empresas e profissionais de vários segmentos, com atenção a restaurantes, hamburguerias e negócios locais. A comunicação não deve fazer parecer que a WebNest atende apenas alimentação.

**Ação principal proposta:** conversar no WhatsApp. **Alternativa confirmada:** conversar pelo Instagram. A preferência visual pelo WhatsApp é uma recomendação de composição, não uma exclusão do Instagram.

## 2. O que está confirmado e o que ainda é proposta

| Confirmado pelo usuário/contexto | Proposto neste planejamento |
| --- | --- |
| Planejar antes de executar | Home comercial com páginas individuais de projeto |
| Paleta azul e logo WebNest existentes | Composição assimétrica, tipografia Manrope e ritmo de fundos |
| Público amplo de pequenos negócios, incluindo alimentação/local | Ordem das seções, textos, imagens e interações |
| Contato por WhatsApp e Instagram | WhatsApp com maior destaque visual |
| Landing pages e sites institucionais multipáginas | Limites e entregas de cada pacote, ainda para confirmação |
| Tabela de preços, ainda sem valores | Modelo de comparação e critérios internos de precificação |
| Sistemas para redes sociais em fase futura | Implementação inicial estática, sem painel administrativo novo |

## 3. Estrutura do site

**Menu de desktop:** Projetos · Serviços · Preços · Como funciona · botão “Vamos conversar”. A seção Sobre fica no fluxo e no rodapé, evitando um menu extenso. O botão do cabeçalho leva à seção de contato, que apresenta os dois canais.

| Rota proposta | Conteúdo e função |
| --- | --- |
| `/` | Apresentação, projetos selecionados, serviços, preços, processo, sobre, dúvidas e contato |
| `/projetos/pizza/` | Estudo do projeto demonstrativo de pizzaria |
| `/projetos/refriz/` | Estudo da landing page de bebidas |
| `/projetos/burguer/` | Estudo do projeto demonstrativo de hamburgueria |
| `/privacidade/` | Informações correspondentes aos dados e ferramentas efetivamente usados |
| Página 404 | Mensagem breve, retorno à home e acesso aos projetos |

Com três projetos, a home já funciona como índice do portfólio; uma galeria separada passa a fazer sentido quando o acervo crescer. O site da WebNest é multipáginas, mesmo que a maior parte da apresentação comercial esteja na home.

## 4. A home, seção por seção

### 4.1 Abertura — entender e se interessar

**Texto de apoio pequeno:** Desenvolvimento de sites para negócios.

**Título:** Sua marca merece um site à altura.

**Descrição:** Criamos sites modernos, rápidos e responsivos para apresentar seu negócio e facilitar o próximo contato.

**Ações:** “Conversar no WhatsApp” e “Ver projetos”. Link discreto próximo: “Prefere o Instagram?”

**Imagem:** captura verdadeira de um projeto em uma moldura simples de navegador, com nome e identificação “Projeto demonstrativo”. Refriz é a opção do primeiro estudo visual porque já possui captura disponível. Pizza é candidata a assumir o destaque após a produção de capturas novas. Sem carrossel automático.

**Composição:** mensagem à esquerda, projeto à direita; o conteúdo deve entrar na primeira tela sem depender de animação. O início da seção de projetos aparece abaixo para convidar à rolagem.

### 4.2 Projetos selecionados — tornar a capacidade visível

**Título:** Conheça nosso trabalho.

**Introdução:** Explore projetos demonstrativos e veja diferentes formas de apresentar uma marca na web.

Ordem confirmada: Pizza, Refriz e Burguer em cartões horizontais no desktop, com ritmo alternado entre imagem e texto. Cada item mostra uma captura real da página inicial, nome, segmento, formato, uma frase e “Conhecer o projeto”. Sem filtros com apenas três trabalhos.

| Projeto | Texto proposto |
| --- | --- |
| WebNest Pizza | Um site de pizzaria com apresentação da marca, cardápio e história em páginas próprias. |
| Refriz | Uma landing page que usa produtos e sabores para construir uma apresentação visual de marca. |
| WebNest Burguer | Uma landing page de hamburgueria que reúne identidade, apresentação do negócio e cardápio. |

As capturas preservam as cores de cada projeto dentro da imagem. A interface da WebNest continua usando apenas a paleta oficial.

### 4.3 Serviços — escolher o formato

**Título:** O formato certo para o seu próximo passo.

**Landing page:** Uma página para apresentar uma oferta, serviço ou campanha, com uma mensagem clara e um caminho direto para o contato.

**Site institucional:** Várias páginas para organizar a apresentação da empresa, seus serviços e as informações que o cliente precisa conhecer.

Apresentar dois blocos editoriais, com exemplos de uso, lado a lado. Links “Ver investimento” levam à comparação de preços. Responsividade e organização do conteúdo são critérios de execução propostos, não pacotes extras artificiais.

### 4.4 Preços — comparar escopo e investimento

**Título:** Escolha a estrutura que faz sentido para o seu negócio.

**Texto de apoio:** Compare os formatos. O escopo e as condições do seu projeto serão apresentados antes de começarmos.

A tabela abaixo é uma estrutura interna de decisão. “A definir” e campos entre colchetes não são texto de lançamento.

| Item | Landing page | Site institucional |
| --- | --- | --- |
| Investimento | R$ [valor a definir] | R$ [valor a definir] |
| Estrutura | Uma página | Várias páginas; limite a definir |
| Melhor uso | Uma oferta, campanha ou serviço específico | Apresentação completa de empresa e serviços |
| Conteúdo | Seções e quantidade a combinar | Páginas e quantidade a combinar |
| Adaptação para celular | Inclusão proposta | Inclusão proposta |
| Links de contato | WhatsApp e/ou Instagram, conforme projeto | WhatsApp e/ou Instagram, conforme projeto |
| Preparação básica para busca | Escopo a confirmar | Escopo a confirmar |
| Revisões | Quantidade a definir | Quantidade a definir |
| Prazo | A definir conforme escopo e materiais | A definir conforme escopo e materiais |
| Domínio e hospedagem | Inclusão/cobrança a definir | Inclusão/cobrança a definir |
| Manutenção após entrega | Condições a definir | Condições a definir |
| Ação | Quero uma landing page | Quero um site institucional |

**Design:** duas colunas com o preço e o formato no topo; comparação alinhada no desktop, duas fichas completas empilhadas no celular. Nada de rolagem horizontal para comparar. Ambos têm a mesma importância; não usar “mais vendido”, desconto ou urgência sem evidência.

**Modelo comercial a decidir:** preço fechado exige um escopo delimitado; “a partir de” exige um pacote-base que possa realmente ser contratado por aquele valor. A escolha fica aberta até definir as entregas. Como o usuário quer valores visíveis, o lançamento depende dessa definição ou de uma mudança explícita para orçamento sob consulta.

**Como chegar aos valores, em uma etapa posterior:** levantar horas de briefing, conteúdo, design, desenvolvimento, revisão e publicação; considerar custos diretos, revisões incluídas, obrigações comerciais e margem desejada; comparar o esforço entre os dois formatos. Não foi feita pesquisa de mercado nem sugerido preço nesta etapa.

### 4.5 Processo — tornar a contratação compreensível

**Título:** Da primeira conversa ao site no ar.

1. **Entender o negócio:** conversar sobre o objetivo, público e materiais disponíveis.
2. **Definir o projeto:** apresentar escopo, investimento e condições para aprovação.
3. **Criar e revisar:** desenvolver a estrutura e o visual, com os pontos de revisão combinados.
4. **Preparar a publicação:** conferir conteúdo, navegação e contatos e colocar o site no ar conforme a proposta.

É um fluxo de atendimento proposto. Não publicar prazos, revisões ilimitadas, suporte contínuo ou condições de pagamento sem confirmação.

### 4.6 Sobre a WebNest — dar contexto à marca

**Título:** Design, tecnologia e estratégia para a sua presença digital.

**Texto:** A WebNest cria sites modernos, rápidos e responsivos para marcas que querem crescer. Unimos design, tecnologia e estratégia para transformar ideias em experiências digitais profissionais, com atenção à apresentação do negócio e à experiência de quem navega.

Usar a marca e detalhes de trabalho real. Não preencher com foto de uma equipe fictícia, anos de experiência, endereço, clientes ou números não informados. Uma apresentação pessoal pode ser acrescentada se o usuário quiser e fornecer conteúdo.

### 4.7 Dúvidas — resolver as objeções práticas

**Título:** Antes de começar, vale saber.

| Pergunta | Resposta-base / dependência |
| --- | --- |
| Qual é a diferença entre landing page e site institucional? | A landing page concentra a apresentação em uma página; o institucional distribui as informações em várias páginas. A escolha depende do conteúdo e do objetivo do negócio. |
| O site funciona no celular? | O planejamento prevê adaptação para celular, tablet e computador. A versão publicada será conferida nesses tamanhos de tela. |
| Quanto tempo leva? | O prazo depende do escopo e dos materiais disponíveis e será definido na proposta. |
| O que preciso enviar? | Nome da empresa, objetivo, serviços, contatos e os materiais disponíveis, como logo, textos e imagens. Confirmaremos o que falta durante a conversa. |
| Domínio e hospedagem estão incluídos? | Resposta final depende da política comercial; definir antes de publicar. |
| Vocês fazem alterações depois da entrega? | Resposta final depende das condições de revisão e manutenção; definir antes de publicar. |

Acordeões abertos por clique ou teclado, com título claro. Respostas curtas e sem esconder o preço ou condições relevantes apenas no FAQ.

### 4.8 Contato e rodapé — fechar com um próximo passo

**Título:** Vamos conversar sobre o site do seu negócio?

**Texto:** Conte o que você faz e o que gostaria de apresentar. Podemos começar pelo WhatsApp ou pelo Instagram.

**Botões:** “Conversar no WhatsApp” e “Chamar no Instagram”.

**Mensagem geral sugerida para o WhatsApp:** “Olá, WebNest! Conheci o site e gostaria de conversar sobre um projeto para o meu negócio.”

**Mensagem dos preços:** “Olá, WebNest! Tenho interesse em uma landing page. Gostaria de entender o escopo e o investimento.” Variante correspondente para o institucional. Abrir a conversa preenchida não significa enviar a mensagem automaticamente.

**WhatsApp confirmado:** `+55 19 99658-7333`. Para o link `wa.me`, usar somente os dígitos no formato internacional: `https://wa.me/5519996587333`.

**Instagram confirmado:** `@webnest.br`, com o endereço `https://www.instagram.com/webnest.br/`. Prefira o link comum do perfil, sem depender de um atalho instável para mensagem direta.

**Rodapé:** logo/nome, frase curta de apresentação, navegação, WhatsApp, Instagram e privacidade. Não inserir CNPJ, endereço ou dados comerciais inventados.

## 5. Direção visual proposta

**Personalidade:** estúdio digital contemporâneo, próximo e organizado. O impacto vem do tamanho dos títulos, da composição e dos projetos apresentados. A marca existente é preservada; esta proposta amplia sua aplicação para uma interface navegável.

| Uso | Cor |
| --- | --- |
| Abertura, cabeçalho e encerramento | Azul-marinho `#03045E` |
| Áreas de apoio pontuais | Azul `#0077B6` |
| Botões e pequenos destaques | Ciano `#00B4D8` |
| Linhas e apoio visual | Azul-claro `#90E0EF` |
| Áreas de leitura claras e texto no escuro | Azul muito claro `#CAF0F8` |
| Texto principal sobre fundo escuro | Branco, já permitido no contexto |

**Ritmo da página:** abertura marinho → projetos sobre azul muito claro → serviços claros → preços em marinho → processo e sobre claros → dúvidas claras → contato marinho. Áreas azuis médias são acentos pontuais. Evitar que todas as seções repitam cartões iguais.

**Tipografia proposta:** Manrope, com títulos expressivos e textos em peso regular. Uma família principal simplifica a consistência. Referência de desenho: [Google Fonts — Manrope](https://fonts.google.com/specimen/Manrope). Confirmar pacote e licença antes de incorporar arquivos; fallback de sistema durante carregamento.

**Escala de partida:** título principal 64–76 px no desktop e 38–44 px no celular; títulos de seção 36–48 / 28–34 px; corpo 18 / 16–18 px; entrelinha de texto perto de 1,5. Valores são guia de composição, a ajustar pelo conteúdo real.

**Grade e espaço:** conteúdo com largura máxima proposta de 1200 px; margens de 24 px no celular; 88–112 px entre seções no desktop e 56–72 px no celular. Abertura em duas colunas de aproximadamente 45/55. Elementos crescem de forma fluida, sem altura fixa para textos.

**Componentes:** botões com cantos discretamente arredondados, rótulos diretos e altura de toque proposta de pelo menos 44 px; molduras de projeto com raios de aproximadamente 12–16 px; separadores finos; ícones apenas quando ajudam a entender a ação.

**Contraste:** ciano com texto marinho tem razão calculada de aproximadamente 7,20:1; texto `#CAF0F8` sobre marinho, 14,65:1. Branco sobre ciano tem apenas 2,46:1 e não será usado para rótulos dos botões. Ciano sobre fundo muito claro também não serve para texto comum. A referência AA para texto comum é 4,5:1, conforme [W3C — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Esses pares aprovados isoladamente não comprovam acessibilidade do site inteiro.

**Movimento:** transições curtas, propostas entre 160 e 240 ms; entrada discreta de imagens apenas como melhoria. Conteúdo visível por padrão, sem telas de carregamento, rolagem controlada artificialmente, cursor personalizado ou vídeo pesado na abertura. Respeitar preferência de movimento reduzido.

**Três composições consideradas dentro da mesma identidade:**

| Opção | Forma | Avaliação |
| --- | --- | --- |
| Vitrine de projetos — recomendada | Mensagem + captura grande; portfólio cedo; preços no meio da narrativa | Equilibra entendimento comercial e demonstração visual; depende de boas capturas |
| Portfólio editorial | Projeto ocupa quase toda a abertura; apresentação da WebNest vem em seguida | Dá mais protagonismo ao trabalho, mas retarda o entendimento da oferta |
| Oferta primeiro | Serviços e comparação entram logo após o título; projetos comprovam a oferta abaixo | Favorece comparação rápida, mas pode fazer a marca ser avaliada só pelo preço |

O estudo visual 01 explora a primeira opção. É uma imagem conceitual de planejamento; dimensões, textos e capturas devem ser reconstruídos com precisão na etapa de implementação. A imagem não é código nem demonstração de interações funcionando. Este documento prevalece sobre divergências do estudo gerado.

**Arquivos do estudo:** `conceito-visual-01.png` e `conceito-visual-01-prompt.txt`, produzidos com a ferramenta integrada ImageGen. A geração começou antes da confirmação sobre preços e canais: na execução, o menu passa a incluir “Preços”, o CTA principal nomeia o WhatsApp e o Instagram ganha acesso próprio, conforme os textos acima. O gerador recompôs a logo e reinterpretou a captura Refriz, especialmente no recorte mobile; usar os arquivos originais na construção. Desconsiderar a frase extra “Sites que transformam ideias em grandes oportunidades.” na base da imagem. A prancha representa a composição inicial, não uma aprovação de novas versões da marca ou das capturas.

## 6. Celular, navegação e estados

- No celular: logo + menu; título, descrição e CTA; captura do projeto em seguida. Não reduzir tudo para caber em uma única tela.
- Menu acessível por teclado, botão com nome e estado, fechamento por Escape e retorno do foco. Links de seção respeitam o cabeçalho.
- Preços em fichas verticais com escopo completo. Projetos em coluna única. Nenhuma função depende de passar o mouse.
- Cabeçalho pode permanecer visível, desde que não cubra conteúdo ou foco. Não adicionar simultaneamente várias barras e botões flutuantes.
- Links externos identificados com clareza; se abrirem nova aba, comunicar isso no nome acessível.
- Imagens reservam espaço durante carregamento; títulos e ações continuam utilizáveis se uma imagem falhar.
- FAQ expõe estado aberto/fechado; foco visível em botões, links e navegação; rótulos não dependem só da cor.
- Primeira versão não precisa de formulário próprio: os canais escolhidos recebem o contato. Não mostrar confirmação de envio para um clique no WhatsApp ou Instagram.
- Contato ausente, preço indefinido ou projeto não autorizado são pendências de publicação; nunca preencher com número ou condição fictícios.

## 7. Páginas de projeto e evidências

Cada projeto terá: nome, classificação, proposta do exercício, captura principal, objetivo, decisões de estrutura/design, capturas de desktop e celular, recursos realmente disponíveis, link para demonstração validado e CTA “Quero conversar sobre um site para meu negócio”.

| Evidência local | Uso e limite |
| --- | --- |
| Pizza: `../../WebNest Portifolio/WebNest Pizza/README.md`, três arquivos HTML e scripts | Demonstra navegação entre páginas. O número de WhatsApp está vazio em `js/data.js`; os links ficam desabilitados. Não apresentar pedidos operacionais. |
| Refriz: `../../WebNest Portifolio/WebNest Refriz/README.md` e `assets/demo/` | Já há capturas úteis. O formulário é demonstrativo e não possui envio confirmado. Não alegar captação de contatos funcionando. |
| Burguer: `../../WebNest Portifolio/WebNest Burguer/index.html` | Cardápio com nove produtos. Os botões de pedido estão desabilitados; não apresentar como delivery em operação. |
| Hoody Bot: apenas menção no contexto da marca | Preservar como candidato importante. Faltam material, escopo e classificação para compor o caso. |
| LoginPage: pasta `WebNest Login` | Pode ser estudo secundário futuro; não é prioridade da oferta inicial de sites. |

As capturas de desktop das páginas iniciais de Pizza, Refriz e Burguer foram produzidas localmente a partir das versões atuais dos projetos. Links externos de demonstração continuam dependendo de validação antes da publicação.

**Regra editorial:** o objetivo de um exercício não é um resultado medido de um cliente. Não usar depoimentos, logos de clientes, taxas de conversão, volume de vendas ou anos de mercado sem fonte confirmada.

## 8. Preparação técnica proposta

Para o escopo atual, recomendar HTML semântico, CSS responsivo e JavaScript pontual, com páginas estáticas. É uma proposta de arquitetura, ainda sem scaffold. O dashboard existente não precisa ser acoplado ao site público.

**Organização futura:** páginas comerciais e de projeto, estilos compartilhados, dados de serviços/preços centralizados, imagens otimizadas e documento de manutenção. A escolha de ferramentas e hospedagem será fechada na execução conforme domínio e necessidade de edição.

**Busca e compartilhamento:** títulos e descrições únicos por página, títulos hierárquicos, idioma pt-BR, texto alternativo, sitemap, robots e endereços canônicos coerentes com o domínio final; imagem de compartilhamento com identidade WebNest. Não atribuir endereço/localização nem resultados de posicionamento sem confirmação.

**Desempenho:** imagens em tamanhos adequados, carregamento posterior das imagens abaixo da primeira tela, fonte enxuta e pouco JavaScript. Metas de referência: LCP até 2,5 s, INP até 200 ms e CLS até 0,1, avaliadas no percentil 75 de visitas reais. Testes de laboratório ajudam antes da publicação, mas não substituem dados de uso real; referência: [Google — Web Vitals](https://web.dev/articles/vitals).

**Medição comercial futura:** registrar cliques nos canais e nos CTAs de cada serviço, sem incluir mensagens ou dados pessoais nas URLs de análise. Um clique é interesse, não venda confirmada. Ferramenta, tratamento de dados e texto de privacidade ficam condicionados ao que for efetivamente adotado.

## 9. Materiais e decisões antes de lançar

| Item | Situação | Próxima ação |
| --- | --- | --- |
| Identidade e logo | Disponíveis | Preparar versão adequada ao cabeçalho e favicon, preservando desenho |
| Escopo inicial | Confirmado | Dois tipos de site; sistemas ficam para depois |
| Preços | Serão decididos posteriormente | Delimitar entregas, estimar trabalho e aprovar os valores antes da publicação |
| Condições comerciais | Serão decididas posteriormente | Definir páginas/seções, revisões, pagamento, prazo, hospedagem e manutenção antes da publicação |
| WhatsApp | Confirmado | Usar `+55 19 99658-7333`; em `wa.me`, `5519996587333` |
| Instagram | Confirmado | Usar `@webnest.br` e `https://www.instagram.com/webnest.br/` |
| Domínio e hospedagem | Não confirmados | Escolher destino e responsável pela renovação |
| Capturas de portfólio | Refriz disponível | Produzir Pizza/Burguer e versões móveis; conferir correspondência com a versão atual |
| Hoody Bot | Material ausente | Adicionar depois de receber e validar o conteúdo |
| Proposta de design e textos | Preparados para revisão | Aprovar ou ajustar antes de implementar |

O levantamento foi de conteúdo e estrutura; não foi uma auditoria completa dos projetos existentes. Nada foi publicado e nenhum preço foi inventado.

## 10. Ordem de execução após a revisão

1. **Fechar o planejamento:** aprovar composição, narrativa e estrutura comercial; definir valores e condições antes da publicação.
2. **Preparar o material:** logo utilizável em tamanho pequeno, capturas verdadeiras, textos e contatos.
3. **Construir a primeira versão:** home, páginas de projeto, navegação e interações responsivas.
4. **Conectar os destinos reais:** contatos, preços aprovados, links de demonstração, domínio e metadados.
5. **Revisar:** desktop e celular, teclado, contraste, legibilidade, imagens, links e comportamento dos contatos.
6. **Publicar no destino escolhido:** conferir a versão pública e entregar instruções curtas para atualizar textos, preços e projetos.

**Critério de conclusão:** a pessoa entende a oferta, consegue avaliar o trabalho, comparar dois serviços com valores e condições reais e chegar a um canal de contato sem encontrar promessas ou ações fictícias.

O checklist complementar está em `CHECKLIST_DE_EXECUCAO.md`. A implementação só começa após a revisão deste planejamento pelo usuário.
