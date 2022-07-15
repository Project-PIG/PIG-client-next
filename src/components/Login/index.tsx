import * as S from "./style";
import * as SVG from "../../SVG";

export default function Login() {
  return (
    <>
      <S.Wrapper>
        <S.LoginFormWrapper>
          <SVG.LoginLogo />
          <S.Title>Sign in</S.Title>
          <S.OauthButton>
            <SVG.Google />
            <S.LoginText>Sign in with Google</S.LoginText>
            <S.GrassWrapper>
              <SVG.GrassLeft />
              <SVG.GrassRight />
            </S.GrassWrapper>
          </S.OauthButton>
        </S.LoginFormWrapper>
      </S.Wrapper>
    </>
  );
}
