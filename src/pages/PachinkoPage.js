"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
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
  ResultEmoji,
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
  OptionEmoji,
  OptionName,
  OptionDesc,
  OptionFooter,
  OptionBadge,
  SelectButton,
} from "../styles/PachinkoPageStyle"

const sampleData = {
  attraction: [
    {
      id: "a1",
      name: "의성 조문국사적지",
      price: 3000,
      description: "의성 조문국사적지는 고대 조문국의 역사와 문화를 만날 수 있는 대표적인 유적지입니다. 다양한 유물과 전시관, 아름다운 자연경관이 어우러져 있습니다.",
      image: "/placeholder.svg",
      type: "attraction",
      emoji: "🏛️",
      position: { lat: 36.352, lng: 128.697 },
    },
    {
      id: "a2",
      name: "의성 빙계계곡",
      price: 0,
      description: "빙계계곡은 여름에도 얼음이 녹지 않는 신비로운 계곡으로, 맑은 물과 시원한 바람이 특징입니다.",
      image: "/placeholder.svg",
      type: "attraction",
      emoji: "🏔️",
      position: { lat: 36.420, lng: 128.680 },
    },
    {
      id: "a3",
      name: "의성 산수유마을",
      price: 2000,
      description: "산수유마을은 봄에는 노란 산수유꽃, 가을에는 붉은 열매로 유명한 아름다운 마을입니다.",
      image: "/placeholder.svg",
      type: "attraction",
      emoji: "🌸",
      position: { lat: 36.370, lng: 128.710 },
    },
    {
      id: "a4",
      name: "의성 고운사",
      price: 1500,
      description: "고운사는 천년의 역사를 지닌 고찰로, 아름다운 자연과 고즈넉한 분위기가 인상적입니다.",
      image: "/placeholder.svg",
      type: "attraction",
      emoji: "⛩️",
      position: { lat: 36.400, lng: 128.650 },
    },
  ],
  restaurant: [
    {
      id: "r1",
      name: "의성마늘한우",
      price: 35000,
      description: "의성마늘한우는 신선한 한우와 의성 특산 마늘을 함께 즐길 수 있는 고급 레스토랑입니다.",
      image: "/placeholder.svg",
      type: "restaurant",
      emoji: "🥩",
      position: { lat: 36.355, lng: 128.700 },
    },
    {
      id: "r2",
      name: "전통 손두부집",
      price: 12000,
      description: "전통 손두부집은 직접 만든 신선한 두부로 다양한 한식을 제공하는 맛집입니다.",
      image: "/placeholder.svg",
      type: "restaurant",
      emoji: "🍲",
      position: { lat: 36.360, lng: 128.705 },
    },
    {
      id: "r3",
      name: "의성 마늘치킨",
      price: 18000,
      description: "의성 마늘치킨은 마늘을 듬뿍 사용한 의성만의 특별한 치킨을 맛볼 수 있습니다.",
      image: "/placeholder.svg",
      type: "restaurant",
      emoji: "🍗",
      position: { lat: 36.365, lng: 128.710 },
    },
    {
      id: "r4",
      name: "산채비빔밥집",
      price: 15000,
      description: "산채비빔밥집은 신선한 산나물과 다양한 재료로 건강한 한 끼를 제공합니다.",
      image: "/placeholder.svg",
      type: "restaurant",
      emoji: "🍚",
      position: { lat: 36.370, lng: 128.715 },
    },
  ],
  accommodation: [
    {
      id: "h1",
      name: "의성 힐링펜션",
      price: 80000,
      description: "의성 힐링펜션은 자연 속에서 편안한 휴식을 취할 수 있는 펜션입니다.",
      image: "/placeholder.svg",
      type: "accommodation",
      emoji: "🏡",
      position: { lat: 36.375, lng: 128.720 },
    },
    {
      id: "h2",
      name: "전통한옥스테이",
      price: 120000,
      description: "전통한옥스테이는 한국의 전통미와 현대적 편의시설을 모두 갖춘 숙박시설입니다.",
      image: "/placeholder.svg",
      type: "accommodation",
      emoji: "🏯",
      position: { lat: 36.380, lng: 128.725 },
    },
    {
      id: "h3",
      name: "의성 글램핑장",
      price: 95000,
      description: "의성 글램핑장은 자연과 함께하는 럭셔리한 캠핑 경험을 제공합니다.",
      image: "/placeholder.svg",
      type: "accommodation",
      emoji: "⛺",
      position: { lat: 36.385, lng: 128.730 },
    },
  ],
}

