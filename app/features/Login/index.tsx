import { LoginForm } from "./login-form";
import { SafeAreaView } from "react-native";
import { Button } from "../../components/Button";
import { Container, SignUpText } from "./styles";
import { TouchableText } from "../../components/TouchableText";

export const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        <LoginForm />
        <Button>Login</Button>

        <SignUpText>
          Don't have an account? <TouchableText>Sign up</TouchableText> here
        </SignUpText>
      </Container>
    </SafeAreaView>
  );
};
