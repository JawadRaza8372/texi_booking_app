import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import {
  alignStart,
  allCenter,
  disabeBtnTxt,
  justifyStart,
  mainColor,
} from "../CabImp";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const LocationCompon = ({ isDestination, location, isArrived, seprator }) => {
  return (
    <>
      <View style={styles.rowCont}>
        <View style={styles.iconCont}>
          {isDestination ? (
            <MaterialCommunityIcons
              name="star-box"
              size={h("5%")}
              color={isArrived ? mainColor : disabeBtnTxt}
            />
          ) : (
            <Entypo name="location-pin" size={h("5%")} color={mainColor} />
          )}
        </View>
        <View style={styles.addCont}>
          <Text
            style={{
              fontSize: h("2.6%"),
              color: isArrived ? mainColor : disabeBtnTxt,
            }}
          >
            {location}
          </Text>
        </View>
      </View>
      {seprator && (
        <View style={styles.sepCont}>
          <View
            style={{
              ...styles.seprate,
              backgroundColor: isArrived ? mainColor : disabeBtnTxt,
            }}
          />
        </View>
      )}
    </>
  );
};

export default LocationCompon;

const styles = StyleSheet.create({
  rowCont: {
    ...allCenter,
    flexDirection: "row",
    width: w("95%"),
    height: h("7%"),
    alignSelf: "center",
  },
  iconCont: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  addCont: {
    width: "80%",
    height: "100%",
    ...alignStart,
    overflow: "hidden",
  },
  sepCont: {
    ...alignStart,
    paddingHorizontal: w("9%"),
    width: w("95%"),
    height: h("5%"),
    alignSelf: "center",
  },
  seprate: {
    width: 5,
    height: "100%",
    borderRadius: 5,
  },
});
