import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    justify-items: center;

    grid-template-columns: repeat(
        auto-fit,
        minmax(200px, 200px)
    );
    gap: 10px;

    width: 80%;
    margin: 0 auto;
`;
