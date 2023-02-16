import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
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
    padding: 24,
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTitle: {
    marginTop: 7,
    fontSize: 12,
    marginBottom: 14,
    fontWeight: "bold",
  },
  cardValue: {
    fontSize: 14,
  },
});
