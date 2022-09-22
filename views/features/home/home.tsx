import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppColors, AppSpacing } from "../../../constants";
import { HomeStackParamList } from "../../screens/home/homeScreen";
import FeaturedTopTrainersView from "./components/featuredTopTrainersView";

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
        <View style={styles.featuredTopTrainerStyle}>
          <FeaturedTopTrainersView />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  featuredTopTrainerStyle: {
    marginTop: createSpacing(2),
  },
});
