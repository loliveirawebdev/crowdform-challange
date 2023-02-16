import styled, { css } from "styled-components/native";

const BaseContainer = styled.Text<Button>`
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
  padding: ${(p) => (p.small ? 10 : 16)}px;
`;

/***************************************
 * PRIMARY BUTTON
 **************************************/
const PrimaryContainerBasic = css`
  color: ${(p) => p.theme.colors.white};
  background: ${(p) => p.theme.colors.primary};
`;

const PrimaryContainerOutlined = css`
  background: transparent;
  color: ${(p) => p.theme.colors.primary};
  border: 1px solid ${(p) => p.theme.colors.primary};
`;

export const PrimaryContainer = styled(BaseContainer)`
  ${(p) => (p.outline ? PrimaryContainerOutlined : PrimaryContainerBasic)}
`;

/***************************************
 * SECONDARY BUTTON
 **************************************/
const SecondaryContainerBasic = css`
  color: ${(p) => p.theme.colors.primary};
  background: ${(p) => p.theme.colors.secondary};
`;

const SecondaryContainerOutlined = css`
  background: transparent;
  color: ${(p) => p.theme.colors.primary};
  border: 1px solid ${(p) => p.theme.colors.gray};
`;

export const SecondaryContainer = styled(BaseContainer)`
  ${(p) => (p.outline ? SecondaryContainerOutlined : SecondaryContainerBasic)}
`;

/***************************************
 * TERTIARY BUTTON
 **************************************/
const TertiaryContainerBasic = css`
  color: ${(p) => p.theme.colors.white};
  background: ${(p) => p.theme.colors.tertiary};
`;

const TertiaryContainerOutlined = css`
  background: transparent;
  color: ${(p) => p.theme.colors.tertiary};
  border: 1px solid ${(p) => p.theme.colors.tertiary};
`;

export const TertiaryContainer = styled(BaseContainer)`
  ${(p) => (p.outline ? TertiaryContainerOutlined : TertiaryContainerBasic)}
`;
