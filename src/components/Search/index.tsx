import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as SVG from "../../SVG";

const Search = ({ list, fn, search, setSearch }: any) => {
  type ClickTagType = {
    name: string;
    select: boolean;
  }[];

  const [clickTag, setClickTag] = useState<ClickTagType>([
    {
      name: "Backend",
      select: false,
    },
    {
      name: "Frontend",
      select: false,
    },
    {
      name: "Game",
      select: false,
    },
    {
      name: "iOS",
      select: false,
    },
    {
      name: "Android",
      select: false,
    },
    {
      name: "Security",
      select: false,
    },
    {
      name: "AI",
      select: false,
    },
    {
      name: "Infra",
      select: false,
    },
    {
      name: "Design",
      select: false,
    },
    {
      name: "ETC",
      select: false,
    },
  ]);

  const SetMajorList = (tagName: any) => {
    const ClickMajorIndex = clickTag.findIndex((e) => e.name === tagName);

    setClickTag(
      clickTag.map((item, index) => {
        if (index === ClickMajorIndex) {
          return {
            name: item.name,
            select: !item.select,
          };
        } else {
          return {
            name: item.name,
            select: item.select,
          };
        }
      })
    );
  };
  useEffect(() => {
    fn(
      clickTag
        .filter((e) => e.select === true)
        .map((e) => {
          if (e.name === "Frontend") return "FE";
          else if (e.name === "Backend") return "BE";
          else return e.name;
        })
    );
  }, [clickTag]);
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <>
      <S.Wrapper>
        <S.Wrap>
          <S.Search_wrap>
            <input
              type="text"
              value={search}
              onChange={(e: any) => {
                setSearch(e.target.value);
                fn([]);
              }}
              placeholder="어떤 분을 찾으시나요?"
            />
            <SVG.Search_icon />
          </S.Search_wrap>
          <S.Tag_wrap>
            <p>전공분야</p>
            <S.MajorListWrapper>
              {clickTag.map((e, index) => {
                return (
                  <S.MajorBtn
                    key={index}
                    state={e.select}
                    onClick={() => {
                      SetMajorList(e.name);
                    }}
                  >
                    {e.name}
                  </S.MajorBtn>
                );
              })}
            </S.MajorListWrapper>
          </S.Tag_wrap>
        </S.Wrap>
        <SVG.BigLogo />
      </S.Wrapper>
    </>
  );
};

export default Search;
