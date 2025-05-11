import { MainContainer, MenuLinks } from "./HeaderPage.style"

function HeaderPage() {
    return(
        <>
            <MainContainer>
                <h2><strong>Wesley Santos</strong> <label id="profissao">Programador</label></h2>
                <MenuLinks>
                    <label>Info</label> |
                    <label>Projetos</label> |
                    <label>Contatos</label>
                </MenuLinks>
            </MainContainer>
        </>
    )
}

export default HeaderPage