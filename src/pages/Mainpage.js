import React, { useState } from 'react';
import {
  FrameWrapper,
  TopBar,
  LogoSection,
  LogoImage,
  LogoText,
  MenuIcon,
  SearchBarContainer,
  GarlicIcon,
  SearchInputWrapper,
  SearchIcon,
  SearchInput
} from '../style/MainpageStyle';

function Mainpage() {
  const [searchText, setSearchText] = useState('');

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
          />
          <SearchIcon src="돋보기.svg" alt="돋보기" />
        </SearchInputWrapper>
      </TopBar>

      <LogoSection>
        <LogoImage src="로고마늘.svg" alt="로고마늘" />
        <LogoText>의성체크</LogoText>
        <MenuIcon src="menu.svg" alt="메뉴" />
      </LogoSection>
    </FrameWrapper>
  );
}

export default Mainpage;