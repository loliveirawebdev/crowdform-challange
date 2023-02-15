import React from "react";
import { useSharedValue, withTiming, useAnimatedStyle, Easing } from "react-native-reanimated";

const BACKGROUND_PADDING = 8;
const WIDTH_OFFSET = BACKGROUND_PADDING * 2;

export const useTabsDefinitions = (props: Tabs): TabDefinition[] => {
  const { labels, activeIndex, onChange } = props;

  const labelsAndRefs = React.useMemo(() => {
    return labels.map((label) => ({ label, ref: React.createRef() }));
  }, []);

  return React.useMemo(() => {
    return labelsAndRefs.map((label, index) => {
      const isActive = index === activeIndex;
      const onPress = onChange ? () => onChange(index) : undefined;

      return { ...label, isActive, onPress };
    });
  }, [labelsAndRefs, activeIndex, onChange]);
};

export const useActiveMarkerDefinitions = (containerRef: any, definitions: TabDefinition[], mode: Tabs["marker"]) => {
  const width = useSharedValue(0);
  const position = useSharedValue(0);

  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const calculateWidth = (width) => (mode === "border" ? width : width + WIDTH_OFFSET);
  const calculatePosition = (position) => (mode === "border" ? position : position - BACKGROUND_PADDING);

  React.useEffect(() => {
    // setTimeout will set the fn to run at the end of the event loop, so all the calculations will be done
    const active = definitions.find((def) => def.isActive);
    setTimeout(() => active.ref.current.measureLayout(containerRef.current, updateDefinitions), 0);
  }, [definitions]);

  function applyAnimations(value) {
    if (isFirstRender) {
      setIsFirstRender(false);
      return value;
    }

    const config = { easing: Easing.ease, duration: 200 };
    return withTiming(value, config);
  }

  function updateDefinitions(activeTabPosition, _, activeTabWidth) {
    width.value = applyAnimations(calculateWidth(activeTabWidth));
    position.value = applyAnimations(calculatePosition(activeTabPosition));
  }

  return useAnimatedStyle(() => {
    return {
      width: width.value,
      left: position.value,
    };
  });
};
