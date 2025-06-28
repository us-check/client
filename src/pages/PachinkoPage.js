import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  BackIcon,
  Header,
  LogoSection,
  LogoIcon,
  LogoText,
  MenuButton,
  Container,
  Title,
  Subtitle,
  SlotMachineCard,
  SlotMachineContent,
  SlotMachineScreen,
  ReelGrid,
  ReelContainer,
  ReelHeader,
  ReelHeaderContent,
  ReelScreen,
  SpinningContent,
  SpinItem,
  ResultContent,
  ResultTitle,
  ResultDescription,
  ResultBadge,
  ReelControls,
  SpinButton,
  MoreButton,
  MainSpinButton,
  PriceSection,
  PriceGrid,
  PriceItem,
  PriceLabel,
  PriceValue,
  DecisionButton,
  BottomInfo,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalGrid,
  OptionCard,
  OptionImage,
  OptionInfo,
  OptionName,
  OptionDesc,
  OptionFooter,
  OptionBadge,
  SelectButton,
} from "../styles/PachinkoPageStyle";

// 상세정보 모달 스타일 import
import {
  DetailModalOverlay,
  DetailModalRoot,
  DetailModalCard,
  DetailModalClose,
  DetailModalHeader,
  DetailModalImage,
  DetailModalDesc,
  DetailModalMap,
  DetailModalAction,
  DetailModalMapBtn,
} from "../styles/AddStorePageStyle";

// 서버에서 받은 데이터를 카테고리별로 분류하는 함수
function categorizeServerData(items) {
  const categorized = {
    attraction: [],
    restaurant: [],
    accommodation: [],
  };

  items.forEach((item) => {
    const imageUrl =
      item.firstimage && item.firstimage.trim() !== ""
        ? item.firstimage
        : "/placeholder.svg";
    const priceStr =
      item.price !== undefined && item.price !== null
        ? String(item.price)
        : "0";

    if (item.contenttypeid === "39") {
      categorized.restaurant.push({
        id: item.contentid,
        name: item.title,
        price: priceStr,
        description: item.overview || "",
        image: imageUrl,
        type: "restaurant",
        position: { lat: Number(item.mapy), lng: Number(item.mapx) },
        mapx: item.mapx,
        mapy: item.mapy,
      });
    } else if (item.contenttypeid === "32") {
      categorized.accommodation.push({
        id: item.contentid,
        name: item.title,
        price: priceStr,
        description: item.overview || "",
        image: imageUrl,
        type: "accommodation",
        position: { lat: Number(item.mapy), lng: Number(item.mapx) },
        mapx: item.mapx,
        mapy: item.mapy,
      });
    } else {
      categorized.attraction.push({
        id: item.contentid,
        name: item.title,
        price: priceStr,
        description: item.overview || "",
        image: imageUrl,
        type: "attraction",
        position: { lat: Number(item.mapy), lng: Number(item.mapx) },
        mapx: item.mapx,
        mapy: item.mapy,
      });
    }
  });

  return categorized;
}

function categorizeServerDataFromServerResponse(serverResponse) {
  if (!serverResponse || !Array.isArray(serverResponse.recommended_spots))
    return { attraction: [], restaurant: [], accommodation: [] };
  return categorizeServerData(serverResponse.recommended_spots);
}

function getTypeIcon(type) {
  switch (type) {
    case "attraction":
      return "📍";
    case "restaurant":
      return "🍽️";
    case "accommodation":
      return "🏨";
    default:
      return "";
  }
}

function getTypeName(type) {
  switch (type) {
    case "attraction":
      return "관광지";
    case "restaurant":
      return "음식점";
    case "accommodation":
      return "숙박시설";
    default:
      return "";
  }
}

