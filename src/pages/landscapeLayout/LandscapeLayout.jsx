import HeaderPage from "../../components/header/HeaderPage";
import FooterPage from "../../components/footer/FooterPage";
import AboutMe from "../../components/aboutMe/AboutMe";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
import ProjectCard from "../../components/projectCard/ProjectCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ProjectGrid from "../../components/projectGrid/ProjectGrid";

import profileImage from "../../assets/img/profile.png"
import deskImage from "../../assets/img/desk.jpg"

import { PageContainer, ProfileBackground, ProfileImage } from "./LandscapeLayout.style";

function LandscapeLayout() {
    return(
        <>
            <PageContainer>
                <HeaderPage />
                <ProfileBackground />
                 
                
                <ProfileImage
                    src={profileImage}
                    alt="Minha foto de perfil"
                />

                <ProfileInfo landscape={true} />

                <SectionTitle title="Sobre mim"/>
                <AboutMe />

                <SectionTitle title="Meus Projetos"/>
                <SectionTitle title="Full-Stack"/>
                <ProjectGrid>
                    <ProjectCard
                        title="TODO List"
                        description="Um projeto full-stack simples que integra Web-API (C# e EF) e projeto React."
                        backgroundImage={deskImage}
                    />
                </ProjectGrid>

                <FooterPage />

            </PageContainer>
        </>
    )
}

export default LandscapeLayout