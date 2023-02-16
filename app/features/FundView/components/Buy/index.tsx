import React from "react";
import { Text, View } from "react-native";
import { PortfolioIcon } from "../../../../assets/icons/PortfolioIcon";
import { Button } from "../../../../components/Button";
import { ActionsContainer, InfoContainer, styles, TitleContainer, TotalsContainer } from "./styles";

export const Buy: React.FC = () => {
  return (
    <React.Fragment>
      <TitleContainer>
        <PortfolioIcon color="black" />
        <Text style={styles.title}>Your portfolio</Text>
      </TitleContainer>

      <TotalsContainer>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.totalsTitle}>18 credits</Text>
          <Text style={styles.totalsPercentage}>8.41%</Text>
        </View>

        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Text style={styles.totalsTitle}>$328.14</Text>
          <Text style={styles.lastPurchase}>Last purchase 28d ago</Text>
        </View>
      </TotalsContainer>

      <ActionsContainer>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 6 }}>
            <Button type="secondary" outline>
              Sell
            </Button>
          </View>

          <View style={{ flex: 1, marginLeft: 6 }}>
            <Button type="tertiary">Retire credits</Button>
          </View>
        </View>

        <Text style={styles.actionHelper}>You’ve previously retired 28 credits of this asset</Text>
      </ActionsContainer>

      <InfoContainer>
        <Text style={styles.infoText}>
          Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.
        </Text>

        <Text style={styles.infoText}>
          The information provided is not investment advice, and should not be used as a recommendation to buy or sell
          assets.
        </Text>
      </InfoContainer>

      <View style={{ padding: 24 }}>
        <Button>Buy</Button>
      </View>
    </React.Fragment>
  );
};
