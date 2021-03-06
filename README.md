# react-nice-carousel

> simple but useful carousel for react

[![NPM](https://img.shields.io/npm/v/react-nice-carousel.svg)](https://www.npmjs.com/package/react-nice-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<div align="center">
    <img src="./react-nice-carousel.gif" width="550">
</div>

## Install

```bash
npm install --save react-nice-carousel
```

## Usage

```jsx
import React from 'react'
import { ReactNiceCarousel } from 'react-nice-carousel'

const App = () => {
  return (
    <>
      <ReactNiceCarousel
        slides={[
          'https://picsum.photos/600/400',
          'http://lorempixel.com/600/400/',
          'https://picsum.photos/600/400'
        ]} // array of images urls
        scrollDirection='yAxis' // xAxis , yAxis
        carouselBoxHeight={400} // image height and this must be the same
        carouselBoxWidth={600} // image width and this must be the same
        carouselNavButtonsPosition={'top'} // top , right , bottom , left
        carouselNavButtonsType={'number'} // dash , number
        uniquePostfix='a' // should be unique for each instance
      />
    </>
  )
}
```

## Known Issues :

doesn't work as you expect on iPhone

## Inspired By :

https://codepen.io/chriscoyier/pen/XwbNwX

## License

MIT © [alithecodeguy](https://github.com/alithecodeguy)
