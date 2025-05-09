import { PageContainer, ProfileImage, ProfileInfo } from "./MainPage.style";
import profileImage from "../../assets/img/profile.png"
import HeaderPage from "../../components/header/HeaderPage";

function MainPage() {
    return(
        <>
            <PageContainer>
                <HeaderPage />
                
                {/* Página de Informações */}
                <ProfileInfo>

                </ProfileInfo>
                {/* <ProfileImage
                    src={profileImage}
                    alt="Minha foto de perfil"
                /> */}


            </PageContainer>
        </>
    )
}

export default MainPage