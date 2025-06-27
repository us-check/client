import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  Container,
  Header,
  BackButton,
  Title,
  ContentGrid,
  QRCard,
  QRHeader,
  QRTitle,
  QRContent,
  QRDisplay,
  QRCode,
  QRText,
  SaveButton,
  InfoCard,
  InfoHeader,
  InfoTitle,
  InfoContent,
  InfoItem,
  InfoLabel,
  InfoValue,
  Badge,
  TravelCard,
  TravelHeader,
  TravelTitle,
  TravelGrid,
  TravelItem,
  TravelImage,
  TravelInfo,
  TravelName,
  TravelDesc,
  TravelPrice,
  NewTripSection,
  NewTripButton,
} from "../styles/MyReservationsStyle";
import GoogleMapComponent from "./GoogleMapComponent"; // 구글 맵 컴포넌트 임포트

function MyReservations() {
  const [qrCode, setQrCode] = useState("");
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const qr = localStorage.getItem("travelQR");
    const items = localStorage.getItem("selectedTravelItems");

    if (qr) setQrCode(qr);
    if (items) setSelectedItems(JSON.parse(items));
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case "attraction":
        return "📍";
      case "restaurant":
        return "🍽️";
      case "accommodation":
        return "🏨";
      default:
        return "";
    }
  };

  const getTypeName = (type) => {
    switch (type) {
      case "attraction":
        return "관광지";
      case "restaurant":
        return "음식점";
      case "accommodation":
        return "숙박시설";
      default:
        return "";
    }
  };

  const getTotalPrice = () => {
    const subtotal = Object.values(selectedItems).reduce(
      (sum, item) => sum + item.price,
      0
    );
    const fee = Math.floor(subtotal * 0.05);
    return subtotal + fee;
  };

  return (
    <PageWrapper>
      <Container>
        <Header>
          <BackButton onClick={() => navigate("/")}>← 홈으로</BackButton>
          <Title>👤 마이페이지</Title>
        </Header>

        <ContentGrid>
          <QRCard>
            <QRHeader>
              <QRTitle>🎫 여행 QR 코드</QRTitle>
            </QRHeader>
            <QRContent>
              <QRDisplay>
                <QRCode>🎫</QRCode>
                <div>{qrCode || "QR-CODE-NOT-FOUND"}</div>
              </QRDisplay>
              <QRText>이 QR 코드를 각 여행지에서 제시해주세요</QRText>
              <SaveButton>QR 코드 저장하기</SaveButton>
            </QRContent>
          </QRCard>

          <InfoCard>
            <InfoHeader>
              <InfoTitle>📅 나의 여행 정보</InfoTitle>
            </InfoHeader>
            <InfoContent>
              <InfoItem>
                <InfoLabel>결제 금액</InfoLabel>
                <InfoValue>{getTotalPrice().toLocaleString()}원</InfoValue>
              </InfoItem>

              <InfoItem>
                <InfoLabel>결제 상태</InfoLabel>
                <Badge>결제 완료</Badge>
              </InfoItem>

              <InfoItem>
                <InfoLabel>예약 일시</InfoLabel>
                <InfoValue>{new Date().toLocaleDateString("ko-KR")}</InfoValue>
              </InfoItem>
            </InfoContent>
          </InfoCard>
        </ContentGrid>

        <TravelCard>
          <TravelHeader>
            <TravelTitle>선택된 여행 코스</TravelTitle>
          </TravelHeader>
          {/* 지도+세로코스 레이아웃 */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 32,
              width: "100%",
            }}
          >
            {/* 왼쪽: Google Map */}
            <div style={{ flex: 1, minWidth: 350, maxWidth: 500 }}>
              <GoogleMapComponent
                markers={Object.values(selectedItems).map((item) => ({
                  id: item.id || item.name,
                  name: item.name,
                  position: item.position || { lat: 0, lng: 0 },
                }))}
                showRoute={true}
              />
            </div>
            {/* 오른쪽: 세로 여행 코스 */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {Object.entries(selectedItems).map(([type, item], idx) => (
                  <TravelItem
                    key={type}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TravelImage>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                      />
                    </TravelImage>
                    <TravelInfo>
                      <div>
                        {getTypeIcon(type)} {getTypeName(type)} #{idx + 1}
                      </div>
                      <TravelName>{item.name}</TravelName>
                      <TravelDesc>{item.description}</TravelDesc>
                      <TravelPrice>
                        {/* 인원수 반영 가격 표시 */}
                        {["restaurant", "accommodation"].includes(type) &&
                        item.count > 1
                          ? `${(
                              item.price * item.count
                            ).toLocaleString()}원 (${item.price.toLocaleString()}원 × ${
                              item.count
                            }명)`
                          : item.price === 0
                          ? "무료"
                          : `${item.price.toLocaleString()}원`}
                      </TravelPrice>
                    </TravelInfo>
                  </TravelItem>
                ))}
              </div>
            </div>
          </div>
        </TravelCard>

        <NewTripSection>
          <NewTripButton onClick={() => navigate("/")}>
            새로운 여행 계획하기
          </NewTripButton>
        </NewTripSection>
      </Container>
    </PageWrapper>
  );
}

export default MyReservations;
