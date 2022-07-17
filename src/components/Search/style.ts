import styled from "@emotion/styled";

export const Font = styled.div`
  //원스토어
  @font-face {
    font-family: "ONE-Mobile-POP";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff")
      format("woff");
    font-style: normal;
  }
  //MICE 고딕
  @font-face {
    font-family: "MICEGothic Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2")
      format("woff2");
    font-weight: 100;
    font-style: normal;
  }
  //수트
  @font-face {
    font-family: "SUIT-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Search_bg = styled.div`
  background-image: url(png/Search_bg.png);
  width: 100%;
  height: 622px;
`;

export const Wrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 622px;
  background: #fff1ef;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Wrap = styled.div`
  width: 480px;
  height: 260px;
  input {
    font-family: "SUIT-Medium";
    font-size: 32px;
    background-color: #fff1ef;
    outline: none;
    border: none;
    border-bottom: #514943 2px solid;
    width: 460px;
    color: #43372f;
    padding-bottom: 6px;
    padding-right: 50px;

    &::placeholder {
      color: #b6abaa;
    }
  }
`;

export const Search_wrap = styled.div`
  display: flex;
  background-color: #fff1ef;
  svg {
    margin-left: -40px;
  }
`;

export const Tag_wrap = styled.div`
  p {
    font-family: "SUIT-Medium";
    color: #7d7772;
    font-weight: 700;
    margin-top: 24Spx;
  }
  section {
    margin-left: -10px;
    margin-top: -12px;
  }
`;

type TagType = {
  clicked: string;
};

export const Tag = styled.button<TagType>`
  font-family: "ONE-Mobile-POP";
  border: none;
  background-color: white;
  padding: 10px 24px;
  font-size: 18px;
  font-weight: lighter;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px #cbbec6;
  transition: 0.2s;
  cursor: pointer;
  color: ${(props) => (props.clicked ? "#ff644f" : "Black")};
  border: ${(props) => (props.clicked ? "1px solid #ff644f" : "none")};
  &:hover {
    color: #ff644f;
    box-shadow: 4px 4px 10px #a7a5a6;
    padding-top: -6px;
  }
`;
export const MajorListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1.5rem;
  transition: 0.5s;
  animation: animate 1s;
  @keyframes animate {
    0% {
      opacity: calc(0);
    }
  }
`;

type BtnType = {
  state: boolean;
};

export const MajorBtn = styled.button<BtnType>`
  font-family: "Source Sans Pro";
  font-style: normal;
  width: auto;
  height: 40px;
  padding: 6px 32px;
  border-radius: 5px;
  border: 1px solid ${(e) => (e.state ? "#FF644F" : "#ffffff")};
  outline: none;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  box-shadow: 2px 2px 8px rgba(54, 36, 47, 0.2);
  border-radius: 8px;
  color: ${(e) => (e.state ? "#FF644F" : "#43372F")};
  background: #ffffff;
  transition: 0.2s;
`;
