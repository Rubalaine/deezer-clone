import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "./GlobalStyles";
import BestCard from "./BestCard";
import { ScrollView } from "react-native";

const BestPodcasts = ({ covers, title }) => {
  return (
    <Wrapper>
      <Top>
        <Label>{title}</Label>
        <Ionicons name="ios-chevron-forward" size={24} color="black" />
      </Top>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Bottom>
          {covers.map((cover, index) => (
            <BestCard
              url={cover.image}
              description={cover.description}
              title={cover.title}
              key={index}
            />
          ))}
        </Bottom>
      </ScrollView>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin: 20px 0;
`;
const Top = styled.View`
  flex-direction: row;
  padding: 0 20px;
  margin-bottom: 8px;
`;
const Bottom = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default BestPodcasts;
