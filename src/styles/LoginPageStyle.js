import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background: #fdfdfd;
  width: 100%;
  max-width: 420px;
  padding: 60px 40px 40px;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-right: 12px;
`;

export const LogoText = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #484848;
  -webkit-text-stroke: 0.5px #484848;
`;

export const LoginButtonWrapper = styled.button`
  width: 100%;
  padding: 12px 16px;
  background-color: #ffffff;
  border: 1px solid #dadce0;
  color: #3c4043;
  font-size: 16px;
  font-weight: 500;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3), 0 4px 8px rgba(60, 64, 67, 0.15);
  }

  .google-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  .google-text {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const BackIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;


export const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 13px;
  color: #999;
  z-index: 0;
`;

export const InUscodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InUscodeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InUscodeText = styled.p`
  margin: 0;
  line-height: 1.4;
`;