import ProjectCard from "../projectCard/ProjectCard";
import { GridContainer } from "./ProjectGridGames.style";
import pongImage from "../../assets/img/pong.jpg";
import snakeImage from "../../assets/img/snake.jpg";

function ProjectGridGames() {
    return (
        <GridContainer>
            <ProjectCard
                title="Pong"
                description="Clone do clássico jogo dos anos 80, Pong. Desenvolvido na Unity e outras ferramentas de desenvolvimento de jogos"
                backgroundImage={pongImage}
                projectLink="https://wesleysotnas64.itch.io/pong-clone-portfolio"
            />
            <ProjectCard
                title="Purple Snake"
                description="Uma versão minimalista do clássico Snake. Desenvolvido na Unity e outras ferramentas de desenvolvimento de jogos"
                backgroundImage={snakeImage}
                projectLink="https://wesleysotnas64.itch.io/purple-snake"
            />
            
        </GridContainer>
    );
}

export default ProjectGridGames;
