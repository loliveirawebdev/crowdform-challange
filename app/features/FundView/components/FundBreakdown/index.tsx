import React from "react";
import { Cards } from "./cards";
import { Text, View } from "react-native";
import { Container, styles } from "./styles";
import { Tabs } from "../../../../components/Tabs";

export const FundBreakdown: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onChangeIndex = (index: number) => setActiveIndex(index);

  return (
    <Container>
      <View style={{ paddingRight: 24, paddingLeft: 24 }}>
        <Text style={styles.title}>Fund Breakdown</Text>

        <Tabs
          labels={["Highlighted", "Value", "Vintage", "Registry"]}
          activeIndex={activeIndex}
          onChange={onChangeIndex}
        />
      </View>

      <Cards />
    </Container>
  );
};
