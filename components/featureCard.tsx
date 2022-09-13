import { LinearGradient } from "expo-linear-gradient";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import { Shadow } from "react-native-shadow-2";
import { AppColors, AppFonts, AppSpacing } from "../constants";
import PlatformButton from "./platformButton";

type FeatureCardProps = {
  uri: string;
  text: string;
  onPress: () => void;
};

const borderRadius = 40;

const FeatureCard = ({ uri, text, onPress }: FeatureCardProps) => (
  <PlatformButton onPress={onPress}>
    <FeatureCardView uri={uri} text={text} onPress={onPress} />
  </PlatformButton>
);

const FeatureCardView = ({ uri, text }: FeatureCardProps) => (
  <View style={[styles.featureCard, styles.shadowProp]}>
    <View style={StyleSheet.absoluteFill}>
      <FastImage
        style={{
          width: "100%",
          height: "100%",
          borderRadius,
        }}
        source={{
          uri,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
    <LinearGradient
      colors={["transparent", "black"]}
      style={[StyleSheet.absoluteFill, { borderRadius, opacity: 0.8 }]}
    />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    ...AppFonts.TITLE_3,
    textAlign: "center",
    flexWrap: "wrap",
  },
  featureCard: {
    height: 170,
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
    elevation: 8,
    backgroundColor: "transparent",
  },
});

export default FeatureCard;
