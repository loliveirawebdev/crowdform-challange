import { Text } from "react-native";
import { BusinessIcon } from "../../../../assets/icons/BusinessIcon";
import { Container, styles, TextsContainer } from "./styles";

export const CreditsBanner: React.FC = () => {
  return (
    <Container>
      <TextsContainer>
        <Text style={styles.title}>Learn more about carbon credits</Text>
        <Text style={styles.subtitle}>Check out our top tips!</Text>
      </TextsContainer>

      <BusinessIcon />
    </Container>
  );
};
