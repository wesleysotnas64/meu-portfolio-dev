
import HeaderPage from "../../components/header/HeaderPage";
import FooterPage from "../../components/footer/FooterPage";
import AboutMe from "../../components/aboutMe/AboutMe";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ProjectGridFullStack from "../../components/projectGridFullStack/ProjectGridFullStack";

import profileImage from "../../assets/img/profile.png"

import { PageContainer, ProfileBackground, ProfileImage } from "./PortraitLayout.style";
import ProjectGridGames from "../../components/projectGridGames/ProjectGridGames";

function PortraitLayout() {
    return(
        <>
            <PageContainer>
                <HeaderPage />
                <ProfileBackground />
                 
                
                <ProfileImage
                    src={profileImage}
                    alt="Minha foto de perfil"
                />

                <ProfileInfo landscape={false} />

                <SectionTitle title="Sobre mim"/>
                <AboutMe />

                <SectionTitle title="Meus Projetos"/>
                <SectionTitle title="Full-Stack"/>
                <ProjectGridFullStack />

                <SectionTitle title="Games" />
                <ProjectGridGames />

                <FooterPage />

            </PageContainer>
        </>
    )
}

export default PortraitLayout