import styled from "styled-components";

const StyledButton = styled.button`
    color: #FF0000;
    font-size: 4rem;
    margin-top: 490px;
    margin-bottom: 300px;
    border-radius: 80px;
    
`;

function Button(props){
    return(
        <StyledButton
            onClick={props.onClick}>
            {props.text}
        </StyledButton>
    )
}

export default Button;