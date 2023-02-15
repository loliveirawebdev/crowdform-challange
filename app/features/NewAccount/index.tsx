import { SafeAreaView } from "react-native";
import { Button } from "../../components/Button";
import { Container, SignUpText } from "./styles";
import { Header } from "../../components/Header";
import { useFakeLogin } from "../../hooks/login";
import { NewAccountForm } from "./new-account-form";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableText } from "../../components/TouchableText";

export const NewAccountScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { setAsAuthenticated } = useFakeLogin();
  const goToLogin = () => navigation.navigate("Login");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header items={[<BackButton />]} />

      <Container>
        <NewAccountForm />
        <Button onPress={setAsAuthenticated}>Create account</Button>

        <SignUpText>
          Already have an account? <TouchableText onPress={goToLogin}>Log in</TouchableText> here
        </SignUpText>
      </Container>
    </SafeAreaView>
  );
};
