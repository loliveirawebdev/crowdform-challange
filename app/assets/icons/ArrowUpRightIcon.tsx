import Svg, { Path } from "react-native-svg";

export const ArrowUpRightIcon: React.FC<Icon> = ({ color }) => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M10.7267 3.25229L4.89395 3.25229L4.89395 4.48973L8.66426 4.48973L2.86056 10.2934L3.68551 11.1184L9.48922 5.31469L9.48922 9.085H10.7267L10.7267 3.25229Z"
        fill={color}
      />
    </Svg>
  );
};
