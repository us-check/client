import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  height: 1053px;
  overflow: hidden;
  text-align: center;
  font-size: 15px;
  color: #888;
  font-family: 'Pretendard', sans-serif;
`;

export const Footer = styled.div`
  position: absolute;
  top: 995px;
  left: 50%;
  transform: translateX(-50%);
  width: 876.8px;
  height: calc(100% - 1031.2px);
`;

export const InUscodeContainer = styled.div`
  position: absolute;
  top: -20.89px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 20.8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 775.1px;
  height: 44.8px;
`;

export const InUscodeTextWrapper = styled.span`
  width: 100%;
`;

export const InUscodeText = styled.p`
  margin: 0;
`;

export const Card = styled.div`
  position: absolute;
  top: 332px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  border: 1px solid #b3b3b3;
  box-sizing: border-box;
  width: 599px;
  height: 389px;
  overflow: hidden;
  text-align: left;
  font-size: 22px;
  color: #fff;
`;

export const LoginButtonWrapper = styled.div`
  position: absolute;
  top: 212px;
  left: 74px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000;
  border: 1px solid gray;
  width: 452px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`;

export const LoginText = styled.div`
  line-height: 15px;
  font-weight: 600;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 99px;
  left: 185px;
  width: 229px;
  height: 62px;
  font-size: 36px;
  color: #484848;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 51px;
  height: 62px;
  object-fit: cover;
`;

export const LogoText = styled.div`
  position: absolute;
  top: 20px;
  left: 64px;
  line-height: 22px;
  font-weight: 500;
  -webkit-text-stroke: 1px #484848;
`;

export const BackIcon = styled.img`
  position: absolute;
  top: 23px;
  left: 23px;
  width: 37px;
  height: 37px;
  overflow: hidden;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const GoogleButton = styled(SocialButton)`
  background-color: #ffffff;
  color: #3c1e1e;
  border: 1px solid #e0e0e0;
`;