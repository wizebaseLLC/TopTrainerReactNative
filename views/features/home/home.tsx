import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { AppColors, AppFonts, AppSpacing } from "../../../constants";
import { HomeStackParamList } from "../../screens/home/homeScreen";
import { Shadow } from "react-native-shadow-2";
import { FeatureCard } from "../../../components/";

type Props = NativeStackScreenProps<HomeStackParamList, "Home">;
const { createSpacing } = AppSpacing;
export const Home = ({ navigation }: Props) => {
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
        <View style={{ marginTop: createSpacing(2) }}>
          <Text style={styles.headerText}>Featured Top Trainers</Text>
          <FeatureCard
            onPress={() => console.log("press")}
            uri="https://www.wwe.com/f/styles/wwe_large/public/gallery/thumb/2015/03/05_Diary_03252015rf_357.jpg"
            text="Top Trainer Fitness Program"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: createSpacing(2),
  },
  headerText: {
    ...AppFonts.TITLE_2,
    paddingBottom: createSpacing(2),
  },
});
