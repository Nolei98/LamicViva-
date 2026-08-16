# LAMIC Viva+

Landing page estática do cartão de descontos em saúde LAMIC Viva+ (Cariri/CE).

## Estrutura

```
index.html          página principal (única landing page, seções por âncora)
404.html             página de erro 404
css/style.css        todo o CSS do site
js/main.js            interatividade (menu, benefícios, lista de parceiros) + config de imagens
img/                  favicon, imagem de compartilhamento (og-image) e fotos do site
robots.txt            regras para crawlers + link do sitemap
sitemap.xml           mapa do site para SEO
site.webmanifest      metadados de PWA (ícone, cor de tema)
```

## Antes de publicar

1. **Domínio**: depois do deploy na Vercel, troque `https://SEU-DOMINIO.vercel.app` pela URL final em:
   - `index.html` (`<link rel="canonical">`, tags `og:*` e `twitter:*`, JSON-LD)
   - `robots.txt` (linha `Sitemap:`)
   - `sitemap.xml` (`<loc>`)
2. **Fotos**: as seções de foto (`phMain`, `phA`, `phB`, hero) e os logos de parceiros usam placeholders. Preencha as URLs em `js/main.js`, no objeto `IMAGES` no topo do arquivo — pode apontar para arquivos dentro de `img/` ou para URLs externas.
3. **Imagem de compartilhamento**: `img/og-image.svg` é um placeholder gerado em SVG. Para máxima compatibilidade (WhatsApp, Facebook, LinkedIn), exporte uma versão PNG/JPG 1200×630 e aponte `og:image`/`twitter:image` para ela.

## Deploy

Site 100% estático — sem build. Pode publicar diretamente na Vercel apontando para a raiz do repositório.
