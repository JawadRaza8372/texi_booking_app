import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import {
  allCenter,
  cardBg,
  mainColor,
  disabeBtnTxt,
  disableBtnBg,
} from "../CabImp";
import { w, h } from "react-native-responsiveness";
import CustomAuthButton from "../Components/CustomAuthButton";
import CustomInput from "../Components/CustomInput";
import ScreenHeader from "../Components/ScreenHeader";
const HomeScreen = ({ navigation }) => {
  const [destLoc, setdestLoc] = useState("");
  const onSubmit = () => {
    console.log("location is ", destLoc);
    navigation.navigate("rideScrn");
  };
  const buttonBack = destLoc ? mainColor : disableBtnBg;
  const buttontext = destLoc ? cardBg : disabeBtnTxt;
  return (
    <SafeScreenTemp bgColor={mainColor}>
      <View style={styles.mainContainer}>
        <View style={styles.headerDiv}>
          <ScreenHeader
            isMenuButton
            isProfileImg
            onPressFun={() => {
              navigation.toggleDrawer();
            }}
            title="Home"
          />
        </View>
        <View style={styles.shape} />
        <View
          style={{
            width: "90%",
            height: h("6%"),
            alignSelf: "center",
            ...allCenter,
            marginBottom: h("5%"),
          }}
        >
          <Text style={{ fontSize: h("4.2%"), color: mainColor }}>
            Book a cab
          </Text>
        </View>
        <CustomInput
          icon="location-pin"
          placeholder="Enter Your Destination"
          onChange={(text) => setdestLoc(text)}
          value={destLoc}
        />

        <CustomAuthButton
          title="Next"
          txtColor={buttontext}
          bgColor={buttonBack}
          onPressFun={onSubmit}
        />
      </View>
    </SafeScreenTemp>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    ...allCenter,
    flexDirection: "column",
  },
  headerDiv: {
    width: "100%",
    height: h("7%"),
    position: "absolute",
    top: 5,
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
