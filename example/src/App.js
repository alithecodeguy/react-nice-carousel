import React from 'react'
import { ReactCarousel } from 'react-carousel'
import Grid from '@material-ui/core/Grid'
const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ReactCarousel
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
      </Grid>
      <Grid item xs={6}>
        <ReactCarousel
          slides={[
            'https://picsum.photos/600/400',
            'http://lorempixel.com/600/400/'
          ]} // array of images urls
          scrollDirection='yAxis' // xAxis , yAxis
          carouselBoxHeight={400} // image height and this must be the same
          carouselBoxWidth={600} // image width and this must be the same
          carouselNavButtonsPosition={'bottom'} // top , right , bottom , left
          carouselNavButtonsType={'number'} // dash , number
          uniquePostfix='b' // should be unique for each instance
        />
      </Grid>
      <Grid item xs={6}>
        <ReactCarousel
          slides={[
            'https://picsum.photos/600/400',
            'http://lorempixel.com/600/400/',
            'https://picsum.photos/600/400',
            'http://lorempixel.com/600/400/'
          ]} // array of images urls
          scrollDirection='yAxis' // xAxis , yAxis
          carouselBoxHeight={400} // image height and this must be the same
          carouselBoxWidth={600} // image width and this must be the same
          carouselNavButtonsPosition={'right'} // top , right , bottom , left
          carouselNavButtonsType={'dash'} // dash , number
          uniquePostfix='c' // should be unique for each instance
        />
      </Grid>
      <Grid item xs={6}>
        <ReactCarousel
          slides={[
            'https://picsum.photos/600/400',
            'http://lorempixel.com/600/400/'
          ]} // array of images urls
          scrollDirection='yAxis' // xAxis , yAxis
          carouselBoxHeight={400} // image height and this must be the same
          carouselBoxWidth={600} // image width and this must be the same
          carouselNavButtonsPosition={'left'} // top , right , bottom , left
          carouselNavButtonsType={'dash'} // dash , number
          uniquePostfix='d' // should be unique for each instance
          carouselBackgroundColort='#eee'
        />
      </Grid>
    </Grid>
  )
}

export default App
