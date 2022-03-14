import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { h } from "react-native-responsiveness";
import { FontAwesome5 } from "@expo/vector-icons";
import { allCenter, cardBg, justifyBetween } from "../CabImp";

const CustomProfileMenu = ({ firsticon, title, secondicon }) => {
  return (
    <View style={styles.mainprofileView}>
      <View style={styles.firstContView}>
        <FontAwesome5 name={firsticon} size={h("3.5%")} color="black" />
      </View>
      <View style={styles.secondContView}>
        <Text style={{ fontSize: h("2.5%") }}>{title}</Text>
        <FontAwesome5 name={secondicon} size={h("3.5%")} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainprofileView: {
    width: "95%",
    height: h("9%"),
    backgroundColor: cardBg,
    alignSelf: "center",
    borderRadius: 15,
    ...allCenter,
    flexDirection: "row",
    overflow: "hidden",
  },
  firstContView: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  secondContView: {
    width: "80%",
    height: "100%",
    ...justifyBetween,
    flexDirection: "row",
    paddingRight: 15,
  },
});
export default CustomProfileMenu;
