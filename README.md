# Site institucional WebNest

Primeira implementação local do site institucional da WebNest em React + Vite.

## Executar

```bash
npm install
npm run dev
```

## Verificar

```bash
npm run build
npm run qa
npm run qa:services
```

`npm run qa` usa o Microsoft Edge instalado no Windows para conferir as rotas, o menu mobile, o FAQ e possíveis cortes horizontais em 320, 390, 768 e 1440 px. O servidor Vite deve estar ativo em `http://127.0.0.1:5173`.

`npm run qa:services` confere a home e `/servicos/`, os três valores, links de proposta, menu mobile, dúvidas, âncora do Catálogo e cortes horizontais nas mesmas larguras.

## Estado comercial

O site local mostra Essencial a partir de R$ 1.290, Profissional a partir de R$ 2.190 e Catálogo a partir de R$ 2.890. Solução sob medida é orçada individualmente. A home apresenta o resumo e `/servicos/` detalha escopos e exclusões. O valor final, prazos, pagamento, domínio, hospedagem e manutenção são definidos na proposta; a publicação final permanece pendente.
