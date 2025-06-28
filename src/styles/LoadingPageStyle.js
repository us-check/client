import styled, { keyframes } from 'styled-components';

// 로딩 스피너 애니메이션 정의
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #e0f7fa 0%, #c6fdff 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingSpinner = styled.div`
  width: 80px;
  height: 80px;
  border: 8px solid #b2ebf2;
  border-top: 8px solid #009499;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 32px;
`;

export const LoadingText = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #009499;
  text-align: center;
  margin-bottom: 8px;
`;

export const LoadingSubtext = styled.div`
  font-size: 16px;
  color: #6b7280;
  text-align: center;
`;
