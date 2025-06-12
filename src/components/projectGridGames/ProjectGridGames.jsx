import ProjectCard from "../projectCard/ProjectCard";
import { GridContainer } from "./ProjectGridGames.style";
import pongImage from "../../assets/img/pong.jpg";

function ProjectGridGames() {
    return (
        <GridContainer>
            <ProjectCard
                title="Pong"
                description="Clone do clássico jogo dos anos 80, Pong. Desenvolvido na Unity e outras ferramentas de desenvolvimento de jogos"
                backgroundImage={pongImage}
                projectLink="https://wesleysotnas64.itch.io/pong-clone-portfolio"
            />
            
        </GridContainer>
    );
}

export default ProjectGridGames;
