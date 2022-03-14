import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { allCenter, cardBg, mainColor } from "../CabImp";
const RideCard = ({ isSelected, imgLink, rent, onClickSelect }) => {
  return (
    <TouchableOpacity
      onPress={onClickSelect}
      style={{
        ...styles.cardRide,
        backgroundColor: isSelected ? mainColor : cardBg,
      }}
    >
      <View style={styles.imgCont}>
        <Image
          source={{ uri: `${imgLink}` }}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </View>
      <View style={styles.textCont}>
        <Text
          style={{ ...styles.txtsty, color: isSelected ? cardBg : mainColor }}
        >
          Rs. {rent}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RideCard;

const styles = StyleSheet.create({
  cardRide: {
    height: h("15%"),
    width: w("30%"),
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
    ...allCenter,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imgCont: {
    width: "85%",
    alignSelf: "center",
    height: "60%",
    borderRadius: 10,
    overflow: "hidden",
  },
  textCont: {
    width: "85%",
    alignSelf: "center",
    height: "30%",
    ...allCenter,
  },
  txtsty: {
    fontSize: h("2.5%"),
  },
});
