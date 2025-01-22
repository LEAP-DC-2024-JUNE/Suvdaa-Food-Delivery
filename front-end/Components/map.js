import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 38.9072, // Washington, D.C. latitude
  lng: -77.0369,
};

export default function Map() {
  // Access the API key from environment variables
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Use the API key from env variables
  });

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
      <Marker position={center} />
    </GoogleMap>
  );
}
