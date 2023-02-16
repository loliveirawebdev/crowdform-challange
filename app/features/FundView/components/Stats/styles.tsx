import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";

export const Container = styled.View`
  padding: 24px 0;
  background: white;
  flex-direction: column;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  title: {
    padding: 24,
    fontSize: 18,
    paddingBottom: 18,
    fontWeight: "bold",
    color: APP_THEME.colors.black,
  },
  infoContainer: {
    flexBasis: "50%",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 6,
    paddingBottom: 6,
  },
  infoTitle: {
    fontSize: 14,
    color: APP_THEME.colors.darkGray,
  },
  infoValue: {
    fontSize: 14,
    color: APP_THEME.colors.black,
  },
});
