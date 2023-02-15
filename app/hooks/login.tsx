import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
const RESET_ACTION = CommonActions.reset({ index: 1, routes: [{ name: "Authenticated" }] });

export const useFakeLogin = () => {
  const navigation = useNavigation();
  const setAsAuthenticated = () => navigation.dispatch(RESET_ACTION);

  return { setAsAuthenticated };
};
