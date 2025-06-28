// ✅ PaymentPage.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QRAssembly from "./qrtest";
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
  CompletedNote,
} from "../styles/PaymentPageStyle";

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [travelDate, setTravelDate] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const method = params.get("method") || "kakao";
    setPaymentMethod(method);

    const storedDate = localStorage.getItem("travelDate");
    if (storedDate) {
      setTravelDate(new Date(storedDate));
    }

    const items = localStorage.getItem("selectedTravelItems");
    if (items) {
      const selectedItems = JSON.parse(items);
      const subtotal = Object.entries(selectedItems).reduce((sum, [type, item]) => {
        const price = Number(item.price) || 0;
        if (["restaurant", "accommodation"].includes(type)) {
          return sum + price * (item.count || 1);
        }
        return sum + price;
      }, 0);
      const fee = Math.floor(subtotal * 0.05);
      setTotalAmount(subtotal + fee);
    }
  }, [location]);

  const handlePayment = async () => {
    setIsProcessing(true);

    setTimeout(async () => {
      setIsProcessing(false);
      setIsCompleted(true);

      const qrCode = `UISEONG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("travelQR", qrCode);

      try {
        const res = await fetch("http://192.168.0.48:8000/api/qr/");
        if (res.ok) {
          const data = await res.json();
          if (data && data.qr_code) {
            localStorage.setItem("travelQRImage", data.qr_code);
          }
        }
      } catch (e) {}
    }, 100);
  };

  if (showQR) {
    return <QRAssembly />;
  }

  if (isCompleted && !showQR) {
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
          <CompletedNote>아래 버튼을 눌러 QR을 확인하세요.</CompletedNote>
          <PayButton onClick={() => setShowQR(true)}>
            QR 확인하기
          </PayButton>
        </CompletedCard>
      </CompletedWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>← 뒤로가기</BackButton>
          <Title>결제하기</Title>
        </Header>

        <PaymentCard>
          <CardHeader>
            <CardTitle>💳 {paymentMethod === "kakao" ? "카카오페이" : "토스페이"} 결제</CardTitle>
          </CardHeader>
          <CardContent>
            <PriceDisplay>
              <PriceInfo>
                <span>의성군 여행 패키지</span>
                <span>{totalAmount.toLocaleString()}원</span>
              </PriceInfo>
            </PriceDisplay>

            {travelDate && (
              <div style={{ background: "#f0fdf4", padding: "12px 16px", borderRadius: "8px", fontSize: "14px", color: "#065f46", marginTop: "-8px" }}>
                <p style={{ margin: 0, fontWeight: 500 }}>여행 예정일</p>
                <strong style={{ fontSize: "16px", color: "#047857" }}>{`${travelDate.getFullYear()}년 ${travelDate.getMonth() + 1}월 ${travelDate.getDate()}일`}</strong>
              </div>
            )}

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
              {isProcessing ? <>결제 처리중...</> : <>{totalAmount.toLocaleString()}원 결제하기</>}
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
