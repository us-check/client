import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.55,
  lng: 127.00,
};

const markers = [
  {
    id: 'namsan',
    name: '남산타워',
    position: { lat: 37.5512, lng: 126.9882 },
  },
  {
    id: 'lotte',
    name: '롯데월드타워',
    position: { lat: 37.5131, lng: 127.1025 },
  },
];

function GoogleMapComponent() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDjsBP0viru-wdHiBonlcKhhdyrGRFNokg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            position={marker.position}
            title={marker.name}
            onClick={() => setSelectedMarker(marker)} // 클릭 시 상태 저장
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)} // 닫기 버튼 처리
          >
            <div style={{ fontSize: '14px' }}>
              📍 <strong>{selectedMarker.name}</strong>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;