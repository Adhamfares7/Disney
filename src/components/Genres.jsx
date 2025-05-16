import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieList from './MovieList';


const Genres = () => {


  const [movieGenres, setmovieGenres] = useState([]);
  const GenresList = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWI1ZTU4NmZlNjZjMzZhZjZjOTRjMjQ1NGU2MGRmNSIsIm5iZiI6MTc0NTY4MTAwNi4xNjIsInN1YiI6IjY4MGNmYTZlM2M3MThlOGM1NTM3YTkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.skxFM7PxDkmeu0YU_XVOWty9GyPy6w-lQjTd3cWiSHk'
    }
  };
  


    useEffect(() => {
      adham()
      return () => {
        
      };
    }, []);
  
    function adham() {
      axios
      .request(GenresList)
      .then(res => setmovieGenres(res.data.genres))
      .catch(err => console.error(err));
      
  }

  
  
  return ( <>
    <div>
      {movieGenres?.map((item , index )=> index<=4&& (
        <div className='p-8 md:px-16' key={item.id}>
            <h2 className='text-2xl font-bold text-white'>{item.name}</h2>
          {}  <MovieList genresId={item.id} index_={index} />
        </div>
      ))}
    </div>
      </>
  )
}

export default Genres
