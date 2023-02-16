import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";

export const Container = styled.View`
  padding: 24px 0;
  flex-direction: column;
`;

export const CardsContainer = styled.FlatList`
  padding: 24px 0;
`;

export const Card = styled.View`
  width: 160px;
  height: 215px;
  padding: 12px;
  margin-right: 15px;
  border-radius: 10px;
  background: ${(p) => p.theme.colors.lightGray};
`;

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "bold",
    color: APP_THEME.colors.black,
  },
});
