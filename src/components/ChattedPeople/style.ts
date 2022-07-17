import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding-top: 160px;
  position: fixed;
  width: 27%;
  height: 100%;
  background-color: white;
  display: table;
  text-align: center;
  h3 {
    position: absolute;
    font-size: 36px;
    left: 20px;
    top: 60px;
  }
`;

export const Search = styled.input`
  width: 80%;
  height: 33px;
  border-radius: 27px;
  background-color: #ededed;
  outline: none;
  border: none;
  padding-left: 10px;
  margin-top: 20px;
  margin-bottom: 16px;
`;
export const ProfileImg = styled.img<UserType>`
  width: 56px;
  height: 56px;
  background-color: white;
  margin-left: 14px;
  background: #000;
  border-radius: 50%;
  ${(e) => (e.state ? "box-shadow: 0px 5px 5px rgba(0, 0, 0)" : "")};
`;

export const UserWeapper = styled.div`
  height: 820px;
  overflow: scroll;
`;
type UserType = {
  state: boolean;
};

export const User = styled.div<UserType>`
  width: 94%;
  height: 80px;
  background-color: ${(e) => (e.state ? "#ff644f" : "")};
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  transition: 0.5s;
`;

export const User_Wrap = styled.div<UserType>`
  margin-left: 14px;
  h2 {
    font-size: 18px;
    margin: 0;
    margin-left: -56px;
  }
  p {
    font-size: 14px;
    color: ${(e) => (e.state ? "#FCFCFC" : "#898686")};
    margin: 0;
    transition: 0.5s;
  }
`;

export const Foot = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0 -1px 11px #d6d6d6;
  background-color: white;
  position: absolute;
  bottom: 0;
`;
