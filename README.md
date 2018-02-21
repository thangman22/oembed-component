# Ombed component

> oEmbed web component that make you easy to embed everything.

`<o-embed>` is component to help developer put any embed that support oEmbed to website easier.

[Provider supported](https://oembed.com/providers.json)

## How to install

Add script tag at head

```html
<script src="path/to/lib/oembed-element/dist/dist.js"></script>
```

or install with Yarn

```sh
yarn add ombed-component
```

## How to use

```html
<o-embed url="https://www.instagram.com/p/BfcNH1XD91P/"></o-embed>
```

### Properties

Property      | Type        | Default   | Require   | Description
:---          |:---         |:---       |:---       |:---
`url`         | *String*    | `""`      | true      | URL of object [Provider supported](https://oembed.com/providers.json)
`proxy`       | *String*    | `""`      | false     | URL of proxy

## Proxy
Some of provider is not allow cross-origin HTTP request and ombed will not work with those site. You need to put proxy url to make it work. I would suggest to use [cors-anywhere.herokuapp.com](https://cors-anywhere.herokuapp.com) as your proxy. Self hosted version is provide at [https://github.com/Rob--W/cors-anywhere/](https://github.com/Rob--W/cors-anywhere/).

## Browser Support

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Based on vue.js?
Yes. This component use vue.js and [vue-custom-element](https://github.com/karol-f/vue-custom-element) for development. However You not need to add vue.js to your project because is all packed in `dist.js`

## Development

```sh
yarn //Install dependencies
yarn dev //Start the development
yarn test //Run unit test
yarn build //Run build for make bundle
```
