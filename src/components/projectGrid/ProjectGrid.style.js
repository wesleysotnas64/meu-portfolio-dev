import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    justify-items: center;
    gap: 10px;

    grid-template-columns: repeat(
        auto-fit,
        minmax(200px, 1fr)
    );

    width: 80%;
`;
