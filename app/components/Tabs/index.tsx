import React from "react";
import Animated from "react-native-reanimated";
import { useActiveMarkerDefinitions, useTabsDefinitions } from "./hooks";
import { Label, TabsContainer, Labels, styles } from "./styles";

export const Tabs: React.FC<Tabs> = (props) => {
  const baseContainerRef = React.useRef();
  const definitions = useTabsDefinitions(props);
  const animatedStyles = useActiveMarkerDefinitions(baseContainerRef, definitions);

  const renderLabelDefinition = (definition: TabDefinition) => {
    const { isActive, ref, label, onPress } = definition;

    return (
      <Label ref={ref} active={isActive} key={label} onPress={onPress}>
        {label}
      </Label>
    );
  };

  return (
    <React.Fragment>
      <TabsContainer ref={baseContainerRef}>
        <Labels>{definitions.map(renderLabelDefinition)}</Labels>
        <Animated.View style={[styles.activeMarker, animatedStyles]} />
      </TabsContainer>
      {props.children}
    </React.Fragment>
  );
};
