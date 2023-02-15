interface Tabs {
  labels: string[];
  activeIndex: number;
  children?: ReactNode;
  onChange?: ((index: number) => void) | undefined;
}

interface TabDefinition {
  label: string;
  isActive: boolean;
  onPress: () => void;
  ref: React.RefObject<any>;
}
