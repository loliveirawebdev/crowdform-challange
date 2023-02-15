import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const SignUpText = styled.Text`
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
  color: ${(p) => p.theme.colors.darkGray};
`;
