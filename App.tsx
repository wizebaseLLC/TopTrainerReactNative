import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { AppColors, AppFonts } from "./constants/";
import { LinearGradient } from "expo-linear-gradient";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DarkTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
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
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Ionicons name="md-checkmark-circle" {...props} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Home = () => (
  <LinearGradient
    // Background Linear Gradient
    colors={[AppColors.BACKGROUND_COLOR, "black"]}
    locations={[0.4, 0.8]}
    style={styles.container}
  >
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text
        style={{
          ...AppFonts.LOGO_FONT,
        }}
      >
        App name is changing
      </Text>
    </ScrollView>
  </LinearGradient>
);

const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: AppColors.BACKGROUND_COLOR },
      }}
    >
      <Stack.Screen
        name="Main"
        component={Home}
        options={{
          headerSearchBarOptions: {
            onChangeText: (event) => console.log(event.nativeEvent.text),
            textColor: AppColors.WHITE_COLOR,
            headerIconColor: AppColors.WHITE_COLOR,
            shouldShowHintSearchIcon: false,
            hintTextColor: AppColors.WHITE_COLOR,
            placeholder: "Search",
          },
          headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  );
};
