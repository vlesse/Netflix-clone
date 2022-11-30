const API_KEY = "3309af91963e0c57d2a55c4ed6f567fc"

const Requests = {
    //获取列表
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    //获取视频数据
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    
};

export default Requests;

//  /https://api.themoviedb.org/3/trending/all/week?api_key=$3309af91963e0c57d2a55c4ed6f567fc&language=en-US`

//  /discover/tv?api_key=${API_KEY}&with_networks=213