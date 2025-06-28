import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

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

const containerBase = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
};

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
};

const gridCellStyle = {
  border: "1px solid rgba(0, 0, 0, 0.05)",
};

const qrContainerStyle = {
  position: "relative",
  width: "420px",
  height: "420px",
};

const squareBase = {
  position: "absolute",
  width: "20px",
  height: "20px",
  borderRadius: "2px",
};

const glowStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "8px",
  boxShadow:
    "0 0 50px rgba(255, 255, 255, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.1)",
  background:
    "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
};

const textContainerStyle = {
  marginTop: "2rem",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const subtitleStyle = {
  color: "#6b7280",
};

export default function QRAssembly() {
  const [squares, setSquares] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const to = setTimeout(() => navigate("/myreservation"), 6000);
    return () => clearTimeout(to);
  }, [navigate]);

  const generateSquares = () => {
    const newSquares = [];
    QR_PATTERN.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell === 1) {
          const side = Math.floor(Math.random() * 4);
          let startX, startY;
          switch (side) {
            case 0:
              startX = Math.random() * window.innerWidth;
              startY = -50;
              break;
            case 1:
              startX = window.innerWidth + 50;
              startY = Math.random() * window.innerHeight;
              break;
            case 2:
              startX = Math.random() * window.innerWidth;
              startY = window.innerHeight + 50;
              break;
            default:
              startX = -50;
              startY = Math.random() * window.innerHeight;
          }
          newSquares.push({
            id: `${r}-${c}`,
            row: r,
            col: c,
            startX,
            startY,
          });
        }
      });
    });
    setSquares(newSquares);
  };

  const startSequence = () => {
    setIsAnimating(false);
    setShowGrid(false);
    setIsFinished(false);
    generateSquares();

    setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setShowGrid(true);
        setTimeout(() => setIsFinished(true), 1000);
      }, 2000);
    }, 100);
  };

  useEffect(startSequence, []);

  return (
    <motion.div
      style={containerBase}
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ backgroundColor: isFinished ? "#ffffff" : "#000000" }}
      transition={{ duration: 1.2}}
    >
      <motion.div
        style={qrContainerStyle}
        animate={{ scale: isFinished ? 0.7 : 1 }} // QR 전체 축소
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {showGrid && (
          <motion.div
            style={gridStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {Array.from({ length: 21 * 21 }).map((_, i) => (
              <div key={i} style={gridCellStyle} />
            ))}
          </motion.div>
        )}

        {squares.map((sq, idx) => (
          <motion.div
            key={sq.id}
            style={{
              ...squareBase,
              backgroundColor: isFinished ? "#000000" : "#ffffff",
              boxShadow: isFinished
                ? "0 0 8px rgba(0,0,0,0.2)"
                : "0 0 10px rgba(255,255,255,0.5)",
            }}
            initial={{
              x: sq.startX - 210,
              y: sq.startY - 210,
              scale: 0.3,
              rotate: Math.random() * 360,
              opacity: 1,
            }}
            animate={
              isAnimating
                ? {
                    x: sq.col * 20,
                    y: sq.row * 20,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 2,
                      delay: idx * 0.01,
                      ease: "easeOut",
                    },
                  }
                : {}
            }
          />
        ))}

        {showGrid && (
          <motion.div
            style={glowStyle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isFinished ? 0 : 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        )}
      </motion.div>

      <motion.div
        style={textContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showGrid ? 1 : 0,
          y: showGrid ? 0 : 20,
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 style={{ ...titleStyle, color: isFinished ? "#000" : "#fff" }}>
          QR 코드 생성 중!
        </h2>
        <p style={subtitleStyle}>잠시만 기다려주세요.</p>
      </motion.div>
    </motion.div>
  );
}