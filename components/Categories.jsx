import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "./GlobalStyles";
import PopularPodcastCard from "./PopularPodcastCard";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";


const Categories = ({ title, covers }) => {
  return (
    <Wrapper>
      <Top>
        <Label>{title}</Label>
        <Ionicons name="ios-chevron-forward" size={24} color="black" />
      </Top>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Bottom>
          {covers.map((cover, index) => (
            <CategoryCard url={cover.image} name={cover.name} key={index} />
          ))}
        </Bottom>
      </ScrollView>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin: 20px 0;
  /* padding: 20px; */
`;
const Top = styled.View`
  flex-direction: row;
  padding: 0 20px;
  margin-bottom: 8px;
`;
const Bottom = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

export default Categories;
