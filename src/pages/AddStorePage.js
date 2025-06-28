import React, { useState, useEffect } from "react";
import {
  StorePageWrapper,
  StoreHeader,
  StoreLogoGroup,
  StoreLogoImage,
  StoreLogoText,
  StoreMenuIcon,
  StoreFormCard,
  StoreTitle,
  StoreDesc,
  StoreForm,
  StoreFormGroup,
  StoreLabel,
  StoreInput,
  StoreSelect,
  StoreButton,
  StoreNearbyList,
  StoreNearbyItem,
  StoreError,
  StoreFooter,
} from "../styles/AddStorePageStyle";

function AddStorePage() {
  const [form, setForm] = useState({
    name: "",
    type: "restaurant",
    address: "",
    price: "",
    businessNumber: "",
    lat: null,
    lng: null,
  });
  const [nearbyStores, setNearbyStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 예시 데이터 (실제 위치 대신)
  const exampleStores = [
    {
      id: 1,
      name: "의성마늘식당",
      address: "경북 의성군 의성읍 중앙로 123",
      lat: 36.353,
      lng: 128.697,
    },
    {
      id: 2,
      name: "의성한우식육식당",
      address: "경북 의성군 봉양면 봉양로 45",
      lat: 36.362,
      lng: 128.701,
    },
    {
      id: 3,
      name: "의성마늘펜션",
      address: "경북 의성군 단촌면 단촌로 77",
      lat: 36.347,
      lng: 128.689,
    },
  ];

  const handleFindNearby = () => {
    // 실제 위치 대신 예시 데이터 사용
    setNearbyStores(exampleStores);
    setError("");
    setLoading(false);
  };

  const handleSelectStore = (store) => {
    setForm((f) => ({
      ...f,
      name: store.name,
      address: store.address,
      lat: store.lat,
      lng: store.lng,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // 서버로 보낼 데이터 json 형태로 콘솔 출력
    const payload = { ...form };
    console.log("서버로 전송될 데이터:", JSON.stringify(payload, null, 2));
    try {
      const res = await fetch("/api/register-store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("등록 실패");
      alert("가게가 등록되었습니다!");
      setForm({
        name: "",
        type: "restaurant",
        address: "",
        price: "",
        businessNumber: "",
        lat: null,
        lng: null,
      });
      setNearbyStores([]);
    } catch (e) {
      setError("가게 등록에 실패했습니다.");
    }
    setLoading(false);
  };

  return (
    <StorePageWrapper>
      <StoreHeader>
        <StoreLogoGroup>
          <StoreLogoImage
            src={process.env.PUBLIC_URL + "/로고마늘.svg"}
            alt="로고"
          />
          <StoreLogoText>의성:Check</StoreLogoText>
        </StoreLogoGroup>
        <StoreMenuIcon src={process.env.PUBLIC_URL + "/menu.svg"} alt="메뉴" />
      </StoreHeader>
      <StoreFormCard>
        <StoreTitle>가게를 등록하시나요?</StoreTitle>
        <StoreDesc>새로운 가게 정보를 추가해보세요</StoreDesc>
        <StoreForm onSubmit={handleSubmit}>
          <StoreFormGroup>
            <StoreLabel htmlFor="name">가게 이름</StoreLabel>
            <StoreInput
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="가게 이름을 입력하세요"
              required
            />
          </StoreFormGroup>
          <StoreFormGroup>
            <StoreLabel htmlFor="type">가게 유형</StoreLabel>
            <StoreSelect
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option value="restaurant">🍽️ 음식점</option>
              <option value="accommodation">🏨 숙박시설</option>
            </StoreSelect>
          </StoreFormGroup>
          <StoreFormGroup>
            <StoreLabel htmlFor="address">가게 주소</StoreLabel>
            <StoreInput
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="주소를 입력하세요"
              required
            />
          </StoreFormGroup>
          <StoreFormGroup>
            <StoreLabel htmlFor="price">1인당 가격 (원)</StoreLabel>
            <StoreInput
              id="price"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="가격을 입력하세요"
              required
            />
          </StoreFormGroup>
          <StoreFormGroup>
            <StoreLabel htmlFor="businessNumber">사업자 번호</StoreLabel>
            <StoreInput
              id="businessNumber"
              name="businessNumber"
              value={form.businessNumber}
              onChange={handleChange}
              placeholder="사업자 번호를 입력하세요"
              required
            />
          </StoreFormGroup>
          <StoreButton
            type="button"
            onClick={handleFindNearby}
            disabled={loading}
          >
            {loading ? "위치 찾는 중..." : "내 위치로 등록"}
          </StoreButton>
          {error && <StoreError>{error}</StoreError>}
          {nearbyStores.length > 0 && (
            <div>
              <StoreLabel>내 주변 가게</StoreLabel>
              <StoreNearbyList>
                {nearbyStores.map((store) => (
                  <StoreNearbyItem
                    key={store.id}
                    onClick={() => handleSelectStore(store)}
                  >
                    <div style={{ fontWeight: 500, color: "#22223b" }}>
                      {store.name}
                    </div>
                    <div style={{ fontSize: 15, color: "#64748b" }}>
                      {store.address}
                    </div>
                  </StoreNearbyItem>
                ))}
              </StoreNearbyList>
            </div>
          )}
          <StoreButton
            type="submit"
            disabled={loading}
            style={{ marginTop: 8 }}
          >
            {loading ? "등록 중..." : "가게 등록하기"}
          </StoreButton>
        </StoreForm>
      </StoreFormCard>
      <StoreFooter>
        <p>2025, in 의성 Us:Code 해커톤</p>
        <p>Us:Code Hackathon 2025, Uiseong</p>
      </StoreFooter>
    </StorePageWrapper>
  );
}

export default AddStorePage;
