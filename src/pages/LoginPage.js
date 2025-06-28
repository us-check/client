import React from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import {
    Container,
    Footer,
    InUscodeContainer,
    InUscodeTextWrapper,
    InUscodeText,
    Card,
    LoginButtonWrapper,
    LoginText,
    LogoWrapper,
    LogoImage,
    LogoText,
    BackIcon,
    GoogleButton,
} from '../styles/LoginPageStyle';

const LoginPage = () => {
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
                    // 로그인 성공 후 처리 (예: 상태 업데이트)
                }
            }
        } catch (error) {
            console.error('Error during login process:', error);
        }
    };

    return (
        <Container>
            <BackIcon src="뒤로가는화살표.svg" alt="뒤로가기" />
            <Card>
                <LogoWrapper>
                    <LogoImage src="로고마늘.svg" alt="로고마늘" />
                    <LogoText>의성:Check</LogoText>
                </LogoWrapper>
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
        </Container>

    );
};

export default LoginPage;