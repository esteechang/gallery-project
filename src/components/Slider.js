import React, { useState } from 'react';
import SliderContent from './SliderContent'
import Slide, { SlideContent } from './Slide'
import {RightArrow, LeftArrow} from './Arrow'
import Thumbnail from './Thumbnail';
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
const imgText = [
    {
        name: "Austria",
        description: "up a snowy mountain"
    },
    {
        name: "Genting",
        description: "This is in Malaysia"
    },
    {
        name: "Berlin",
        description: "in the city"
    },

    {
        name: "Paris",
        description: "The Effiel Tower"
    },
    {
        name: "Switzerland",
        description: "pretty skies "
    }

]

const StyledSlider = styled.div`
    position: relative;
    height: 80vh;
    width: 80vw;
    margin: 50px auto;
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

    const setCurrentImage = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
    <StyledSlider>
        <SliderContent translate={translate} transition={transition} width={getWidth()*images.length}> 
        {images.map(img => (
            <Slide content={img}/> 
        ))}
        {imgText.map(data => 
        <SlideContent data={data}/>)}
        
        </SliderContent>
    <LeftArrow direction="left" handleClick={prevSlide} /> 
    <RightArrow direction='right' handleClick={nextSlide} />
    </StyledSlider>
    <div style={{display: "flex", justifyContent: "center", }}>

        {images.map((img, index )=> (

        <Thumbnail key={index} img={img} handleThumbnailClick={() => {setCurrentImage(index)}}>

        </Thumbnail>
        ))}
    </div>
    </>
    )
  }
  
export default Slider
