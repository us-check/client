"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

// QR 코드 패턴 (21x21 그리드의 간단한 패턴)
const QR_PATTERN = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
]

 const containerStyle = {
   minHeight: "100vh",
   background: " rgba(0, 0, 0, 0.7)",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   padding: "2rem",
 }



const gridStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  gridTemplateColumns: "repeat(21, 1fr)",
  gap: "1px",
  width: "420px",
  height: "420px",
}

const gridCellStyle = {
  border: "1px solid rgba(255, 255, 255, 0.2)",
}

const qrContainerStyle = {
  position: "relative",
  width: "420px",
  height: "420px",
}

const squareStyle = {
  position: "absolute",
  width: "20px",
  height: "20px",
  backgroundColor: "white",
  borderRadius: "2px",
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
}

const glowStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "8px",
  boxShadow: "0 0 50px rgba(255, 255, 255, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.1)",
  background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
}

const textContainerStyle = {
  marginTop: "2rem",
  textAlign: "center",
}

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "white",
  marginBottom: "0.5rem",
}

const subtitleStyle = {
  color: "#d1d5db",
}

export default function QRAssembly() {
  const [squares, setSquares] = useState([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [showGrid, setShowGrid] = useState(false)
  const navigate = useNavigate();

useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/myreservation");
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  const generateSquares = () => {
    const newSquares = []

    QR_PATTERN.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === 1) {
          // 화면 사방에서 랜덤한 시작 위치 생성
          const side = Math.floor(Math.random() * 4) // 0: 위, 1: 오른쪽, 2: 아래, 3: 왼쪽
          let startX, startY

          switch (side) {
            case 0: // 위쪽에서
              startX = Math.random() * window.innerWidth
              startY = -50
              break
            case 1: // 오른쪽에서
              startX = window.innerWidth + 50
              startY = Math.random() * window.innerHeight
              break
            case 2: // 아래쪽에서
              startX = Math.random() * window.innerWidth
              startY = window.innerHeight + 50
              break
            case 3: // 왼쪽에서
              startX = -50
              startY = Math.random() * window.innerHeight
              break
            default:
              startX = 0
              startY = 0
          }

          newSquares.push({
            id: `${rowIndex}-${colIndex}`,
            row: rowIndex,
            col: colIndex,
            isBlack: true,
            startX,
            startY,
          })
        }
      })
    })

    setSquares(newSquares)
  }

  const startAnimation = () => {
    setIsAnimating(false)
    setShowGrid(false)
    generateSquares()

    setTimeout(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setShowGrid(true)
      }, 2000)
    }, 100)
  }

  useEffect(() => {
    startAnimation()
  }, [])

  return (
    <motion.div 
        style={containerStyle}
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        transition={{ duration: 1.2 }}
    >
      <div style={{ position: "relative" }}>
        {/* QR 코드 그리드 배경 */}
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={gridStyle}
          >
            {Array.from({ length: 21 * 21 }).map((_, index) => (
              <div key={index} style={gridCellStyle} />
            ))}
          </motion.div>
        )}

        {/* 날아오는 네모들 */}
        <div style={qrContainerStyle}>
          {squares.map((square, index) => (
            <motion.div
              key={square.id}
              style={squareStyle}
              initial={{
                x: square.startX - 210, // 중앙 기준으로 조정
                y: square.startY - 210,
                scale: 0.3,
                opacity: 1,
                rotate: Math.random() * 360,
              }}
              animate={
                isAnimating
                  ? {
                      x: square.col * 20,
                      y: square.row * 20,
                      scale: 1,
                      opacity: 1,
                      rotate: 0,
                    }
                  : {}
              }
              transition={{
                duration: 2,
                delay: index * 0.01,
                ease: "easeOut",
                scale: {
                  duration: 2,
                },
                opacity: {
                  duration: 0.1,
                },
              }}
            />
          ))}
        </div>

        {/* 완성된 QR 코드 글로우 효과 */}
        {showGrid && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={glowStyle}
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showGrid ? 1 : 0, y: showGrid ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={textContainerStyle}
      >
        <h2 style={titleStyle}>QR 코드 생성 중!</h2>
        <p style={subtitleStyle}>잠시만 기다려주세요.</p>
      </motion.div>
    </motion.div>
  )
}
