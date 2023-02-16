import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const FundsContainer = styled.View`
  flex-direction: column;
`;

export const CardsContainer = styled.ScrollView`
  padding-bottom: 24px;
`;

export const Card = styled.View`
  width: 150px;
  padding: 12px;
  margin-right: 15px;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.gray};
`;

export const ValueContainer = styled.View`
  margin-top: 14px;
  flex-direction: row;
  justify-content: space-between;
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
