import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainpageModal from "../components/MainpageModal"; // ✅ 모달 컴포넌트 import

import {
  BackIcon,
  ContentWrapper,
  StoreHeader,
  StorePageWrapper,
  StoreLogoGroup,
  StoreLogoImage,
  StoreLogoText,
  InfoCard,
  ProfileImage,
  UserName,
  InfoSectionTitle,
  Divider,
  InfoRow,
  InfoIcon,
  InfoText,
  LogoutButton,
  LogoutText,
  WithdrawBox,
  WithdrawText,
  WithdrawLine,
  StoreMenuIcon,
} from "../styles/UserInfoPageStyle";

const UserInfoPage = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  return (
    <StorePageWrapper>
      <StoreHeader>
        <BackIcon
          src={process.env.PUBLIC_URL + "/뒤로가는화살표.svg"}
          alt="뒤로가기"
          onClick={() => navigate("/")}
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

      <ContentWrapper>
        <InfoCard>
          <ProfileImage src="/프로필.svg" alt="프로필" />
          <UserName>홍길동</UserName>

          <InfoSectionTitle>내 정보</InfoSectionTitle>
          <Divider />

          <InfoRow>
            <InfoIcon src="/아이디-아이콘.svg" alt="아이디" />
            <InfoText>홍길동</InfoText>
          </InfoRow>

          <InfoRow>
            <InfoIcon src="/메일-아이콘.svg" alt="이메일" />
            <InfoText>kkas123@gmail.com</InfoText>
          </InfoRow>

          <InfoRow>
            <InfoIcon src="/내예약-아이콘.svg" alt="예약" />
            <InfoText>내 예약</InfoText>
            <img
              src="/오른화살표.svg"
              alt="화살표"
              width="20"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/myreservation")}
            />
          </InfoRow>

          <LogoutButton>
            <LogoutText>로그아웃</LogoutText>
          </LogoutButton>

          <WithdrawBox>
            <WithdrawText>탈퇴하기</WithdrawText>
            <WithdrawLine />
          </WithdrawBox>
        </InfoCard>
      </ContentWrapper>

      {/* ✅ 메뉴 모달 열림 */}
      {isOpen && (
        <MainpageModal
          isLoggedIn={isLoggedIn}
          onClose={() => setIsOpen(false)}
          onLoginClick={() => navigate("/login")}
          onLogoutClick={() => setIsLoggedIn(false)}
          onLangClick={() => alert("준비중입니다.")}
          onMyPageClick={() => navigate("/userinfo")}
          onStoreRegisterClick={() => navigate("/addstore")}
        />
      )}
    </StorePageWrapper>
  );
};

export default UserInfoPage;