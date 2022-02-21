import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.color.neutral.grayishBlue};
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0 0 80px 16px hsl(217, 19%, 14%);
    width: 90%;
    max-width: 500px;
`

export const Title = styled.h6`
    color: ${props => props.theme.color.primary.neonGreen};
    font-family: ${props => props.theme.font.family};
    font-size: ${props=> props.theme.font.size.title};
    letter-spacing: 2px; 
    padding-top: 2rem;
`

export const Quote = styled.p`
    color: ${props => props.theme.color.primary.lightCyan};
    font-family: ${props => props.theme.font.family};
    font-size: ${props=> props.theme.font.size.quote};
    width: 90%;
    padding: 2rem 0 0 0;
    text-align: center;
    min-height: 150px;
`
export const Picture = styled.picture`
    padding: 2rem;
`
export const Img = styled.img`
    align-self: center;
    padding: ${props => props.padding? props.padding: "2rem"};
`
export const Emptybox = styled.div`
    height: 2rem;
    position: relative;
`
export const Button = styled.button`
    outline: none;
    border: none;
    background-color: ${props => props.theme.color.primary.neonGreen};
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 4px;
    
    &:hover{
        background-color: hsl(150, 90%, 56%);
    }
`