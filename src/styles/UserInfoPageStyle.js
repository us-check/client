import styled from "styled-components";

/* export const Container = styled.div`
  min-height: 100vh;
  background-color: #fff;
  font-family: "Pretendard", sans-serif;
  padding: 40px 20px;
  box-sizing: border-box;
  position: relative;
`; */

export const StorePageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #f3ffff 27%,
    #e9feff 71%,
    #c6fdff 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;

export const StoreHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackIcon = styled.img`
  position: absolute;
  top: 23px;
  left: 23px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 10;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StoreLogoGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const StoreLogoImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 8px;
`;

export const StoreLogoText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #333;
`;

export const StoreMenuIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoImage = styled.img`
  width: 51px;
  height: 62px;
  object-fit: cover;
`;

export const LogoText = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #484848;
  line-height: 33px;
  -webkit-text-stroke: 1px #484848;
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  margin-top: 70px;
  width: 443px;
  height: 600px;
  border-radius: 1.25rem;
  border: 1px solid #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  box-sizing: border-box;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 24px;
`;

export const InfoSectionTitle = styled.div`
  flex: 1;
  font-size: 17px;
  color: #333;
  font-weight: 400;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-left: 50px;
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #b0b0b0;
  margin: 4px auto 12px;
  border-radius: 1px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const InfoIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const InfoText = styled.span`
  flex: 1;
  font-size: 16px;
  color: #333;
  font-weight: 400;
`;

export const LogoutButton = styled.div`
  width: 218px;
  height: 53px;
  border-radius: 12px;
  background-color: #009499;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin-top: 70px;
`;

export const LogoutText = styled.div`
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

export const WithdrawBox = styled.div`
  text-align: center;
  color: #717171;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

export const WithdrawText = styled.div``;

export const WithdrawLine = styled.div`
  width: 44px;
  height: 1px;
  border-top: 1px solid #717171;
  margin-top: 2px;
`;
