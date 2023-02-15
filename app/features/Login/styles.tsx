import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;

export const SignUpText = styled.Text`
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
  color: ${(p) => p.theme.colors.darkGray};
`;

export const FormTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;
