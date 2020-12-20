import axios from 'axios';

export async function getMovies() {
  return(
    await axios.get('http://localhost:3000/api/v1/movies/')
  ).data
}



