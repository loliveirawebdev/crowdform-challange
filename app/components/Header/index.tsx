import React from "react";
import { Container, Separator, Slot } from "./styles";

export const Header: React.FC<Header> = (props) => {
  const { items: itemsProp, slots: slotsProp } = props;
  const items = Array.isArray(itemsProp) ? itemsProp : [itemsProp];
  const slots = slotsProp || items.length;

  const getNormalizedItems = () => {
    if (slots <= items.length) return items;

    const emptySlotsQty = slots - items.length;
    const emptySlots = new Array(emptySlotsQty).fill(null);
    return items.concat(emptySlots);
  };

  const renderSlots = () => {
    const items = getNormalizedItems();
    return items.map((item, k) => <Slot key={k}>{item}</Slot>);
  };

  return (
    <React.Fragment>
      <Container>{renderSlots()}</Container>

      <Separator />
    </React.Fragment>
  );
};
