import styled, { createGlobalStyle } from 'styled-components';

export const FrameWrapper = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(180deg, #fff, #f3ffff 27.4%, #e9feff 70.67%, #c6fdff);
  height: 1053px;
  overflow: hidden;
  text-align: left;
  font-size: 36px;
  color: #000;
`;

export const TopBar = styled.div`
  position: absolute;
  top: 468px;
  left: 536px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 500px;
  background-color: #fff;
  border: 4px solid #00f6ff;
  box-sizing: border-box;
  width: 847px;
  height: 105px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 33px;
`;

export const GarlicIcon = styled.img`
  width: 63px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
`;

export const SearchInputWrapper = styled.div`
  width: 780px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 0 10px;
  //background: #f5f5f5;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 25px;
  outline: none;
  color: #333;
`;

export const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 8px;
`;

export const LogoSection = styled.div`
  position: absolute;
  top: 15px;
  left: 213px;
  width: 1494px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  width: 51px;
  height: 62px;
  object-fit: cover;
  position: relative;
`;

export const LogoText = styled.div`
  position: absolute;
  top: 20px;
  left: 64px;
  line-height: 22px;
  -webkit-text-stroke: 1px #000;
`;

export const MenuIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
