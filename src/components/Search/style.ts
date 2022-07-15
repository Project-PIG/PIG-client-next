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

export const Wrap = styled.div`
  width: 480px;
  height: 260px;
  position: absolute;
  top: 210px;
  left: 340px;
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

export const Tag = styled.button`
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
