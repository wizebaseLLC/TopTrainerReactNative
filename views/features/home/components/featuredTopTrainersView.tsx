import { StyleSheet, View } from "react-native";
import { FeaturedHeader } from "../../../../components";
import { AppSpacing } from "../../../../constants";
import FeaturedTrainerList from "./featuredTrainerList";

const FeaturedTopTrainersView = () => (
  <View>
    <View style={styles.featuredHeader}>
      <FeaturedHeader
        title="Featured Top Trainers"
        onPress={() => {
          console.log("press");
        }}
      />
    </View>
    <FeaturedTrainerList />
  </View>
);

const styles = StyleSheet.create({
  featuredHeader: {
    paddingBottom: AppSpacing.createSpacing(2),
  },
});
export default FeaturedTopTrainersView;
