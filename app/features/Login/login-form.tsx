import React from "react";
import { FormTitle } from "./styles";
import { Input } from "../../components/Input";
import { View } from "react-native";

export const LoginForm: React.FC = () => {
  return (
    <React.Fragment>
      <FormTitle>Login</FormTitle>

      <View style={{ marginBottom: 24 }}>
        <Input label="E-mail" placeholder="Enter your e-mail" />
      </View>

      <View style={{ marginBottom: 24 }}>
        <Input label="Password" placeholder="Enter your password" type="password" />
      </View>
    </React.Fragment>
  );
};
