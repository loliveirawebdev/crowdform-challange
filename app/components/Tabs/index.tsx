import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Animated from "react-native-reanimated";
import { useActiveMarkerDefinitions, useTabsDefinitions } from "./hooks";
import { Label, TabsContainer, Labels, styles } from "./styles";

export const Tabs: React.FC<Tabs> = (props) => {
  const baseContainerRef = React.useRef();
  const marker = props.marker || "border";
  const definitions = useTabsDefinitions(props);
  const animatedStyles = useActiveMarkerDefinitions(baseContainerRef, definitions, marker);
  const baseMarkerStyle = marker === "border" ? styles.borderMarker : styles.backgroundMarker;

  const renderLabelDefinition = (definition: TabDefinition) => {
    const { label, onPress, ...defProps } = definition;

    return (
      <TouchableWithoutFeedback key={label} onPress={onPress}>
        <View>
          <Label marker={marker} {...defProps}>
            {label}
          </Label>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <React.Fragment>
      <TabsContainer ref={baseContainerRef}>
        <Labels>{definitions.map(renderLabelDefinition)}</Labels>
        <Animated.View style={[baseMarkerStyle, animatedStyles]} />
      </TabsContainer>
      {props.children}
    </React.Fragment>
  );
};
