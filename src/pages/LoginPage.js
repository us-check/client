import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import MainpageModal from "../components/MainpageModal"; // ✅ 모달 컴포넌트 import
import {
  Container,
  StoreHeader,
  StoreLogoGroup,
  StoreLogoImage,
  StoreLogoText,
  StoreMenuIcon,
  Footer,
  InUscodeContainer,
  InUscodeTextWrapper,
  InUscodeText,
  Card,
  LoginButtonWrapper,
  SubtitleContainer,
  Subtitle,
  Divider,
  LogoWrapper,
  LogoImage,
  LogoText,
  BackIcon,
} from '../styles/LoginPageStyle';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // ✅ 메뉴 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부

  const handleLogin = async () => {
    try {
      window.location.href = ``;

      const response = await axios.get(
        '',
        { withCredentials: true }
      );

      if (response.data) {
        if (response.data === true) {
          window.location.href = '/new-user-page';
        } else {
          // 로그인 성공 후 처리
        }
      }
    } catch (error) {
      console.error('Error during login process:', error);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <StoreHeader>
        <BackIcon
          src={process.env.PUBLIC_URL + "/뒤로가는화살표.svg"}
          alt="뒤로가기"
          onClick={handleGoHome}
        />
        <StoreLogoGroup>
          <StoreLogoImage
            src={process.env.PUBLIC_URL + "/로고마늘.svg"}
            alt="로고"
          />
          <StoreLogoText>의성:Check</StoreLogoText>
        </StoreLogoGroup>
        <StoreMenuIcon
          src={process.env.PUBLIC_URL + "/menu.svg"}
          alt="메뉴"
          onClick={() => setIsOpen(true)}
        />
      </StoreHeader>

      <Card>
        <LogoWrapper>
          <LogoImage src="로고마늘.svg" alt="로고마늘" />
          <LogoText>의성:Check</LogoText>
        </LogoWrapper>

        <SubtitleContainer>
          <Divider />
          <Subtitle>로그인/회원가입</Subtitle>
          <Divider />
        </SubtitleContainer>

        <LoginButtonWrapper onClick={handleLogin}>
          <FcGoogle />
          구글로 로그인하기
        </LoginButtonWrapper>
      </Card>

      <Footer>
        <InUscodeContainer>
          <InUscodeTextWrapper>
            <InUscodeText>2025, in 의성 Us:Code 해커톤</InUscodeText>
            <InUscodeText>Us:Code Hackathon 2025, Uiseong</InUscodeText>
          </InUscodeTextWrapper>
        </InUscodeContainer>
      </Footer>

      {/* ✅ MainpageModal 조건부 렌더링 */}
      {isOpen && (
        <MainpageModal
          isLoggedIn={isLoggedIn}
          onClose={() => setIsOpen(false)}
          onLoginClick={() => navigate("/login")}
          onLogoutClick={() => setIsLoggedIn(false)}
          onLangClick={() => alert("준비중입니다.")}
          onMyPageClick={() => navigate("/mypage")}
          onStoreRegisterClick={() => navigate("/addstore")}
        />
      )}
    </Container>
  );
};

export default LoginPage;