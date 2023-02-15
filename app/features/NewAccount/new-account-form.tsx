import React from "react";
import { FormTitle } from "./styles";
import { Input } from "../../components/Input";
import { View } from "react-native";

export const NewAccountForm: React.FC = () => {
  return (
    <React.Fragment>
      <FormTitle>Create your account</FormTitle>

      <View style={{ marginBottom: 24 }}>
        <Input label="First name" />
      </View>

      <View style={{ marginBottom: 24 }}>
        <Input label="Last name" />
      </View>

      <View style={{ marginBottom: 24 }}>
        <Input label="E-mail" />
      </View>

      <View style={{ marginBottom: 24 }}>
        <Input label="Password" placeholder="Minimum 8 characters" type="password" />
      </View>
    </React.Fragment>
  );
};
