import Svg, { Path } from "react-native-svg";

export const ArrowDownRightIcon: React.FC<Icon> = ({ color }) => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M10.7269 10.7059L10.7269 4.8732L9.48946 4.8732L9.48946 8.64351L3.68575 2.8398L2.86079 3.66476L8.6645 9.46847L4.89418 9.46847V10.7059L10.7269 10.7059Z"
        fill={color}
      />
    </Svg>
  );
};
