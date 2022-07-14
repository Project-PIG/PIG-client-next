import styled from "@emotion/styled";

export const Major = styled.div`
  @font-face {
    font-family: "SUIT-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "SUIT-Medium";
  font-size: 45px;
  font-weight: bold;
  color: #ff644f;
  margin-top: 80px;
  margin-left: 18%;

  svg {
    margin-bottom: 8px;
    margin-right: 12px;
  }
`;
export const Content_wrap = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const Wrap = styled.div`
  @font-face {
    font-family: "MICEGothic Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2")
      format("woff2");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "OTWelcomeBA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeBA.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  width: 230px;
  height: 170px;
  border-radius: 8px;
  box-shadow: 2px 0px 10px #aea4aa;
  margin: 0px 10px;
  position: relative;
`;

export const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: #ffc8c8;
  border-radius: 100px;
  top: -50px;
  margin-left: 28.5%;
  box-shadow: 2px 2px 10px #aea4aa;
`;
export const Name_wrap = styled.div`
  margin-left: 14px;
  margin-top: 40px;
  display: flex;
  h3 {
    margin-left: 4px;
    font-size: 14px;
    color: #7b7b7b;
  }
`;
export const Name = styled.p`
  font-family: "OTWelcomeBA";
  font-size: 17px;
`;
export const Description = styled.p`
  margin-left: 14px;
  margin-top: -18px;
  font-size: 14px;
  color: #9d9d9d;
  font-weight: 600;
`;
export const Bottom_wrap = styled.div`
  display: flex;
  width: 88%;
  padding: 14px;
  justify-content: space-between;
`;
export const Tag = styled.p`
  color: #ff644f;
`;

export const Chat = styled.button`
  border: 1px #ff644f solid;
  border-radius: 4px;
  height: 20px;
  background-color: white;
  color: #ff644f;
  font-size: 12px;
`;
