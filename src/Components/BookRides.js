import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import {
  alignEnd,
  allCenter,
  cardBg,
  disabeBtnTxt,
  disableBtnBg,
  greyText,
  justifyBetween,
  justifyEvenly,
  mainColor,
} from "../CabImp";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LocationCompon from "./LocationCompon";
import DriverInfo from "./DriverInfo";
import ScreenHeader from "./ScreenHeader";

const BookRides = () => {
  const [openModal, setopenModal] = useState(false);
  return (
    <>
      <View style={styles.bookiRideCont}>
        <View style={styles.bookContent}>
          <View style={styles.locationCont}>
            <Text style={styles.locationText}>
              <MaterialCommunityIcons
                name="star-box"
                size={h("2.7%")}
                color={mainColor}
              />{" "}
              Your Destination will be shown here
            </Text>
          </View>
          <View style={styles.infoCont}>
            <Text style={styles.infoText}>Rent</Text>
            <Text style={styles.infoText}>Status</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.iconContent}
          onPress={() => setopenModal(!openModal)}
        >
          <MaterialCommunityIcons
            name="information"
            size={h("6%")}
            color={greyText}
          />
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={openModal}
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        onRequestClose={() => {
          setopenModal(!openModal);
        }}
      >
        <View style={styles.modalCont}>
          <TouchableOpacity
            onPress={() => {
              setopenModal(!openModal);
            }}
            style={styles.closeButton}
          />

          <View style={styles.infoContainer}>
            <ScreenHeader title={"Ride Details"} />
            <LocationCompon
              location={"Your location"}
              seprator={true}
              isArrived={true}
            />
            <LocationCompon
              isDestination={true}
              location={"Your Destination"}
            />
            <View style={styles.cabinfoText}>
              <Text style={styles.otpText}>Your Otp is 12345</Text>

              <Text
                style={{
                  ...styles.otpText,
                  width: "90%",
                  textAlign: "left",
                  color: disabeBtnTxt,
                }}
              >
                Date and Time
              </Text>
            </View>
            <View style={styles.InfoContDriver}>
              <Text style={styles.headingDriver}>Driver Info</Text>
              <DriverInfo title={"Driver Name"} subtitle={"Rating"} />
              <DriverInfo
                imagelink={
                  "https://pv-magazine-usa.com/wp-content/uploads/sites/2/2019/10/FordEV-1200x800.jpeg"
                }
                title={"Car Name"}
                subtitle={"Rent"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default BookRides;

const styles = StyleSheet.create({
  bookiRideCont: {
    width: w("97%"),
    height: h("12%"),
    alignSelf: "center",
    marginTop: h("1%"),
    ...allCenter,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: cardBg,
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
  bookContent: {
    width: "80%",
    height: "100%",
  },
  iconContent: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  infoCont: {
    width: "100%",
    height: "35%",
    overflow: "hidden",
    ...justifyEvenly,
    flexDirection: "row",
  },
  locationCont: {
    width: "100%",
    height: "65%",
    overflow: "hidden",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  otpText: {
    fontSize: h("2.5%"),
    color: mainColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  headingDriver: {
    fontSize: h("4%"),
    color: disabeBtnTxt,
    textAlign: "center",
  },
  locationText: {
    fontSize: h("2.7%"),
    color: mainColor,
  },
  infoText: {
    fontSize: h("2.2%"),
    color: greyText,
  },
  modalCont: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  closeButton: {
    width: "100%",
    height: "20%",
  },
  infoContainer: {
    width: "100%",
    overflow: "hidden",
    height: "80%",
    backgroundColor: cardBg,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    ...justifyBetween,
    flexDirection: "column",
    paddingBottom: 10,
  },
  InfoContDriver: {
    width: "100%",
    height: "50%",
    ...justifyEvenly,
    flexDirection: "column",
  },
  cabinfoText: {
    width: "100%",
    height: "15%",
    overflow: "hidden",
    ...justifyEvenly,
    flexDirection: "column",
  },
});
