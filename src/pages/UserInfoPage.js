import { useNavigate } from "react-router-dom";
import {
  Container,
  BackIcon,
  ContentWrapper,
  LogoBox,
  LogoImage,
  LogoText,
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
} from "../styles/UserInfoPageStyle";

const UserInfoPage = () => {
    const navigate = useNavigate(); // 훅 호출

    const handleGoHome = () => {
        navigate('/'); // 홈으로 이동
    };

  return (
    <Container>
      <BackIcon
        src="뒤로가는화살표.svg"
        alt="뒤로가기"
        onClick={handleGoHome}
      />

      <ContentWrapper>
        <LogoBox>
          <LogoImage src="로고마늘.svg" alt="로고" />
          <LogoText>의성:Check</LogoText>
        </LogoBox>

        <InfoCard>
          <ProfileImage src="프로필.svg" alt="프로필" />
          <UserName>홍길동</UserName>

          <InfoSectionTitle>내 정보</InfoSectionTitle>
          <Divider />

          <InfoRow>
            <InfoIcon src="아이디-아이콘.svg" alt="아이디" />
            <InfoText>홍길동</InfoText>
          </InfoRow>

          <InfoRow>
            <InfoIcon src="메일-아이콘.svg" alt="이메일" />
            <InfoText>kkas123@gmail.com</InfoText>
          </InfoRow>

          <InfoRow>
            <InfoIcon src="내예약-아이콘.svg" alt="예약" />
            <InfoText>내 예약</InfoText>
            <img
              src="오른화살표.svg"
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
    </Container>
  );
};

export default UserInfoPage;
