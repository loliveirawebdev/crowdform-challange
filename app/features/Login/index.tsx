import { LoginForm } from "./login-form";
import { SafeAreaView } from "react-native";
import { Button } from "../../components/Button";
import { Container, SignUpText } from "./styles";
import { useFakeLogin } from "../../hooks/login";
import { useNavigation } from "@react-navigation/native";
import { TouchableText } from "../../components/TouchableText";

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { setAsAuthenticated } = useFakeLogin();
  const goToNewAccount = () => navigation.navigate("NewAccount");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        <LoginForm />
        <Button onPress={setAsAuthenticated}>Login</Button>

        <SignUpText>
          Don't have an account? <TouchableText onPress={goToNewAccount}>Sign up</TouchableText> here
        </SignUpText>
      </Container>
    </SafeAreaView>
  );
};
