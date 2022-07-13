import styled from "@emotion/styled";

type ViewAllType = {
  Expans: boolean;
};

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff1ef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div<ViewAllType>`
  position: relative;
  width: 27.938rem;
  height: ${(e) => (e.Expans ? "38.875rem" : "21.378rem")};
  padding: 0 2rem;
  transition: 0.5s;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

export const ProfileImg = styled.img`
  position: absolute;
  left: 50%;
  top: -5rem;
  transform: translateX(-50%);
  width: 10rem;
  height: 10rem;
  background: #000;
  border-radius: 50%;
`;

export const Informs = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  gap: 7px;
  h2 {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
  }
  p {
    font-weight: 600;
    font-size: 13px;
    color: #616161;
  }
`;

export const AboutMe = styled.textarea<ViewAllType>`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: #808080;
  width: 100%;
  height: ${(e) => (e.Expans ? "7.75rem" : "4.373rem")};
  border: none;
  resize: none;
  :focus {
    outline: none;
  }
  ${(e) =>
    e.Expans ? "background: #e8e8e8; border-radius: 5px;padding: 1rem;" : ""};
  transition: 0.5s;
`;

export const MyMajor = styled.div`
  color: #ff644f;
  font-weight: 600;
  font-size: 24px;
`;

export const Btn = styled.button`
  width: 75.8px;
  height: 38.87px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 15px;
  background: #ffffff;
  color: #ff644f;
  outline: none;
  border: 1px solid #ff644f;
  position: relative;
  overflow: hidden;
  transition: 0.2s cubic-bezier(0.23, 0.56, 0.68, 0.38);

  :hover {
    :after {
      top: -30%;
      z-index: -100;
      clip-path: polygon(0 19%, 50% 0, 100% 19%, 100% 100%, 0% 100%);
    }
    z-index: 100;
  }
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 140%;
    position: absolute;
    top: 100%;
    left: 0;
    background: rgba(255, 100, 79, 0.2);
    transition: 0.2s cubic-bezier(0.23, 0.56, 0.68, 0.38);
    clip-path: polygon(0 38%, 50% 0, 100% 38%, 100% 100%, 0% 100%);
  }
`;

export const FixWrapper = styled.div<ViewAllType>`
  display: flex;
  justify-content: ${(e) => (e.Expans ? "flex-start" : "space-between")};
  gap: 10px;
  align-items: center;
  margin-top: 1.5rem;
  transition: 0.5s;
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

type MajorType = {
  state: boolean;
};

export const MajorBtn = styled.button<MajorType>`
  width: auto;
  height: 33px;
  padding: 0 18px;
  border-radius: 5px;
  background: ${(e) => (e.state ? "#ff644f" : "#131313")};
  color: #ffffff;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  transition: 0.2s;
`;
export const InformMaxMajor = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  color: #808080;
  animation: animate 1.5s;
  @keyframes animate {
    0% {
      opacity: calc(0);
    }
    50% {
      opacity: calc(0);
    }
    100% {
      opacity: calc(1);
    }
  }
`;

export const CheckBtnWrapper = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: center;
  gap: 15px;
  animation: animate 2s;
  @keyframes animate {
    0% {
      opacity: calc(0);
    }
    50% {
      opacity: calc(0);
    }
    100% {
      opacity: calc(1);
    }
  }
`;