function PachinkoPage() {
  const [selectedItems, setSelectedItems] = useState({});
  const [isSpinning, setIsSpinning] = useState({});
  const [travelPlan] = useState(["attraction", "restaurant", "accommodation"]);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [openModal, setOpenModal] = useState(null);
  const [detailModal, setDetailModal] = useState({ open: false, item: null });
  const [dataByCategory, setDataByCategory] = useState({
    attraction: [],
    restaurant: [],
    accommodation: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (
      dataByCategory.attraction.length > 0 &&
      dataByCategory.restaurant.length > 0 &&
      dataByCategory.accommodation.length > 0
    ) {
      startInitialSpin();
    }
  }, [dataByCategory]);

  useEffect(() => {
    const shouldAutoSpin = localStorage.getItem("shouldAutoSpin");
    setTimeout(() => {
      if (shouldAutoSpin === "true") {
        localStorage.removeItem("shouldAutoSpin");
        startAutoSpin();
      }
    }, 500);
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("pachinkoData");
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        if (parsed.recommended_spots) {
          setDataByCategory(categorizeServerDataFromServerResponse(parsed));
        } else if (Array.isArray(parsed)) {
          setDataByCategory(categorizeServerData(parsed));
        } else {
          // 잘못된 데이터면 빈 배열
          setDataByCategory({
            attraction: [],
            restaurant: [],
            accommodation: [],
          });
        }
        return;
      } catch (e) {
        // 파싱 실패시 빈 배열
        setDataByCategory({
          attraction: [],
          restaurant: [],
          accommodation: [],
        });
      }
    }
  }, []);

  const startInitialSpin = () => {
    setIsAutoSpinning(false);
    setShowResults(false);
    setSelectedItems({});

    const initialSpinning = {};
    travelPlan.forEach((type) => {
      initialSpinning[type] = true;
    });
    setIsSpinning(initialSpinning);

    const finalResults = {};
    travelPlan.forEach((type) => {
      const items = dataByCategory[type];
      if (items && items.length > 0) {
        finalResults[type] = items[Math.floor(Math.random() * items.length)];
      }
    });

    travelPlan.forEach((type, index) => {
      setTimeout(() => {
        setSelectedItems((prev) => ({ ...prev, [type]: finalResults[type] }));
        setIsSpinning((prev) => ({ ...prev, [type]: false }));

        if (index === travelPlan.length - 1) {
          setTimeout(() => {
            setShowResults(true);
          }, 100);
        }
      }, 1500 + index * 400);
    });
  };

  const startAutoSpin = () => {
    setIsAutoSpinning(true);
    setShowResults(false);
    setSelectedItems({});

    const initialSpinning = {};
    travelPlan.forEach((type) => {
      initialSpinning[type] = true;
    });
    setIsSpinning(initialSpinning);

    const finalResults = {};
    travelPlan.forEach((type) => {
      const items = dataByCategory[type];
      if (items && items.length > 0) {
        finalResults[type] = items[Math.floor(Math.random() * items.length)];
      }
    });

    travelPlan.forEach((type, index) => {
      setTimeout(() => {
        setSelectedItems((prev) => ({ ...prev, [type]: finalResults[type] }));
        setIsSpinning((prev) => ({ ...prev, [type]: false }));

        if (index === travelPlan.length - 1) {
          setTimeout(() => {
            setIsAutoSpinning(false);
            setShowResults(true);
          }, 100);
        }
      }, 2500 + index * 500);
    });
  };

  const spinAllMachines = () => {
    setIsAutoSpinning(false);
    setShowResults(false);
    setSelectedItems({}); // 스핀 시작 시 기존 결과값 즉시 숨김

    // 모든 릴을 스핀 상태로 설정
    const initialSpinning = {};
    travelPlan.forEach((type) => {
      initialSpinning[type] = true;
    });
    setIsSpinning(initialSpinning);

    const finalResults = {};
    travelPlan.forEach((type) => {
      const items = dataByCategory[type];
      if (items && items.length > 0) {
        finalResults[type] = items[Math.floor(Math.random() * items.length)];
      }
    });

    // 각 릴을 순차적으로 멈춤
    travelPlan.forEach((type, index) => {
      setTimeout(() => {
        console.log(`Stopping manual spin for ${type}`);
        setSelectedItems((prev) => ({ ...prev, [type]: finalResults[type] }));
        setIsSpinning((prev) => ({ ...prev, [type]: false }));

        if (index === travelPlan.length - 1) {
          setTimeout(() => {
            console.log("Manual spin completed");
            setShowResults(true);
          }, 100);
        }
      }, 2000 + index * 500);
    });
  };

  const spinMachine = (type) => {
    console.log(`Manual spin for ${type}`);
    setIsSpinning((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      const items = dataByCategory[type];
      if (items) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        setSelectedItems((prev) => ({ ...prev, [type]: randomItem }));
      }
      setIsSpinning((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const selectSpecificItem = (type, item) => {
    setSelectedItems((prev) => ({ ...prev, [type]: item }));
    setOpenModal(null);
  };

  const getTotalPrice = () => {
    const subtotal = Object.values(selectedItems).reduce(
      (sum, item) =>
        sum + (item && !isNaN(Number(item.price)) ? Number(item.price) : 0),
      0
    );
    const fee = Math.floor(subtotal * 0.05);
    return { subtotal, fee, total: subtotal + fee };
  };

  const { subtotal, fee, total } = getTotalPrice();

  return (
    <PageWrapper>
      <BackIcon
        src="뒤로가는화살표.svg"
        alt="뒤로가기"
        onClick={() => navigate("/")}
      />

      <Header>
        <LogoSection>
          <LogoIcon></LogoIcon>
          <LogoText></LogoText>
        </LogoSection>
        <MenuButton></MenuButton>
      </Header>

      <Container>
        <Title>AI 추천 코스</Title>
        {isAutoSpinning ? (
          <Subtitle isAnimated>
            ✨ AI가 맞춤 여행 코스를 생성하고 있습니다... ✨
          </Subtitle>
        ) : (
          <Subtitle>룰렛을 돌려 완벽한 여행 코스를 만들어보세요!</Subtitle>
        )}

        <SlotMachineCard>
          <SlotMachineContent>
            <SlotMachineScreen>
              <ReelGrid>
                {travelPlan.map((type, index) => {
                  const item = selectedItems[type];
                  const spinning = isSpinning[type];
                  return (
                    <ReelContainer key={type}>
                      <ReelHeader>
                        <ReelHeaderContent>
                          <span>{getTypeIcon(type)}</span>
                          <span>{getTypeName(type)}</span>
                        </ReelHeaderContent>
                      </ReelHeader>

                      <ReelScreen
                        $spinning={spinning}
                        $showResults={showResults}
                      >
                        {spinning ? (
                          <SpinningContent>
                            {[...Array(30)].map((_, idx) => {
                              const itemIndex =
                                idx % dataByCategory[type].length;
                              const spinItem = dataByCategory[type][itemIndex];
                              return (
                                <SpinItem key={idx}>
                                  <img
                                    src={spinItem.image || "/placeholder.svg"}
                                    alt={spinItem.name}
                                    style={{
                                      width: 60,
                                      height: 45,
                                      borderRadius: 8,
                                      objectFit: "cover",
                                      marginBottom: 4,
                                    }}
                                  />
                                  <div>{spinItem.name}</div>
                                </SpinItem>
                              );
                            })}
                          </SpinningContent>
                        ) : item ? (
                          <ResultContent
                            onClick={() => setDetailModal({ open: true, item })}
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: 8,
                              }}
                            >
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                style={{
                                  width: 300,
                                  height: 268,
                                  borderRadius: 15,
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <ResultTitle>{item.name}</ResultTitle>
                            <ResultDescription>
                              {item.description}
                            </ResultDescription>
                            <ResultBadge>
                              {(() => {
                                let priceNum = 0;
                                console.log("item.price:", item.price);
                                if (
                                  item.price !== undefined &&
                                  item.price !== null
                                ) {
                                  if (typeof item.price === "string") {
                                    priceNum = Number(item.price.trim());
                                  } else {
                                    priceNum = Number(item.price);
                                  }
                                }
                                console.log("priceNum:", priceNum);
                                if (priceNum === 0) return "무료";
                                if (!isNaN(priceNum))
                                  return `${priceNum.toLocaleString()}원`;
                                return "가격정보 없음";
                              })()}
                            </ResultBadge>
                          </ResultContent>
                        ) : null}
                      </ReelScreen>

                      <ReelControls>
                        <SpinButton
                          onClick={() => spinMachine(type)}
                          disabled={spinning || isAutoSpinning}
                          style={{
                            minWidth: 80,
                            height: 36,
                            fontSize: 15,
                            fontWeight: 600,
                            borderRadius: 8,
                            background: "#009499",
                            color: "#fff",
                            border: "none",
                            marginRight: 8,
                            cursor:
                              spinning || isAutoSpinning
                                ? "not-allowed"
                                : "pointer",
                            opacity: spinning || isAutoSpinning ? 0.6 : 1,
                            transition: "all 0.2s",
                          }}
                        >
                          {spinning ? "돌아가는 중" : "리셋"}
                        </SpinButton>
                        <MoreButton
                          onClick={() => setOpenModal(type)}
                          disabled={isAutoSpinning}
                          style={{
                            minWidth: 80,
                            height: 36,
                            fontSize: 15,
                            fontWeight: 600,
                            borderRadius: 8,
                            background: "#f3f4f6",
                            color: "#009499",
                            border: "1px solid #009499",
                            cursor: isAutoSpinning ? "not-allowed" : "pointer",
                            opacity: isAutoSpinning ? 0.6 : 1,
                            transition: "all 0.2s",
                          }}
                        >
                          직접 선택
                        </MoreButton>
                      </ReelControls>
                    </ReelContainer>
                  );
                })}
              </ReelGrid>

              <MainSpinButton
                onClick={spinAllMachines}
                disabled={
                  Object.values(isSpinning).some(Boolean) || isAutoSpinning
                }
                style={{
                  minWidth: 160,
                  height: 44,
                  fontSize: 18,
                  fontWeight: 700,
                  borderRadius: 10,
                  background: "#009499",
                  color: "#fff",
                  border: "none",
                  margin: "24px auto 0",
                  display: "block",
                  cursor:
                    Object.values(isSpinning).some(Boolean) || isAutoSpinning
                      ? "not-allowed"
                      : "pointer",
                  opacity:
                    Object.values(isSpinning).some(Boolean) || isAutoSpinning
                      ? 0.6
                      : 1,
                  transition: "all 0.2s",
                }}
              >
                {Object.values(isSpinning).some(Boolean) || isAutoSpinning
                  ? "돌아가는 중..."
                  : "전체 리셋"}
              </MainSpinButton>
            </SlotMachineScreen>

            {showResults && Object.keys(selectedItems).length === 3 && (
              <PriceSection>
                <PriceGrid>
                  <PriceItem>
                    <PriceLabel>패키지 금액</PriceLabel>
                    <PriceValue>{subtotal.toLocaleString()}원</PriceValue>
                  </PriceItem>
                  <PriceItem>
                    <PriceLabel>수수료 (5%)</PriceLabel>
                    <PriceValue>{fee.toLocaleString()}원</PriceValue>
                  </PriceItem>
                  <PriceItem>
                    <PriceLabel>총 결제금액</PriceLabel>
                    <PriceValue $isTotal={true}>
                      {total.toLocaleString()}원
                    </PriceValue>
                  </PriceItem>
                </PriceGrid>

                <DecisionButton
                  onClick={() => {
                    localStorage.setItem(
                      "selectedTravelItems",
                      JSON.stringify(selectedItems)
                    );
                    navigate("/route");
                  }}
                  disabled={isAutoSpinning}
                >
                  이 코스로 결정하기!
                </DecisionButton>
              </PriceSection>
            )}
          </SlotMachineContent>
        </SlotMachineCard>

        <BottomInfo></BottomInfo>
      </Container>

      {/* 선택 모달 */}
      {openModal && (
        <ModalOverlay onClick={() => setOpenModal(null)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>
                  {getTypeIcon(openModal)} {getTypeName(openModal)} 선택
                </ModalTitle>
              </ModalHeader>
              <ModalGrid>
                {dataByCategory[openModal]?.map((option) => (
                  <OptionCard
                    key={option.id}
                    onClick={() => selectSpecificItem(openModal, option)}
                  >
                    <OptionImage>
                      <img
                        src={option.image || "/placeholder.svg"}
                        alt={option.name}
                      />
                    </OptionImage>
                    <OptionInfo>
                      <div>
                        <OptionName>{option.name}</OptionName>
                      </div>
                      <OptionDesc>{option.description}</OptionDesc>
                      <OptionFooter>
                        <OptionBadge>
                          {(() => {
                            let priceNum = 0;
                            console.log("option.price:", option.price);
                            if (
                              option.price !== undefined &&
                              option.price !== null
                            ) {
                              if (typeof option.price === "string") {
                                priceNum = Number(option.price.trim());
                              } else {
                                priceNum = Number(option.price);
                              }
                            }
                            console.log("option priceNum:", priceNum);
                            if (priceNum === 0) return "무료";
                            if (!isNaN(priceNum))
                              return `${priceNum.toLocaleString()}원`;
                            return "가격정보 없음";
                          })()}
                        </OptionBadge>
                        <SelectButton
                          onClick={(e) => {
                            e.stopPropagation();
                            selectSpecificItem(openModal, option);
                          }}
                        >
                          선택
                        </SelectButton>
                      </OptionFooter>
                    </OptionInfo>
                  </OptionCard>
                ))}
              </ModalGrid>
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}

      {/* 상세 정보 모달 */}
      {detailModal.open && detailModal.item && (
        <DetailModalOverlay
          onClick={() => setDetailModal({ open: false, item: null })}
        >
          <DetailModalRoot onClick={(e) => e.stopPropagation()}>
            <DetailModalCard>
              {/* 닫기 버튼 */}
              <DetailModalClose
                onClick={() => setDetailModal({ open: false, item: null })}
              >
                ×
              </DetailModalClose>

              {/* 헤더(이름) */}
              <DetailModalHeader>
                <h2>{detailModal.item.name}</h2>
              </DetailModalHeader>

              {/* 이미지 */}
              <DetailModalImage>
                <img
                  src={detailModal.item.image || "/placeholder.svg"}
                  alt={detailModal.item.name}
                />
              </DetailModalImage>

              {/* 설명 */}
              <DetailModalDesc>
                <p>{detailModal.item.description || "상세 정보가 없습니다."}</p>
              </DetailModalDesc>

              {/* 지도 */}
              <DetailModalMap>
                <iframe
                  title="위치 지도"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://maps.google.com/maps?q=${detailModal.item.position.lat},${detailModal.item.position.lng}&z=15&output=embed`}
                  allowFullScreen
                />
              </DetailModalMap>

              {/* 액션 버튼 */}
              <DetailModalAction>
                <DetailModalMapBtn
                  onClick={() => {
                    window.open(
                      `https://maps.google.com/maps?q=${detailModal.item.position.lat},${detailModal.item.position.lng}&z=15`,
                      "_blank"
                    );
                  }}
                >
                  🗺️ 구글 지도에서 보기
                </DetailModalMapBtn>
              </DetailModalAction>
            </DetailModalCard>
          </DetailModalRoot>
        </DetailModalOverlay>
      )}

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </PageWrapper>
  );
}

export default PachinkoPage;
