import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text } from "react-native";
import { AppColors, AppFonts } from "../../../constants";

export const Home = () => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
