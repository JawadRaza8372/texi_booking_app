import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import {
  allCenter,
  cardBg,
  greyText,
  justifyEvenly,
  mainColor,
} from "../CabImp";
import Bookings from "../Views/Bookings";
import HomeScreen from "../Views/HomeScreen";
import ProfileScr from "../Views/ProfileScr";
const Drawer = createDrawerNavigator();
import { w, h } from "react-native-responsiveness";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
const icons = [
  { iconName: "taxi", title: "Taxi Booking" },
  { iconName: "book-open", title: "My Bookings" },
  { iconName: "account", title: "Profile" },
];
const CheckScreen = ({ progress, ...rest }) => {
  const [navigSta, setnavigSta] = useState("BookMe");
  return (
    <>
      <View
        style={{
          width: "100%",
          height: "40%",
          backgroundColor: cardBg,
          ...justifyEvenly,
          flexDirection: "column",
        }}
      >
        <Image
          source={{
            uri: "https://media.istockphoto.com/photos/be-genuine-be-remarkable-be-worth-connecting-with-picture-id1312133528?b=1&k=20&m=1312133528&s=170667a&w=0&h=LQLk82XVFTNX90-gs5qy7RuHmtNqwfqhJZdtre5wZ08=",
          }}
          style={{
            width: w("50%"),
            height: w("50%"),
            borderRadius: w("50%"),
            overflow: "hidden",
            borderColor: mainColor,
            borderWidth: 2,
          }}
        />
        <Text
          style={{ fontSize: h("3%"), fontWeight: "bold", color: mainColor }}
        >
          Your Name
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "60%",
          backgroundColor: cardBg,
          borderTopWidth: 2,
          borderColor: mainColor,
        }}
      >
        <DrawerContentScrollView
          {...rest}
          contentContainerStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          {rest?.state?.routeNames.map((dat, index) => (
            <DrawerItem
              key={index}
              icon={({ color, size }) => {
                return (
                  <MaterialCommunityIcons
                    name={icons[index].iconName}
                    size={size}
                    color={color}
                  />
                );
              }}
              label={`${icons[index].title}`}
              onPress={() => {
                setnavigSta(`${dat}`);
                rest?.navigation.navigate(`${dat}`);
              }}
              activeBackgroundColor={mainColor}
              activeTintColor={cardBg}
              inactiveBackgroundColor={cardBg}
              inactiveTintColor={greyText}
              focused={navigSta === dat ? true : false}
            />
          ))}
        </DrawerContentScrollView>
      </View>
    </>
  );
};
function DrawerNavig() {
  return (
    <Drawer.Navigator
      initialRouteName="BookMe"
      drawerContent={(props) => <CheckScreen {...props} />}
    >
      <Drawer.Screen
        name="BookMe"
        options={{
          headerShown: false,
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: mainColor,
          drawerInactiveTintColor: greyText,
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Bookings"
        options={{
          headerShown: false,
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: mainColor,
          drawerInactiveTintColor: greyText,
        }}
        component={Bookings}
      />
      <Drawer.Screen
        name="ProfileP"
        options={{
          headerShown: false,
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: mainColor,
          drawerInactiveTintColor: greyText,
        }}
        component={ProfileScr}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavig;
