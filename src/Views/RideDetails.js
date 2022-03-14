import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Modal } from "react-native";
import SafeScreenTemp from "../Components/SafeScreenTemp";
const apikey = "AIzaSyD4A4z8eO-GQs8xMBfgUYLLNUO00ZfaccI";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapComp from "../Components/MapComp";
import { w, h } from "react-native-responsiveness";
import LocationCompon from "../Components/LocationCompon";
import {
  allCenter,
  cardBg,
  greyText,
  justifyEvenly,
  mainColor,
} from "../CabImp";
import RideCard from "../Components/RideCard";
import CustomAuthButton from "../Components/CustomAuthButton";
import { MaterialIcons } from "@expo/vector-icons";
import ScreenHeader from "../Components/ScreenHeader";

const RideDetails = ({ navigation }) => {
  const [selectRide, setselectRide] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [openModal, setopenModal] = useState(false);

  const data = [
    {
      imglink:
        "https://www.cnet.com/a/img/GlWR3w2M8WvHTvKwd67lxJlnhRg=/940x0/2021/04/14/0d9317dc-cd13-419d-8b6a-bc992a7296a7/2021-toyota-rav4-trd-off-road-05.jpg",
      rent: "1000",
      rideName: "Mehran",
    },
    {
      imglink:
        "https://pv-magazine-usa.com/wp-content/uploads/sites/2/2019/10/FordEV-1200x800.jpeg",
      rent: "700",
      rideName: "Civic",
    },
    {
      imglink:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg",
      rent: "900",
      rideName: "Vagnor",
    },
  ];
  const msg = "Your ride has been booked.\n Your Otp is 1234";

  return (
    <SafeScreenTemp>
      <View style={styles.headerCont}>
        <ScreenHeader
          isBackButton={true}
          isProfileImg={true}
          title={"Ride Details"}
          onPressFun={() => navigation.goBack()}
        />
      </View>
      <View style={styles.mapContain}>
        <MapComp />
      </View>
      <View style={styles.detailsContainer}>
        <ScrollView contentContainerStyle={styles.scrollCont}>
          <LocationCompon
            location={"Your current location from GPS"}
            seprator={true}
            isArrived={true}
          />
          <LocationCompon isDestination={true} location={"Destination"} />
          <Text style={styles.sugest}>Suggested Rides</Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: w("2.5%") }}
            showsHorizontalScrollIndicator={false}
          >
            {data?.map((dat, index) => (
              <RideCard
                isSelected={dat?.rideName === selectRide ? true : false}
                key={index}
                imgLink={dat?.imglink}
                rent={dat?.rent}
                onClickSelect={() => setselectRide(dat?.rideName)}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </View>
      <View style={styles.bookButton}>
        <CustomAuthButton
          title={"Book Now"}
          txtColor={cardBg}
          bgColor={mainColor}
          onPressFun={() => setopenModal(!openModal)}
        />
      </View>
      <Modal
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setopenModal(!openModal);
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            ...allCenter,
          }}
        >
          <View
            style={{
              width: "94%",
              height: "60%",
              backgroundColor: cardBg,
              ...justifyEvenly,
              borderRadius: 30,
            }}
          >
            <View style={styles.successContIcon}>
              <MaterialIcons name="done" size={w("22%")} color={cardBg} />
            </View>
            <Text
              style={{
                fontSize: h("3.4%"),
                textAlign: "center",
                color: mainColor,
              }}
            >
              {msg}
            </Text>
            <CustomAuthButton
              title={"Home"}
              txtColor={cardBg}
              bgColor={mainColor}
              onPressFun={() => {
                setopenModal(!openModal);
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeScreenTemp>
  );
};
const googleApiRequired = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Where from?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      fetchDetails={true}
      enablePoweredByContainer={false}
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      onPress={(data, details = null) => {
        console.log(data, details);
        console.log(
          "coordinates of selected location ",
          details?.geometry?.location
        );
        console.log("description of selected location ", data?.description);
      }}
      query={{
        key: `${apikey}`,
        language: "en",
      }}
    />
  );
};
export default RideDetails;

const styles = StyleSheet.create({
  mapContain: {
    width: "100%",
    height: "40%",
  },
  headerCont: {
    width: "100%",
    height: "7%",
  },
  detailsContainer: {
    width: "100%",
    height: "46%",
  },
  bookButton: {
    width: "100%",
    height: "7%",
    backgroundColor: cardBg,
    ...allCenter,
  },
  scrollCont: {
    width: "100%",
    paddingVertical: h("2.5%"),
  },
  sugest: {
    fontSize: h("3%"),
    fontWeight: "bold",
    color: greyText,
    marginLeft: w("2.5"),
    marginVertical: h("1.4%"),
  },
  successContIcon: {
    width: w("30%"),
    height: w("30%"),
    backgroundColor: mainColor,
    borderRadius: w("20%"),
    ...allCenter,
  },
});
