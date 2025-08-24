import axios from 'axios';

const API_KEY = '51945757-a6508522bd1a0e2757f375d6a'; // встав свій ключ
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при запиті до Pixabay API:', error);
    throw error;
  }
}
