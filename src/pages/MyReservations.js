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
  TravelItem,
  TravelImage,
  TravelInfo,
  TravelName,
  TravelDesc,
  TravelPrice,
  NewTripSection,
  NewTripButton,
  ViewOnMapButton,
  TravelBadge,
} from "../styles/MyReservationsStyle";
import NaverMapComponent from "./NaverMapComponent";

function MyReservations() {
  const [qrCode, setQrCode] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [selectedItems, setSelectedItems] = useState({});
  const [travelDate, setTravelDate] = useState(null);
  const [focusMarkerId, setFocusMarkerId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const items = localStorage.getItem("selectedTravelItems");
    const date = localStorage.getItem("travelDate");
    const qrImg = localStorage.getItem("travelQRImage");
    // travelQR 또는 qr 둘 다 체크
    const qr = localStorage.getItem("travelQR") || localStorage.getItem("qr");

    if (qr) setQrCode(qr);
    if (items) setSelectedItems(JSON.parse(items));
    if (date) setTravelDate(new Date(date));
    if (qrImg) setQrImage(qrImg);
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
      (sum, item) => sum + (Number(item.price) || 0) * (item.count || 1),
      0
    );
    const fee = Math.floor(subtotal * 0.05);
    return subtotal + fee;
  };

  const handleSaveQR = () => {
    window.alert("저장되었습니다");
  };

  return (
    <PageWrapper>
      <Container>
        <Header>
          <BackButton onClick={() => navigate("/")}>
            <img
              src="/뒤로가는화살표.svg"
              alt="뒤로가기"
              style={{ width: "32px", height: "32px" }}
            />
          </BackButton>

          <Title>🧾 예매내역</Title>
        </Header>

        <ContentGrid>
          <QRCard>
            <QRHeader>
              <QRTitle>🎫 여행 QR 코드</QRTitle>
            </QRHeader>
            <QRContent>
              <QRDisplay>
                {qrImage ? (
                  <img
                    src={qrImage}
                    alt="여행 QR 코드"
                    style={{ width: 260, height: 260 }}
                  />
                ) : (
                  <QRCode>🎫</QRCode>
                )}
                <div>{qrImage ? null : qrCode || "QR-CODE-NOT-FOUND"}</div>
              </QRDisplay>
              <QRText>이 QR 코드를 각 여행지에서 제시해주세요</QRText>
              <SaveButton onClick={handleSaveQR}>QR 코드 저장하기</SaveButton>
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

              {travelDate && (
                <InfoItem style={{ background: "#fef9c3" }}>
                  <InfoLabel>여행 날짜</InfoLabel>
                  <InfoValue style={{ color: "#92400e" }}>
                    {travelDate.toLocaleDateString("ko-KR")}
                  </InfoValue>
                </InfoItem>
              )}
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
              alignItems: "flex-start",
            }}
          >
            {/* 왼쪽: Naver Map */}
            <div
              style={{
                flex: 1,
                minWidth: 350,
                maxWidth: 500,
                padding: "8px 0 8px 8px",
              }}
            >
              <div
                style={{
                  marginBottom: 16,
                  borderRadius: 18,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
                  background: "#f8fafc",
                }}
              >
                <NaverMapComponent
                  markers={Object.values(selectedItems)
                    .map((item, idx) => ({
                      id: item.id || item.name || idx,
                      name: item.name,
                      position: item.position
                        ? item.position
                        : item.mapy && item.mapx
                          ? { lat: Number(item.mapy), lng: Number(item.mapx) }
                          : null,
                      address: item.address || "",
                    }))
                    .filter(
                      (marker) =>
                        marker.position &&
                        typeof marker.position.lat === "number" &&
                        typeof marker.position.lng === "number" &&
                        marker.position.lat !== 0 &&
                        marker.position.lng !== 0
                    )}
                  mapHeight={340}
                  focusMarkerId={focusMarkerId}
                />
              </div>
            </div>
            {/* 오른쪽: 세로 여행 코스 */}
            <div style={{ flex: 1, paddingLeft: 12 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {Object.entries(selectedItems).map(([type, item], idx) => (
                  <TravelItem key={type}>
                    <TravelImage>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                      />
                    </TravelImage>
                    <TravelInfo>
                      <TravelBadge>
                        {getTypeIcon(type)} {getTypeName(type)} #{idx + 1}
                      </TravelBadge>
                      <TravelName>{item.name}</TravelName>
                      <TravelDesc>{item.description}</TravelDesc>
                      <TravelPrice>
                        {["restaurant", "accommodation"].includes(type) &&
                          item.count > 1
                          ? `${(item.price * item.count).toLocaleString()}원 `
                          : item.price === 0
                            ? "무료"
                            : `${item.price.toLocaleString()}원`}
                        {/* 인원수 표시 */}
                        {["restaurant", "accommodation"].includes(type) &&
                          item.count > 1 && <span>({item.count}명)</span>}
                      </TravelPrice>
                    </TravelInfo>
                    <div style={{ marginLeft: 16 }}>
                      <ViewOnMapButton
                        onClick={() =>
                          setFocusMarkerId(item.id || item.name || idx)
                        }
                      >
                        지도에서 보기
                      </ViewOnMapButton>
                    </div>
                  </TravelItem>
                ))}
              </div>
            </div>
          </div>
        </TravelCard>

        <NewTripSection>
          <NewTripButton
            onClick={() => {
              window.location.replace("/");
            }}
          >
            새로운 여행 계획하기
          </NewTripButton>
        </NewTripSection>
      </Container>
    </PageWrapper>
  );
}

export default MyReservations;
