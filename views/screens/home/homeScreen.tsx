import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { FunctionComponent } from "react";
import { Platform } from "react-native";
import { AppColors } from "../../../constants";
import { Home } from "../../features/home/home";

export type HomeStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? AppColors.BACKGROUND_COLOR : undefined,
        },
        headerShadowVisible: false,
        headerLargeStyle: {
          backgroundColor: AppColors.BACKGROUND_COLOR,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home as FunctionComponent}
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
          headerBlurEffect: "systemUltraThinMaterialDark",
        }}
      />
    </Stack.Navigator>
  );
};
