import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px 32px;
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
  background: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
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
  background: #fff;
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
  background: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
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
  background: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
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
  gap: 16px;
  padding: 18px 20px;
  border: none;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.95);
  align-items: center;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  &:hover {
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.13);
    transform: translateY(-2px) scale(1.01);
  }
`;

export const TravelImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08);
  background: #f3f4f6;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 12px;
  }
`;

export const TravelInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const TravelBadge = styled.span`
  display: inline-block;
  background: #f3f4f6;
  color: #009499;
  font-weight: 600;
  font-size: 13px;
  border-radius: 4px;
  padding: 3px 10px;
  margin-bottom: 2px;
  width: fit-content;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TravelName = styled.h3`
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 2px;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TravelDesc = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TravelPrice = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #009499;
  margin-top: 2px;
  margin-bottom: 0;
  span {
    font-size: 12px;
    color: #6b7280;
    margin-left: 6px;
    font-weight: 400;
  }
`;

export const NewTripSection = styled.div`
  text-align: center;
`;

export const NewTripButton = styled.button`
  background-color: #009499;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #009499;
    transform: translateY(-1px);
  }
`;

export const ViewOnMapButton = styled.button`
  background: #fff;
  color: #009499;
  border: 1.5px solid #009499;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 18px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f0fdfa;
  }
`;

export const MapArea = styled.div`
  width: 100%;
  height: 340px;
  margin-bottom: 20px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #f8fafc;
`;
