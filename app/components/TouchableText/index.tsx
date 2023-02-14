import { TouchableTextContainer } from "./styles";

export const TouchableText: React.FC<TouchableText> = (props) => {
  const { children, onPress, style } = props;

  return (
    <TouchableTextContainer style={style} onPress={onPress}>
      {children}
    </TouchableTextContainer>
  );
};
