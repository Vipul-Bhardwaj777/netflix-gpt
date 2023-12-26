import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import GptSuggestions from "./GptSuggestions";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="browse-main">
      <Header />
      {showGpt ? (
        <>
          <GptSearch />
          <GptSuggestions />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
