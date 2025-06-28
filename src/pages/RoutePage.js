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
  ItemContentWithBorder,
  ViewOnMapButton,
  DatePickerButton,
  ModalOverlay,
  ModalContent,
  ModalText,
  ModalButton,
  TossPayIcon,
  MapArea,
  FlexRowBetween,
  FlexRow,
  AddressText,
  CountLabel,
} from "../styles/RoutePageStyle";
import NaverMapComponent from "./NaverMapComponent"; // 네이버 맵 컴포넌트 임포트

function RoutePage() {
  const [selectedItems, setSelectedItems] = useState({});
  const [travelDate, setTravelDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [focusMarkerId, setFocusMarkerId] = useState(null);
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
              <MapArea>
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
                  mapHeight={520}
                  focusMarkerId={focusMarkerId}
                />
              </MapArea>
            </MapContent>
          </MapCard>

          <ItemsList>
            <FlexRowBetween>
              <SectionTitle>선택된 여행 코스</SectionTitle>
              <FlexRow>
                <DatePicker
                  selected={travelDate}
                  onChange={(date) => setTravelDate(date)}
                  locale={ko}
                  dateFormat="yyyy년 M월 d일 일정"
                  minDate={new Date()} // 오늘 이전은 비활성화됨
                  placeholderText="날짜 선택"
                  customInput={
                    <DatePickerButton>
                      {travelDate
                        ? `${travelDate.getFullYear()}년 ${
                            travelDate.getMonth() + 1
                          }월 ${travelDate.getDate()}일`
                        : "날짜 선택"}
                    </DatePickerButton>
                  }
                />
              </FlexRow>
            </FlexRowBetween>

            {Object.entries(selectedItems).map(([type, item], index) => {
              if (!item) return null;
              const borderColor =
                type === "attraction"
                  ? "#7dd3fc"
                  : type === "restaurant"
                  ? "#fbbf24"
                  : "#a5b4fc";
              return (
                <ItemCard key={type}>
                  <ItemContentWithBorder bordercolor={borderColor}>
                    <ItemImage>
                      <img
                        src={item.image ? item.image : "/placeholder.svg"}
                        alt={item.name ? item.name : "이미지 없음"}
                      />
                    </ItemImage>
                    <ItemInfo>
                      <FlexRow style={{ marginBottom: 2 }}>
                        <ItemBadge>
                          {getTypeIcon(type)} {getTypeName(type)} #{index + 1}
                        </ItemBadge>
                        <AddressText>{item.address}</AddressText>
                      </FlexRow>
                      <ItemName>{item.name}</ItemName>
                      <ItemDescription>{item.description}</ItemDescription>
                      {["restaurant", "accommodation"].includes(type) && (
                        <CountControlWrapper style={{ margin: "4px 0 0 0" }}>
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
                          <CountLabel>명</CountLabel>
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
                    <FlexRow style={{ marginLeft: 16 }}>
                      <ViewOnMapButton
                        onClick={() =>
                          setFocusMarkerId(item.id || item.name || index)
                        }
                      >
                        지도에서 보기
                      </ViewOnMapButton>
                    </FlexRow>
                  </ItemContentWithBorder>
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
                  <TossPayIcon src="/toss.png" alt="토스페이" />
                  토스페이
                </PaymentButton>
              </PaymentGrid>
            </PriceCard>
          </ItemsList>
        </ContentGrid>

        {/* 모달 */}
        {isModalOpen && (
          <ModalOverlay onClick={() => setIsModalOpen(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalText>여행 날짜를 선택해주세요.</ModalText>
              <ModalButton onClick={() => setIsModalOpen(false)}>
                확인
              </ModalButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </PageWrapper>
  );
}

export default RoutePage;
