"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
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
  WaitingContent,
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

// getTypeIcon, getTypeName 함수가 아래에서 사용되므로 함수 선언을 컴포넌트 함수 위로 이동
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
    // eslint-disable-next-line
  }, [dataByCategory]); // startInitialSpin 의존성 경고 무시

  useEffect(() => {
    console.log("PachinkoPage mounted");
    const shouldAutoSpin = localStorage.getItem("shouldAutoSpin");
    console.log("shouldAutoSpin:", shouldAutoSpin);
    setTimeout(() => {
      if (shouldAutoSpin === "true") {
        console.log("Starting auto spin from main page...");
        localStorage.removeItem("shouldAutoSpin");
        startAutoSpin();
      }
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // startAutoSpin 의존성 경고 무시

  useEffect(() => {
    async function fetchData() {
      const data = [
        {
          contentid: "2604657",
          contenttypeid: "32",
          title: "초해고택[한국관광 품질인증/Korea Quality]",
          overview: "한옥스테이와 전통체험이 가능한 고택입니다.",
          firstimage:
            "http://tong.visitkorea.or.kr/cms/resource/59/3021359_image2_1.jpg",
          price: 120000,
          mapx: "128.7628960654",
          mapy: "36.4245962361",
        },
        {
          contentid: "2604658",
          contenttypeid: "32",
          title: "의성힐링펜션",
          overview: "자연 속에서 쉴 수 있는 힐링 펜션.",
          firstimage:
            "http://tong.visitkorea.or.kr/cms/resource/00/3000001_image2_1.jpg",
          price: 90000,
          mapx: "128.7700000000",
          mapy: "36.4200000000",
        },
        {
          contentid: "2604659",
          contenttypeid: "32",
          title: "전통한옥스테이",
          overview: "한국 전통미와 현대적 편의시설을 모두 갖춘 숙박시설.",
          firstimage: "",
          price: 150000,
          mapx: "128.7800000000",
          mapy: "36.4300000000",
        },
        {
          contentid: "3000001",
          contenttypeid: "39",
          title: "의성마늘한우",
          overview: "의성마늘과 한우를 함께 즐길 수 있는 음식점.",
          firstimage:
            "http://tong.visitkorea.or.kr/cms/resource/00/3000000_image2_1.jpg",
          price: 35000,
          mapx: "128.7000000000",
          mapy: "36.3550000000",
        },
        {
          contentid: "3000002",
          contenttypeid: "39",
          title: "전통 손두부집",
          overview: "직접 만든 신선한 두부로 다양한 한식을 제공하는 맛집.",
          firstimage: "",
          price: 12000,
          mapx: "128.7050000000",
          mapy: "36.3600000000",
        },
        {
          contentid: "3000003",
          contenttypeid: "39",
          title: "의성 마늘치킨",
          overview: "의성 마늘을 듬뿍 사용한 특별한 치킨.",
          firstimage:
            "http://tong.visitkorea.or.kr/cms/resource/00/3000002_image2_1.jpg",
          price: 18000,
          mapx: "128.7100000000",
          mapy: "36.3650000000",
        },
        {
          contentid: "2629039",
          contenttypeid: "14",
          title: "의성 조문국박물관",
          overview: "고대 조문국의 역사를 만날 수 있는 박물관.",
          firstimage:
            "http://tong.visitkorea.or.kr/cms/resource/86/3488486_image2_1.jpg",
          price: 3000,
          mapx: "128.6693835816",
          mapy: "36.2767307586",
        },
        {
          contentid: "2629040",
          contenttypeid: "14",
          title: "의성 빙계계곡",
          overview: "여름에도 얼음이 녹지 않는 신비로운 계곡.",
          firstimage: "",
          price: 0,
          mapx: "128.6800000000",
          mapy: "36.4200000000",
        },
        {
          contentid: "2629041",
          contenttypeid: "14",
          title: "의성 산수유마을",
          overview: "봄에는 노란 산수유꽃, 가을에는 붉은 열매로 유명한 마을.",
          firstimage:
            "http://tong.visitkorea.or.kr/cms/resource/00/3000003_image2_1.jpg",
          price: 2000,
          mapx: "128.7100000000",
          mapy: "36.3700000000",
        },
      ];

      setDataByCategory(categorizeServerData(data));
    }

    fetchData();
  }, []);

  const startInitialSpin = () => {
    console.log("Initial spin started");
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

    console.log("Final results for initial spin:", finalResults);

    travelPlan.forEach((type, index) => {
      setTimeout(() => {
        console.log(`Stopping initial spin for ${type}`);
        setSelectedItems((prev) => ({ ...prev, [type]: finalResults[type] }));
        setIsSpinning((prev) => ({ ...prev, [type]: false }));

        if (index === travelPlan.length - 1) {
          setTimeout(() => {
            console.log("Initial spin completed");
            setShowResults(true);
          }, 100);
        }
      }, 1500 + index * 400);
    });
  };

  const startAutoSpin = () => {
    console.log("Auto spin started");
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

    console.log("Final results for auto spin:", finalResults);

    travelPlan.forEach((type, index) => {
      setTimeout(() => {
        console.log(`Stopping spin for ${type}`);
        setSelectedItems((prev) => ({ ...prev, [type]: finalResults[type] }));
        setIsSpinning((prev) => ({ ...prev, [type]: false }));

        if (index === travelPlan.length - 1) {
          setTimeout(() => {
            console.log("Auto spin completed");
            setIsAutoSpinning(false);
            setShowResults(true);
          }, 100);
        }
      }, 2500 + index * 500);
    });
  };

  const spinAllMachines = () => {
    console.log("Manual spin all started");
    setIsAutoSpinning(false);
    setShowResults(false);
    setSelectedItems({}); // 스핀 시작 시 기존 결과값 즉시 숨김

    // 모든 릴을 스핀 상태로 설정
    const initialSpinning = {};
    travelPlan.forEach((type) => {
      initialSpinning[type] = true;
    });
    setIsSpinning(initialSpinning);

    // 최종 결과 미리 선택
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

                      <ReelScreen>
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
                                      width: 36,
                                      height: 36,
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
                        ) : showResults && item ? (
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
                                  width: 80,
                                  height: 80,
                                  borderRadius: 12,
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <ResultTitle>{item.name}</ResultTitle>
                            <ResultDescription>
                              {item.description}
                            </ResultDescription>
                            <ResultBadge>
                              {Number(item.price) === 0
                                ? "무료"
                                : `${Number(item.price).toLocaleString()}원`}
                            </ResultBadge>
                          </ResultContent>
                        ) : (
                          <WaitingContent>
                            <div>🎰</div>
                            <p>결과를 기다리는 중...</p>
                          </WaitingContent>
                        )}
                      </ReelScreen>

                      <ReelControls>
                        <SpinButton
                          onClick={() => spinMachine(type)}
                          disabled={spinning || isAutoSpinning}
                        >
                          🔄 {spinning ? "돌아가는 중" : "다시"}
                        </SpinButton>
                        <MoreButton
                          onClick={() => setOpenModal(type)}
                          disabled={isAutoSpinning}
                        >
                          ⋯
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
              >
                ⚡{" "}
                {Object.values(isSpinning).some(Boolean) || isAutoSpinning
                  ? "돌아가는 중..."
                  : "전부 다시 돌리기"}
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
                    <PriceValue isTotal>{total.toLocaleString()}원</PriceValue>
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
                          {Number(option.price) === 0
                            ? "무료"
                            : `${Number(option.price).toLocaleString()}원`}
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

      {/* 개선된 상세 정보 모달 */}
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
