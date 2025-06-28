import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SiKakaotalk } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

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
  CountControlWrapper,
  CountButton,
  CountText,
} from "../styles/RoutePageStyle";
import GoogleMapComponent from "./GoogleMapComponent"; // 구글 맵 컴포넌트 임포트

function RoutePage() {
  const [selectedItems, setSelectedItems] = useState({});
  const [travelDate, setTravelDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const items = localStorage.getItem("selectedTravelItems");
    if (items) {
      setSelectedItems(JSON.parse(items));
    }
  }, []);

  const handleCountChange = (type, delta) => {
    setSelectedItems((prev) => {
      const item = prev[type];
      if (!item || !["restaurant", "accommodation"].includes(type)) return prev;
      const newCount = Math.max(1, (item.count || 1) + delta);
      const updated = {
        ...prev,
        [type]: { ...item, count: newCount },
      };
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

  const handlePayment = (method) => {
    if (!travelDate) {
      setIsModalOpen(true);
      return;
    }
    localStorage.setItem("travelDate", travelDate.toISOString());
    navigate(`/payment?method=${method}`);
  };

  return (
    <PageWrapper>
      <Container>
        <BackButton onClick={() => navigate("/pachinko")}>
          <img
            src="/뒤로가는화살표.svg"
            alt="뒤로가기"
            style={{ width: "32px", height: "32px" }}
          />
        </BackButton>

        <Header>
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
                />
              </div>
            </MapContent>
          </MapCard>

          <ItemsList>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <SectionTitle>선택된 여행 코스</SectionTitle>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <DatePicker
                  selected={travelDate}
                  onChange={(date) => setTravelDate(date)}
                  locale={ko}
                  dateFormat="yyyy년 M월 d일 일정"
                  minDate={new Date()} // 오늘 이전은 비활성화됨
                  placeholderText="날짜 선택"
                  customInput={
                    <button
                      style={{
                        background: "#f3f4f6",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        padding: "6px 12px",
                        cursor: "pointer",
                        color: "#374151",
                      }}
                    >
                      {travelDate
                        ? `${travelDate.getFullYear()}년 ${
                            travelDate.getMonth() + 1
                          }월 ${travelDate.getDate()}일`
                        : "날짜 선택"}
                    </button>
                  }
                />
              </div>
            </div>

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
                      {["restaurant", "accommodation"].includes(type) && (
                        <CountControlWrapper>
                          <CountButton
                            onClick={() => handleCountChange(type, -1)}
                          >
                            <span>−</span>
                          </CountButton>
                          <CountText>{item.count || 1}</CountText>
                          <CountButton
                            onClick={() => handleCountChange(type, 1)}
                          >
                            <span>+</span>
                          </CountButton>

                          <span style={{ marginLeft: 8 }}>명</span>
                        </CountControlWrapper>
                      )}

                      <ItemPrice>
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
                <PaymentButton kakao onClick={() => handlePayment("kakao")}>
                  <SiKakaotalk size={20} style={{ marginRight: "8px" }} />
                  카카오페이
                </PaymentButton>

                <PaymentButton onClick={() => handlePayment("toss")}>
                  <img
                    src="/toss.png"
                    alt="토스페이"
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "cover",
                      marginRight: "6px",
                      borderRadius: "4px",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                  토스페이
                </PaymentButton>
              </PaymentGrid>
            </PriceCard>
          </ItemsList>
        </ContentGrid>

        {/* 모달 */}
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              style={{
                background: "#fff",
                padding: "24px 32px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                maxWidth: "320px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <p
                style={{
                  marginBottom: "16px",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                여행 날짜를 선택해주세요.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#009499",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                확인
              </button>
            </div>
          </div>
        )}
      </Container>
    </PageWrapper>
  );
}

export default RoutePage;
