import './thumbnail.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
    height: 50px;
    width: 50px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    
`
const Thumbnail = ({img, handleThumbnailClick, currentIndex} ) => {
    return (
       <StyledDiv img={img} onClick={handleThumbnailClick}/>
    )
}
export default Thumbnail