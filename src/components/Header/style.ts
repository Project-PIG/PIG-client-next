import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 15vw;
  z-index: 100;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ProfileWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 70%;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.section``;
