import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { AppFonts, AppSpacing } from "../constants";
import PlatformButton from "./platformButton";
import Ionicons from "@expo/vector-icons/Ionicons";

type FeatureCardProps = {
  uri: string;
  text: string;
  onPress: () => void;
  rating?: number;
};

const borderRadius = 40;

const FeatureCard = ({ uri, text, onPress, rating }: FeatureCardProps) => (
  <PlatformButton onPress={onPress}>
    <FeatureCardView uri={uri} text={text} onPress={onPress} rating={rating} />
  </PlatformButton>
);

const FeatureCardView = ({ uri, text, rating }: FeatureCardProps) => (
  <View style={[styles.featureCard, styles.shadowProp]}>
    <View style={StyleSheet.absoluteFill}>
      <FastImage
        style={styles.image}
        source={{
          uri,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
    <LinearGradient
      colors={["transparent", "black"]}
      style={styles.linearGradient}
    />
    <View
      style={[
        styles.row,
        {
          justifyContent: rating ? "space-between" : "center",
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
      {rating && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="star" size={20} color="yellow" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: AppSpacing.createSpacing(2),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius,
  },
  linearGradient: {
    borderRadius,
    opacity: 0.8,
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    ...AppFonts.TITLE_3,
    textAlign: "center",
    flexWrap: "wrap",
    paddingRight: AppSpacing.createSpacing(),
  },
  ratingText: {
    ...AppFonts.CALLOUT,
    fontWeight: "bold",
    marginLeft: AppSpacing.createSpacing() / 2,
  },
  featureCard: {
    height: 200,
    width: 314,
    borderRadius,
    justifyContent: "flex-end",
    padding: AppSpacing.createSpacing(2),
  },
  shadowProp: {
    borderRadius,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
    backgroundColor: "transparent",
  },
});

export default FeatureCard;
