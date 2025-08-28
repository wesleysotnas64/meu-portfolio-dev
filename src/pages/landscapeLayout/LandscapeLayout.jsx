import HeaderPage from "../../components/header/HeaderPage";
import FooterPage from "../../components/footer/FooterPage";
import AboutMe from "../../components/aboutMe/AboutMe";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ProjectGridFullStack from "../../components/projectGridFullStack/ProjectGridFullStack";
import ProjectGridGames from "../../components/projectGridGames/ProjectGridGames";

import profileImage from "../../assets/img/profile.png"

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

                <SectionTitle title="Games" />
                <ProjectGridGames />

                <SectionTitle title="Full-Stack"/>
                <ProjectGridFullStack />

                <FooterPage />

            </PageContainer>
        </>
    )
}

export default LandscapeLayout