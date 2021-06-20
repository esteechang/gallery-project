import styled from "styled-components";

export const ArrowContainer = styled.div`
display: flex;
position: absolute;
top: 50%;
${(props) => (props.direction === "right" ? `right: 250px` : `left: 250px`)};
height: 50px;
width: 50px;
justify-content: center;
background: white;
border-radius: 50%;
cursor: pointer;
align-items: center;
transition: transform ease-in 0.1s;

&:hover {
  transform: scale(1.1);
}
`;

export const ImageDiv = styled.div`
height: 80vh;
width: 100%;
margin: 50px auto;
overflow: hidden;
`

export const StyledDiv = styled.div`
    height: 60px;
    width: 60px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    margin: auto 10px;
    &:hover {
      transform: scale(1.1);
    }
    // &:active{
    //   border: 1px solid #e6007e;
    // }
`

