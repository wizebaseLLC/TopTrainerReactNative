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
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const MyTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    card: "black",
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
            tabBarStyle: { position: "absolute" },
            tabBarBackground: () => (
              <BlurView
                blurType="ultraThinMaterialDark"
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="home" {...props} />,
            }}
          />
          <Tab.Screen
            name="Discover"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="search" {...props} />,
            }}
          />
          <Tab.Screen
            name="Train"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="barbell" {...props} />,
            }}
          />
          <Tab.Screen
            name="Dine"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: (props) => <Ionicons name="fast-food" {...props} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={HomeScreen}
            options={{
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
