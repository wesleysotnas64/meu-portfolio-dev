import styled from "styled-components"

export const PageContainer = styled.div`
    background: rgb(58, 61, 70);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; 
    scrollbar-width: none; /* Firefox */
    
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari e Edge */
    }
`;

export const ProfileBackground = styled.div`
    background:rgb(67, 176, 243);
    width: 100%;
    height: 300px;
`;

export const ProfileImage = styled.img`
    display: flex;
    height: auto;
    width: 300px;
    border-radius: 50%;
    border: 10px solid rgb(58, 61, 70);
    margin-top: -250px;
    z-index: 2;
`;