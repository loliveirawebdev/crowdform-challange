interface Button {
  small?: boolean;
  outline?: boolean;
  children: ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
