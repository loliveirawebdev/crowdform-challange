import React from "react";
import { LineChart } from "react-native-chart-kit";
import { StyleProp, View, ViewStyle } from "react-native";

export const Chart: React.FC<Chart> = (props) => {
  const containerRef = React.useRef(null);
  const { data, width, height, color: _color, backgroundColor: bgColor } = props;
  const color = _color || "black";
  const backgroundColor = bgColor || "white";

  const [chartWidth, setChartWidth] = React.useState(0);
  const [chartHeight, setChartHeight] = React.useState(0);
  const measureContainerRef = () => containerRef?.current?.measure(calculateChartWidth);

  const calculateChartWidth = (_, __, containerWidth, containerHeight) => {
    setChartHeight(containerHeight);
    setChartWidth(containerWidth + 30);
  };

  const calculateContainerStyle = (): StyleProp<ViewStyle> => {
    return {
      height,
      overflow: "hidden",
      width: width || "100%",
      aspectRatio: !height ? 4 / 3 : undefined,
    };
  };

  React.useLayoutEffect(() => {
    setTimeout(measureContainerRef, 0);
  }, [containerRef]);

  return (
    <View ref={containerRef} style={calculateContainerStyle()}>
      <LineChart
        bezier
        withDots={false}
        withShadow={false}
        width={chartWidth}
        height={chartHeight}
        withOuterLines={false}
        withInnerLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        style={{ paddingRight: 0, paddingLeft: 0 }}
        data={{ labels: [], datasets: [{ data }] }}
        chartConfig={{
          strokeWidth: 4,
          color: () => color,
          backgroundColor: backgroundColor,
          backgroundGradientTo: backgroundColor,
          backgroundGradientFrom: backgroundColor,
        }}
      />
    </View>
  );
};
