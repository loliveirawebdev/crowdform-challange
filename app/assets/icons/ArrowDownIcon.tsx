import Svg, { Path } from "react-native-svg";

export const ArrowDownIcon: React.FC<Icon> = ({ color }) => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path d="M6.273 6.7125L9.9855 3L11.046 4.0605L6.273 8.8335L1.5 4.0605L2.5605 3L6.273 6.7125Z" fill={color} />
    </Svg>
  );
};
