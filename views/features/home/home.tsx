import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppColors, AppFonts, AppSpacing } from "../../../constants";
import { HomeStackParamList } from "../../screens/home/homeScreen";
import { FeaturedHeader } from "../../../components/";
import FeaturedTrainerList from "./components/featuredTrainerList";

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
          <FeaturedHeader
            title="Featured Top Trainers"
            onPress={() => {
              console.log("press");
            }}
          />
          <View style={styles.cardContainer}>
            <FeaturedTrainerList />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    paddingLeft: createSpacing(2),
  },
});
