import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.55,
  lng: 127.0,
};

function GoogleMapComponent({ markers = [], showRoute = false }) {
  const [selectedMarker, setSelectedMarker] = useState(null);

  // 지도 중심을 첫 마커로 맞춤
  const mapCenter = markers.length > 0 ? markers[0].position : center;

  return (
    <LoadScript googleMapsApiKey="AIzaSyDjsBP0viru-wdHiBonlcKhhdyrGRFNokg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={12}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            title={marker.name}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div style={{ fontSize: "14px", minWidth: 180 }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: 4,
                }}
              >
                {selectedMarker.name}
              </div>
              {selectedMarker.address && (
                <div style={{ marginBottom: 4 }}>{selectedMarker.address}</div>
              )}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selectedMarker.position.lat},${selectedMarker.position.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#4285F4",
                  textDecoration: "underline",
                  fontSize: 13,
                }}
              >
                Google 지도에서 보기
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
