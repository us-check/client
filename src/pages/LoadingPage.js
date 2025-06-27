import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #fff, #f3ffff, #c6fdff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
`;

function LoadingPage() {
  return (
    <LoadingWrapper>
      🔄 AI가 정보를 분석 중입니다...
    </LoadingWrapper>
  );
}

export default LoadingPage;