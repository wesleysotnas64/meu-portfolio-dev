import { MainContainer, MenuLinks } from "./HeaderPage.style"

function HeaderPage() {
    return(
        <>
            <MainContainer>
                <h2>Wesley Santos</h2>
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