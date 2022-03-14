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
const SignUp = ({ submitForm }) => {
  const [signUpInfo, setsignUpInfo] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const buttonBack =
    signUpInfo?.name && signUpInfo?.phone && signUpInfo?.password
      ? mainColor
      : disableBtnBg;
  const buttontext =
    signUpInfo?.name && signUpInfo?.phone && signUpInfo?.password
      ? cardBg
      : disabeBtnTxt;
  const onSubmit = () => {
    if (signUpInfo?.name && signUpInfo?.phone && signUpInfo?.password) {
      submitForm(signUpInfo);
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
        <Text style={{ fontSize: h("4.2%"), color: mainColor }}>Sign Up</Text>
      </View>
      <CustomInput
        icon="person-outline"
        placeholder="Enter Your Name"
        onChange={(text) =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              name: text,
            };
          })
        }
        value={signUpInfo.name}
      />
      <CustomInput
        icon="phone"
        placeholder="Enter Your Phone Number"
        onChange={(text) =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              phone: text,
            };
          })
        }
        value={signUpInfo.phone}
        keyboardType="number-pad"
      />
      <CustomInput
        icon="lock"
        placeholder="Enter Your Password"
        onChange={(text) =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              password: text,
            };
          })
        }
        value={signUpInfo.password}
        secureTextEntry={true}
      />

      <CustomAuthButton
        title="Register"
        txtColor={buttontext}
        bgColor={buttonBack}
        onPressFun={onSubmit}
      />
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
