import { HomeScreen } from "../Home";
import { TradeScreen } from "../Trade";
import { PortfolioScreen } from "../Portfolio";
import { generateTabBarIcon } from "./helpers";
import { APP_THEME } from "../../config/ThemeProvider/theme";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export const TabNavigation: React.FC = () => {
  const tabNavigatorOptions = ({ route }): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarItemStyle: { padding: 4 },
    tabBarIcon: generateTabBarIcon(route),
    tabBarActiveTintColor: APP_THEME.colors.primary,
    tabBarInactiveTintColor: APP_THEME.colors.black,
  });

  return (
    <Tab.Navigator screenOptions={tabNavigatorOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trade" component={TradeScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
    </Tab.Navigator>
  );
};
