import axios from "axios";
import md5 from "md5";

// base url for the Marvel API
const BASE_URL = "https://gateway.marvel.com/v1/public/characters";
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
// generating a timestamp for the request
const TIMESTAMP = new Date().getTime();
// creating a hash using md5
const HASH = md5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY);

// fetch characters from the API
export const fetchCharacters = async (searchQuery) => {
  try {
    // necessary parameters
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: PUBLIC_KEY,
        ts: TIMESTAMP,
        hash: HASH,
        nameStartsWith: searchQuery,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
