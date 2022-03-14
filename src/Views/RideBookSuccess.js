import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { w, h } from "react-native-responsiveness";
import { mainColor, cardBg, allCenter } from "../CabImp";
import CustomAuthButton from "../Components/CustomAuthButton";
import { MaterialIcons } from "@expo/vector-icons";
import SafeScreenTemp from "../Components/SafeScreenTemp";

const SuccessScreen = ({ navigation }) => {
  const msg = "Your ride has been booked.\n Your Otp is 1234";
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.screenCont}>
        <View style={styles.fieldCont}>
          <View style={styles.successContIcon}>
            <MaterialIcons name="done" size={w("22%")} color={cardBg} />
          </View>
          <Text style={styles.successMsg}>Success</Text>
          <Text style={{ fontSize: h("2%"), textAlign: "center" }}>{msg}</Text>
        </View>
        <View style={styles.ButnCont}>
          <CustomAuthButton
            title="Home Screen"
            txtColor={cardBg}
            bgColor={mainColor}
            onPressFun={() => navigation.navigate("homeScrn")}
          />
        </View>
      </View>
    </SafeScreenTemp>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  screenCont: {
    height: "92%",
    width: "100%",
    ...allCenter,
  },
  confirmImg: {
    width: w("80%"),
    height: h("80%"),
    resizeMode: "contain",
  },
  fieldCont: {
    width: "100%",
    height: "85%",
    ...allCenter,
  },
  ButnCont: {
    width: "100%",
    height: "10%",
  },
  successContIcon: {
    width: w("30%"),
    height: w("30%"),
    backgroundColor: mainColor,
    borderRadius: w("20%"),
    ...allCenter,
  },
  successMsg: {
    fontSize: h("4%"),
    marginTop: h("3%"),
    marginBottom: h("2%"),
  },
});
