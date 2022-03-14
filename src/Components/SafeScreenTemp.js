import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { mainColor } from "../CabImp";
import { w, h } from "react-native-responsiveness";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
const SafeScreenTemp = ({ bgColor, children }) => {
  return (
    <KeyboardAvoidingScrollView>
      <StatusBar />
      <View
        style={{
          ...styles.safescreen,
          backgroundColor: bgColor ? bgColor : "transparent",
        }}
      >
        {children}
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default SafeScreenTemp;

const styles = StyleSheet.create({
  safescreen: {
    width: w("100%"),
    height: h("100%"),
  },
});
