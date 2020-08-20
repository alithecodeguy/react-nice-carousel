import React from 'react'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  root: {
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    // border: '1px solid red',
    width: (props) => props.carouselBoxWidth + 35,
    height: (props) => props.carouselBoxHeight + 35,

    display: 'flex',
    flexDirection: (props) => {
      switch (props.carouselNavButtonsPosition) {
        case 'right':
          return 'row-reverse'
        case 'left':
          return 'row'
        case 'top':
          return 'column'
        case 'bottom':
          return 'column-reverse'
      }
    },
    alignItems: 'center'
  },
  slider: {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    width: (props) => {
      switch (props.carouselNavButtonsPosition) {
        case 'right':
        case 'left':
          return 30
        case 'top':
        case 'bottom':
          return 30 * props.slides.length
      }
    },
    height: (props) => {
      switch (props.carouselNavButtonsPosition) {
        case 'right':
        case 'left':
          return 30 * props.slides.length
        case 'top':
        case 'bottom':
          return 30
      }
    },
    textAlign: 'center',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: (props) => {
      switch (props.carouselNavButtonsPosition) {
        case 'right':
        case 'left':
          return 'column'
        case 'top':
        case 'bottom':
          return 'row'
      }
    },
    '& a': {
      display: 'inline-flex',
      width: (props) =>
        props.carouselNavButtonsType === 'number'
          ? 25
          : props.carouselNavButtonsPosition === 'right' ||
            props.carouselNavButtonsPosition === 'left'
          ? 7
          : 25,
      height: (props) =>
        props.carouselNavButtonsType === 'number'
          ? 25
          : props.carouselNavButtonsPosition === 'right' ||
            props.carouselNavButtonsPosition === 'left'
          ? 25
          : 7,
      background: 'black',
      color: 'white',
      textDecoration: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: (props) =>
        props.carouselNavButtonsType === 'number' ? '50%' : 0,
      margin: 'auto',
      position: 'relative',
      '&:active': { top: '1px' },
      '&:focus': { background: '#000' }
    }
  },
  slides: {
    boxSizing: 'border-box',
    width: (props) => props.carouselBoxWidth,
    display: 'flex',
    flexDirection: (props) =>
      props.scrollDirection === 'xAxis' ? 'row' : 'column',
    overflow: 'auto',
    height: (props) => props.carouselBoxHeight,
    scrollSnapType: (props) =>
      `${props.scrollDirection === 'xAxis' ? 'x' : 'y'} mandatory`,
    scrollBehavior: 'smooth',
    overflowScrolling: 'touch',
    // '&::-webkit-scrollbar': {
    //   width: 10,
    //   height: 10
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   background: 'black',
    //   borderRadius: 10
    // },
    // '&::-webkit-scrollbar-track': {
    //   background: 'transparent'
    // },
    '& div': {
      scrollSnapAlign: 'start',
      flexShrink: 0,
      width: (props) => props.carouselBoxWidth,
      height: (props) => props.carouselBoxHeight,
      // marginRight: 50,
      borderRadius: 10,
      background: '#eee',
      transformOrigin: 'center center',
      transform: 'scale(1)',
      transition: 'transform 0.5s',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 100
    }
  }
})

export const ReactCarousel = (props) => {
  const { slides, scrollDirection } = props
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      {/* <img src={url('https://picsum.photos/600/400')} /> */}
      <div className={classes.slider}>
        {Array.from(Array(slides.length).keys()).map((num) => (
          <a href={`#slide-${num + 1}${props.uniquePostfix}`} key={num}>
            {props.carouselNavButtonsType === 'number' ? num + 1 : ''}
          </a>
          // {props.carouselNavButtonsPosition === 'number' ? num + 1 : ''}
        ))}
      </div>
      <div className={classes.slides}>
        {Array.from(Array(slides.length).keys()).map((num) => (
          <div id={`slide-${num + 1}${props.uniquePostfix}`} key={num}>
            {/* <image src={slides[num]} style={{ width: 200, height: 200 }} /> */}
            <img
              src={slides[num]}
              alt='new'
              style={{
                width: props.carouselBoxWidth,
                height: props.carouselBoxHeight,
                borderRadius: 13
                // boxShadow: '10px -10px 5px  rgba(0,0,0,0.6)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
