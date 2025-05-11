import { AboutMe, PageContainer, ProfileBackground, ProfileImage, ProfileInfo } from "./PortraitLayout.style";
import profileImage from "../../assets/img/profile.png"
import HeaderPage from "../../components/header/HeaderPage";

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

                
                <ProfileInfo>
                    <label id="my-name">Wesley Santos</label>
                    <label id="my-profession">Programador</label>
                </ProfileInfo>
                <AboutMe>
                    <h2>Sobre mim</h2>
                    <p>
                        Sou graduado em Ciência da Computação pela Universidade Federal do Ceará (UFC).
                    </p>
                    <p>
                        Tenho experiência no desenvolvimento de software, com foco em <strong>APIs REST</strong> e <strong>aplicações web</strong>. Minha principal linguagem de programação é <strong>C#</strong>, que utilizo com <strong>.NET</strong> no desenvolvimento de <strong>Web APIs</strong> e na criação de jogos digitais com <strong>Unity</strong>.
                    </p>
                    <p>
                        Também tenho experiência com <strong>JavaScript</strong> e <strong>React</strong> para o desenvolvimento frontend. Atualmente, estou aprofundando meus conhecimentos em <strong>Java</strong> e <strong>Spring Boot</strong> para melhorar como desenvolvedor full stack.
                    </p>
                    <p>
                        Gosto de explorar novas tecnologias e, no tempo livre, dedico-me à criação de jogos digitais.
                    </p>
                </AboutMe>


            </PageContainer>
        </>
    )
}

export default PortraitLayout