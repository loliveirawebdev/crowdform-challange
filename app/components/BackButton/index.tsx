import React from "react";
import { TouchableOpacity } from "react-native";
import { BackIcon } from "../../assets/icons/BackIcon";
import { useNavigation } from "@react-navigation/native";
import { APP_THEME } from "../../config/ThemeProvider/theme";
import { Container } from "./styles";

export const BackButton: React.FC = () => {
  const navigation = useNavigation();
  const onPress = () => navigation.goBack();

  return (
    <Container onPress={onPress}>
      <BackIcon color={APP_THEME.colors.black} />
    </Container>
  );
};
