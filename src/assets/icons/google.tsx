import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const GoogleSVG = ({ color = "#000", ...props }: SvgProps) => (
  <Svg width={15} height={16} fill="none" {...props}>
    <Path
      d="M14.826 6.545H7.674v3.09h4.116c-.383 1.964-1.987 3.092-4.116 3.092-2.51 0-4.535-2.11-4.535-4.728 0-2.617 2.024-4.727 4.535-4.727 1.081 0 2.059.4 2.826 1.055L12.733 2c-1.36-1.237-3.105-2-5.06-2C3.42 0 0 3.563 0 8c0 4.437 3.418 8 7.674 8C11.51 16 15 13.09 15 8c0-.473-.07-.982-.174-1.455Z"
      fill={color}
    />
  </Svg>
);

const GoogleIcon = memo(GoogleSVG);
export default GoogleIcon;
