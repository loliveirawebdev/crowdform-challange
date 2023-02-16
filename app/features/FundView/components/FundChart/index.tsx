var LOADING_TIMEOUT = null;

import React from "react";
import { Tabs } from "../../../../components/Tabs";
import { Chart } from "../../../../components/Chart";
import { ActivityIndicator, Text, View } from "react-native";
import { ChartHeader, LoadingContainer, styles } from "./styles";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";
import { Transition, Transitioning } from "react-native-reanimated";
import { ArrowUpRightIcon } from "../../../../assets/icons/ArrowUpRightIcon";

const CHART_DATA = [
  [1, 1, 3, 4, 5, 4, 6, 6, 7, 5, 5, 4, 3, 3, 4, 5, 6, 9],
  [3, 4, 7, 9, 3, 2, 4, 5, 5, 6, 7, 7, 6, 5, 6, 5, 5, 7],
  [5, 4, 3, 3, 2, 2, 1, 1, 1, 4, 5, 6, 8, 8, 9, 10, 9, 9],
  [1, 3, 3, 6, 7, 8, 5, 5, 3, 2, 6, 7, 9, 9, 7, 8, 9, 10],
  [3, 4, 5, 6, 3, 2, 6, 7, 4, 3, 6, 7, 6, 7, 4, 2, 3, 6],
  [7, 5, 3, 2, 2, 5, 6, 7, 4, 6, 8, 8, 6, 7, 5, 4, 3, 9],
];

export const FundChart: React.FC = () => {
  const transitionRef = React.useRef<any>();
  const [loading, setLoading] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(1);

  const onChangeIndex = (index: number) => {
    clearTimeout(LOADING_TIMEOUT);
    setLoading(true);
    setActiveIndex(index);
    transitionRef.current.animateNextTransition();
  };

  const transition = (
    <Transition.Together>
      <Transition.In />
      <Transition.Change />
      <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
  );

  // just simulating data fetching animation
  React.useEffect(() => {
    if (loading) {
      LOADING_TIMEOUT = setTimeout(() => {
        transitionRef.current.animateNextTransition();
        setLoading(false);
      }, 1000);
    }

    return () => clearTimeout(LOADING_TIMEOUT);
  }, [activeIndex]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ChartHeader>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.title}>$18.23</Text>

          <Text style={styles.percentage}>
            <ArrowUpRightIcon color={APP_THEME.colors.tertiary} />
            3.23% ($1.21)
          </Text>
        </View>

        <Text style={styles.title}>2022</Text>
      </ChartHeader>

      <Transitioning.View ref={transitionRef} transition={transition}>
        {loading && (
          <LoadingContainer>
            <ActivityIndicator color={APP_THEME.colors.primary} />
            <Text style={{ marginTop: 10 }}>Loading...</Text>
          </LoadingContainer>
        )}

        <Chart color={APP_THEME.colors.tertiary} data={CHART_DATA[activeIndex]} />
      </Transitioning.View>

      <View style={styles.tabContainer}>
        <Tabs
          marker="background"
          onChange={onChangeIndex}
          activeIndex={activeIndex}
          labels={["1h", "1d", "1w", "1m", "1y", "All"]}
        />
      </View>
    </View>
  );
};
