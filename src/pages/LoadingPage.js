import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoadingPage.css";

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const searchText = localStorage.getItem("searchText");
    if (!searchText) {
      navigate("/");
      return;
    }
    (async () => {
      try {
        const res = await fetch("http://192.168.0.48:8000/api/query/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: searchText }),
        });
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem("pachinkoData", JSON.stringify(data));
          navigate("/pachinko");
        }
      } catch (e) {
        // 에러 시 홈으로 이동 또는 에러 안내
        navigate("/");
      }
    })();
  }, [navigate]);

  return (
    <div className="loading-wrapper">
      <div className="loading-spinner" />
      <div className="loading-text">AI가 맞춤 여행 코스를 분석 중입니다...</div>
      <div className="loading-subtext">잠시만 기다려주세요!</div>
    </div>
  );
}

export default LoadingPage;
