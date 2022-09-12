import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { AppColors } from "../../../constants";
import { Home } from "../../features/home/home";

const Stack = createNativeStackNavigator();
export const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? AppColors.BACKGROUND_COLOR : undefined,
        },
        headerShadowVisible: false,
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
          headerTransparent: Platform.OS === "ios",
          headerBlurEffect: "systemThinMaterialDark",
        }}
      />
    </Stack.Navigator>
  );
};
