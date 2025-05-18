import { MyContacts } from "./FooterPage.style"
import linkedInIcon from "../../assets/icons/linkedInIcon.png";
import githubIcon from "../../assets/icons/githubIcon.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import itchIcon from "../../assets/icons/itchIcon.png";

function FooterPage() {
    return (
        <>
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
        </>
    );
}

export default FooterPage