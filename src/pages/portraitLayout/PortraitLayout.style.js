import styled from "styled-components"
import backgroundImage from "../../assets/img/background.jpg";

export const PageContainer = styled.div`
    background: rgb(3,7,17);
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
    background: 
        linear-gradient(rgba(9, 95, 182, 0.5), rgba(3,7,17, 1)),
        url(${backgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 300px;
`;

export const ProfileImage = styled.img`
    display: flex;
    height: auto;
    width: 300px;
    border-radius: 50%;
    border: 10px solid rgb(3,7,17);
    margin-top: -250px;
    z-index: 2;
`;