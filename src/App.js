import React, { useState } from "react";
import {Image, ImgName ,ImgDescription} from "./img/Image";
import LeftArrow from "./img/left.svg";
import RightArrow from "./img/right.svg";
import { ArrowContainer, ImageDiv } from "./styles/styledComponents";
import Thumbnail from "./Thumbnail";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    if (currentIndex < Image.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function prevImage() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Image.length - 1);
    }
  }

  return (
    <div className="App">
      <ImageDiv>
        {
          <img
            className="imageGallery"
            src={Image[currentIndex]}
            alt=" gallery"
          />
        }
        <ArrowContainer direction="left" onClick={prevImage}>
          <img src={LeftArrow} alt="left arrow" />
        </ArrowContainer>

        <ArrowContainer direction="right" onClick={nextImage}>
          <img src={RightArrow} alt="right arrow" />
        </ArrowContainer>
      </ImageDiv>

        <div className="imageDescription"> 
            <h3> {ImgName[currentIndex]} </h3>
            <p> {ImgDescription[currentIndex]}</p>
        </div>

      <div style={{ display: "flex", justifyContent: "center" }} >
        {Image.map((img, index) => (
          <Thumbnail key={index} img={img} imgname={ImgName[index]} handleThumbnailClick={() => {setCurrentIndex(index);}} ></Thumbnail>
        ))}

      </div>
    </div>
  );
}

export default App;
