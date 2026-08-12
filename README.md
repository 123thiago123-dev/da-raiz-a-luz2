# Da Raiz à Luz — versão independente do Wix

Esta pasta contém uma reconstrução estática do site a partir das duas capturas fornecidas:
- captura desktop do site;
- captura mobile do site.

## O que foi removido

- runtime JavaScript do Wix;
- scripts do Thunderbolt;
- scripts de métricas/tag manager do Wix;
- banner "Este site foi criado no Wix. Crie o seu hoje.";
- links e referências de carregamento para `wixsite.com`, `wixstatic.com` e `parastorage.com`;
- dependência de serviços do Wix para renderização da página.

As imagens e fontes utilizadas na captura foram copiadas para `assets/`.

## Responsividade

A página usa dois conjuntos de regras obtidos das próprias capturas do Wix:
- `css/site-desktop.css` para telas a partir de 768px;
- `css/site-mobile.css` para telas abaixo de 768px;
- `css/responsive.css` para o contêiner responsivo independente do Wix.

A versão mobile original encontrada nos arquivos usa um canvas de 320px. A camada `responsive.css` remove essa dependência do contêiner fixo de 320px e impede overflow horizontal.

## WhatsApp

O HTML capturado não contém o número/URL de destino do botão do WhatsApp; o destino era controlado pelo runtime do Wix.

Por segurança, nenhum número foi inventado.

Edite `js/site.js`:

```js
var WHATSAPP_URL = 'https://wa.me/SEUNUMERO';
```

Exemplo de formato:
`https://wa.me/5511999999999`

## Hospedagem

O conteúdo pode ser colocado diretamente no `public_html` de uma hospedagem estática/Hostinger.

O arquivo inicial é:

`index.html`
