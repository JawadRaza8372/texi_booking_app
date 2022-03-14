import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import ScreenHeader from "../Components/ScreenHeader";
import BookRides from "../Components/BookRides";

const Bookings = ({ navigation }) => {
  return (
    <SafeScreenTemp>
      <View style={styles.headerContai}>
        <ScreenHeader
          isMenuButton={true}
          isProfileImg={true}
          onPressFun={() => {
            navigation.toggleDrawer();
          }}
          title="Bookings"
        />
      </View>
      <View style={styles.bookinContai}>
        <BookRides />
      </View>
    </SafeScreenTemp>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  headerContai: {
    width: "100%",
    height: "7%",
    overflow: "hidden",
  },
  bookinContai: {
    width: "100%",
    height: "93%",
    overflow: "hidden",
  },
});
