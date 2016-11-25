# react-flex-material
Flex component built for React based on [Angular Material Flex Layout](https://material.angularjs.org/latest/layout/introduction) which's features provide sugar to enable developers to more easily create modern, responsive layouts on top of CSS3 [flexbox](http://www.w3.org/TR/css3-flexbox/). 

## Installation
react-flex-material is distributed via [npm](https://www.npmjs.com):
```shell
$ npm i -S react
$ npm i -S react-flex-material
```

## Configuration
There are several ways to load react-flex-material. Preferable way is using [webpack](https://webpack.github.io/)

### Webpack with [css-loader](https://webpack.github.io/docs/stylesheets.html)
```js
import React from 'react';
import {Flex} from 'react-flex-material';
...
```
Webpack configuration
```js
...
{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
},
...
```
In this case required styles will be loaded automatically.

### Webpack with [css-modules](https://github.com/css-modules/css-modules)
```js
import React from 'react';
import {Flex} from 'react-flex-material/modules';
...
```
And webpack configuration
```js
...
module: [{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader!sass-loader')
  }],
postcss: () => [autoprefixer()]
...
```
You will need a couple of loaders for webpack:
```shell
npm install node-sass sass-loader postcss postcss-loader
```
Including [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer) to make more browser compatible CSS.

### Using library without webpack
In this case you load library without styles
```js
import React from 'react';
import {Flex} from 'react-flex-material/lib/flex';
...
```
And then load them separately
```html
<link rel="stylesheet" href="node_modules/react-flex-material/lib/flex.css">
```

## Documentation
The library is based on [Angular Material Flex Layout](https://material.angularjs.org/latest/layout/introduction). So you can use their documentation as a main source.

Only one change. Since this library is for React, we are using `camelCased` style instead of `snake-cased`.

Base attributes are `'layout', 'flex', 'order', 'offset', 'align', 'hide', 'show'`

Responsive modifiers `'', 'Xs', 'GtXs', 'Sm', 'GtSm', 'Md', 'GtMd', 'Lg', 'GtLg'`

Some other attributes `'layoutWrap', 'layoutNoWrap', 'layoutFill', 'layoutMargin', 'layoutPadding'`

So you'll get `'layoutXs', 'layoutGtSm', 'flexGtXs', 'flexGtMd', 'orderSm'` etc 

The value for attributes is the same to [Angular Material Flex Layout](https://material.angularjs.org/latest/layout/introduction)
```html
<Flex flex flexGtSm="75"> ... </Flex>
<Flex layoutGtXs="row"> ... </Flex>
<Flex layout align="space-between center"> ... </Flex>
```

## Examples
Library has only one Main component called `Flex`.

By default `Flex` is just a `div`. But you can change it via `tag` attribute
```html
<Flex tag="span"> ... </Flex>
```

### Basic row:
<img width="826" alt="screenshot" src="https://cloud.githubusercontent.com/assets/1038904/20428251/b03f2ee8-ad90-11e6-8d33-4322630cccd0.png">

```html
<Flex layout="row">
  <Flex flex>Col 1</Flex>
  <Flex flex>Col 2</Flex>
</Flex>
```

For row layout, attribute value could be omitted:
```html
<Flex layout>
  <Flex flex>Col 1</Flex>
  <Flex flex>Col 2</Flex>
</Flex>
```

### Row layout with equal columns:
<img width="826" alt="screenshot" src="https://cloud.githubusercontent.com/assets/1038904/20428252/b1a41776-ad90-11e6-9b30-e08d32ee7da8.png">

```html
<Flex layout>
  <Flex flex>Col 1</Flex>
  <Flex flex>Col 2</Flex>
</Flex>
```

### Row layout with a specific columns width
<img width="825" alt="screenshot" src="https://cloud.githubusercontent.com/assets/1038904/20428394/884fb01e-ad91-11e6-801c-04b1c6a4225b.png">

```html
<Flex layout>
  <Flex flex="20">
    Col 1
  </Flex>
  <Flex flex="80">
    Col 2
  </Flex>
</Flex>
```

### Row layout with a specific alignment
<img width="826" alt="screenshot" src="https://cloud.githubusercontent.com/assets/1038904/20428256/b5298426-ad90-11e6-84fa-5f920faa7f7a.png">

```html
<Flex layout align="space-between center">
  <div>Col 1</div>
  <div>Col 2</div>
</Flex>
```

### Column layout with a specific alignment
**Important**: use it only if you need a specific alignment. `<Flex layout="column" />` is the same to `<Flex />` by default.
<img width="826" alt="screenshot" src="https://cloud.githubusercontent.com/assets/1038904/20428257/b67a73e4-ad90-11e6-965a-486f08635483.png">

```html
<Flex layout="column" align="center center">
  <div>
    Row 1
  </div>
  <div>
    Row 2
  </div>
</Flex>
```

### Special attribute for `Flex` called `divider`.
If you want to add some space between components.
<img width="826" alt="screenshot" src="https://cloud.githubusercontent.com/assets/1038904/20428264/bd4727a8-ad90-11e6-9bb0-84fa3088afe4.png">

```html
<Flex layout align="space-between center">
  <Flex flex>Col 1</Flex>
  <Flex divider />
  <Flex flex>Col 2</Flex>
</Flex>
```
