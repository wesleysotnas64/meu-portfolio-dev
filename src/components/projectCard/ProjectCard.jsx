import { MainDiv } from "./ProjetcCard.style";

function ProjectCard({ title, description, backgroundImage }) {
    return (
        <MainDiv backgroundImage={backgroundImage}>
            <h3>{title}</h3>
            <p>{description}</p>
        </MainDiv>
    );
}

export default ProjectCard;
