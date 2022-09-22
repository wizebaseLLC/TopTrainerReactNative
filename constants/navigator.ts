import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { AppColors, AppFonts } from ".";

export const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerTransparent: Platform.OS === "ios",
  headerLargeTitleStyle: AppFonts.LOGO_FONT,
  headerBlurEffect: "systemUltraThinMaterialDark",
  headerTitleStyle: {
    color: AppColors.PRIMARY_COLOR,
    fontFamily: AppFonts.LOGO_FONT.fontFamily,
  },
};

export const STACK_OPTIONS: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? AppColors.BACKGROUND_COLOR : undefined,
  },
  headerShadowVisible: false,
  headerLargeStyle: {
    backgroundColor: AppColors.BACKGROUND_COLOR,
  },
};
