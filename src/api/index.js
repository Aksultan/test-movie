import axios from 'axios';
import { API_KEY } from './api';

const API_URL = "http://www.omdbapi.com/?apikey=";

export let getMovie = (searchWord, page=1) => axios.get(API_URL+API_KEY+'&s='+searchWord+'&page='+page).then(response=>response.data).catch(err=>console.error(err));
export let getMovieById = (id) => axios.get(API_URL+API_KEY+'&plot=full&i='+id).then(response=>response.data).catch(err=>console.error(err));