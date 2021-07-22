import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import PopularPodcasts from "../components/PopularPodcasts";
import Categories from "../components/Categories";
import BestPodcasts from "../components/BestPodcasts";

const collections = [
  {
    image: require("../assets/covers/collection-2.jpg"),
    name: "News & Politics",
  },
  {
    image: require("../assets/covers/collection-1.jpg"),
    name: "Education",
  },
  {
    image: require("../assets/covers/collection-3.jpg"),
    name: "Comedy",
  },
  {
    image: require("../assets/covers/collection-4.jpg"),
    name: "Storytelling",
  },
];
const categories = [
  {
    image: require("../assets/covers/category-1.jpg"),
    name: "News & Politics",
  },
  {
    image: require("../assets/covers/category-2.jpg"),
    name: "Education",
  },
  {
    image: require("../assets/covers/category-3.jpg"),
    name: "Comedy",
  },
  {
    image: require("../assets/covers/category-4.jpg"),
    name: "Storytelling",
  },

  {
    image: require("../assets/covers/category-5.jpg"),
    name: "Society & Culture",
  },
  {
    image: require("../assets/covers/category-6.jpg"),
    name: "Music podcasts",
  },
  {
    image: require("../assets/covers/category-7.jpg"),
    name: "Business",
  },
];

const Podcasts = () => {
  return (
    <Wrapper>
      <Header name="Podcasts" />
      <PopularPodcasts />
      <Categories title="All categories" covers={categories} />
      <BestPodcasts />
      <Categories title="Collections" covers={collections} />
    </Wrapper>
  );
};

export default Podcasts;
