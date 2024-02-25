import { FilmResponse, FilmsResponse } from "./filmSlice";

export const fetchAllFilms = async (): Promise<FilmsResponse> => {
  const response = await fetch("https://swapi.dev/api/films", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const result: FilmsResponse = await response.json();
  console.log(result);

  return result;
};
