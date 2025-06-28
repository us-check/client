import { useNavigate } from 'react-router-dom';
import {
    Container,
    UserName,
    ProfileImage,
    InfoCard,
    InfoWrapper,
    InfoBox,
    InfoTitle,
    InfoContent,
    MailIcon,
    CheckIcon,
    ArrowIcon,
    IDIcon,
    Line,
    LogoBox,
    LogoImage,
    LogoText,
    BorderBox,
    LogoutButton,
    LogoutText,
    WithdrawBox,
    WithdrawText,
    WithdrawLine,
    BackIcon
} from '../styles/UserInfoPageStyle';

const UserInfoPage = () => {
    const navigate = useNavigate(); // 훅 호출

    const handleGoHome = () => {
        navigate('/'); // 홈으로 이동
    };

    return (
        <Container>
            <BackIcon src="뒤로가는화살표.svg" alt="뒤로가기" onClick={handleGoHome} style={{ cursor: 'pointer' }} />

            <ProfileImage src="프로필.svg" alt="프로필" />
            <UserName>홍길동</UserName>

            <InfoWrapper>
                <InfoCard>
                    <InfoBox>
                        <InfoTitle>내 정보</InfoTitle>
                    </InfoBox>
                    <InfoContent>홍길동</InfoContent>
                    <InfoContent>kkas123@gmail.com</InfoContent>
                    <InfoContent>내 예약</InfoContent>
                    <MailIcon src="메일-아이콘.svg" alt="메일" />
                    <CheckIcon src="내예약-아이콘.svg" alt="예약 아이콘" />
                    <ArrowIcon src="오른화살표.svg" alt="화살표" />
                </InfoCard>
                <IDIcon src="아이디-아이콘.svg" alt="아이디 아이콘" />
                <Line />
            </InfoWrapper>

            <BorderBox />
            <LogoutButton>
                <LogoutText>로그아웃</LogoutText>
            </LogoutButton>

            <WithdrawBox>
                <WithdrawText>탈퇴하기</WithdrawText>
                <WithdrawLine />
            </WithdrawBox>

            <LogoBox>
                <LogoImage src="로고마늘.svg" alt="로고" />
                <LogoText>Us:Check</LogoText>
            </LogoBox>
        </Container>
    );
};

export default UserInfoPage;