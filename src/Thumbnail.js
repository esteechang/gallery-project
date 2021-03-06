import { StyledDiv } from "./styles/styledComponents";

const Thumbnail = ({ img, handleThumbnailClick, imgname, style }) => {

  return (
    <>
      <StyledDiv style={style} className="image" img={img} onClick={handleThumbnailClick} title={imgname}>
        <span className="imgname">{imgname} </span>
      </StyledDiv>
    </>
  );
};
export default Thumbnail;
