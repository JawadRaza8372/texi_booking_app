import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { h } from "react-native-responsiveness";
import { allCenter } from "../CabImp";
const CustomAuthButton = ({ title, txtColor, bgColor, onPressFun }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPressFun();
      }}
      style={{ ...styles.loginBtn, backgroundColor: `${bgColor}` }}
    >
      <Text style={{ ...styles.btnTxt, color: `${txtColor}` }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomAuthButton;

const styles = StyleSheet.create({
  loginBtn: {
    width: "90%",
    height: h("6%"),
    borderRadius: 15,
    ...allCenter,
    alignSelf: "center",
  },
  btnTxt: {
    fontSize: h("2.5%"),
    fontWeight: "700",
  },
});