function PachinkoPage() {
  const [selectedItems, setSelectedItems] = useState({})
  const [isSpinning, setIsSpinning] = useState({})
  const [travelPlan] = useState(["attraction", "restaurant", "accommodation"])
  const [isAutoSpinning, setIsAutoSpinning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [openModal, setOpenModal] = useState(null)
  const [detailModal, setDetailModal] = useState({ open: false, item: null }) // 상세 정보 모달 상태
  const navigate = useNavigate()

  useEffect(() => {
    console.log("PachinkoPage mounted")

    const shouldAutoSpin = localStorage.getItem("shouldAutoSpin")
    console.log("shouldAutoSpin:", shouldAutoSpin)

    // 항상 스핀 애니메이션을 보여주도록 수정
    setTimeout(() => {
      if (shouldAutoSpin === "true") {
        console.log("Starting auto spin from main page...")
        localStorage.removeItem("shouldAutoSpin")
        startAutoSpin()
      } else {
        console.log("Starting initial spin...")
        startInitialSpin() // 새로운 함수 호출
      }
    }, 500)
  }, [])

  const startInitialSpin = () => {
    console.log("Initial spin started")
    setIsAutoSpinning(false) // 자동 스핀이 아님을 명시
    setShowResults(false)
    setSelectedItems({})

    // 모든 릴을 스핀 상태로 설정
    const initialSpinning = {}
    travelPlan.forEach((type) => {
      initialSpinning[type] = true
    })
    setIsSpinning(initialSpinning)

    // 최종 결과 미리 선택
    const finalResults = {}
    travelPlan.forEach((type) => {
      const items = sampleData[type]
      if (items && items.length > 0) {
        finalResults[type] = items[Math.floor(Math.random() * items.length)]
      }
    })
    console.log("Final results for initial spin:", finalResults)

    // 각 릴을 순차적으로 멈춤 (자동 스핀보다 빠르게)
    travelPlan.forEach((type, index) => {
      setTimeout(
        () => {
          console.log(`Stopping initial spin for ${type}`)

          // 결과 설정
          setSelectedItems((prev) => ({ ...prev, [type]: finalResults[type] }))

          // 스핀 상태 해제
          setIsSpinning((prev) => ({ ...prev, [type]: false }))

          // 마지막 릴이 멈추면 결과 표시
          if (index === travelPlan.length - 1) {
            setTimeout(() => {
              console.log("Initial spin completed")
              setShowResults(true)
            }, 100)
          }
        },
        1500 + index * 400,
      ) // 자동 스핀보다 빠른 타이밍
    })
  }

  const startAutoSpin = () => {
    console.log("Auto spin started")
    setIsAutoSpinning(true)
    setShowResults(false)
    setSelectedItems({})

    // 모든 릴을 스핀 상태로 설정
    const initialSpinning = {}
    travelPlan.forEach((type) => {
      initialSpinning[type] = true
    })
    setIsSpinning(initialSpinning)

    // 최종 결과 미리 선택
    const finalResults = {}
    travelPlan.forEach((type) => {
      const items = sampleData[type]
      if (items && items.length > 0) {
        finalResults[type] = items[Math.floor(Math.random() * items.length)]
      }
    })
    console.log("Final results for auto spin:", finalResults)

    // 각 릴을 순차적으로 멈춤
    travelPlan.forEach((type, index) => {
      setTimeout(
        () => {
          console.log(`Stopping spin for ${type}`)

          // 결과 설정
          setSelectedItems((prev) => ({ ...prev, [type]: finalResults[type] }))

          // 스핀 상태 해제
          setIsSpinning((prev) => ({ ...prev, [type]: false }))

          // 마지막 릴이 멈추면 자동 스핀 완료
          if (index === travelPlan.length - 1) {
            setTimeout(() => {
              console.log("Auto spin completed")
              setIsAutoSpinning(false)
              setShowResults(true)
            }, 100)
          }
        },
        2500 + index * 500,
      )
    })
  }

  const spinAllMachines = () => {
    console.log("Manual spin all started")
    setIsAutoSpinning(false)
    setShowResults(false)

    // 모든 릴을 스핀 상태로 설정
    const initialSpinning = {}
    travelPlan.forEach((type) => {
      initialSpinning[type] = true
    })
    setIsSpinning(initialSpinning)

    // 최종 결과 미리 선택
    const finalResults = {}
    travelPlan.forEach((type) => {
      const items = sampleData[type]
      if (items && items.length > 0) {
        finalResults[type] = items[Math.floor(Math.random() * items.length)]
      }
    })

    // 각 릴을 순차적으로 멈춤
    travelPlan.forEach((type, index) => {
      setTimeout(
        () => {
          console.log(`Stopping manual spin for ${type}`)

          // 결과 설정
          setSelectedItems((prev) => ({ ...prev, [type]: finalResults[type] }))

          // 스핀 상태 해제
          setIsSpinning((prev) => ({ ...prev, [type]: false }))

          // 마지막 릴이 멈추면 결과 표시
          if (index === travelPlan.length - 1) {
            setTimeout(() => {
              console.log("Manual spin completed")
              setShowResults(true)
            }, 100)
          }
        },
        2000 + index * 500,
      )
    })
  }

  const spinMachine = (type) => {
    console.log(`Manual spin for ${type}`)
    setIsSpinning((prev) => ({ ...prev, [type]: true }))

    setTimeout(() => {
      const items = sampleData[type]
      if (items) {
        const randomItem = items[Math.floor(Math.random() * items.length)]
        setSelectedItems((prev) => ({ ...prev, [type]: randomItem }))
      }
      setIsSpinning((prev) => ({ ...prev, [type]: false }))
    }, 2000)
  }

  const selectSpecificItem = (type, item) => {
    setSelectedItems((prev) => ({ ...prev, [type]: item }))
    setOpenModal(null)
  }

  const getTotalPrice = () => {
    const subtotal = Object.values(selectedItems).reduce((sum, item) => sum + item.price, 0)
    const fee = Math.floor(subtotal * 0.05)
    return { subtotal, fee, total: subtotal + fee }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "attraction":
        return "📍"
      case "restaurant":
        return "🍽️"
      case "accommodation":
        return "🏨"
      default:
        return ""
    }
  }

  const getTypeName = (type) => {
    switch (type) {
      case "attraction":
        return "관광지"
      case "restaurant":
        return "음식점"
      case "accommodation":
        return "숙박시설"
      default:
        return ""
    }
  }

  const { subtotal, fee, total } = getTotalPrice()

  return (
    <PageWrapper>
      <Header>
        <LogoSection>
          <LogoIcon>🏠</LogoIcon>
          <LogoText>의성제크</LogoText>
        </LogoSection>
        <MenuButton>☰</MenuButton>
      </Header>

      <Container>
        <Title>맞춤 여행 코스</Title>
        {isAutoSpinning ? (
          <Subtitle isAnimated>✨ AI가 맞춤 여행 코스를 생성하고 있습니다... ✨</Subtitle>
        ) : (
          <Subtitle>완벽한 여행 코스를 만들어보세요!</Subtitle>
        )}

        <SlotMachineCard>
          <SlotMachineContent>
            <SlotMachineScreen>
              <ReelGrid>
                {travelPlan.map((type, index) => {
                  const item = selectedItems[type]
                  const spinning = isSpinning[type]

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
                              const itemIndex = idx % sampleData[type].length
                              const spinItem = sampleData[type][itemIndex]
                              return (
                                <SpinItem key={idx}>
                                  <div>{spinItem.emoji}</div>
                                  <div>{spinItem.name}</div>
                                </SpinItem>
                              )
                            })}
                          </SpinningContent>
                        ) : showResults && item ? (
                          <ResultContent onClick={() => setDetailModal({ open: true, item })} style={{ cursor: 'pointer' }}>
                            <ResultEmoji>{item.emoji}</ResultEmoji>
                            <ResultTitle>{item.name}</ResultTitle>
                            <ResultDescription>{item.description}</ResultDescription>
                            <ResultBadge>{item.price === 0 ? "무료" : `${item.price.toLocaleString()}원`}</ResultBadge>
                          </ResultContent>
                        ) : (
                          <WaitingContent>
                            <div>🎰</div>
                            <p>결과를 기다리는 중...</p>
                          </WaitingContent>
                        )}
                      </ReelScreen>

                      <ReelControls>
                        <SpinButton onClick={() => spinMachine(type)} disabled={spinning || isAutoSpinning}>
                          🔄 {spinning ? "돌리는중" : "다시"}
                        </SpinButton>
                        <MoreButton onClick={() => setOpenModal(type)} disabled={isAutoSpinning}>
                          ⋯
                        </MoreButton>
                      </ReelControls>
                    </ReelContainer>
                  )
                })}
              </ReelGrid>

              <MainSpinButton
                onClick={spinAllMachines}
                disabled={Object.values(isSpinning).some(Boolean) || isAutoSpinning}
              >
                ⚡ {Object.values(isSpinning).some(Boolean) || isAutoSpinning ? "스핀 중..." : "🎰 전체 스핀 🎰"}
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
                    localStorage.setItem("selectedTravelItems", JSON.stringify(selectedItems))
                    navigate("/route")
                  }}
                  disabled={isAutoSpinning}
                >
                  🛒 이 코스로 결정하기! ✨
                </DecisionButton>
              </PriceSection>
            )}
          </SlotMachineContent>
        </SlotMachineCard>

        <BottomInfo>
          <p>🍀 완벽한 여행 코스가 나올 때까지 스핀해보세요! 🍀</p>
        </BottomInfo>
      </Container>

      {/* 모달 */}
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
                {sampleData[openModal]?.map((option) => (
                  <OptionCard key={option.id} onClick={() => selectSpecificItem(openModal, option)}>
                    <OptionImage>
                      <img src={option.image || "/placeholder.svg"} alt={option.name} />
                    </OptionImage>
                    <OptionInfo>
                      <div>
                        <OptionEmoji>{option.emoji}</OptionEmoji>
                        <OptionName>{option.name}</OptionName>
                      </div>
                      <OptionDesc>{option.description}</OptionDesc>
                      <OptionFooter>
                        <OptionBadge>{option.price === 0 ? "무료" : `${option.price.toLocaleString()}원`}</OptionBadge>
                        <SelectButton
                          onClick={(e) => {
                            e.stopPropagation()
                            selectSpecificItem(openModal, option)
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
        <ModalOverlay onClick={() => setDetailModal({ open: false, item: null })}>
          <Modal onClick={e => e.stopPropagation()}>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>
                  {detailModal.item.emoji} {detailModal.item.name}
                </ModalTitle>
              </ModalHeader>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <img src={detailModal.item.image || '/placeholder.svg'} alt={detailModal.item.name} style={{ width: 240, borderRadius: 12 }} />
                <div style={{ fontWeight: 500, fontSize: 18, margin: '8px 0' }}>{detailModal.item.description}</div>
                {/* 지도 표시 */}
                <div style={{ width: 320, height: 200, margin: '12px 0' }}>
                  <iframe
                    title="지도"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, borderRadius: 8 }}
                    src={`https://maps.google.com/maps?q=${detailModal.item.position.lat},${detailModal.item.position.lng}&z=15&output=embed`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}
    </PageWrapper>
  )
}

export default PachinkoPage;