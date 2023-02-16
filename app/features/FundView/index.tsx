import React from "react";
import { FundChart } from "./components/FundChart";
import { FundViewHeader } from "./components/FundViewHeader";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stats } from "./components/Stats";
import { Buy } from "./components/Buy";
import { FundBreakdown } from "./components/FundBreakdown";

export const FundViewScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <FundViewHeader />
      </SafeAreaView>

      <ScrollView bounces={false}>
        <FundChart />
        <Stats />
        <FundBreakdown />
        <Buy />
      </ScrollView>
    </View>
  );
};
