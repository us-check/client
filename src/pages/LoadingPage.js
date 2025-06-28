import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoadingWrapper,
  LoadingSpinner,
  LoadingText,
  LoadingSubtext,
} from "../styles/LoadingPageStyle";

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
        navigate("/");
      }
    })();
  }, [navigate]);

  return (
    <LoadingWrapper>
      <LoadingSpinner />
      <LoadingText>AI가 맞춤 여행 코스를 분석 중입니다...</LoadingText>
      <LoadingSubtext>잠시만 기다려주세요!</LoadingSubtext>
    </LoadingWrapper>
  );
}

export default LoadingPage;