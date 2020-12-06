import { React, useContext, useState, useEffect } from "react";
import FiltersWrapper from "./Filters.styled";
import Search from "./Search";
import ButtonSmall from "../Button/ButtonSmall";
import { MoviesContext } from "../Contexts/Context";
import CardItem from "../Card/CardItem";
import { StyledCards, CardsContainer } from "../Card/CardItem.styled";
import StyledCategory from "./Category.styled";
import Price from "./Price";
import Select from "react-select";

const Filters = () => {
  
  const options = [
    { value: "movie", label: "Movies" },
    { value: "series", label: "Series" },
    { value: "all", label: "All" },
  ];

  const  {allMovies}  = useContext(MoviesContext);
  const [movies, setMovies] = useState(allMovies);
  let filteredMovies;

  const [toSearch, setToSearch] = useState("");
  const [selectOption, setSelectOption] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);


  const onRangeChange = (event, value) => {
    setPriceRange(value);
  };

  const onSearch = (event) => {
    setToSearch(event.target.value);
  };

  const onCancel = () => {
    setToSearch("");
  };

  const onSelectChange = (value) => {
    setSelectOption(value.value);
  };

  useEffect(() => {

    filteredMovies = allMovies.filter((item) => 
    item.name.includes(toSearch)
    );

    filteredMovies = filteredMovies.filter((item) => 
    item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    filteredMovies = filteredMovies.filter(
      (item) => item.category === selectOption | selectOption === 'all'
    ) ;

    setMovies(filteredMovies);
  }, [toSearch, priceRange, selectOption]);

  return (
    <div>
      <FiltersWrapper>
        <Price value={priceRange} onChange={onRangeChange}></Price>
        <StyledCategory>
          <label>Search:</label>
          <br></br>
          <Select options={options} onChange={onSelectChange} />
        </StyledCategory>
        <Search value={toSearch} onChange={onSearch} />
        <ButtonSmall ActionCall="Cancel" onclickFunc={onCancel}></ButtonSmall>
      </FiltersWrapper>
      <div>
        <StyledCards>
        <CardsContainer>
              {movies.map(({ src, description, name, price, key}) => (
            <CardItem
              key={name}
              src={src}
              description={description}
              name={name}
              price = {price}
            />
          ))}
            </CardsContainer>
        </StyledCards>
      </div>
    </div>
  );
};

export default Filters;
