import styled from "styled-components";

export const MainContainer = styled.div`
    background:rgb(0, 41, 75);
    color:rgba(255, 255, 255, 0.75);

    width: 100%;
    height: 65px;
    font-size: 11pt;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    
    section {
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    h2 {
        font-size: 12pt;
        text-decoration: none;
    }

    strong {
        font-weight: bold;
    }

    label#profissao {
        font-weight: 200;
    }
    
`;

export const MenuLinks = styled.div`
    display: flex;
    gap: 10px;
    
    label {
        transition: 0.2s;
        &:hover{
            cursor: pointer;
            color:rgba(255, 255, 255, 1);
        }
    }
`;