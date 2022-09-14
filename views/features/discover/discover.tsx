import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppColors, AppFonts, AppSpacing } from "../../../constants";
import { DiscoverStackParamList } from "../../screens/discover/discoverScreen";

type Props = NativeStackScreenProps<DiscoverStackParamList, "Discover">;

export const Discover = ({ navigation }: Props) => {
  const paddingBottom = useBottomTabBarHeight();
  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => console.log(event.nativeEvent.text),
        textColor: AppColors.WHITE_COLOR,
        headerIconColor: AppColors.WHITE_COLOR,
        shouldShowHintSearchIcon: false,
        hintTextColor: AppColors.WHITE_COLOR,
        placeholder: "Search",
      },
    });
  }, [navigation]);
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
