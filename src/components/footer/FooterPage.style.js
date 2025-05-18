import styled from "styled-components";

export const MyContacts = styled.div`
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    width: 100%;
    padding: 20px 0px 20px 0px;
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