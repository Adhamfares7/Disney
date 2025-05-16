import axios from "axios";


    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWI1ZTU4NmZlNjZjMzZhZjZjOTRjMjQ1NGU2MGRmNSIsIm5iZiI6MTc0NTY4MTAwNi4xNjIsInN1YiI6IjY4MGNmYTZlM2M3MThlOGM1NTM3YTkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.skxFM7PxDkmeu0YU_XVOWty9GyPy6w-lQjTd3cWiSHk'
      }
    };
    const getTrendingVideos= axios.request(options)


    export default {
        getTrendingVideos
    }