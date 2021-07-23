import React from "react";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <Wrapper>
      <Bar>
        <Ionicons name="ios-search-outline" size={24} color="#72727d" />
        <SearchInput placeholder="Artists, tracks, podcasts..." />
        <Ionicons name="ios-mic-outline" size={24} color="#72727d" />
      </Bar>
    </Wrapper>
  );
};
const Wrapper = styled.View`
  padding: 20px;
`;
const Bar = styled.View`
  width: 100%;
  background-color: white;
  height: 50px;
  border-radius: 40px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const SearchInput = styled.TextInput`
  flex: 1;
  font-family: "Poppins_400Regular";
  height: 100%;
  /* align-items: center; */
  padding-top: 5px;
  padding-horizontal: 10px;
  /* padding: 0 10px; */
  /* background-color: blue; */
`;
export default SearchBar;
