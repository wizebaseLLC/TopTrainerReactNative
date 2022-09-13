import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { AppColors } from "../../../constants";
import { Fitness } from "../../features/fitness/fitness";

export type FitnessStackParamList = {
  Fitness: undefined;
};

const Stack = createNativeStackNavigator<FitnessStackParamList>();

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
        name="Fitness"
        component={Fitness}
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
