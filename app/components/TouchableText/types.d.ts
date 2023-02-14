interface TouchableText {
  children: ReactNode;
  style?: StyleProp<TextStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
