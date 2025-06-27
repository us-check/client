import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FrameWrapper,
  TopBar,
  LogoSection,
  LogoImage,
  LogoText,
  MenuIcon,
  GarlicIcon,
  SearchInputWrapper,
  SearchIcon,
  SearchInput
} from '../styles/MainpageStyle';

function Mainpage() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchText.trim()) return;

    // 검색어를 저장하거나 상태관리 라이브러리 사용 가능
    localStorage.setItem('searchText', searchText);

    // 로딩 페이지로 이동
    navigate('/loading');

    // 결과 페이지로 일정 시간 후 이동
    setTimeout(() => {
      navigate('/pachinko');
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <FrameWrapper>
      <TopBar>
        <GarlicIcon src="그라디언트마늘 1.svg" alt="마늘" />
        <SearchInputWrapper>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <SearchIcon
            src="돋보기.svg"
            alt="돋보기"
            onClick={handleSearch}
            style={{ cursor: 'pointer' }}
          />
        </SearchInputWrapper>
      </TopBar>

      <LogoSection>
        <LogoImage src="로고마늘.svg" alt="로고마늘" />
        <LogoText>의성:Check</LogoText>
        <MenuIcon src="menu.svg" alt="메뉴" />
      </LogoSection>
    </FrameWrapper>
  );
}

export default Mainpage;