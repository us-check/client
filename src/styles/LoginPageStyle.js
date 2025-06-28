import styled from 'styled-components';

export const Container = styled.div`
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

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  width: 100%;
  max-width: 420px;
  padding: 60px 40px 40px;
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: 250px;
`;

export const StoreHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  top: 23px;
  left: 23px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 10;
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

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0 24px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0 12px;
  white-space: nowrap;
`;

export const Divider = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid #ddd;
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