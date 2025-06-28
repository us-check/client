import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  Container,
  Header,
  BackButton,
  Title,
  ContentGrid,
  MapCard,
  MapHeader,
  MapTitle,
  MapContent,
  ItemsList,
  SectionTitle,
  ItemCard,
  ItemContent,
  ItemImage,
  ItemInfo,
  ItemBadge,
  ItemName,
  ItemDescription,
  ItemPrice,
  PriceCard,
  PriceHeader,
  PriceAmount,
  PaymentGrid,
  PaymentButton,
} from "../styles/RoutePageStyle";
import GoogleMapComponent from "./GoogleMapComponent"; // 구글 맵 컴포넌트 임포트

function RoutePage() {
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const items = localStorage.getItem("selectedTravelItems");
    if (items) {
      setSelectedItems(JSON.parse(items));
    }
  }, []);

  // 인원수 조절 함수
  const handleCountChange = (type, delta) => {
    setSelectedItems((prev) => {
      const item = prev[type];
      if (!item || !["restaurant", "accommodation"].includes(type)) return prev;
      const newCount = Math.max(1, (item.count || 1) + delta);
      const updated = {
        ...prev,
        [type]: { ...item, count: newCount },
      };
      // 인원수 변경 시 localStorage에도 반영
      localStorage.setItem("selectedTravelItems", JSON.stringify(updated));
      return updated;
    });
  };

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
    const subtotal = Object.entries(selectedItems).reduce(
      (sum, [type, item]) => {
        if (!item) return sum;
        const price = Number(item.price) || 0;
        if (["restaurant", "accommodation"].includes(type)) {
          return sum + price * (item.count || 1);
        }
        return sum + price;
      },
      0
    );
    const fee = Math.floor(subtotal * 0.05);
    return subtotal + fee;
  };

  return (
    <PageWrapper>
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>← 뒤로가기</BackButton>
          <Title>여행 경로 확인</Title>
        </Header>

        <ContentGrid>
          <MapCard>
            <MapHeader>
              <MapTitle>여행 경로 지도</MapTitle>
            </MapHeader>
            <MapContent>
              <div style={{ width: "100%", height: 400, marginBottom: 16 }}>
                <GoogleMapComponent
                  markers={Object.values(selectedItems).map((item, idx) => ({
                    id: item.id || item.name || idx,
                    name: item.name,
                    position: item.position
                      ? item.position
                      : item.mapy && item.mapx
                      ? { lat: Number(item.mapy), lng: Number(item.mapx) }
                      : { lat: 0, lng: 0 },
                    address: item.address || "",
                  }))}
                />
              </div>
            </MapContent>
          </MapCard>

          <ItemsList>
            <SectionTitle>선택된 여행 코스</SectionTitle>

            {Object.entries(selectedItems).map(([type, item], index) => {
              if (!item) return null;
              return (
                <ItemCard key={type}>
                  <ItemContent>
                    <ItemImage>
                      <img
                        src={item.image ? item.image : "/placeholder.svg"}
                        alt={item.name ? item.name : "이미지 없음"}
                      />
                    </ItemImage>
                    <ItemInfo>
                      <ItemBadge>
                        {getTypeIcon(type)} {getTypeName(type)} #{index + 1}
                      </ItemBadge>
                      <ItemName>{item.name}</ItemName>
                      <ItemDescription>{item.description}</ItemDescription>
                      {/* 인원수 조절 UI: 음식점/숙박시설만 */}
                      {["restaurant", "accommodation"].includes(type) && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            margin: "8px 0",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => handleCountChange(type, -1)}
                            style={{ width: 28, height: 28 }}
                          >
                            -
                          </button>
                          <span
                            style={{
                              minWidth: 24,
                              textAlign: "center",
                            }}
                          >
                            {item.count || 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCountChange(type, 1)}
                            style={{ width: 28, height: 28 }}
                          >
                            +
                          </button>
                          <span style={{ marginLeft: 8 }}>명</span>
                        </div>
                      )}
                      <ItemPrice>
                        {/* 가격: 인원수 반영 */}
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
                      </ItemPrice>
                    </ItemInfo>
                  </ItemContent>
                </ItemCard>
              );
            })}

            <PriceCard>
              <PriceHeader>
                <span>총 결제 금액</span>
                <PriceAmount>{getTotalPrice().toLocaleString()}원</PriceAmount>
              </PriceHeader>

              <PaymentGrid>
                <PaymentButton
                  kakao
                  onClick={() => navigate("/payment?method=kakao")}
                >
                  💳 카카오페이
                </PaymentButton>
                <PaymentButton onClick={() => navigate("/payment?method=toss")}>
                  💳 토스페이
                </PaymentButton>
              </PaymentGrid>
            </PriceCard>
          </ItemsList>
        </ContentGrid>
      </Container>
    </PageWrapper>
  );
}

export default RoutePage;
