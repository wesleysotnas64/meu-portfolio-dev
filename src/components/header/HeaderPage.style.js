import styled from "styled-components";

export const MainContainer = styled.div`
    background:rgb(0, 41, 75);
    color:rgba(255, 255, 255, 0.75);

    width: 100%;
    height: 50px;
    font-size: 16pt;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;

    h2 {
        font-size: 16pt;
    }
    
`;

export const MenuLinks = styled.div`
    display: flex;
    gap: 20px;
    
    label {
        transition: 0.2s;
        &:hover{
            cursor: pointer;
            color:rgba(255, 255, 255, 1);
        }
    }
`;