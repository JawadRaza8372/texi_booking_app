import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { allCenter, cardBg, mainColor, screenBg } from "../CabImp";
import { FontAwesome5 } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
const MySplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("auth");
    }, 3000);
  }, []);
  return (
    <SafeScreenTemp bgColor={mainColor}>
      <View style={styles.shape} />

      <View style={styles.splashScreen}>
        <FontAwesome5 name="taxi" size={h("20%")} color={mainColor} />
        <Text style={styles.logoText}>Say Taxi</Text>
      </View>
    </SafeScreenTemp>
  );
};

export default MySplashScreen;

const styles = StyleSheet.create({
  splashScreen: {
    width: "100%",
    height: "100%",
    ...allCenter,
  },
  logoText: {
    fontSize: h("7%"),
    color: mainColor,
    fontWeight: "bold",
  },
  shape: {
    width: h("60%"),
    height: h("70%"),
    backgroundColor: cardBg,
    borderRadius: w("10%"),
    position: "absolute",
    top: h("20%"),
    left: 0,
    right: 0,
    transform: [{ rotate: "45deg" }],
  },
});
