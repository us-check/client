import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ResultWrapper,
  Title,
  ResultText,
  BackButton
} from '../styles/ResultPageStyle';

function ResultPage() {
  const navigate = useNavigate();
  const searchText = localStorage.getItem('searchText') || '';

  return (
    <ResultWrapper>
      <Title>🔍 검색 결과</Title>
      <ResultText>
        '{searchText}'에 대한 AI 맞춤형 추천 결과입니다!
      </ResultText>
      <BackButton
        onClick={() => {
          localStorage.removeItem('searchText');
          navigate('/');
        }}
      >
        다시 검색하기
      </BackButton>
    </ResultWrapper>
  );
}

export default ResultPage;