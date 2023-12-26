export const USER_ICON =
  "https://occ-0-4773-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const MOVIE_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_API = "https://api.themoviedb.org/3/movie/popular";

export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGS = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "sp", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
