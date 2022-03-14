import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomInput from "./CustomInput";
import { w, h } from "react-native-responsiveness";
import CustomAuthButton from "./CustomAuthButton";
import {
  allCenter,
  disabeBtnTxt,
  disableBtnBg,
  mainColor,
  cardBg,
} from "../CabImp";
const Login = ({ submitForm, forgotScreen }) => {
  const [loginInfo, setloginInfo] = useState({ phone: "", password: "" });
  const buttonBack =
    loginInfo?.phone && loginInfo?.password ? mainColor : disableBtnBg;
  const buttontext =
    loginInfo?.phone && loginInfo?.password ? cardBg : disabeBtnTxt;
  const onSubmit = () => {
    if (loginInfo?.phone && loginInfo?.password) {
      submitForm(loginInfo);
    } else {
      return null;
    }
  };
  return (
    <>
      <View
        style={{
          width: "90%",
          height: h("6%"),
          alignSelf: "center",
          ...allCenter,
          marginBottom: h("5%"),
        }}
      >
        <Text style={{ fontSize: h("4.2%"), color: mainColor }}>Login</Text>
      </View>
      <CustomInput
        icon="phone"
        placeholder="Enter Your Phone Number"
        onChange={(text) =>
          setloginInfo((prevalue) => {
            return {
              ...prevalue,
              phone: text,
            };
          })
        }
        value={loginInfo.phone}
        keyboardType="number-pad"
      />
      <CustomInput
        icon="lock"
        placeholder="Enter Your Password"
        onChange={(text) =>
          setloginInfo((prevalue) => {
            return {
              ...prevalue,
              password: text,
            };
          })
        }
        value={loginInfo.password}
        secureTextEntry={true}
      />

      <CustomAuthButton
        title="Login"
        txtColor={buttontext}
        bgColor={buttonBack}
        onPressFun={onSubmit}
      />
      <TouchableOpacity
        onPress={() => {
          forgotScreen();
        }}
        style={{
          width: "90%",
          height: h("5%"),
          alignSelf: "center",
          ...allCenter,
          marginTop: h("5%"),
        }}
      >
        <Text style={{ fontSize: h("2%"), color: mainColor }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
