import {React, useContext, useState, useEffect} from 'react'
import FiltersWrapper from './Filters.styled'
import Search from './Search'
import ButtonSmall from '../Button/ButtonSmall'
import {MoviesContext} from "../Contexts/Context"
import CardItem from "../Card/CardItem";
import { StyledCards, CardsContainer } from "../Card/CardItem.styled";
import StyledCategory from './Category.styled'
import Price from './Price'
import Select from 'react-select'
import {Link} from 'react-router-dom'


const Filters = () => {

  const options = [
    { value: 'movie', label: 'Movies' },
    { value: 'series', label: 'Series' },
    { value: 'all', label: 'All'}
  ]

  const {allMovies} = useContext(MoviesContext);
  const [items, setItems] = useState(allMovies);

  const [toSearch, setToSearch] = useState("");
  const [selectOption, setSelectOption] = useState([]);
  const [priceRange, setPriceRange] = useState([0, Infinity]);


  const handleRange = (event, value) => {
    setPriceRange(value);
  };

  const handleSearch = (event) => {
    setToSearch(event.target.value);
  };

  const handleSelect = (value) => {
    setSelectOption(value.value);

  };

  useEffect(() => {
    let newItems;
    
    newItems = allMovies.filter((item) => 
    item.name.includes(toSearch)
    );

    newItems = newItems.filter((item) => 
    item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    newItems = newItems.filter(
      (item) => item.category === selectOption | selectOption === 'all'
    ) ;

    setItems(newItems);
  },[ toSearch, priceRange, selectOption]);

  return (
    <div>
      <FiltersWrapper>
        <Search value={toSearch} onChange={handleSearch}/>
        <Price value = {priceRange} onChange = {handleRange}></Price> 
        < StyledCategory>
          <label>Search:</label><br></br>
          <Select options={options} onChange = {handleSelect} />
        </StyledCategory>
        <ButtonSmall ActionCall='Apply'></ButtonSmall>
      </FiltersWrapper>
          <div>
          <StyledCards>
            <CardsContainer>
              {items.map(({ src, description, name, price }, key) => (
            <CardItem
              key={`card-${name}`}
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
    
  )
}

export default Filters
