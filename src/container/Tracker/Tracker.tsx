"use client";

import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import classes from "./Tracker.module.css";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import TrackerOptions from "../TrackerOptions/TrackerOptions";

const lightMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
];

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: 6.589719,
  lng: 3.36095,
};

const Tracker = () => {
  return (
    <DashboardLayout className={classes.container}>
      <div className={classes.mapContainer}>
        <LoadScript
          googleMapsApiKey={
            process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
          }
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            options={{ styles: lightMapStyle }}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>

      <TrackerOptions />
    </DashboardLayout>
  );
};

export default Tracker;
