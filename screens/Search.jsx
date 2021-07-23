import React from "react";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import SearchBar from "../components/SearchBar";
import SongCatcher from "../components/SongCatcher";
import Wrapper from "../components/Wrapper";
const highlights = [
  {
    image: require("../assets/covers/light-1.jpg"),
    label: "Podcasts",
  },
  {
    image: require("../assets/covers/light-2.jpg"),
    label: "Charts",
  },
  {
    image: require("../assets/covers/light-3.jpg"),
    label: "New releases",
  },
  {
    image: require("../assets/covers/light-4.jpg"),
    label: "Curators",
  },
  {
    image: require("../assets/covers/light-5.jpg"),
    label: "Mixes",
  },
];
const genres = [
  {
    image: require("../assets/covers/genre-1.jpg"),
    label: "Rap",
  },
  {
    image: require("../assets/covers/genre-2.jpg"),
    label: "Pop",
  },
  {
    image: require("../assets/covers/genre-3.jpg"),
    label: "Rock",
  },
  {
    image: require("../assets/covers/genre-4.jpg"),
    label: "R & B",
  },
  {
    image: require("../assets/covers/genre-5.jpg"),
    label: "Dance & EDM",
  },
  {
    image: require("../assets/covers/genre-6.jpg"),
    label: "African Music",
  },
];
const Search = () => {
  return (
    <Wrapper>
      <Header name="Search" />
      <SearchBar />
      <SongCatcher />
      <Highlights title="Highlights" covers={highlights} />
      <Highlights title="Genres" covers={genres} />
      <Highlights
        title="Categories"
        covers={highlights.sort(
          (first, second) => first.label.length > second.label.length
        )}
      />
    </Wrapper>
  );
};

export default Search;
