import { LoginScreen } from "../Login";
import { NewAccountScreen } from "../NewAccount";
import { TabNavigation } from "../TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewAccount" component={NewAccountScreen} />
        <Stack.Screen name="Authenticated" component={TabNavigation} options={{ animation: "fade" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
