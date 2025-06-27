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
      description: "고대 조문국의 역사를 만날 수 있는 곳",
      image: "/placeholder.svg",
      type: "attraction",
      emoji: "🏛️",
    },
    {
      id: "a2",
      name: "의성 빙계계곡",
      price: 0,
      description: "여름에도 시원한 천연 에어컨",
      image: "/placeholder.svg",
      type: "attraction",
      emoji: "🏔️",
    },
    {
      id: "a3",
      name: "의성 산수유마을",
      price: 2000,
      description: "봄에는 노란 꽃, 가을에는 빨간 열매",
      image: "/placeholder.svg",
      type: "attraction",
      emoji: "🌸",
    },
    {
      id: "a4",
      name: "의성 고운사",
      price: 1500,
      description: "천년고찰의 아름다운 풍경",
      image: "/placeholder.svg",
      type: "attraction",
      emoji: "⛩️",
    },
  ],
  restaurant: [
    {
      id: "r1",
      name: "의성마늘한우",
      price: 35000,
      description: "의성 특산 마늘과 한우의 만남",
      image: "/placeholder.svg",
      type: "restaurant",
      emoji: "🥩",
    },
    {
      id: "r2",
      name: "전통 손두부집",
      price: 12000,
      description: "직접 만든 순두부찌개",
      image: "/placeholder.svg",
      type: "restaurant",
      emoji: "🍲",
    },
    {
      id: "r3",
      name: "의성 마늘치킨",
      price: 18000,
      description: "마늘의 고장 의성만의 특별한 치킨",
      image: "/placeholder.svg",
      type: "restaurant",
      emoji: "🍗",
    },
    {
      id: "r4",
      name: "산채비빔밥집",
      price: 15000,
      description: "신선한 산나물로 만든 건강한 한 끼",
      image: "/placeholder.svg",
      type: "restaurant",
      emoji: "🍚",
    },
  ],
  accommodation: [
    {
      id: "h1",
      name: "의성 힐링펜션",
      price: 80000,
      description: "자연 속에서 힐링하는 펜션",
      image: "/placeholder.svg",
      type: "accommodation",
      emoji: "🏡",
    },
    {
      id: "h2",
      name: "전통한옥스테이",
      price: 120000,
      description: "한국의 전통미를 느낄 수 있는 한옥",
      image: "/placeholder.svg",
      type: "accommodation",
      emoji: "🏯",
    },
    {
      id: "h3",
      name: "의성 글램핑장",
      price: 95000,
      description: "자연과 함께하는 럭셔리 캠핑",
      image: "/placeholder.svg",
      type: "accommodation",
      emoji: "⛺",
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
                          <ResultContent>
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
    </PageWrapper>
  )
}

export default PachinkoPage;