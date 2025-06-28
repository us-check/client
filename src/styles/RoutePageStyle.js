import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

export const Container = styled.div`
  max-width: 1536px;
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
  top: 23px;
  left: 18px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
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
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
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

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1f2937;
`;

export const ItemCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border: 1.5px solid #e5e7eb;
`;

export const ItemContent = styled.div`
  padding: 18px 22px;
  display: flex;
  gap: 16px;
  align-items: center;
  border-left: 5px solid #e5e7eb;
`;

export const ItemContentWithBorder = styled(ItemContent)`
  border-left: 5px solid ${({ bordercolor }) => bordercolor || "#e5e7eb"};
  min-height: 90px;
  align-items: center;
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.04);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
  margin-left: 14px;
`;

export const ItemBadge = styled.div`
  display: inline-block;
  background: #f3f4f6;
  color: #009499;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  border: none;
`;

export const ItemName = styled.h3`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 2px;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDescription = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #009499;
  margin-top: 2px;
`;

export const PriceCard = styled.div`
  border-radius: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  background: ${(props) =>
    props.kakao
      ? "#fee500"
      : "#2563eb"};
  color: ${(props) => (props.kakao ? "#000" : "#fff")};
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props) => (props.kakao ? "#fde047" : "#006669")};
  }

  img {
    display: inline-block;
    vertical-align: middle;
  }
`;

export const CountControlWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

export const CountButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  color: #374151;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  font-family: "Pretendard", "Apple SD Gothic Neo", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    transform: translateY(-1px);
  }

  &:hover {
    color: #1f2937;
  }
`;

export const CountText = styled.span`
  min-width: 24px;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  color: #111827;
`;

// 지도에서 보기 버튼
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

export const DatePickerButton = styled.button`
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  color: #374151;
`;

// 모달 오버레이
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

// 모달 컨텐츠
export const ModalContent = styled.div`
  background: #fff;
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 320px;
`;

export const ModalText = styled.p`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 16px;
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: #009499;
  color: #fff;
  cursor: pointer;
`;

export const TossPayIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 6px;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
`;

export const MapArea = styled.div`
  width: 100%;
  height: 520px;
  margin-bottom: 20px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #f8fafc;
`;

export const FlexRowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AddressText = styled.span`
  color: #bdbdbd;
  font-size: 12px;
`;

export const CountLabel = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: #888;
`;
