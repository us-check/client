import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

export const Container = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  color: #6b7280;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f3f4f6;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #1f2937;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const MapCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: fit-content;
`;

export const MapHeader = styled.div`
  padding: 24px 24px 0;
`;

export const MapTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
`;

export const MapContent = styled.div`
  padding: 24px;
`;

export const MapSimulation = styled.div`
  aspect-ratio: 1;
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MapOverlay = styled.div`
  text-align: center;
  z-index: 10;
`;

export const MapIcon = styled.div`
  font-size: 48px;
  margin-bottom: 8px;
`;

export const MapText = styled.p`
  color: #374151;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const MapSubtext = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1f2937;
`;

export const ItemCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ItemContent = styled.div`
  padding: 16px;
  display: flex;
  gap: 16px;
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemBadge = styled.div`
  display: inline-block;
  background: #f3f4f6;
  color: #374151;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 8px;
  border: 1px solid #e5e7eb;
`;

export const ItemName = styled.h3`
  font-weight: 600;
  margin-bottom: 4px;
  color: #1f2937;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`;

export const ItemPrice = styled.p`
  font-weight: 500;
  color: #2563eb;
`;

export const PriceCard = styled.div`
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border: 2px solid #93c5fd;
  border-radius: 12px;
  padding: 16px;
`;

export const PriceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  span {
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
`;

export const PriceAmount = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #2563eb;
`;

export const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const PaymentButton = styled.button`
  background: ${props => props.kakao ? '#fee500' : '#2563eb'};
  color: ${props => props.kakao ? '#000' : '#fff'};
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.kakao ? '#fde047' : '#1d4ed8'};
  }
`;