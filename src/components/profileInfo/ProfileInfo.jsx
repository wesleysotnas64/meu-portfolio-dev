import { MainDiv } from "./ProfileInfo.style";

function ProfileInfo({ landscape }) {
    return (
        <MainDiv landscape={landscape}>
            <label id="my-name">Wesley Santos</label>
            <label id="my-profession">Programador</label>
        </MainDiv>
    );
}

export default ProfileInfo;
