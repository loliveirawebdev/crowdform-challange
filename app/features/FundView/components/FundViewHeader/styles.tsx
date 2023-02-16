import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const TitleContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
  },
});
