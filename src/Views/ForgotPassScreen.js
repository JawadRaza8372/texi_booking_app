import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import CustomAuthButton from "../Components/CustomAuthButton";
import CustomInput from "../Components/CustomInput";
import {
  mainColor,
  cardBg,
  allCenter,
  disableBtnBg,
  disabeBtnTxt,
} from "../CabImp";
import { w, h } from "react-native-responsiveness";
const ForgotPassScreen = ({ navigation }) => {
  const [isPasswordLayout, setisPasswordLayout] = useState(false);
  const [myPhone, setmyPhone] = useState("");
  const [myPassword, setmyPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const backColor =
    (isPasswordLayout &&
      myPassword.newPassword &&
      myPassword.confirmPassword) ||
    (!isPasswordLayout && myPhone)
      ? mainColor
      : disableBtnBg;
  const textColor =
    (isPasswordLayout &&
      myPassword.newPassword &&
      myPassword.confirmPassword) ||
    (!isPasswordLayout && myPhone)
      ? cardBg
      : disabeBtnTxt;
  const formSubmitButton = () => {
    if (isPasswordLayout) {
      if (myPassword?.newPassword && myPassword?.confirmPassword) {
        console.log("passwords=> ", myPassword);
        navigation.navigate("Success");
      } else {
        return null;
      }
    } else {
      if (myPhone === "" || !myPhone) {
        return null;
      } else {
        console.log("phone number=>", myPhone);
        setisPasswordLayout(true);
      }
    }
  };
  return (
    <View style={styles.contianer}>
      <View style={styles.screenCont}>
        <View style={styles.fieldCont}>
          <View style={styles.screenHeadingView}>
            <Text style={{ fontSize: h("3.2%"), color: mainColor }}>
              {isPasswordLayout ? "Create New Password" : "Forgot Password"}
            </Text>
            <Text style={{ fontSize: h("2.1%"), color: disabeBtnTxt }}>
              {isPasswordLayout
                ? "Enter same password in both fields"
                : "Enter your registered phone number below"}
            </Text>
          </View>
          {isPasswordLayout ? (
            <>
              <CustomInput
                icon="lock"
                placeholder="Enter Your New Password"
                onChange={(text) =>
                  setmyPassword((prevalue) => {
                    return {
                      ...prevalue,
                      newPassword: text,
                    };
                  })
                }
                value={myPassword?.newPassword}
                secureTextEntry={true}
              />
              <CustomInput
                icon="lock"
                placeholder="Re-Enter Your New Password"
                onChange={(text) =>
                  setmyPassword((prevalue) => {
                    return {
                      ...prevalue,
                      confirmPassword: text,
                    };
                  })
                }
                secureTextEntry={true}
                value={myPassword?.confirmPassword}
              />
            </>
          ) : (
            <CustomInput
              icon="phone"
              placeholder="Enter Your Phone Number"
              onChange={(text) => setmyPhone(text)}
              keyboardType="number-pad"
              value={myPhone}
            />
          )}
        </View>
        <View style={styles.ButnCont}>
          <CustomAuthButton
            title="Submit"
            txtColor={textColor}
            bgColor={backColor}
            onPressFun={formSubmitButton}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassScreen;

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: cardBg,
    ...allCenter,
  },
  screenCont: {
    height: "92%",
    width: "100%",
    ...allCenter,
  },
  fieldCont: {
    width: "100%",
    height: "85%",
  },
  ButnCont: {
    width: "100%",
    height: "10%",
  },
  screenHeadingView: { width: "90%", alignSelf: "center", marginBottom: 10 },
});
