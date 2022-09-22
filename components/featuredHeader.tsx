import { Platform, StyleSheet, Text, View } from "react-native";
import { AppColors, AppFonts, AppSpacing } from "../constants";
import PlatformButton from "./platformButton";
import Ionicons from "@expo/vector-icons/Ionicons";

type FeaturedHeaderProps = {
  title: string;
  onPress: () => void;
  shouldHideMoreSection?: boolean;
};
const { createSpacing } = AppSpacing;

const FeaturedHeader = ({
  title,
  onPress,
  shouldHideMoreSection,
}: FeaturedHeaderProps) => (
  <View style={styles.headerView}>
    <Text style={styles.headerText}>{title}</Text>

    <PlatformButton onPress={onPress}>
      {!shouldHideMoreSection && (
        <View style={styles.row}>
          <Text style={styles.seeMoreText}>See All</Text>
          <Ionicons
            name={Platform.select({
              ios: "chevron-forward",
              default: "arrow-forward",
            })}
            size={12}
            color={AppColors.COMPLIMENTARY_COLOR}
          />
        </View>
      )}
    </PlatformButton>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    paddingLeft: createSpacing(2),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.5,
  },
  seeMoreText: {
    ...AppFonts.CAPTION_1,
    color: AppColors.COMPLIMENTARY_COLOR,
    paddingRight: createSpacing() / 2,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: createSpacing(2),
    alignItems: "center",
  },
  headerText: {
    ...AppFonts.TITLE_3,
  },
});

export default FeaturedHeader;
