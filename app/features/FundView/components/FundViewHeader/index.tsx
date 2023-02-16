import React from "react";
import { Text, View } from "react-native";
import { styles, TitleContainer } from "./styles";
import { Header } from "../../../../components/Header";
import { BackButton } from "../../../../components/BackButton";

export const FundViewHeader: React.FC = () => {
  const headerItems = [
    <BackButton />,
    <TitleContainer>
      <Text style={styles.title}>Wind Fund</Text>
      <Text style={styles.subtitle}>WFND</Text>
    </TitleContainer>,
    <View style={{ width: 24 }} />,
  ];

  return <Header items={headerItems} />;
};
