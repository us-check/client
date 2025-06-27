import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  MapSimulation,
  MapOverlay,
  MapIcon,
  MapText,
  MapSubtext,
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
  PaymentButton
} from '../styles/RoutePageStyle';

function RoutePage() {
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const items = localStorage.getItem('selectedTravelItems');
    if (items) {
      setSelectedItems(JSON.parse(items));
    }
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'attraction': return '📍';
      case 'restaurant': return '🍽️';
      case 'accommodation': return '🏨';
      default: return '';
    }
  };

  const getTypeName = (type) => {
    switch (type) {
      case 'attraction': return '관광지';
      case 'restaurant': return '음식점';
      case 'accommodation': return '숙박시설';
      default: return '';
    }
  };

  const getTotalPrice = () => {
    const subtotal = Object.values(selectedItems).reduce((sum, item) => sum + item.price, 0);
    const fee = Math.floor(subtotal * 0.05);
    return subtotal + fee;
  };

  return (
    <PageWrapper>
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            ← 뒤로가기
          </BackButton>
          <Title>여행 경로 확인</Title>
        </Header>

        <ContentGrid>
          <MapCard>
            <MapHeader>
              <MapTitle>여행 경로 지도</MapTitle>
            </MapHeader>
            <MapContent>
              <MapSimulation>
                <MapOverlay>
                  <MapIcon>📍</MapIcon>
                  <MapText>의성군 여행 경로</MapText>
                  <MapSubtext>최적화된 경로로 안내됩니다</MapSubtext>
                </MapOverlay>
              </MapSimulation>
            </MapContent>
          </MapCard>

          <ItemsList>
            <SectionTitle>선택된 여행 코스</SectionTitle>

            {Object.entries(selectedItems).map(([type, item], index) => (
              <ItemCard key={type}>
                <ItemContent>
                  <ItemImage>
                    <img src={item.image || '/placeholder.svg'} alt={item.name} />
                  </ItemImage>
                  <ItemInfo>
                    <ItemBadge>
                      {getTypeIcon(type)} {getTypeName(type)} #{index + 1}
                    </ItemBadge>
                    <ItemName>{item.name}</ItemName>
                    <ItemDescription>{item.description}</ItemDescription>
                    <ItemPrice>
                      {item.price === 0 ? '무료' : `${item.price.toLocaleString()}원`}
                    </ItemPrice>
                  </ItemInfo>
                </ItemContent>
              </ItemCard>
            ))}

            <PriceCard>
              <PriceHeader>
                <span>총 결제 금액</span>
                <PriceAmount>{getTotalPrice().toLocaleString()}원</PriceAmount>
              </PriceHeader>

              <PaymentGrid>
                <PaymentButton
                  kakao
                  onClick={() => navigate('/payment?method=kakao')}
                >
                  💳 카카오페이
                </PaymentButton>
                <PaymentButton
                  onClick={() => navigate('/payment?method=toss')}
                >
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