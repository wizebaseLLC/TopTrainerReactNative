import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { AppColors } from "../../../constants";
import { Discover } from "../../features/discover/discover";

export type DiscoverStackParamList = {
  Discover: undefined;
};

const Stack = createNativeStackNavigator<DiscoverStackParamList>();

export const FitnessScreen = () => {
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
        name="Discover"
        component={Discover}
        options={{
          headerLargeTitle: true,
          headerTransparent: Platform.OS === "ios",
          headerBlurEffect: "systemUltraThinMaterialDark",
        }}
      />
    </Stack.Navigator>
  );
};
