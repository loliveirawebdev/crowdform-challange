import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";

export const ActionsContainer = styled.View`
  flex: 1;
  padding: 24px;
  flex-direction: column;
`;

export const TotalsContainer = styled.View`
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  padding: 12px;
  margin: 0 24px;
  background: ${(p) => p.theme.colors.lightGray};
`;

export const TitleContainer = styled.View`
  padding: 0 24px 24px 24px;
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 6,
    fontWeight: "bold",
  },
  actionHelper: {
    fontSize: 11,
    marginTop: 12,
    color: APP_THEME.colors.gray,
  },
  totalsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: APP_THEME.colors.black,
  },
  totalsPercentage: {
    fontSize: 14,
    color: APP_THEME.colors.tertiary,
  },
  lastPurchase: {
    fontSize: 14,
    color: APP_THEME.colors.gray,
  },
  infoText: {
    fontSize: 12,
    color: APP_THEME.colors.darkGray,
  },
});
