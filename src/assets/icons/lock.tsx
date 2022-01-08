import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Lock = ({ color, ...props }: SvgProps): JSX.Element => (
  <Svg width={18} height={22} fill="none" color="#2E3E5C" {...props}>
    <Path
      d="M13.424 8.448V6.3A4.552 4.552 0 0 0 8.872 1.75a4.55 4.55 0 0 0-4.57 4.53v2.168"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12.683 20.25h-7.64a3.792 3.792 0 0 1-3.793-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.863 13.203v2.22"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LockIcon = memo(Lock);
export { LockIcon };
