import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

export const Container = styled.div`
  max-width: 1024px;
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
  position: absolute;
  top: 22px;
  left: 22px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const QRCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const QRHeader = styled.div`
  padding: 24px 24px 0;
`;

export const QRTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QRContent = styled.div`
  padding: 24px;
  text-align: center;
`;

export const QRDisplay = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  border: 2px dashed #d1d5db;
  margin-bottom: 16px;
  
  div:last-child {
    font-family: monospace;
    font-size: 14px;
    background: #f3f4f6;
    padding: 8px;
    border-radius: 4px;
    margin-top: 16px;
  }
`;

export const QRCode = styled.div`
  font-size: 128px;
  color: #9ca3af;
  margin-bottom: 16px;
`;

export const QRText = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 16px;
`;

export const SaveButton = styled.button`
  width: 100%;
  background: transparent;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f9fafb;
  }
`;

export const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const InfoHeader = styled.div`
  padding: 24px 24px 0;
`;

export const InfoTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  
  &:nth-child(1) {
    background: #dbeafe;
  }
  
  &:nth-child(2) {
    background: #dcfce7;
  }
  
  &:nth-child(3) {
    background: #f3f4f6;
  }
`;

export const InfoLabel = styled.span`
  font-weight: 500;
  color: #1f2937;
`;

export const InfoValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #2563eb;
`;

export const Badge = styled.span`
  background: #10b981;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`;

export const TravelCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  overflow: hidden;
`;

export const TravelHeader = styled.div`
  padding: 24px 24px 0;
`;

export const TravelTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
`;

export const TravelGrid = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

export const TravelItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const TravelImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TravelInfo = styled.div`
  flex: 1;
  
  div:first-child {
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 4px;
  }
`;

export const TravelName = styled.h3`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 4px;
  color: #1f2937;
`;

export const TravelDesc = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
`;

export const TravelPrice = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #2563eb;
`;

export const NewTripSection = styled.div`
  text-align: center;
`;

export const NewTripButton = styled.button`
  background: linear-gradient(135deg, #10b981 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: linear-gradient(135deg, #059669 0%, #1d4ed8 100%);
    transform: translateY(-1px);
  }
`;