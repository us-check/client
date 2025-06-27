import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 1080px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  text-align: left;
  font-size: 32px;
  color: #000;
  font-family: 'Pretendard', sans-serif;
`;

export const UserName = styled.div`
  position: absolute;
  top: 367.82px;
  left: 913px;
  font-weight: 600;
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 203px;
  left: 878px;
  width: 151.8px;
  height: 151.8px;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 484px;
  left: calc(50% - 222px);
  width: 443px;
  height: 301px;
  font-size: 22px;
`;

export const InfoCard = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 221.5px);
  box-shadow: 0 0.5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid #fff;
  width: 443px;
  height: 301px;
  overflow: hidden;
`;

export const InfoBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 510px;
  height: 76px;
  padding: 16px 26px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const InfoTitle = styled.div`
  flex: 1;
  font-weight: 600;
  line-height: 15px;
`;

export const InfoContent = styled.div`
  position: absolute;
  left: 0;
  width: 510px;
  height: 76px;
  display: flex;
  align-items: center;
  padding: 16px 75px;
  font-weight: 500;
  line-height: 15px;
  box-sizing: border-box;

  &:nth-child(2) { top: 75px; }
  &:nth-child(3) { top: 150px; }
  &:nth-child(4) { top: 225px; }
`;

export const MailIcon = styled.img`
  position: absolute;
  top: 173px;
  left: 20px;
  width: 29px;
  height: 29px;
`;

export const CheckIcon = styled.img`
  position: absolute;
  top: 248px;
  left: 20px;
  width: 29px;
  height: 29px;
`;

export const ArrowIcon = styled.img`
  position: absolute;
  top: 248px;
  left: 391px;
  width: 29px;
  height: 29px;
`;

export const IDIcon = styled.img`
  position: absolute;
  top: 97px;
  left: 20px;
  width: 30px;
  height: 31px;
`;

export const Line = styled.div`
  position: absolute;
  top: 74.5px;
  left: 16.87px;
  border-top: 1px solid #e2e2e2;
  width: 404px;
  height: 1px;
`;

export const BorderBox = styled.div`
  position: absolute;
  top: 151px;
  left: 738px;
  width: 443px;
  height: 306px;
  border-radius: 8px;
  border: 1px solid #fff;
  box-sizing: border-box;
  filter: drop-shadow(0 0.5px 3px rgba(0, 0, 0, 0.2));
`;

export const LogoutButton = styled.div`
  position: absolute;
  top: 886px;
  left: 848px;
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
`;

export const LogoutText = styled.div`
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

export const WithdrawBox = styled.div`
  position: absolute;
  top: 952px;
  left: 934px;
  width: 46px;
  height: 24px;
  font-size: 13px;
  color: #717171;
`;

export const WithdrawText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

export const WithdrawLine = styled.div`
  position: absolute;
  top: 21.5px;
  left: 0.5px;
  width: 44px;
  height: 1px;
  border-top: 1px solid #717171;
`;

export const LogoBox = styled.div`
  position: absolute;
  top: 62px;
  left: 738px;
  width: 229px;
  height: 62px;
  font-size: 36px;
  color: #484848;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 51px;
  height: 62px;
  object-fit: cover;
`;

export const LogoText = styled.div`
  position: absolute;
  top: 20px;
  left: 64px;
  font-weight: 500;
  line-height: 22px;
  -webkit-text-stroke: 1px #484848;
`;

export const BackIcon = styled.img`
  position: absolute;
  top: 23px;
  left: 23px;
  width: 37px;
  height: 37px;
`;