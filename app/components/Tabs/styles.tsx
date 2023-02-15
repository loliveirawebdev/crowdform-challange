import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { APP_THEME } from "../../config/ThemeProvider/theme";
type LabelProps = { isActive: boolean; marker: Tabs["marker"] };

export const TabsContainer = styled.View`
  position: relative;
  flex-direction: column;
`;

export const Labels = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text<LabelProps>`
  padding: 14px 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${(p) => (p.isActive ? p.theme.colors.primary : p.theme.colors.darkGray)};
`;

export const styles = StyleSheet.create({
  borderMarker: {
    height: 2,
    bottom: 0,
    borderRadius: 4,
    position: "absolute",
    backgroundColor: APP_THEME.colors.primary,
  },

  backgroundMarker: {
    bottom: 0,
    zIndex: -1,
    height: "100%",
    borderRadius: 4,
    position: "absolute",
    backgroundColor: APP_THEME.colors.secondary,
  },
});
