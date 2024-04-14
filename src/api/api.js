import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://661bf917e7b95ad7fa696e50.mockapi.io/catalog',
});
