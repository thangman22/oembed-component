# oEmbed component

> oEmbed web component that make you easy to embed everything.

![oembed](https://raw.githubusercontent.com/thangman22/oembed-component/master/static/facebook-feature-image.png)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/thangman22/oembed-component)

`<o-embed>` is a component which makes it easy to display any embed that supports oEmbed.

[Provider supported](https://oembed.com/providers.json)

## How to install

Add the following script tag to the HTML-head

```html
<script defer async src="https://cdn.jsdelivr.net/npm/oembed-component/dist/oEmbed.js"></script>
```

or install with Yarn/NPM

```sh
yarn add oembed-component
```

```sh
npm install oembed-component
```

## How to use

<!--
```
<custom-element-demo>
<template>
  <script src="https://cdn.jsdelivr.net/npm/oembed-component/dist/oEmbed.js" defer async></script>
  <o-embed url="https://www.instagram.com/p/BfcNH1XD91P/"></o-embed>
</template>
</custom-element-demo>
```
-->
```html
<o-embed url="https://www.instagram.com/p/BfcNH1XD91P/"></o-embed>
```

### Properties

Property      | Type        | Default   | Require   | Description
:---          |:---         |:---       |:---       |:---
`url`         | *String*    | `""`      | true      | URL of object [Supported providers](https://oembed.com/providers.json)
`proxy`       | *String*    | `""`      | false     | URL of proxy

## Proxy
Some of the providers do not allow cross-origin HTTP requests and `<o-embed>` will not work with those sites without a proxy defined in the `proxy` property. I would suggest to use [cors-anywhere.herokuapp.com](https://cors-anywhere.herokuapp.com) as your proxy. A self-hosted version is available at [https://github.com/Rob--W/cors-anywhere/](https://github.com/Rob--W/cors-anywhere/).

## Browser Support

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Based on vue.js?
Yes. This component uses vue.js and [vue-custom-element](https://github.com/karol-f/vue-custom-element) for development. However you don't need to add vue.js to your project because everything is packed in `dist.js`

## Development

```sh
yarn # Install dependencies
yarn dev # Start the development
yarn test # Run unit test
yarn build # Run build for make bundle
```

## Development

```sh
yarn # Install dependencies
yarn dev # Start the development
yarn test # Run unit test
yarn build # Run build for make bundle
```

## Contributing
You can find the next steps of the project in our issues ;)
Want to contribute? PR please.

## License
MIT License © [thangman22](https://thangman22.com)

See my another project at [thangman22.com](https://thangman22.com)
