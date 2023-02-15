import React from "react";
import { useSharedValue, withTiming, useAnimatedStyle, Easing } from "react-native-reanimated";

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

export const useActiveMarkerDefinitions = (containerRef: any, definitions: TabDefinition[]) => {
  const width = useSharedValue(0);
  const position = useSharedValue(0);

  React.useEffect(() => {
    const active = definitions.find((def) => def.isActive);
    // setTimeout will set the fn to run at the end of the event loop, so all the calculations will be done
    setTimeout(() => active.ref.current.measureLayout(containerRef.current, updateDefinitions), 0);
  }, [definitions]);

  function updateDefinitions(activeTabPosition, _, activeTabWidth) {
    const config = { easing: Easing.ease, duration: 200 };

    width.value = withTiming(activeTabWidth, config);
    position.value = withTiming(activeTabPosition, config);
  }

  return useAnimatedStyle(() => {
    return {
      width: width.value,
      left: position.value,
    };
  });
};
