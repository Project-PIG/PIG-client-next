import * as S from "./style";

export default function Chatted() {
  return (
    <S.Wrap>
      <h3>채팅</h3>
      <S.Search placeholder="search" />
      <S.User>
        <svg></svg>
        <S.User_Wrap>
          <h2>곽희상</h2>
          <p>새로운 메세지 1개</p>
        </S.User_Wrap>
      </S.User>
      <S.Foot />
    </S.Wrap>
  );
}
