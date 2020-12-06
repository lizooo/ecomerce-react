import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import Genres from "../../components/Genre/Genres";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Cards from "../../components/Card/Cards";
import { loadingContexst } from "../../components/Contexts/Context";

const Catalog = () => {
  // const [loading, setLoading] = useState(false);
  // console.log(loading, "from parent")
  return (
    <div>
      {/* <loadingContexst.Provider value={{ loading, setLoading }}> */}
      <Hero />
      <Genres />
      <MovieInfo />
      <Cards />
      {/* </loadingContexst.Provider> */}
    </div>
  );
};

export default Catalog;
