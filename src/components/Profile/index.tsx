import { useState } from "react";
import * as S from "./style";

export default function ChangeProfile() {
  type MajorType = string[];

  const [viewAll, setViewAll] = useState(false);
  const MajorList = [
    "FE",
    "BE",
    "Android",
    "ios",
    "Security",
    "Design",
    "Infra",
    "ETC",
    "AI",
    "Game",
  ];

  const [Major, setMajor] = useState<MajorType>(["FE", "BE"]);

  const MakeMajorList = (e: any) => {
    if (Major.length >= 2) {
      setMajor([e]);
    } else {
      setMajor([...Major, e]);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.ProfileWrapper Expans={viewAll}>
          <S.ProfileImg src="/png/ExProfile.png" />
          <S.Informs>
            <h2>곽희상</h2>
            <p>2기</p>
          </S.Informs>
          <S.AboutMe
            Expans={viewAll}
            defaultValue={
              "프론트엔트의 신.입니다.코알라라고 하지말아 주세요.오아ㅏ어아왕아"
            }
          ></S.AboutMe>
          <S.FixWrapper Expans={viewAll}>
            <S.MyMajor>#FE</S.MyMajor>
            {viewAll ? (
              <S.MyMajor>#FE</S.MyMajor>
            ) : (
              <S.Btn onClick={() => setViewAll(!viewAll)}>수정</S.Btn>
            )}
          </S.FixWrapper>
          {viewAll && (
            <>
              <S.MajorListWrapper>
                {MajorList.map((e, index) => {
                  return (
                    <S.MajorBtn
                      key={index}
                      state={Major.includes(e)}
                      onClick={() => MakeMajorList(e)}
                    >
                      {e}
                    </S.MajorBtn>
                  );
                })}
              </S.MajorListWrapper>
              <S.InformMaxMajor>2개까지만 선택 가능</S.InformMaxMajor>
              <S.CheckBtnWrapper>
                <S.Btn>확인</S.Btn>
                <S.Btn onClick={() => setViewAll(!viewAll)}>취소</S.Btn>
              </S.CheckBtnWrapper>
            </>
          )}
        </S.ProfileWrapper>
      </S.Wrapper>
    </>
  );
}
