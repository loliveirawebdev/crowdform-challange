import { Text } from "react-native";
import { Container, Card } from "./styles";

export const InfoBanners: React.FC = () => {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      <Card style={{ marginLeft: 24 }}>
        <Text>Why should you invest here?</Text>
      </Card>

      <Card />
      <Card />
      <Card style={{ marginRight: 24 }} />
    </Container>
  );
};
