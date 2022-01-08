import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Message = ({ color, ...props }: SvgProps): JSX.Element => (
  <Svg width={22} height={20} fill="none" color="#2E3E5C" {...props}>
    <Path
      d="m16.268 7.061-4.266 3.434a2.223 2.223 0 0 1-2.746 0L4.954 7.061"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M5.888 1.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 0 1 1.326 3.704v6.528a5.017 5.017 0 0 1-1.326 3.704 4.957 4.957 0 0 1-3.58 1.59H5.888C2.968 18.616 1 16.241 1 13.322V6.794C1 3.875 2.968 1.5 5.888 1.5Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const MessageIcon = memo(Message);
export { MessageIcon };
