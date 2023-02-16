import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";

export const Container = styled.View`
  padding: 20px;
  margin: 0 24px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(p) => p.theme.colors.primary};
`;

export const TextsContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
    color: APP_THEME.colors.white,
  },
  subtitle: {
    fontSize: 12,
    color: APP_THEME.colors.white,
  },
});
