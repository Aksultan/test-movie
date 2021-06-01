import axios from 'axios';
import { API_KEY } from './api';

const API_URL = "http://www.omdbapi.com/?apikey=";

export let getMovie = (searchWord) => axios.get(API_URL+API_KEY+'&s='+searchWord).then(response=>response.data.Search).catch(err=>console.error(err));