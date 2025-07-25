import React, { useState } from "react";
import MainpageModal from "../components/MainpageModal";
import { useNavigate } from "react-router-dom";
import {
  StorePageWrapper,
  StoreHeader,
  BackIcon,
  StoreLogoGroup,
  StoreLogoImage,
  StoreLogoText,
  StoreMenuIcon,
  StoreFormCard,
  StoreTitle,
  StoreDesc,
  StoreForm,
  StoreFormGroup,
  GradientWrapper,
  GradientInnerBox,
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
    type: "accommodation",
    address: "",
    price: "",
    businessNumber: "",
    overview: "",
    image: null,
    lat: null,
    lng: null,
  });
  const [nearbyStores, setNearbyStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

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
    if (nearbyStores.length > 0) {
      setNearbyStores([]);
    } else {
      setNearbyStores(exampleStores);
      setError("");
      setLoading(false);
    }
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
    const { name, value, type, files } = e.target;
    if (name === "image" && files && files[0]) {
      setForm((f) => ({ ...f, image: files[0] }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("address", form.address);
      formData.append("price", form.price);
      formData.append("overview", form.overview);
      formData.append("image", form.image || "");
      console.log("요청 보냄:", formData);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/business/`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log("응답 status:", response.status);
      let responseText = "";
      try {
        responseText = await response.text();
        console.log("응답 body:", responseText);
      } catch (e) {
        console.log("응답 body 파싱 실패");
      }
      if (response.ok) {
        alert("가게가 등록되었습니다!");
        setForm({
          name: "",
          address: "",
          price: "",
          overview: "",
          image: "",
        });
        setNearbyStores([]);
        setLoading(false);
        navigate("/");
      } else {
        alert("등록에 실패했습니다.");
        setLoading(false);
      }
    } catch (err) {
      setError("오류 발생");
      setLoading(false);
    }
  };

  return (
    <StorePageWrapper>
      <StoreHeader>
        <BackIcon
          src={process.env.PUBLIC_URL + "/뒤로가는화살표.svg"}
          alt="뒤로가기"
          onClick={() => navigate("/")}
        />
        <StoreLogoGroup>
          <StoreLogoImage
            src={process.env.PUBLIC_URL + "/로고마늘.svg"}
            alt="로고"
          />
          <StoreLogoText>의성:Check</StoreLogoText>
        </StoreLogoGroup>
        <StoreMenuIcon
          src={process.env.PUBLIC_URL + "/menu.svg"}
          alt="메뉴"
          onClick={() => setIsOpen(true)}
        />
      </StoreHeader>
      <StoreFormCard>
        <StoreTitle>가게를 등록하시나요?</StoreTitle>
        <StoreDesc>새로운 가게 정보를 추가해보세요</StoreDesc>
        <StoreForm onSubmit={handleSubmit}>
          <StoreButton
            type="button"
            onClick={handleFindNearby}
            disabled={loading}
          >
            {loading ? "위치 찾는 중..." : "📍 내 위치로 등록"}
          </StoreButton>

          {error && <StoreError>{error}</StoreError>}

          {nearbyStores.length > 0 && (
            <>
              <StoreLabel>근처 가게를 선택하세요</StoreLabel>
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
            </>
          )}

          <StoreFormGroup>
            <StoreLabel htmlFor="name">가게 이름</StoreLabel>
            <GradientWrapper>
              <GradientInnerBox>
                <StoreInput
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="가게 이름을 입력하세요"
                  required
                  style={{ border: "none", background: "transparent" }}
                />
              </GradientInnerBox>
            </GradientWrapper>
          </StoreFormGroup>

          <StoreFormGroup>
            <StoreLabel htmlFor="address">가게 주소</StoreLabel>
            <GradientWrapper>
              <GradientInnerBox>
                <StoreInput
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="주소를 입력하세요"
                  required
                  style={{ border: "none", background: "transparent" }}
                />
              </GradientInnerBox>
            </GradientWrapper>
          </StoreFormGroup>

          <StoreFormGroup>
            <StoreLabel htmlFor="type">가게 유형</StoreLabel>
            <GradientWrapper>
              <GradientInnerBox>
                <StoreSelect
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  style={{ border: "none", background: "transparent" }}
                >
                  <option value="accommodation">🏨 숙박시설</option>
                  <option value="restaurant">🍽️ 음식점</option>
                </StoreSelect>
              </GradientInnerBox>
            </GradientWrapper>
          </StoreFormGroup>

          <StoreFormGroup>
            <StoreLabel htmlFor="overview">한줄소개</StoreLabel>
            <GradientWrapper>
              <GradientInnerBox>
                <StoreInput
                  id="overview"
                  name="overview"
                  value={form.overview}
                  onChange={handleChange}
                  placeholder="한줄소개를 입력하세요"
                  required
                  style={{ border: "none", background: "transparent" }}
                />
              </GradientInnerBox>
            </GradientWrapper>
          </StoreFormGroup>

          <StoreFormGroup>
            <StoreLabel htmlFor="image">가게 이미지</StoreLabel>
            <GradientWrapper>
              <GradientInnerBox>
                <StoreInput
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  style={{ border: "none", background: "transparent" }}
                />
              </GradientInnerBox>
            </GradientWrapper>
          </StoreFormGroup>

          <StoreFormGroup>
            <StoreLabel htmlFor="price">1인당 가격 (원)</StoreLabel>
            <GradientWrapper>
              <GradientInnerBox>
                <StoreInput
                  id="price"
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="가격을 입력하세요"
                  required
                  style={{ border: "none", background: "transparent" }}
                />
              </GradientInnerBox>
            </GradientWrapper>
          </StoreFormGroup>

          <StoreFormGroup>
            <StoreLabel htmlFor="businessNumber">사업자 번호</StoreLabel>
            <GradientWrapper>
              <GradientInnerBox>
                <StoreInput
                  id="businessNumber"
                  name="businessNumber"
                  value={form.businessNumber}
                  onChange={handleChange}
                  placeholder="사업자 번호를 입력하세요"
                  required
                  style={{ border: "none", background: "transparent" }}
                />
              </GradientInnerBox>
            </GradientWrapper>
          </StoreFormGroup>

          <StoreButton
            type="submit"
            disabled={loading}
            style={{ marginTop: 8 }}
          >
            {loading ? "등록 중..." : "✅ 가게 등록하기"}
          </StoreButton>
        </StoreForm>
      </StoreFormCard>
      <StoreFooter>
        <p>2025, in 의성 Us:Code 해커톤</p>
        <p>Us:Code Hackathon 2025, Uiseong</p>
      </StoreFooter>

      {isOpen && (
        <MainpageModal
          isLoggedIn={isLoggedIn}
          onClose={() => setIsOpen(false)}
          onLoginClick={() => navigate("/login")}
          onLogoutClick={() => setIsLoggedIn(false)}
          onLangClick={() => alert("준비중입니다.")}
          onMyPageClick={() => navigate("/userinfo")}
          onStoreRegisterClick={() => navigate("/addstore")}
        />
      )}
    </StorePageWrapper>
  );
}

export default AddStorePage;
