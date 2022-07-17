import * as S from "./style";
import * as SVG from "../../SVG";
import Link from "next/link";

export default function Header() {
  return (
    <S.Header>
      <Link href="/">
        <div>
          <SVG.Logo />
        </div>
      </Link>
      <S.NavWrapper>
        <Link href="/chatting">
          <div>
            <SVG.ChatIcon />
          </div>
        </Link>
        <Link href="/profile">
          <S.ProfileWrapper>
            <S.ProfileImg src="/png/ExProfile.png" />
          </S.ProfileWrapper>
        </Link>
      </S.NavWrapper>
    </S.Header>
  );
}
