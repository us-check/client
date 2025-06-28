import React, { useState } from 'react';
import {
  Overlay,
  Panel,
  MenuTitle,
  Divider,
  MenuItem,
  MenuLabel,
  ChevronRightIcon,
} from './MainpageModalStyle';

const MainpageModal = ({
  onClose,
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  onLangClick,
  onMyPageClick,
  onStoreRegisterClick,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const handleOverlayClick = () => setIsClosing(true);
  const stopPropagation = (e) => e.stopPropagation();

  const handleAnimationEnd = () => {
    if (isClosing) onClose?.();
  };

  const closeAnd = (fn) => {
    fn?.();
    setIsClosing(true);
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Panel
        isClosing={isClosing}
        onClick={stopPropagation}
        onAnimationEnd={handleAnimationEnd}
      >
        <MenuTitle>메뉴</MenuTitle>
        <Divider />

        {!isLoggedIn ? (
          <>
            <MenuItem onClick={() => closeAnd(onLoginClick)}>
              <MenuLabel>로그인</MenuLabel>
              <ChevronRightIcon src="오른화살표.svg" alt=">" />
            </MenuItem>

            <MenuItem onClick={() => closeAnd(onLangClick)}>
              <MenuLabel>언어 변경</MenuLabel>
              <ChevronRightIcon src="오른화살표.svg" alt=">" />
            </MenuItem>
          </>
        ) : (

          <>
            <MenuItem onClick={() => closeAnd(onMyPageClick)}>
              <MenuLabel>내 정보</MenuLabel>
              <ChevronRightIcon src="오른화살표.svg" alt=">" />
            </MenuItem>

            <MenuItem onClick={() => closeAnd(onStoreRegisterClick)}>
              <MenuLabel>가게 등록</MenuLabel>
              <ChevronRightIcon src="오른화살표.svg" alt=">" />
            </MenuItem>

            <MenuItem onClick={() => closeAnd(onLangClick)}>
              <MenuLabel>언어 변경</MenuLabel>
              <ChevronRightIcon src="오른화살표.svg" alt=">" />
            </MenuItem>

            <MenuItem onClick={() => closeAnd(onLogoutClick)}>
              <MenuLabel>로그아웃</MenuLabel>
              <ChevronRightIcon src="오른화살표.svg" alt=">" />
            </MenuItem>
          </>
        )}
      </Panel>
    </Overlay>
  );
};

export default MainpageModal;
