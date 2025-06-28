import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #fff;
  font-family: 'Pretendard', sans-serif;
  padding: 40px 20px;
  box-sizing: border-box;
  position: relative;
`;

export const BackIcon = styled.img`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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
  margin-top: 20px;
  width: 443px;
  height: 600px;
  border-radius: 8px;
  border: 1px solid #fff;
  box-shadow: 0 0.5px 3px rgba(0, 0, 0, 0.2);
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