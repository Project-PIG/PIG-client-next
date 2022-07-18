import React from "react";
import * as S from "./style";
import * as SVG from "../../SVG";
import { List } from "./dummyData";

type SelectMajorTpye = string[];

const Contents = ({
  list,
  search,
}: {
  list: SelectMajorTpye;
  search: string;
}) => {
  const CutSentence = (e: any) => {
    if (e.length >= 14) {
      return e.substr(0, 14) + "...";
    } else return e;
  };
  return (
    <>
      <S.Wrapper>
        {list &&
          list.map((i) => {
            return (
              <>
                <S.Major>
                  <SVG.Dot />
                  {i}
                </S.Major>
                <S.Content_wrap>
                  {List.filter((j) => j.major.includes(i)).map((e, index) => {
                    return (
                      <S.Wrap key={index}>
                        <S.ProfilePicture />
                        <S.Name_wrap>
                          <S.Name>{e.name}</S.Name>
                          <h3>{e.grade}기</h3>
                        </S.Name_wrap>
                        <S.Description>{CutSentence(e.aboutMe)}</S.Description>
                        <S.Bottom_wrap>
                          {e.major.map((i, indexx) => {
                            return <S.Tag key={indexx}>{i && "#" + i}</S.Tag>;
                          })}
                          <S.Chat>채팅</S.Chat>
                        </S.Bottom_wrap>
                      </S.Wrap>
                    );
                  })}
                </S.Content_wrap>
              </>
            );
          })}
        {search && (
          <>
            <S.Major>
              <SVG.Dot />
              {search}...
            </S.Major>
            <S.Content_wrap>
              {List.filter((j) => j.name.includes(search)).map((e, index) => {
                return (
                  <S.Wrap key={index}>
                    <S.ProfilePicture />
                    <S.Name_wrap>
                      <S.Name>{e.name}</S.Name>
                      <h3>{e.grade}기</h3>
                    </S.Name_wrap>
                    <S.Description>{CutSentence(e.aboutMe)}</S.Description>
                    <S.Bottom_wrap>
                      {e.major.map((i, indexx) => {
                        return <S.Tag key={indexx}>#{i}</S.Tag>;
                      })}
                      <S.Chat>채팅</S.Chat>
                    </S.Bottom_wrap>
                  </S.Wrap>
                );
              })}
            </S.Content_wrap>
          </>
        )}
      </S.Wrapper>
    </>
  );
};

export default Contents;
