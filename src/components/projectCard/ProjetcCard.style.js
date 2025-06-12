import styled from "styled-components";

export const MainDiv = styled.div`
    background: ${({ backgroundImage }) =>
        backgroundImage
            ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`
            : `rgb(0, 105, 119)`};
    background-size: cover;
    background-position: center;
    color: rgb(255, 255, 255);
    
    font-family: "Open Sans", sans-serif;
    
    width: 200px;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    transition: transform 0.2s;
    transition: 0.2s;
    
    &:hover {
        transform: scale(1.025);
        cursor: pointer;
        
        background: ${({ backgroundImage }) =>
        backgroundImage
        ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`
        : `rgb(0, 105, 119)`};
        background-size: cover;
        background-position: center;
    }
    
    h3 {
        margin-top: 10px;
        font-size: 12pt;
        width: 80%;
    }

    p {
        font-size: 11pt;
        width: 80%;
    }
`;
