import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { APP_THEME } from "../../config/ThemeProvider/theme";

export const TabsContainer = styled.View`
  position: relative;
  flex-direction: column;
`;

export const Labels = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type LabelProps = { active: boolean };
export const Label = styled.Text<LabelProps>`
  padding: 14px 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${(p) => (p.active ? p.theme.colors.black : p.theme.colors.darkGray)};
`;

export const styles = StyleSheet.create({
  activeMarker: {
    width: 50,
    height: 2,
    bottom: 0,
    borderRadius: 2,
    position: "absolute",
    backgroundColor: APP_THEME.colors.primary,
  },
});
