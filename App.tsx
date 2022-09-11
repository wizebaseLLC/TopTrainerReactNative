import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { AppColors, AppFonts } from "./constants/";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Bank-Gothic-Medium": require("./assets/fonts/bankGothicMedium.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...AppFonts.LOGO_FONT,
          backgroundColor: AppColors.BACKGROUND_COLOR,
        }}
      >
        App name is changing
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
