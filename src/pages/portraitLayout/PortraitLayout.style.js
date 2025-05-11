import styled from "styled-components"

export const PageContainer = styled.div`
    background:rgb(58, 61, 70);
    height: 100dvh;
    width: 100dvw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileBackground = styled.div`
    background:rgb(67, 176, 243);
    width: 100%;
    height: 400px;
`;

export const ProfileImage = styled.img`
    position: absolute;
    width: 400px;
    height: auto;
    border-radius: 50%;
    border: 10px solid rgb(58, 61, 70);
    margin-top: 100px;
`;

export const ProfileInfo = styled.div`
    width: 100%;
    /* background: #0055aa; */
    color:rgb(255, 255, 255);
    font-family: "Roboto", sans-serif;
    font-size: 24pt;
    
    display: flex;
    justify-content: center;

    margin-top: 150px;


    #my-name {
        font-weight: 500;
        margin-right: 20px;
    }

    #my-profession {
        font-weight: lighter;
    }
`;

export const AboutMe = styled.div`
    /* background: #125434; */
    color:rgb(255, 255, 255);
    font-family: "Open Sans", sans-serif;

    width: 80%;
    margin-top: 20px;

    p {
        font-size: 16pt;
        text-align: justify;

        margin-bottom: 15px;
    }
`;
