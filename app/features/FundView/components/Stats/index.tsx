import { Text, View } from "react-native";
import { Container, InfoContainer, styles } from "./styles";

const INFO = [
  { title: "AUM", value: "$430.88m" },
  { title: "Issue Date", value: "18/04/2022" },
  { title: "Vintage Range", value: "2019 - 2022" },
  { title: "TER", value: "0.15%" },
  { title: "Price at Close", value: "$17.68" },
  { title: "Price at Open", value: "$17.74" },
];

export const Stats: React.FC = () => {
  const renderInfo = (info: any) => {
    return (
      <View key={info.title} style={styles.infoContainer}>
        <Text style={styles.infoTitle}>{info.title}</Text>
        <Text style={styles.infoValue}>{info.value}</Text>
      </View>
    );
  };

  return (
    <Container>
      <Text style={styles.title}>Info & Stats</Text>
      <InfoContainer>{INFO.map(renderInfo)}</InfoContainer>
    </Container>
  );
};
