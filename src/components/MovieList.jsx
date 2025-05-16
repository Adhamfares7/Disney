import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';


const imgBaseUrl = "https://image.tmdb.org/t/p/original"

const MovieList = ({genresId , index_}) => {

    const [list, setlist] = useState([]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay : false,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
            ]
      };
    
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${genresId}/similar?language=en-US&page=1`,
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

    function adham(){
        axios
        .request(options)
        .then(res => setlist(res.data.results))
        .catch(err => console.error(err));
    }
  return ( <>
      <Slider className='' {...settings}>   
      {list?.map((item)=>(
          item.poster_path && (
              <div className='px-3 pb-5 ' key={item.id}>
                <img className='hover:scale-110 h-[400px] object-cover cursor-pointer  transition-all duration-300 mr-3 mt-5  w-full rounded-2xl' src={imgBaseUrl+item.poster_path}
            alt="" />  
            <div className='flex justify-between mt-5 text-white font-bold'>
            <h2>{item.title}</h2> 
            <h2 className='flex items-center'>{item.vote_average} <FaStar className='text-yellow-500 ms-1' /> </h2>
            </div>
            </div>
        )
        
    ))}
        </Slider>
    </>
  )
}

export default MovieList
