import axios from 'axios';
import API_KEY from './api';

const API_URL = "http://www.omdbapi.com/?apikey=";

export let getMovie = () => axios.get(API_URL+API_KEY).then(response=>response.data).catch(err=>console.error(err));