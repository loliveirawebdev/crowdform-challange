import React from "react";
import { Container, Separator, Slot } from "./styles";

export const Header: React.FC<Header> = (props) => {
  const { items: itemsProp, slots: slotsProp, append } = props;
  const items = Array.isArray(itemsProp) ? itemsProp : [itemsProp];
  const slots = slotsProp || items.length;

  const getNormalizedItems = () => {
    if (slots <= items.length) return items;

    const emptySlotsQty = slots - items.length;
    const emptySlots = new Array(emptySlotsQty).fill(null);
    return items.concat(emptySlots);
  };

  const getSlotAlignment = (k: number, items: any[]) => {
    if (items.length <= 0) return "flex-start";
    else if (k === items.length - 1) return "flex-end";
    else if (k === 0) return "flex-start";
    else return "center";
  };

  const renderSlots = () => {
    const items = getNormalizedItems();

    return items.map((item, k) => {
      const alignment = getSlotAlignment(k, items);

      return (
        <Slot style={{ alignItems: alignment }} key={k}>
          {item}
        </Slot>
      );
    });
  };

  return (
    <React.Fragment>
      <Container>{renderSlots()}</Container>
      {append || null}
      <Separator />
    </React.Fragment>
  );
};
