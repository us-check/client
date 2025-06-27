import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  PageWrapper,
  Container,
  Header,
  BackButton,
  Title,
  PaymentCard,
  CardHeader,
  CardTitle,
  CardContent,
  PriceDisplay,
  PriceInfo,
  FormSection,
  FormGroup,
  Label,
  Input,
  PayButton,
  InfoText,
  CompletedWrapper,
  CompletedCard,
  CheckIcon,
  CompletedTitle,
  CompletedMessage,
  CompletedPrice,
  CompletedNote
} from '../styles/PaymentPageStyle';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const method = params.get('method') || 'kakao';
    setPaymentMethod(method);

    const items = localStorage.getItem('selectedTravelItems');
    if (items) {
      const selectedItems = JSON.parse(items);
      const subtotal = Object.values(selectedItems).reduce((sum, item) => sum + item.price, 0);
      const fee = Math.floor(subtotal * 0.05);
      setTotalAmount(subtotal + fee);
    }
  }, [location]);

  const handlePayment = async () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);

      const qrCode = `UISEONG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('travelQR', qrCode);

      setTimeout(() => {
        navigate('/mypage');
      }, 3000);
    }, 3000);
  };

  if (isCompleted) {
    return (
      <CompletedWrapper>
        <CompletedCard>
          <CheckIcon>✅</CheckIcon>
          <CompletedTitle>결제 완료!</CompletedTitle>
          <CompletedMessage>의성군 여행 패키지 결제가 완료되었습니다.</CompletedMessage>
          <CompletedPrice>
            <p>결제 금액</p>
            <p>{totalAmount.toLocaleString()}원</p>
          </CompletedPrice>
          <CompletedNote>잠시 후 마이페이지로 이동합니다...</CompletedNote>
        </CompletedCard>
      </CompletedWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            ← 뒤로가기
          </BackButton>
          <Title>결제하기</Title>
        </Header>

        <PaymentCard>
          <CardHeader>
            <CardTitle>
              💳 {paymentMethod === 'kakao' ? '카카오페이' : '토스페이'} 결제
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PriceDisplay>
              <PriceInfo>
                <span>의성군 여행 패키지</span>
                <span>{totalAmount.toLocaleString()}원</span>
              </PriceInfo>
            </PriceDisplay>

            <FormSection>
              <FormGroup>
                <Label>결제자 이름</Label>
                <Input placeholder="홍길동" />
              </FormGroup>

              <FormGroup>
                <Label>휴대폰 번호</Label>
                <Input placeholder="010-1234-5678" />
              </FormGroup>

              <FormGroup>
                <Label>이메일</Label>
                <Input type="email" placeholder="example@email.com" />
              </FormGroup>
            </FormSection>

            <PayButton onClick={handlePayment} disabled={isProcessing}>
              {isProcessing ? (
                <>⏳ 결제 처리중...</>
              ) : (
                <>💳 {totalAmount.toLocaleString()}원 결제하기</>
              )}
            </PayButton>
          </CardContent>
        </PaymentCard>

        <InfoText>
          <p>결제 완료 후 QR 코드가 발급됩니다.</p>
          <p>QR 코드로 모든 여행지에서 이용하실 수 있습니다.</p>
        </InfoText>
      </Container>
    </PageWrapper>
  );
}

export default PaymentPage;