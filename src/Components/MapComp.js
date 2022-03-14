import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const MapComp = () => {
  const rehmanplaza = {
    latitude: 32.0753295,
    longitude: 72.6767892,
  };
  return (
    <MapView
      provider="google"
      initialRegion={{
        latitude: 32.074,
        longitude: 72.6861,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
    >
      <Marker
        coordinate={rehmanplaza}
        title="Rehman Plaza"
        description="Very busy place"
      />
    </MapView>
  );
};

export default MapComp;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
