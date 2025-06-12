import { MainDiv, Title } from "./SectionTitle.style";

function SectionTitle({title}) {
    return(
        <MainDiv>
            <Title>{title}</Title> <div id="div-detail"></div>
        </MainDiv>

    )
}

export default SectionTitle