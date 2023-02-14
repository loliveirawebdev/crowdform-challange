import { TouchableOpacity } from "react-native";
import { getButtonContainer } from "./helpers";

export const Button: React.FC<Button> = (props) => {
  const { type, children, onPress, small, outline } = props;
  const Container = getButtonContainer(type);

  return (
    <TouchableOpacity onPress={onPress}>
      <Container outline={outline} small={small}>
        {children}
      </Container>
    </TouchableOpacity>
  );
};
