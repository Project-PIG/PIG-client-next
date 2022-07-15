import * as S from "./style";
import * as SVG from "../../SVG";
export default function Chatting() {
  return (
    <>
      <S.Shadow />
      <S.Wrap>
        <S.Other>
          <svg />
          <h2>곽희상</h2>
          <button>나가기</button>
        </S.Other>
        <S.Chatting_wrap>
          <S.OtherChat_wrap>
            <svg />
            <div>
              <h2>곽희상</h2>
              <div>안녕하세요</div>
            </div>
          </S.OtherChat_wrap>

          <S.MyChat_wrap>
            <div>안녕하세요</div>
          </S.MyChat_wrap>
        </S.Chatting_wrap>
        <S.Input_wrap>
          <input placeholder="메세지를 입력해주세요" />
          <SVG.Send />
        </S.Input_wrap>
      </S.Wrap>
    </>
  );
}
