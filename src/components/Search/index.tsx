import React, { useState } from "react";
import * as S from "./style";
import * as SVG from "../../SVG";

const Search = () => {
  const [clickTag, setClickTag] = useState([
    {
      name: "bk",
      select: false,
    },
    {
      name: "ft",
      select: false,
    },
    {
      name: "game",
      select: false,
    },
    {
      name: "ios",
      select: false,
    },
    {
      name: "android",
      select: false,
    },
    {
      name: "security",
      select: false,
    },
    {
      name: "ai",
      select: false,
    },
    {
      name: "infra",
      select: false,
    },
    {
      name: "design",
      select: false,
    },
    {
      name: "etc",
      select: false,
    },
  ]);
  const list = [1, 23, 45, 6, 67, 7];
  const newList = list.map((e) => {
    return e * 2;
  });
  console.log(newList);
  return (
    <>
      <S.Font />
      <S.Search_bg>
        <S.Wrap>
          <S.Search_wrap>
            <input placeholder="어떤 분을 찾으시나요?" />
            <SVG.Search_icon />
          </S.Search_wrap>
          <S.Tag_wrap>
            <p>전공분야</p>
            <section>
              <div>
                <S.Tag
                  clicked={clickTag.bk}
                  onClick={() => setClickTag({ ...clickTag, bk: !clickTag.bk })}
                >
                  Backend
                </S.Tag>
                <S.Tag
                  clicked={clickTag.ft}
                  onClick={() => setClickTag({ ...clickTag, ft: !clickTag.ft })}
                >
                  Frontend
                </S.Tag>
                <S.Tag
                  clicked={clickTag.game}
                  onClick={() =>
                    setClickTag({ ...clickTag, game: !clickTag.game })
                  }
                >
                  Game
                </S.Tag>
              </div>
              <div>
                <S.Tag
                  clicked={clickTag.ios}
                  onClick={() =>
                    setClickTag({ ...clickTag, ios: !clickTag.ios })
                  }
                >
                  iOS
                </S.Tag>
                <S.Tag>Android</S.Tag>
                <S.Tag>Security</S.Tag>
              </div>
              <div>
                <S.Tag>AI</S.Tag>
                <S.Tag>Infra</S.Tag>
                <S.Tag>Design</S.Tag>
                <S.Tag>ETC</S.Tag>
              </div>
            </section>
          </S.Tag_wrap>
        </S.Wrap>
      </S.Search_bg>
    </>
  );
};

export default Search;
