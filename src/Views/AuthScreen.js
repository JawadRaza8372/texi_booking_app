import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { cardBg, allCenter, justifyEvenly, mainColor } from "../CabImp";
import CustomInput from "../Components/CustomInput";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import CustomAuthButton from "../Components/CustomAuthButton";
import { w, h } from "react-native-responsiveness";
const AuthScreen = ({ navigation }) => {
  const submitForms = (data) => {
    console.log(data);
    navigation.replace("homeScrn");
  };
  const [isLoginModal, setisLoginModal] = useState(true);
  return (
    <SafeScreenTemp bgColor={mainColor}>
      <View style={styles.shape} />
      <View style={styles.authSection}>
        {isLoginModal ? (
          <Login
            forgotScreen={() => navigation.navigate("ForgotPswd")}
            submitForm={submitForms}
          />
        ) : (
          <SignUp submitForm={submitForms} />
        )}
        <View style={styles.switchButton}>
          <CustomAuthButton
            title={isLoginModal ? "Create Account" : "Let's Login"}
            txtColor={cardBg}
            bgColor={"black"}
            onPressFun={() => setisLoginModal(!isLoginModal)}
          />
        </View>
      </View>
    </SafeScreenTemp>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  authSection: {
    width: "100%",
    height: "100%",
    ...allCenter,
    flexDirection: "column",
  },
  switchButton: {
    width: "100%",
    marginTop: h("3%"),
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
    transform: [{ rotate: "-30deg" }],
  },
});
