import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FunctionComponent } from "react";
import { AppNavigatorOptions } from "../../../constants";
import { Home } from "../../features/home/home";

export type HomeStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={AppNavigatorOptions.STACK_OPTIONS}>
      <Stack.Screen
        name="Home"
        component={Home as FunctionComponent}
        options={AppNavigatorOptions.SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};
