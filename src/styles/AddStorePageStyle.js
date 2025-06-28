import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #374151;
  }
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ecfeff 0%, #dbeafe 50%, #e0e7ff 100%);
`;

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackIcon = styled.img`
  position: absolute;
  top: 23px;
  left: 23px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 10;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const LogoText = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;
`;

export const HamburgerLine = styled.div`
  width: 1.5rem;
  height: 2px;
  background-color: #1f2937;
  border-radius: 1px;
`;

export const Container = styled.div`
  max-width: 28rem;
  margin: 0 auto;
  padding: 1rem;
  @media (max-width: 640px) {
    padding: 0.5rem;
  }
`;

export const TitleSection = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const MainTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 1rem;
`;

export const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CardHeader = styled.div`
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  color: white;
  padding: 1.5rem;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

export const StoreForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`;

export const FormInput = styled.input`
  padding: 0.75rem;
  border: 2px solid #a5f3fc;
  border-radius: 0.75rem;
  font-size: 1rem;
  background: #f9fafb;
  transition: all 0.2s ease;
  outline: none;
  &::placeholder {
    color: #9ca3af;
  }
  &:focus {
    border-color: #06b6d4;
    background: white;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
  }
`;

export const FormSelect = styled.select`
  padding: 0.75rem;
  border: 2px solid #a5f3fc;
  border-radius: 0.75rem;
  font-size: 1rem;
  background: #f9fafb;
  transition: all 0.2s ease;
  outline: none;
  &:focus {
    border-color: #06b6d4;
    background: white;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
  }
`;

export const LocationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  color: white;
  box-shadow: 0 4px 14px 0 rgba(6, 182, 212, 0.3);
  &:hover:not(:disabled) {
    background: linear-gradient(90deg, #0891b2, #2563eb);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px 0 rgba(6, 182, 212, 0.4);
  }
  &:disabled {
    background: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.3);
  &:hover:not(:disabled) {
    background: linear-gradient(90deg, #059669, #047857);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px 0 rgba(16, 185, 129, 0.4);
  }
  &:disabled {
    background: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const BtnIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #06b6d4;
  font-size: 0.875rem;
  padding: 0.5rem;
`;

export const Spinner = styled.span`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  font-size: 0.875rem;
`;

export const NearbyStores = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StoresList = styled.div`
  background: #f9fafb;
  border-radius: 0.75rem;
  padding: 1rem;
  max-height: 10rem;
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

export const StoreItem = styled.div`
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #ecfeff;
    border-color: #a5f3fc;
    transform: translateY(-1px);
  }
`;

export const StoreName = styled.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

export const StoreAddress = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
`;

export const Hidden = styled.div`
  display: none !important;
`;

// Mainpage와 동일한 배경 및 헤더 스타일 적용
export const StorePageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #f3ffff 27%,
    #e9feff 71%,
    #c6fdff 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;

// 헤더
export const StoreHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StoreLogoGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const StoreLogoImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 8px;
`;

export const StoreLogoText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #333;
`;

export const StoreMenuIcon = styled.img`
  width: 50px;
  height: 50px;
`;

// Card for the form
export const StoreFormCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  margin-top: 2.5rem;
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 640px) {
    padding: 1.25rem 0.5rem 1rem 0.5rem;
    margin-top: 1.2rem;
  }
`;

export const StoreTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
  text-align: center;
`;

export const StoreDesc = styled.p`
  color: #6b7280;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const StoreFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const GradientWrapper = styled.div`
  padding: 2px;
  background: linear-gradient(90deg, #00f6ff, #009499);
  border-radius: 12px;
`;

export const GradientInnerBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0;
`;


export const StoreLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
`;

export const StoreInput = styled.input`
  width: 94%;
  padding: 0.75rem;
  border: 2px solid #a5f3fc;
  border-radius: 0.75rem;
  font-size: 1rem;
  background: #f9fafb;
  transition: all 0.2s ease;
  outline: none;
  &::placeholder {
    color: #9ca3af;
  }
  &:focus {
    border-color:rgb(99, 182, 196);
    background: white;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
  }
`;

export const StoreSelect = styled.select`
  width: 96%;
  height: 43px;
  padding: 0 1rem;
  border: none;
  font-size: 1rem;
  border-radius: 12px;
  background: transparent;
  box-sizing: border-box;
  outline: none;

  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%239ca3af' d='M2 0L0 2h4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.65em auto;

  cursor: pointer;
`;

export const StoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  background: linear-gradient(135deg, #009499 0%, #007c81 100%);
  color: white;
  box-shadow: 0 4px 14px 0 rgba(6, 182, 212, 0.3);
  margin-top: 0.5rem;
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #007c81 0%, #006669 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px 0 rgba(6, 182, 212, 0.4);
  }
  &:disabled {
    background: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const StoreError = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  font-size: 0.95rem;
  margin-top: 0.5rem;
`;

export const StoreNearbyList = styled.div`
  background: #f9fafb;
  border-radius: 0.75rem;
  padding: 1rem;
  max-height: 10rem;
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  margin-top: 0.5rem;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

export const StoreNearbyItem = styled.div`
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #ecfeff;
    border-color: #a5f3fc;
    transform: translateY(-1px);
  }
`;

export const StoreLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #06b6d4;
  font-size: 0.95rem;
  padding: 0.5rem;
`;

export const StoreFooter = styled.footer`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.4;
`;

// PachinkoPage 상세정보 모달 스타일 (클래스 기반)
export const DetailModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailModalRoot = styled.div`
  background: transparent;
  box-shadow: none;
  padding: 0;
  margin: 0;
  max-width: none;
  width: auto;
  height: auto;
`;

export const DetailModalCard = styled.div`
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 480px;
  min-width: 360px;
  width: 90vw;
  max-height: 85vh;
  position: relative;
  animation: modalSlideIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
`;

export const DetailModalClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #fff;
    transform: scale(1.1);
  }
`;

export const DetailModalHeader = styled.div`
  padding: 24px 24px 16px 24px;
  color: #222;
  background: none;
  h2 {
    font-size: 24px;
    font-weight: 800;
    margin: 0;
    line-height: 1.3;
  }
`;

export const DetailModalImage = styled.div`
  width: 100%;
  height: 240px;
  background: #f8f9fa;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const DetailModalDesc = styled.div`
  padding: 24px;
  background: #fff;
  p {
    color: #666;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
    background: #f8f9fa;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
  }
`;

export const DetailModalMap = styled.div`
  width: 100%;
  height: 200px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
`;

export const DetailModalAction = styled.div`
  padding: 20px 24px;
  background: #fff;
  border-top: 1px solid #e9ecef;
`;

export const DetailModalMapBtn = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #4ecdc4, #45b7d1dd);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;
