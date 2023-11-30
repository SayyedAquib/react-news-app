// src/components/NewsApi.js
import axios from 'axios';

const API_KEY = '88298939f0ed4f9fa34b8fd906366f73';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=IN&category=business';

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&apiKey=${API_KEY}`);
    // console.log(response);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};