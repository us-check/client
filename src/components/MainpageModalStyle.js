// src/styles/MainpageModalStyle.js
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0);    }
`;

const slideOut = keyframes`
  from { transform: translateX(0);    }
  to   { transform: translateX(100%); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;                    /* top/right/bottom/left: 0 */
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 480px;
  height: 100vh;
  background: #f4f4f4;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
  box-sizing: border-box;
  z-index: 1000;

  /* 모달 열고 닫힐 때 애니메이션 */
  animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s forwards;
`;

export const MenuTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Divider = styled.div`
  border-top: 1px solid #b5b5b5;
  height: 1px;
  margin-bottom: 32px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;
  cursor: pointer;
`;

export const MenuLabel = styled.span`
  line-height: 1;
`;

export const ChevronRightIcon = styled.img`
  width: 20px;
  height: 20px;
`;
