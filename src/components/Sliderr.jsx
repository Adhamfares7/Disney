import React, { useEffect, useState } from "react";
import GlobalApi from "../Servies/GlobalApi";
import Slider from "react-slick";


const imgBaseUrl = "https://image.tmdb.org/t/p/original"
function Sliderr() {
  const [MovieList, setMovieList] = useState([]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay : true,
    autoplaySpeed:2000,
  };
  


  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };

  return <>
<Slider className="px-16 overflow-hidden" {...settings}>


{MovieList.map((item, index) => (
      <img src={imgBaseUrl+item.backdrop_path} className=" min-w-full scroll-auto md:h-[400px] object-cover object-top mr-5 rounded-lg " alt="" />
))}

    </Slider>

  </>;
}

export default Sliderr;
