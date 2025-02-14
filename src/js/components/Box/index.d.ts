import * as React from "react";
import { 
  A11yTitleType, 
  AlignContentType, 
  AlignSelfType,
  BackgroundType,
  BasisType,
  BorderType,
  ElevationType,
  FillType,
  GapType, 
  GridAreaType, 
  MarginType, 
  PadType,
  PolymorphicType,
  ColorType, 
} from "../../utils";

type SideType = "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all";
type SizeType = "xsmall" | "small" | "medium" | "large" | "xlarge" | string;
type StyleType = "solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset" | "hidden";

export interface BoxProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  gridArea?: GridAreaType;
  margin?: MarginType;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  alignContent?: AlignContentType;
  animation?: "fadeIn" | "fadeOut" | "jiggle" | "pulse" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut" | {type?: "fadeIn" | "fadeOut" | "jiggle" | "pulse" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut",delay?: number,duration?: number,size?: "xsmall" | "small" | "medium" | "large" | "xlarge"} | ("fadeIn" | "fadeOut" | "jiggle" | "pulse" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut" | {type?: "fadeIn" | "fadeOut" | "jiggle" | "pulse" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut",delay?: number,duration?: number,size?: "xsmall" | "small" | "medium" | "large" | "xlarge"})[];
  background?: BackgroundType;
  basis?: BasisType;
  border?: BorderType;
  direction?: "row" | "column" | "row-responsive" | 'row-reverse' | 'column-reverse';
  elevation?: ElevationType;
  flex?: "grow" | "shrink" | boolean | {grow?: number,shrink?: number};
  fill?: FillType;
  gap?: GapType;
  height?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | string | {max?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | string,min?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | string};
  justify?: "around" | "between" | "center" | "end" | "evenly" | "start" | "stretch";
  overflow?: "auto" | "hidden" | "scroll" | "visible" | {horizontal?: "auto" | "hidden" | "scroll" | "visible",vertical?: "auto" | "hidden" | "scroll" | "visible"} | string;
  pad?: PadType;
  responsive?: boolean;
  round?: boolean | "xsmall" | "small" | "medium" | "large" | "xlarge" | "full" | string | {corner?: "top" | "left" | "bottom" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right",size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string};
  tag?: PolymorphicType;
  as?: PolymorphicType;
  width?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | string | {max?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | string,min?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | string};
  wrap?: boolean | "reverse";
}

declare const Box: React.FC<BoxProps & JSX.IntrinsicElements['div']>;
export type BoxTypes = BoxProps & JSX.IntrinsicElements['div']

export { Box };
