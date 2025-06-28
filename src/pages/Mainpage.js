import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainpageModal from '../components/MainpageModal';
import {
  FrameWrapper,
  Header,
  LogoGroup,
  LogoImage,
  LogoText,
  MenuIcon,
  MainContent,
  TitleText,
  SearchBox,
  SearchInnerBox,
  GarlicIcon,
  SearchInput,
  SearchIcon,
  FooterContainer,
  FooterTextWrapper,
  FooterText,
} from "../styles/MainpageStyle";

function Mainpage() {
  const [searchText, setSearchText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchText.trim()) return;

    localStorage.setItem("searchText", searchText);

    // API에 POST 요청
    try {
      const res = await fetch("http://192.168.0.48/api/query/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchText }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("pachinkoData", JSON.stringify(data));
      }
    } catch (e) {
      console.error(e);
    }

    navigate("/loading");
    setTimeout(() => {
      navigate("/pachinko");
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleLoginClick = () => {
    console.log('로그인 클릭');
    setIsMenuOpen(false);
    navigate('/login');
  };

  const handleLogoutClick = () => {
    console.log('로그아웃 클릭');
    setIsMenuOpen(false);
    setIsLoggedIn(false); // 수정 필요 
  };

  const handleLangClick = () => {
    alert('준비중입니다.');
    setIsMenuOpen(false);
  };

  const handleMyPageClick = () => {
    console.log('내 정보 클릭');
    setIsMenuOpen(false);
    navigate('/mypage');
  };

  const handleStoreRegisterClick = () => {
    console.log('가게 등록 클릭');
    setIsMenuOpen(false);
    navigate('/addstore');
  };


  return (
    <FrameWrapper>
      <Header>
        <LogoGroup>
          <LogoImage src="로고마늘.svg" alt="로고마늘" />
          <LogoText>의성:Check</LogoText>
        </LogoGroup>
        <MenuIcon src="menu.svg" alt="메뉴" onClick={() => setIsMenuOpen(true)} />
      </Header>

      <MainContent>
        <TitleText>어떤 여행을 원하시나요?</TitleText>

        <SearchBox>
          <SearchInnerBox>
            <GarlicIcon src="그라디언트마늘 1.svg" alt="마늘" />
            <SearchInput
              type="text"
              placeholder="AI가 맞춤 코스를 추천해드려요."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
              color="#b5b5b5"
            />
            <button
              type="button"
              onClick={handleSearch}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon
                src={searchText.trim() ? "/검정돋보기.svg" : "/돋보기.svg"}
                alt="돋보기"
              />
            </button>
          </SearchInnerBox>
        </SearchBox>
      </MainContent>

      <FooterContainer>
        <FooterTextWrapper>
          <FooterText>2025, in 의성 Us:Code 해커톤</FooterText>
          <FooterText>Us:Code Hackathon 2025, Uiseong</FooterText>
        </FooterTextWrapper>
      </FooterContainer>

      {/* 메뉴 모달 */}
      {isMenuOpen && (
        <MainpageModal
          isLoggedIn={isLoggedIn}
          onClose={() => setIsMenuOpen(false)}
          onLoginClick={handleLoginClick}
          onLogoutClick={handleLogoutClick}
          onLangClick={handleLangClick}
          onMyPageClick={handleMyPageClick}
          onStoreRegisterClick={handleStoreRegisterClick}
        />
      )}


    </FrameWrapper>
  );
}

export default Mainpage;
