import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

export const Container = styled.div`
  max-width: 512px;
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

export const PaymentCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 24px 24px 0;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PriceDisplay = styled.div`
  background: #f9fafb;
  padding: 16px;
  border-radius: 8px;
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span:first-child {
    font-weight: 500;
    color: #1f2937;
  }
  
  span:last-child {
    font-size: 20px;
    font-weight: bold;
    color: #2563eb;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #06b6d4;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
  }
`;

export const PayButton = styled.button`
  width: 100%;
  background: #009499;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background: #0891b2;
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

export const InfoText = styled.div`
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  
  p {
    margin: 4px 0;
  }
`;

// 완료 화면 스타일
export const CompletedWrapper = styled.div`
  min-height: 100vh;
  background: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompletedCard = styled.div`
  max-width: 400px;
  width: 90%;
  background: white;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const CheckIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
`;

export const CompletedTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #1f2937;
`;

export const CompletedMessage = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
`;

export const CompletedPrice = styled.div`
  background: #f3f4f6;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  
  p:first-child {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 4px;
  }
  
  p:last-child {
    font-size: 20px;
    font-weight: bold;
    color: #1f2937;
  }
`;

export const CompletedNote = styled.p`
  font-size: 14px;
  color: #6b7280;
`;