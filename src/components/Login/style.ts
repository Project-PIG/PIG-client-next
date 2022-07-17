import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormWrapper = styled.div`
  width: 485px;
  height: 682px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  text-align: center;
`;

export const OauthButton = styled.a`
  position: relative;
  width: 25rem;
  height: 4rem;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  cursor: pointer;
  padding: 2rem 1rem;
  box-shadow: 0px 1px 4px rgb(102, 102, 102, 0.3);
  svg {
    height: 2rem;
    width: 2rem;
    margin: 10px;
  }
`;

export const LoginText = styled.div`
  color: #00000080;
  font-size: 1.6rem;
  font-weight: 400;
  word-spacing: 5px;
`;
export const GrassWrapper = styled.div`
  position: absolute;
  bottom: -14px;
  left: -10%;
  width: 120%;
  display: flex;
  justify-content: space-between;
  svg {
    margin: 0;
    width: 10%;
    height: auto;
  }
`;
