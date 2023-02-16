import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 4px;
  color: ${(p) => p.theme.colors.black};
`;

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  portfolioContainer: {
    flexDirection: "column",
  },
  portfolio: {
    fontSize: 12,
  },
  totalContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  total: {
    fontSize: 24,
    fontWeight: "bold",
  },
  percent: {
    fontSize: 14,
    marginLeft: 5,
    marginBottom: 1,
    color: APP_THEME.colors.tertiary,
  },
});
