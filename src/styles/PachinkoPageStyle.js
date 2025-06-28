import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Hakgyoansim+Dunggeunmiso+OTF:wght@400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    line-height: normal;
    font-family: 'Hakgyoansim Dunggeunmiso OTF', sans-serif;
  }
`;

const slotRoll = keyframes`
  from { 
    transform: translateY(-100%); 
  }
  to { 
    transform: translateY(0%); 
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #f3ffff 27%,
    #e9feff 71%,
    #c6fdff 100%
  );
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
`;

export const Container = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  padding: 0 16px 32px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #6b7280;
  text-align: center;
  margin-bottom: 32px;
  ${props => props.isAnimated && `
    animation: ${pulse} 2s infinite;
  `}
`;

export const SlotMachineCard = styled.div`
  max-width: 1024px;
  margin: 0 auto 32px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export const SlotMachineContent = styled.div`
  padding: 32px;
`;

export const SlotMachineScreen = styled.div`
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #e5e7eb;
`;

export const ReelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
`;

export const ReelContainer = styled.div`
  position: relative;
`;

export const ReelHeader = styled.div`
  text-align: center;
  margin-bottom: 12px;
`;

export const ReelHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #374151;
  font-weight: 600;
  font-size: 14px;
`;

export const ReelScreen = styled.div`
  background: white;
  border-radius: 12px;
  height: 192px;
  overflow: hidden;
  border: 2px solid #E5E7EB;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinningContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: ${slotRoll} 0.15s linear infinite;
  display: flex;
  flex-direction: column;
`;

export const SpinItem = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f3f4f6;
  background: white;
  text-align: center;
  
  div:first-child {
    font-size: 48px;
    margin-bottom: 4px;
  }
  
  div:last-child {
    font-size: 12px;
    font-weight: 500;
    color: #374151;
  }
`;

export const ResultContent = styled.div`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ResultEmoji = styled.div`
  font-size: 64px;
  margin-bottom: 8px;
`;

export const ResultTitle = styled.h3`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  color: #1f2937;
`;

export const ResultDescription = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
`;

export const ResultBadge = styled.span`
  font-size: 12px;
  background: #ecfeff;
  color: #0e7490;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #a5f3fc;
`;

export const WaitingContent = styled.div`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  div {
    font-size: 64px;
    margin-bottom: 8px;
    color: #d1d5db;
    animation: ${pulse} 2s infinite;
  }
  
  p {
    font-size: 14px;
    color: #6b7280;
  }
`;

export const ReelControls = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

export const SpinButton = styled.button`
  flex: 1;
  background: #009499;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background: #00797e;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const MoreButton = styled.button`
  background: transparent;
  color: #0891b2;
  border: 1px solid #009499;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background: #ecfeff;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const MainSpinButton = styled.button`
  background: linear-gradient(135deg, #009499 0%, #007c81 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  display: block;
  margin: 0 auto;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #007c81 0%, #006669 100%);
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const PriceSection = styled.div`
  background: linear-gradient(135deg, #009499 0%, #007c81 100%);
  border-radius: 12px;
  padding: 24px;
  color: white;
`;

export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  text-align: center;
  margin-bottom: 24px;
`;

export const PriceItem = styled.div``;

export const PriceLabel = styled.p`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 4px;
`;

export const PriceValue = styled.p`
  font-size: ${props => props.$isTotal ? '32px' : '18px'};
  font-weight: bold;
`;

export const DecisionButton = styled.button`
  width: 100%;
  background: white;
  color: #0891b2;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background: #f9fafb;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const BottomInfo = styled.div`
  text-align: center;
  color: #6b7280;
  font-size: 14px;
`;

// 모달 스타일
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 1024px;
  max-height: 80vh;
  width: 90%;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  padding: 24px;
`;

export const ModalHeader = styled.div`
  margin-bottom: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

export const OptionCard = styled.div`
  cursor: pointer;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #a5f3fc;
  }
`;

export const OptionImage = styled.div`
  width: 80px;
  height: 80px;
  background: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const OptionInfo = styled.div`
  flex: 1;
  margin-left: 16px;
`;

export const OptionEmoji = styled.span`
  font-size: 32px;
  margin-right: 8px;
`;

export const OptionName = styled.h3`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
`;

export const OptionDesc = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 12px;
`;

export const OptionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionBadge = styled.span`
  background: #ecfeff;
  color: #0e7490;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #a5f3fc;
`;

export const SelectButton = styled.button`
  background: #06b6d4;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #0891b2;
  }
`;