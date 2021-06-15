
import { StyledDiv } from './styles/styledComponents'

const Thumbnail = ({img, handleThumbnailClick, } ) => {
    return (
       <StyledDiv img={img} onClick={handleThumbnailClick}/>
    )
}
export default Thumbnail