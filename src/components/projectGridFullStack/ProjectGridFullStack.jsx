import ProjectCard from "../projectCard/ProjectCard";
import { GridContainer } from "./ProjectGridFullStack.style";
import deskImage from "../../assets/img/desk.jpg";
import chatImage from "../../assets/img/chat.jpg";

function ProjectGridFullStack() {
    return (
        <GridContainer>
            <ProjectCard
                title="TODO List"
                description="Um projeto full-stack simples que integra Web-API (C# e EF) e projeto React."
                backgroundImage={deskImage}
                projectLink="https://github.com/wesleysotnas64/todo-web-portfolio"
            />
            <ProjectCard
                title="MiniChat"
                description="Um chat simples que utilizando SignalR na sincronização de mensagens. Back-end desenvolvido com C# (.NET) e front-end com React."
                backgroundImage={chatImage}
                projectLink="https://github.com/wesleysotnas64/minichat-web-portfolio"
            />
            
        </GridContainer>
    );
}

export default ProjectGridFullStack;
