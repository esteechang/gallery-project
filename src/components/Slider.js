import React, { useState } from 'react';
import SliderContent from './SliderContent'
import Slide from './Slide'
import {RightArrow, LeftArrow} from './Arrow'
import styled from 'styled-components'
import genting from '../img/genting.JPG'
import austria1 from '../img/austria1.JPG'
import austria2 from '../img/austria2.JPG'
import berlin from '../img/berlin.JPG';
import paris from '../img/paris.JPG';
import switzerland from '../img/switzerland.jpg';

const images = [
    austria1,
    genting, 
    austria2,
    berlin,
    paris,
    switzerland,
]

const StyledSlider = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
`

const Slider = () => {
    const getWidth = () => window.innerWidth
    const [activeIndex, setActiveIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [transition, setTransition] = useState(0.2)

    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            return setActiveIndex(0);
        }

        setActiveIndex(activeIndex + 1);
        setTranslate((activeIndex + 1) * getWidth())

    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return (setActiveIndex(images.length - 1),
            setTranslate((images.length - 1) * getWidth())
            )
        }

        setActiveIndex(activeIndex - 1);
        setTranslate((activeIndex - 1) * getWidth())

    }

    return (
    <StyledSlider>
        <SliderContent translate={translate} transition={transition} width={getWidth()*images.length}> 
        {images.map(img => (
            <Slide content={img}/> 
        ))}
        
        </SliderContent>
    <LeftArrow direction="left" handleClick={prevSlide} /> 
    <RightArrow direction='right' handleClick={nextSlide} />
    </StyledSlider>
    )
  }
  
export default Slider

// width={getWidth()*images.length}