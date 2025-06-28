// src/components/MainpageModal.js
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

  // 오버레이 클릭 → 닫힘 애니메이션 시작
  const handleOverlayClick = () => setIsClosing(true);

  // 패널 내부 클릭은 버블링 방지
  const stopPropagation = (e) => e.stopPropagation();

  // 애니메이션 끝나면 실제로 닫기
  const handleAnimationEnd = () => {
    if (isClosing) onClose?.();
  };

  // 메뉴 클릭 시 실행 → 닫힘 애니메이션 시작
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

        {/* ───────── 로그인 전 ───────── */}
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
          /* ───────── 로그인 후 ───────── */
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
