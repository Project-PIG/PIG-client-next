import * as S from "./style";
import * as SVG from "../../SVG";

export default function Header() {
  return (
    <S.Header>
      <SVG.Logo />
      <S.NavWrapper>
        <SVG.ChatIcon />
        <S.ProfileWrapper>
          <S.ProfileImg src="/png/ExProfile.png" />
        </S.ProfileWrapper>
      </S.NavWrapper>
    </S.Header>
  );
}
