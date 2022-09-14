import { StyleSheet, Text, View } from "react-native";
import { AppColors, AppFonts, AppSpacing } from "../constants";
import PlatformButton from "./platformButton";

type FeaturedHeaderProps = {
  title: string;
  onPress: () => void;
};
const { createSpacing } = AppSpacing;

const FeaturedHeader = ({ title, onPress }: FeaturedHeaderProps) => (
  <View style={styles.headerView}>
    <Text style={styles.headerText}>{title}</Text>

    <PlatformButton onPress={onPress}>
      <Text style={styles.seeMoreText}>See More</Text>
    </PlatformButton>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    paddingLeft: createSpacing(2),
  },
  seeMoreText: {
    ...AppFonts.FOOTNOTE,
    color: AppColors.COMPLIMENTARY_COLOR,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: createSpacing(2),
  },
  headerText: {
    ...AppFonts.TITLE_3,
    paddingBottom: createSpacing(2),
  },
});

export default FeaturedHeader;
