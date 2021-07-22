import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "./GlobalStyles";
import BestCard from "./BestCard";
import { ScrollView } from "react-native";
const covers = [
  {
    image: require("../assets/covers/best-1.jpg"),
    description:
      "every weekday, TED talks Daily brings you the latest talks in audio. Join host and journalist hu fujisuma panda",
    title: "Ted Talks Daily",
  },
  {
    image: require("../assets/covers/best-4.jpg"),
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ut hic commodi. Distinctio assumenda temporibus libero ",
    title: "Global News Podcast",
  },
  {
    image: require("../assets/covers/best-2.jpg"),
    description:
      "amet facilis, repellat similique praesentium ea necessitatibus obcaecati molestiae veniam sapiente omnis est consequatur.",
    title: "The Daily",
  },
  {
    image: require("../assets/covers/best-3.jpg"),
    description:
      "every weekday, TED talks Daily brings you the latest talks in audio. Join host and journalist hu fujisuma panda",
    title: "Anithing Goes With Emma Chamberlain",
  },
];

const BestPodcasts = () => {
  return (
    <Wrapper>
      <Top>
        <Label>Today's best podcasts</Label>
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
