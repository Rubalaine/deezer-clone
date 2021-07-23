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
const bestPodcasts = [
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
const originals = [
  {
    image: require("../assets/covers/original-3.jpg"),
    description:
      "amet facilis, repellat similique praesentium ea necessitatibus obcaecati molestiae veniam sapiente omnis est consequatur.",
    title: "Céu da Semana",
  },

  {
    image: require("../assets/covers/original-1.jpg"),
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ut hic commodi. Distinctio assumenda temporibus libero ",
    title: "Quem Diria",
  },
  {
    image: require("../assets/covers/original-2.jpg"),
    description:
      "every weekday, TED talks Daily brings you the latest talks in audio. Join host and journalist hu fujisuma panda",
    title: "Bom Dia, Cid Moreira",
  },

  {
    image: require("../assets/covers/original-4.jpg"),
    description:
      "every weekday, TED talks Daily brings you the latest talks in audio. Join host and journalist hu fujisuma panda",
    title: "Céu da Semana, Expecial: Previsões",
  },
];
const Podcasts = () => {
  return (
    <Wrapper>
      <Header name="Podcasts" />
      <PopularPodcasts />
      <Categories title="All categories" covers={categories} />
      <BestPodcasts title="Today's best podcasts" covers={bestPodcasts} />
      <Categories title="Collections" covers={collections} />
      <BestPodcasts title="Deezer Originals" covers={originals} />
    </Wrapper>
  );
};

export default Podcasts;
