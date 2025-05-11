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
        font-weight: 100;
        text-align: justify;

        margin-bottom: 15px;
    }
`;

export const MyContacts = styled.div`
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    width: 100%;
    padding: 20px;
    margin-top: 30px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    font-family: "Open Sans", sans-serif;

    h2 {
        font-size: 16pt;
        font-weight: 400;
    }
    
    div#icons {
        display: flex;
        gap: 20px;
    }

    a img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid rgb(255, 255, 255);
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }
`;
