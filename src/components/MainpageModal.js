import React, { useState } from 'react';
import styles from './MainpageModal.module.css';

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
    if (isClosing) onClose();
  };

  const closeAnd = (fn) => {
    fn?.();
    setIsClosing(true);
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={`${styles.panel} ${isClosing ? styles.slideOut : styles.slideIn}`}
        onClick={stopPropagation}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.menuTitle}>메뉴</div>
        <div className={styles.divider} />

        {!isLoggedIn ? (
          <>
            <div className={styles.menuItemLogin} onClick={() => closeAnd(onLoginClick)}>
              <div className={styles.menuLabel}>로그인</div>
              <img className={styles.chevronRightIcon} alt="" src="오른화살표.svg" />
            </div>

            <div className={styles.menuItemLang} onClick={() => closeAnd(onLangClick)}>
              <div className={styles.menuLabel}>언어 변경</div>
              <img className={styles.chevronRightIcon} alt="" src="오른화살표.svg" />
            </div>
          </>
        ) : (
          <>
            <div className={styles.menuItemLogin} onClick={() => closeAnd(onMyPageClick)}>
              <div className={styles.menuLabel}>내 정보</div>
              <img className={styles.chevronRightIcon} alt="" src="오른화살표.svg" />
            </div>

            <div className={styles.menuItemLogin} onClick={() => closeAnd(onStoreRegisterClick)}>
              <div className={styles.menuLabel}>가게 등록</div>
              <img className={styles.chevronRightIcon} alt="" src="오른화살표.svg" />
            </div>

            <div className={styles.menuItemLang} onClick={() => closeAnd(onLangClick)}>
              <div className={styles.menuLabel}>언어 변경</div>
              <img className={styles.chevronRightIcon} alt="" src="오른화살표.svg" />
            </div>

            <div className={styles.menuItemLang} onClick={() => closeAnd(onLogoutClick)}>
              <div className={styles.menuLabel}>로그아웃</div>
              <img className={styles.chevronRightIcon} alt="" src="오른화살표.svg" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainpageModal;
