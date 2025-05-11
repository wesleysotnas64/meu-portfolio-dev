import { AboutMe, PageContainer, ProfileBackground, ProfileImage, ProfileInfo, MyContacts } from "./PortraitLayout.style";
import profileImage from "../../assets/img/profile.png"
import HeaderPage from "../../components/header/HeaderPage";
import linkedInIcon from "../../assets/icons/linkedInIcon.png";
import githubIcon from "../../assets/icons/githubIcon.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import itchIcon from "../../assets/icons/itchIcon.png";

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
                        Tenho experiência no desenvolvimento de softwares, com foco em <strong>APIs REST</strong> e <strong>aplicações web</strong>. Minha principal linguagem de programação é <strong>C#</strong>, que utilizo com <strong>.NET</strong> no desenvolvimento de <strong>Web APIs</strong> e na criação de jogos digitais com <strong>Unity</strong>.
                    </p>
                    <p>
                        Também tenho experiência com <strong>JavaScript</strong> e <strong>React</strong> para o desenvolvimento frontend. Atualmente, estou aprofundando meus conhecimentos em <strong>Java</strong> e <strong>Spring Boot</strong> para melhorar como desenvolvedor full stack.
                    </p>
                    <p>
                        Gosto de explorar novas tecnologias e, no tempo livre, dedico-me à criação de jogos digitais.
                    </p>
                </AboutMe>

                <MyContacts>
                    <h2>Contatos</h2>
                    <div id="icons">
                        <a href="https://www.linkedin.com/in/wesley-santos-08b83b229/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/wesleysotnas64" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a href="mailto:wesleysotnas64@gmail.com?subject=Contato%20via%20Portfólio&body=Fico%20feliz%20por%20ter%20chamado%20sua%20aten%C3%A7%C3%A3o.%20Acredito%20que%20posso%20contribuir%20significativamente%20para%20o%20seu%20projeto.">
                            <img src={emailIcon} alt="Email" />
                        </a>
                        <a href="https://wesleysotnas64.itch.io/" target="_blank" rel="noopener noreferrer">
                            <img src={itchIcon} alt="Itch.io" />
                        </a>
                    </div>
                </MyContacts>


            </PageContainer>
        </>
    )
}

export default PortraitLayout