import styled from "styled-components";

export const ArrowContainer = styled.div`
display: flex;
position: fixed;
top: 50%;
${(props) => (props.direction === "right" ? `right: 350px` : `left: 350px`)};
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
    height: 50px;
    width: 50px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    margin: auto 5px;
`

