import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppColors, AppFonts, AppSpacing } from "../../../constants";
import { FitnessStackParamList } from "../../screens/fitness/fitnessScreen";

type Props = NativeStackScreenProps<FitnessStackParamList, "Fitness">;

export const Fitness = ({ navigation }: Props) => {
  const paddingBottom = useBottomTabBarHeight();

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[AppColors.BACKGROUND_COLOR, "black"]}
      locations={[0.4, 0.8]}
      style={styles.container}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ height: 1000 }} />
        <Text
          style={{
            ...AppFonts.LOGO_FONT,
            // Requires spacing at the bottom on IOS using useBottomTabBarHeight for the tab bar.
            paddingBottom:
              Platform.OS === "ios"
                ? paddingBottom
                : AppSpacing.createSpacing(),
          }}
        >
          App name is changing
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
