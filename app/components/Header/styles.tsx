import styled from "styled-components/native";

export const Container = styled.View`
  height: 48px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background: ${(p) => p.theme.colors.lightGray};
`;

export const Slot = styled.View`
  height: 100%;
  justify-content: center;
`;
