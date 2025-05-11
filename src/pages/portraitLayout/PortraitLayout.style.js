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
    width: 350px;
    border-radius: 50%;
    border: 10px solid rgb(58, 61, 70);
    margin-top: -250px;
    z-index: 2;
`;

export const ProfileInfo = styled.div`
    width: 100%;
    color:rgb(255, 255, 255);
    font-family: "Roboto", sans-serif;
    font-size: 20pt;
    
    display: flex;
    justify-content: center;

    margin-top: 10px;

    #my-name {
        font-weight: 500;
        margin-right: 20px;
    }

    #my-profession {
        font-weight: 250;
    }
`;

export const AboutMe = styled.div`
    color:rgb(255, 255, 255);
    font-family: "Open Sans", sans-serif;

    width: 80%;
    margin-top: 20px;

    h2 {
        font-size: 16pt;
    }

    p {
        font-size: 14pt;
        text-align: justify;

        margin-bottom: 15px;
    }
`;
