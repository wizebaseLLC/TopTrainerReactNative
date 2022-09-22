import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppNavigatorOptions } from "../../../constants";
import { Discover } from "../../features/discover/discover";

export type DiscoverStackParamList = {
  Discover: undefined;
};

const Stack = createNativeStackNavigator<DiscoverStackParamList>();

export const FitnessScreen = () => {
  return (
    <Stack.Navigator screenOptions={AppNavigatorOptions.STACK_OPTIONS}>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={AppNavigatorOptions.SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};
