import styled from "@emotion/styled";

export const Shadow = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px #dbdbdb;
`;

export const Wrap = styled.div`
  width: 45%;
  height: 100%;
  border: 1px solid #d6d6d6;
  position: fixed;
  margin-left: 27%;
  top: 80px;
`;

export const Other = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  align-items: center;
  svg {
    width: 56px;
    height: 56px;
    border: #d6d6d6 1px solid;
    border-radius: 56px;
    margin-left: 30px;
  }
  h2 {
    font-size: 18px;
    margin-left: 14px;
  }
  button {
    cursor: pointer;
    position: absolute;
    right: 30px;
    border: 1px solid #ff644f;
    color: #ff644f;
    background-color: white;
    border-radius: 20px;
    width: 80px;
    height: 28px;
    font-weight: 700;
    transition: 0.2s;
    :hover {
      background-color: #ffe1e1;
    }
  }
`;

export const Chatting_wrap = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  padding: 30px;
`;
export const OtherChat_wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  clear: both;
  div {
    margin-left: 14px;
    h2 {
      font-size: 10px;
      color: #a5a5a5;
      margin: 0;
      margin-top: 6px;
    }
    div {
      padding: 8px;
      background-color: #ededed;
      border-radius: 20px;
      font-size: 14px;
      margin-left: -6px;
    }
  }
  svg {
    width: 38px;
    height: 38px;
    border: 1px solid black;
    border-radius: 38px;
  }
`;
export const MyChat_wrap = styled.div`
  margin-bottom: 20px;
  width: 100%;
  div {
    margin-bottom: 6px;
    padding: 8px;
    background-color: #ff644f;
    border-radius: 20px;
    font-size: 14px;
    color: white;
    float: right;
    clear: both;
  }
`;

export const Input_wrap = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  input {
    width: 60%;
    height: 40px;
    border: none;
    outline: none;
    background-color: #ededed;
    border-radius: 37px;
    padding-left: 20px;
    margin-right: 20px;
  }
  svg {
    cursor: pointer;
  }
`;
