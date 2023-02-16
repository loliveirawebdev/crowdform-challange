import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";

export const ChartHeader = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LoadingContainer = styled.View`
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: white;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  percentage: {
    fontSize: 14,
    color: APP_THEME.colors.tertiary,
  },
  tabContainer: {
    marginLeft: 24,
    marginRight: 24,
  },
});
