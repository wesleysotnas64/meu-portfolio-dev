import profileImage from "../../assets/img/profile.png"
import HeaderPage from "../../components/header/HeaderPage";
import FooterPage from "../../components/footer/FooterPage";
import AboutMe from "../../components/aboutMe/AboutMe";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
import ProjectCard from "../../components/projectCard/ProjectCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ProjectGrid from "../../components/projectGrid/ProjectGrid";

import { PageContainer, ProfileBackground, ProfileImage } from "./PortraitLayout.style";

function PortraitLayout() {
    return(
        <>
            <PageContainer>
                {/* <HeaderPage /> */}
                <ProfileBackground />
                 
                
                <ProfileImage
                    src={profileImage}
                    alt="Minha foto de perfil"
                />

                <ProfileInfo />

                <SectionTitle title="Sobre mim"/>
                <AboutMe />

                <SectionTitle title="Meus Projetos"/>
                <ProjectGrid>
                    <ProjectCard
                        title="TODO List"
                        description="Um projeto full-stack simples que integra Web-API (C# e EF) e projeto React."
                        backgroundImage={profileImage}
                    />
                    <ProjectCard
                        title="Portfólio"
                        description="Um portfólio feito em React para apresentar meus projetos e habilidades."
                        backgroundImage={profileImage}
                    />
                    <ProjectCard
                        title="Portfólio"
                        description="Um portfólio feito em React para apresentar meus projetos e habilidades."
                        backgroundImage={profileImage}
                    />
                    <ProjectCard
                        title="Portfólio"
                        description="Um portfólio feito em React para apresentar meus projetos e habilidades."
                        backgroundImage={profileImage}
                    />
                    <ProjectCard
                        title="Portfólio"
                        description="Um portfólio feito em React para apresentar meus projetos e habilidades."
                        backgroundImage={profileImage}
                    />
                    <ProjectCard
                        title="Portfólio"
                        description="Um portfólio feito em React para apresentar meus projetos e habilidades."
                        backgroundImage={profileImage}
                    />
                    <ProjectCard
                        title="Portfólio"
                        description="Um portfólio feito em React para apresentar meus projetos e habilidades."
                        backgroundImage={profileImage}
                    />
                    <ProjectCard
                        title="Portfólio"
                        description="Um portfólio feito em React para apresentar meus projetos e habilidades."
                        backgroundImage={profileImage}
                    />
                    <ProjectCard
                        title="Portfólio"
                        description="Um portfólio feito em React para apresentar meus projetos e habilidades."
                        backgroundImage={profileImage}
                    />
                </ProjectGrid>
                {/* <ProjectCard
                    title="TODO List"
                    description="Um projeto full-stack simples que integra Web-API (C# e EF) e projeto React."
                    backgroundImage={profileImage}
                />
                <ProjectCard
                    title="TODO List"
                    description="Um projeto full-stack simples que integra Web-API (C# e EF) e projeto React."
                    backgroundImage={profileImage}
                /> */}

                <FooterPage />


            </PageContainer>
        </>
    )
}

export default PortraitLayout