import { LinearGradientProps } from "../models";

// COLORS
export const PRIMARY_COLOR = "#FBBC21";
export const SECONDARY_COLOR = "#7ACD2E";
export const BACKGROUND_COLOR = "#191A32";
export const COMPLIMENTARY_COLOR = "#3CDFF0";
export const WHITE_COLOR = "#FFFFFF";

// GRADIENTS
export const GRADIENT_1: LinearGradientProps = {
  colors: [WHITE_COLOR, PRIMARY_COLOR],
  start: { x: 0.25, y: 0.5 },
  end: { x: 0.75, y: 0.5 },
};

export const GRADIENT_2: LinearGradientProps = {
  colors: [WHITE_COLOR, SECONDARY_COLOR],
  start: { x: 0.25, y: 0.5 },
  end: { x: 0.75, y: 0.5 },
};

export const GRADIENT_3: LinearGradientProps = {
  colors: [PRIMARY_COLOR, COMPLIMENTARY_COLOR],
  start: { x: 0.25, y: 0.5 },
  end: { x: 0.75, y: 0.5 },
};
