import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  DarkTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HomeScreen } from "./views/screens/home/homeScreen";
import { BlurView } from "@react-native-community/blur";
import { Platform, StyleSheet } from "react-native";
import { FitnessScreen } from "./views/screens/discover/discoverScreen";
import { AppColors } from "./constants";

export type TabStackParamList = {
  HomeTab: undefined;
  DiscoverTab: undefined;
  TrainTab: undefined;
  DineTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const MyTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    card: "black",
    primary: AppColors.COMPLIMENTARY_COLOR,
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Bank-Gothic-Medium": require("./assets/fonts/bankGothicMedium.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              position: Platform.OS === "ios" ? "absolute" : "relative",
            },
            tabBarActiveBackgroundColor:
              Platform.OS !== "ios" ? "black" : undefined,
            tabBarInactiveBackgroundColor:
              Platform.OS !== "ios" ? "black" : undefined,
            tabBarBackground: () =>
              Platform.OS === "ios" && (
                <BlurView
                  blurType="ultraThinMaterialDark"
                  style={StyleSheet.absoluteFill}
                />
              ),
          }}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeScreen}
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="home" {...props} />,
            }}
          />
          <Tab.Screen
            name="DiscoverTab"
            component={FitnessScreen}
            options={{
              title: "Discover",
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="search" {...props} />,
            }}
          />
          <Tab.Screen
            name="TrainTab"
            component={HomeScreen}
            options={{
              title: "Train",
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="barbell" {...props} />,
            }}
          />
          <Tab.Screen
            name="DineTab"
            component={HomeScreen}
            options={{
              title: "Dine",
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="fast-food" {...props} />,
            }}
          />
          <Tab.Screen
            name="ProfileTab"
            component={HomeScreen}
            options={{
              title: "Profile",
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="person" {...props} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
