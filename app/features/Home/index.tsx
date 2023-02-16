import React from "react";
import { HomeHeader } from "./components/HomeHeader";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Funds } from "./components/Funds";
import { CreditsBanner } from "./components/CreditsBanner";
import { InfoBanners } from "./components/InfoBanners";

export const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <HomeHeader />
      </SafeAreaView>

      <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Funds />
        <CreditsBanner />
        <InfoBanners />
      </ScrollView>
    </View>
  );
};
