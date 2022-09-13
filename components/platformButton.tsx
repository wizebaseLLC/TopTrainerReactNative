import { FunctionComponent, PropsWithChildren } from "react";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { AppColors } from "../constants";

type Props = {
  onPress: () => void;
};

const PlatformButton: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  onPress,
}) =>
  Platform.OS === "android" ? (
    <TouchableNativeFeedback
      useForeground
      background={TouchableNativeFeedback.Ripple(
        AppColors.BACKGROUND_COLOR,
        false
      )}
      onPress={onPress}
    >
      <View>{children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  );

export default PlatformButton;
