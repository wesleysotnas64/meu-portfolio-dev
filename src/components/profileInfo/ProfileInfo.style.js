import styled from "styled-components";

export const MainDiv = styled.div`
    width: 80%;
    color:rgb(255, 255, 255);
    font-family: "Roboto", sans-serif;
    font-size: 20pt;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ landscape }) => (landscape ? "row" : "column")};

    margin-top: 10px;
    gap: ${({landscape}) => (landscape ? "20px" : "0px")};

    #my-name {
        font-weight: 500;
    }

    #my-profession {
        font-weight: 250;
    }
`;