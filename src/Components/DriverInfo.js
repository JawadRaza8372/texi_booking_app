import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  cardBg,
  allCenter,
  justifyEvenly,
  alignStart,
  mainColor,
  greyText,
} from "../CabImp";
import { w, h } from "react-native-responsiveness";
const DriverInfo = ({ imagelink, title, subtitle }) => {
  const newimg = imagelink
    ? imagelink
    : "https://media.istockphoto.com/photos/be-genuine-be-remarkable-be-worth-connecting-with-picture-id1312133528?b=1&k=20&m=1312133528&s=170667a&w=0&h=LQLk82XVFTNX90-gs5qy7RuHmtNqwfqhJZdtre5wZ08=";
  return (
    <View style={styles.driverInfo}>
      <View style={styles.iconContenti}>
        <Image
          source={{
            uri: `${newimg}`,
          }}
          style={styles.imageView}
        />
      </View>
      <View style={styles.bookContenti}>
        <Text
          style={{ fontSize: h("2.8%"), fontWeight: "bold", color: mainColor }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: h("2%"), color: greyText }}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default DriverInfo;

const styles = StyleSheet.create({
  driverInfo: {
    width: w("97%"),
    height: h("10%"),
    alignSelf: "center",
    marginTop: h("1%"),
    ...allCenter,
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: cardBg,
  },
  bookContenti: {
    width: "75%",
    height: "100%",
    ...alignStart,
    paddingLeft: h("2%"),
    flexDirection: "column",
  },
  iconContenti: {
    width: "25%",
    height: "100%",
    overflow: "hidden",
  },
  imageView: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
