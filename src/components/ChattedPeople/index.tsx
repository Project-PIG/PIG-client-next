import * as S from "./style";
import { List } from "./dummyData";
import { useState } from "react";

export default function Chatted() {
  const [chattUser, setChattUser] = useState("");
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <S.Wrap>
      <h3>채팅</h3>
      <S.Search
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
      />
      <S.UserWeapper>
        {List.filter((i) => {
          if (search) return i.name.includes(search);
          else return true;
        }).map((e, index) => {
          return (
            <S.User
              key={index}
              onClick={() => setChattUser(e.name)}
              state={e.name === chattUser}
            >
              <S.ProfileImg
                src="/png/ExProfile.png"
                state={e.name === chattUser}
              />
              <S.User_Wrap state={e.name === chattUser}>
                <h2>{e.name}</h2>
                <p>새로운 메세지 {e.nexMessage}개</p>
              </S.User_Wrap>
            </S.User>
          );
        })}
      </S.UserWeapper>

      <S.Foot />
    </S.Wrap>
  );
}
