import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MySplashScreen from "../Views/MySplashScreen";
import AuthScreen from "../Views/AuthScreen";
import ForgotPassScreen from "../Views/ForgotPassScreen";
import SuccessScreen from "../Views/SuccessScreen";
import RideDetails from "../Views/RideDetails";
import HomeScreen from "../Views/HomeScreen";
import DrawerNavig from "./DrawerNavig";
const Stack = createStackNavigator();
export default function MyStackNavig() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={MySplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPswd"
          component={ForgotPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homeScrn"
          component={DrawerNavig}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="rideScrn"
          component={RideDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
