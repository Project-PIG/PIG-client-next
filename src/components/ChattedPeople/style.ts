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

export const User = styled.div`
  width: 94%;
  height: 80px;
  background-color: #ff644f;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  svg {
    width: 56px;
    height: 56px;
    background-color: white;
    border-radius: 56px;
    margin-left: 14px;
  }
`;

export const User_Wrap = styled.div`
  margin-left: 14px;
  h2 {
    font-size: 18px;
    margin: 0;
    margin-left: -56px;
  }
  p {
    font-size: 14px;
    color: white;
    margin: 0;
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
