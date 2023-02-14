import React from "react";
import { PrimaryContainer, SecondaryContainer, TertiaryContainer } from "./styles";

const CONTAINERS: Record<Button["type"], React.ComponentType> = {
  primary: PrimaryContainer,
  tertiary: TertiaryContainer,
  secondary: SecondaryContainer,
};

export const getButtonContainer = (type?: Button["type"]) => {
  if (!type) return PrimaryContainer;
  return CONTAINERS[type];
};
