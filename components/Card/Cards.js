import React, { useState, useEffect} from "react";
import CardItem from "./CardItem.js";
import Button from "../Button/Button.js";
import { StyledCards, CardsContainer, ButonContainer } from "./CardItem.styled";
import axios from 'axios';
import {loadingContexst} from "../Contexts/Context"
import {Backdrop, CircularProgress, makeStyles} from '@material-ui/core'

export const movies = [
  {
    src: "https://i.pinimg.com/originals/16/94/d9/1694d99f9a62772cc99677904d6d8b1f.jpg",
    description:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    name: "Star Wars",
    price: "23",
    category: "movie"
  },
  {
    src: "https://i.pinimg.com/originals/fe/56/81/fe568119308cbaa73096b0788779335c.jpg",
    description:
      "Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper.",
    name: "The Sillicon Valley",
    price: "30", 
    category: "series"
  },
  {
    src: "https://i.pinimg.com/originals/47/66/1f/47661f6fa4cd4f11715a315ed1a94428.jpg",
    description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    name: "Sherlock",
    price: "32", 
    category: "series"
  },
  {
    src: "https://i.pinimg.com/originals/30/61/66/306166922d3153008926fe4557563b32.jpg",
    description:
      "Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota.",
    name: "Fargo",
    price: "22",
    category: "series"
  },
  {
    src: "https://i.pinimg.com/originals/42/ad/cd/42adcddfcd2770e71946579659c26376.jpg",
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    name: "Black Mirror",
    price: "20",
    category: "series"
  },
  {
    src: "https://i.pinimg.com/originals/d5/19/97/d519972ba1e18ca1b631d157ddbaf98a.jpg",
    description:
      "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    name: "Mr Robot",
    price: "28",
    category: "series"
  },
  {
    src: "https://i.pinimg.com/originals/71/9c/30/719c3021e59a9fb5049a243134abddb7.jpg",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    name: "Narcos",
    price: "17",
    category: "movie"
  },
  {
    src: "https://i.pinimg.com/originals/56/00/18/5600181f7609f78556da1054b6cd57f9.jpg",
    description:
      "Rebecca must unlock the terror behind her little brother's experiences that once tested her sanity, bringing her face to face with a supernatural spirit attached to their mother.",
    name: "Lights Out",
    price: "20",
    category: "movie"
  },
  {
    src: "https://i.pinimg.com/originals/48/93/7b/48937b3112ce861e09cc1b0076fe6b44.jpg",
    description:
      "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
    name: "Ex Machina",
    price: "15",
    category: "movie"
  },
];

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1, 
    color:'#fff',
  },
}));

function Cards() {
  const classes = useStyles();
  const [visible, setVisible] = useState(3);
  const loadMoreCards = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const {setLoading} = useContext(loadingContexst);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get('http://localhost:3000/api/v1/movies/')
      setFetchedMovies(res.data);
      console.log('fom nested')
      setLoading(true);
    }
    fetchMovies();
  }, []);  


  if (loading) {
  return (
    <div>
      <StyledCards>
        <h1>Trending this season</h1>
        <CardsContainer>
          {fetchedMovies
        .slice(0, visible).map(({ movieId, src, description, name, price }, key) => (
            <CardItem
              movieId = {movieId}
              key={movieId}
              src={src}
              description={description}
              name={name}
              price = {price}
            />
          ))}
        </CardsContainer>
        <ButonContainer>
          <Button onclickFunc={loadMoreCards} ActionCall="Load More" />
        </ButonContainer>
      </StyledCards>
    </div>
  );
  }
else {
    return (
      <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />
    </Backdrop>
    )
  }

};

export default Cards;
