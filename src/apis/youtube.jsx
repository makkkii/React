import axios from 'axios';
const KEY = 'AIzaSyCgy35Szre-o0jo2fnhD3Wonk3W6Us0QSY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
}) 