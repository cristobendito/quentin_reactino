import axios from "axios";
import {APIKEY} from "./apiKey";

// Axios proporciona las siguientes funcionalidades:

// - Envío de XMLHttpRequest desde el navegador.
// - Envío de solicitudes HTTP desde Node.js.
// - Soporte para la API de Promesas.
// - Interceptación de solicitudes y respuestas.
// - Transformación de datos de solicitudes y respuestas.
// - Cancelación/interrupción de solicitudes.
// - Análisis/parsing automático de datos en formato JSON.
// - Protección automática contra XSRF.  



export async function fetchPopularMovies(genreId = null, page = 1) {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=${page}`;
  if (genreId) {
    url += `&with_genres=${genreId}`;
  }
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
}

export async function fetchGenres() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}`;
  try {
    const response = await axios.get(url);
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

export async function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
}

export default {
  fetchPopularMovies,
  fetchGenres,
  searchMovies}