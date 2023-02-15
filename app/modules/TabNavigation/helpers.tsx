import { HomeIcon } from "../../assets/icons/HomeIcon";
import { TradeIcon } from "../../assets/icons/TradeIcon";
import { PortfolioIcon } from "../../assets/icons/PortfolioIcon";

const ICONS = {
  Home: HomeIcon,
  Trade: TradeIcon,
  Portfolio: PortfolioIcon,
};

export const generateTabBarIcon = (route: any) => {
  type GenerateTabBarIconProps = { focused: boolean; color: string; size: number };

  return (props: GenerateTabBarIconProps) => {
    const { color } = props;
    const Icon = ICONS[route.name];
    return <Icon color={color} />;
  };
};
