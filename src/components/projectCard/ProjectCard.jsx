import { MainDiv } from "./ProjetcCard.style";

function ProjectCard({ title, description, backgroundImage, projectLink }) {

    const handleClick = () => {
        if(projectLink) {
            window.open(projectLink, "_blank");
        }
    }

    return (
        <MainDiv backgroundImage={backgroundImage} onClick={handleClick}>
            <h3>{title}</h3>
            <p>{description}</p>
        </MainDiv>
    );
}

export default ProjectCard;
