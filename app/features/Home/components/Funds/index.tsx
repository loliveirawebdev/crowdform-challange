import cards from "./cards.json";
import { Chart } from "../../../../components/Chart";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WindIcon } from "../../../../assets/icons/WindIcon";
import { SolarIcon } from "../../../../assets/icons/SolarIcon";
import { NatureIcon } from "../../../../assets/icons/NatureIcon";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";
import { ArrowUpRightIcon } from "../../../../assets/icons/ArrowUpRightIcon";
import { ArrowDownRightIcon } from "../../../../assets/icons/ArrowDownRightIcon";
import { Card, CardsContainer, FundsContainer, styles, ValueContainer } from "./styles";

const ARROWS = { up: ArrowUpRightIcon, down: ArrowDownRightIcon };
const ICONS = { wind: WindIcon, solar: SolarIcon, nature: NatureIcon };

export const Funds: React.FC = () => {
  const navigation = useNavigation<any>();

  const renderCard = (card: any, i) => {
    const Icon = ICONS[card.icon];
    const Arrow = ARROWS[card.arrow];
    const marginLeft = i === 0 ? 24 : 0;
    const marginRight = i === cards.length - 1 ? 24 : 15;
    const onPress = () => navigation.navigate("FundView");

    return (
      <TouchableOpacity key={card.title} onPress={onPress}>
        <Card style={{ marginLeft, marginRight }}>
          <Icon color={APP_THEME.colors[card.iconColor]} />
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Chart width={80} height={80} data={card.chart} color={APP_THEME.colors[card.percentageColor]} />

          <ValueContainer>
            <Text style={styles.cardValue}>{card.value}</Text>

            <Text style={[styles.cardValue, { color: APP_THEME.colors[card.percentageColor] }]}>
              <Arrow color={APP_THEME.colors[card.percentageColor]} />
              {card.percentage}
            </Text>
          </ValueContainer>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <FundsContainer>
      <Text style={styles.title}>Funds</Text>
      <CardsContainer horizontal showsHorizontalScrollIndicator={false}>
        {cards.map(renderCard)}
      </CardsContainer>
    </FundsContainer>
  );
};
