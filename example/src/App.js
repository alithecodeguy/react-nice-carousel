import React from 'react'
import { ReactCarousel } from 'react-carousel'

const App = () => {
  return (
    <ReactCarousel
      slides={[
        'https://picsum.photos/600/400',
        'http://lorempixel.com/600/400/'
      ]} // array of images urls
      scrollDirection='yAxis' // xAxis , yAxis
      carouselBoxHeight={400} // image height and this must be the same
      carouselBoxWidth={600} // image width and this must be the same
      carouselNavButtonsPosition={'right'} // top , right , bottom , left
      carouselNavButtonsType={'dash'} // dash , number
    />
  )
}

export default App
