import React from "react";
import * as S from "./style";
import * as SVG from "../../SVG";
const Contents = () => {
  const list = [
    1, 12, 12, 1, 2, 21, 21, 21, 2, 12, 1, 2, 12, 12, 1, 2, 12, 1, 21, 2, 12, 1,
    2, 12, 1, 21, 2, 12, 1, 2, 12,
  ];
  return (
    <>
      <S.Wrapper>
        <S.Major>
          <SVG.Dot />
          Frontend
        </S.Major>
        <S.Content_wrap>
          {list.map((_, index) => {
            return (
              <S.Wrap key={index}>
                <S.ProfilePicture />
                <S.Name_wrap>
                  <S.Name>곽희상</S.Name>
                  <h3>2기</h3>
                </S.Name_wrap>
                <S.Description>프론트엔드입니다.</S.Description>
                <S.Bottom_wrap>
                  <S.Tag>#FE</S.Tag>
                  <S.Chat>채팅</S.Chat>
                </S.Bottom_wrap>
              </S.Wrap>
            );
          })}
        </S.Content_wrap>
      </S.Wrapper>
    </>
  );
};

export default Contents;
