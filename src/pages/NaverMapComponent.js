import React, { useEffect, useRef, useState } from "react";

const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID; // .env에서 불러옴

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 37.55,
  lng: 127.0,
};

function loadNaverMapScript(callback) {
  if (window.naver && window.naver.maps) {
    callback();
    return;
  }
  const script = document.createElement("script");
  script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}`;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}

function NaverMapComponent({
  markers = [],
  focusMarkerId,
  mapHeight = 540,
  mapZoom = 14,
}) {
  const mapRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapInstance = useRef(null);
  const markerInstances = useRef([]);
  const infoWindowInstance = useRef(null);

  useEffect(() => {
    loadNaverMapScript(() => {
      if (!mapRef.current) return;
      const naver = window.naver;
      let mapOptions = {
        mapTypeControl: true,
        scaleControl: true,
        logoControl: false,
      };
      let map;
      // bounds 계산
      const validMarkers = markers.filter(
        (m) =>
          m.position &&
          typeof m.position.lat === "number" &&
          typeof m.position.lng === "number"
      );
      if (validMarkers.length === 0) {
        mapOptions.center = new naver.maps.LatLng(
          defaultCenter.lat,
          defaultCenter.lng
        );
        mapOptions.zoom = 12;
        map = new naver.maps.Map(mapRef.current, mapOptions);
      } else {
        // 마커가 1개 이상이면 모두 보이도록 fitBounds
        mapOptions.center = new naver.maps.LatLng(
          validMarkers[0].position.lat,
          validMarkers[0].position.lng
        );
        mapOptions.zoom = 12;
        map = new naver.maps.Map(mapRef.current, mapOptions);
        if (validMarkers.length === 1) {
          map.setCenter(
            new naver.maps.LatLng(
              validMarkers[0].position.lat,
              validMarkers[0].position.lng
            )
          );
          map.setZoom(15);
        } else {
          const bounds = new naver.maps.LatLngBounds();
          validMarkers.forEach((marker) => {
            bounds.extend(
              new naver.maps.LatLng(marker.position.lat, marker.position.lng)
            );
          });
          map.fitBounds(bounds);
          // fitBounds 후, 너무 멀면 한 단계 확대
          naver.maps.Event.once(map, "idle", function () {
            const currentZoom = map.getZoom();
            if (currentZoom < 13) map.setZoom(currentZoom + 1);
          });
        }
      }
      mapInstance.current = map;
      // 마커 생성 (position 유효성 체크)
      markerInstances.current = validMarkers.map((marker, idx) => {
        const nMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            marker.position.lat,
            marker.position.lng
          ),
          map: mapInstance.current,
          title: marker.name,
          icon: {
            url: "/마늘마커.png",
            size: new naver.maps.Size(44, 44),
            scaledSize: new naver.maps.Size(44, 44),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(22, 44),
          },
        });
        nMarker.__custom_id = marker.id || marker.name || idx; // 커스텀 id 부여
        naver.maps.Event.addListener(nMarker, "click", () => {
          setSelectedMarker(marker);
        });
        return nMarker;
      });
    });
    // cleanup
    return () => {
      markerInstances.current.forEach((m) => {
        if (m && typeof m.setMap === "function") m.setMap(null);
      });
      markerInstances.current = [];
      if (infoWindowInstance.current) infoWindowInstance.current.setMap(null);
    };
    // eslint-disable-next-line
  }, [JSON.stringify(markers), mapZoom]);

  useEffect(() => {
    if (!window.naver || !mapInstance.current) return;
    const naver = window.naver;
    if (selectedMarker) {
      if (infoWindowInstance.current) infoWindowInstance.current.setMap(null);
      infoWindowInstance.current = new naver.maps.InfoWindow({
        content: `
          <div style='min-width:200px;max-width:260px;padding:10px 14px 10px 10px;font-size:15px;line-height:1.6;background:#fff;border-radius:10px;box-shadow:0 2px 12px 0 rgba(0,0,0,0.10);color:#222;'>
            <div style='font-weight:700;font-size:17px;margin-bottom:2px;'>${
              selectedMarker.name
            }</div>
            ${
              selectedMarker.address
                ? `<div style='color:#888;font-size:13px;margin-bottom:4px;'>${selectedMarker.address}</div>`
                : ""
            }
            <a href='https://map.naver.com/p/search/${encodeURIComponent(
              selectedMarker.name
            )}' target='_blank' style='color:#009499;text-decoration:underline;font-size:13px;'>네이버지도에서 보기</a>
          </div>
        `,
        maxWidth: 280,
        backgroundColor: "#fff",
        borderColor: "#009499",
        anchorSize: new naver.maps.Size(20, 20),
        pixelOffset: new naver.maps.Point(0, -10),
      });
      infoWindowInstance.current.open(
        mapInstance.current,
        markerInstances.current.find(
          (m, i) =>
            (markers[i].id || markers[i].name || i) ===
            (selectedMarker.id || selectedMarker.name || i)
        )
      );
    } else {
      if (infoWindowInstance.current) infoWindowInstance.current.setMap(null);
    }
  }, [selectedMarker, markers]);

  // focusMarkerId로 마커 포커스
  useEffect(() => {
    if (!focusMarkerId || !markerInstances.current.length) return;
    const marker = markerInstances.current.find(
      (m) => m.__custom_id === focusMarkerId
    );
    if (marker && mapInstance.current) {
      mapInstance.current.setCenter(marker.getPosition());
      setSelectedMarker(
        markers.find((m, idx) => (m.id || m.name || idx) === focusMarkerId)
      );
      // 지도 확대
      const currentZoom = mapInstance.current.getZoom();
      if (currentZoom < 15) mapInstance.current.setZoom(15);
    }
  }, [focusMarkerId, markers]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: mapHeight,
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
      }}
    />
  );
}

export default NaverMapComponent;
