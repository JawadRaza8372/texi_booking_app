import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import {
  allCenter,
  cardBg,
  disabeBtnTxt,
  justifyBetween,
  justifyEvenly,
  mainColor,
} from "../CabImp";
import { w, h } from "react-native-responsiveness";
import ScreenHeader from "../Components/ScreenHeader";
import CustomProfileMenu from "../Components/CustomProfileMenu";
import CustomAuthButton from "../Components/CustomAuthButton";
import { color } from "react-native-reanimated";
const ProfileScr = ({ navigation }) => {
  return (
    <SafeScreenTemp>
      <ScreenHeader
        isMenuButton={true}
        isProfileImg={true}
        onPressFun={() => {
          navigation.toggleDrawer();
        }}
        title="Profile"
      />
      <View style={styles.profileInfoContain}>
        <View style={styles.imagCont}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/photos/be-genuine-be-remarkable-be-worth-connecting-with-picture-id1312133528?b=1&k=20&m=1312133528&s=170667a&w=0&h=LQLk82XVFTNX90-gs5qy7RuHmtNqwfqhJZdtre5wZ08=",
            }}
            style={styles.avtarImage}
          />
          <Text style={styles.nameText}>Name</Text>
          <Text style={styles.accountType}>Account Type: Driver</Text>
        </View>
        <View style={styles.infoConr}>
          <CustomProfileMenu
            firsticon={"info"}
            title="Update Account Information"
            secondicon={"angle-right"}
          />
          <CustomProfileMenu
            firsticon={"car"}
            title="Update Vehicle"
            secondicon={"angle-right"}
          />
          <CustomAuthButton
            title="Logout"
            txtColor={cardBg}
            bgColor={mainColor}
          />
        </View>
      </View>

      {/* <View style={styles.imagCont}>
        <View style={styles.headerCont}>
          
        </View>

        </View>
      <View style={styles.profileInfo}></View> */}
    </SafeScreenTemp>
  );
};

export default ProfileScr;

const styles = StyleSheet.create({
  imagCont: {
    width: "100%",
    height: "50%",
    ...justifyEvenly,
    flexDirection: "column",
  },
  infoConr: {
    width: "100%",
    height: "50%",
    ...justifyEvenly,
    flexDirection: "column",
  },
  nameText: {
    fontSize: h("4%"),
    color: mainColor,
    fontWeight: "bold",
  },
  accountType: {
    fontSize: h("2.9"),
    fontWeight: "700",
    color: disabeBtnTxt,
  },
  avtarImage: {
    height: h("30%"),
    width: h("30%"),
    borderRadius: h("40%"),
    borderWidth: 2,
    borderColor: mainColor,
    overflow: "hidden",
  },
  profileInfoContain: {
    width: "100%",
    height: h("93%"),
    overflow: "hidden",
  },
});
