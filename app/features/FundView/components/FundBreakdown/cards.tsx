import React from "react";
import { Card, CardsContainer } from "./styles";

export const Cards: React.FC = () => {
  const data = new Array(8);

  const renderCard = ({ index }) => {
    const marginLeft = index === 0 ? 24 : 0;
    const marginRight = index === data.length - 1 ? 24 : 15;
    return <Card style={{ marginLeft, marginRight }} />;
  };

  return <CardsContainer horizontal data={data} renderItem={renderCard} showsHorizontalScrollIndicator={false} />;
};
