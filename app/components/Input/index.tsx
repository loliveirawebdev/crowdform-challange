import React from "react";
import { EyeIcon } from "../../assets/icons/EyeIcon";
import { APP_THEME } from "../../config/ThemeProvider/theme";
import { Label, Container, TextInput, VisibilityIcon } from "./styles";

export const Input: React.FC<Input> = (props) => {
  const type = props.type || "text";
  const { label, placeholder } = props;

  const togglePasswordVisibility = () => setIsSecureText(!isSecureText);
  const [isSecureText, setIsSecureText] = React.useState(type === "password");
  const iconColor = isSecureText ? APP_THEME.colors.gray : APP_THEME.colors.primary;

  return (
    <Container>
      <Label>{label}</Label>

      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecureText}
        placeholderTextColor={APP_THEME.colors.gray}
      />

      {type === "password" && (
        <VisibilityIcon onPress={togglePasswordVisibility}>
          <EyeIcon color={iconColor} />
        </VisibilityIcon>
      )}
    </Container>
  );
};
