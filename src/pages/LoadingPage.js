import React from 'react';
import '../styles/LoadingPage.css';

function LoadingPage() {
  return (
    <div className="loading-wrapper">
      <div className="loading-spinner" />
      <div className="loading-text">AI가 맞춤 여행 코스를 분석 중입니다...</div>
      <div className="loading-subtext">잠시만 기다려주세요!</div>
    </div>
  );
}

export default LoadingPage;