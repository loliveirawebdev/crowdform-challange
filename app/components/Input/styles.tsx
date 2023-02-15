import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  flex-direction: column;
`;

export const Label = styled.Text`
  font-size: 11px;
  margin-bottom: 5px;
  color: ${(p) => p.theme.colors.darkGray};
`;

export const TextInput = styled.TextInput`
  height: 48px;
  padding: 0 10px;
  border-radius: 4px;
  color: ${(p) => p.theme.colors.black};
  background: ${(p) => p.theme.colors.lightGray};
`;

export const VisibilityIcon = styled.TouchableOpacity`
  right: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
