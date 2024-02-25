import { useSelector } from "react-redux";
import { CharactersResponse, FilmResponse, PlanetsResponse, SpeciesResponse, StarshipsResponse, VehiclesResponse } from "./filmSlice";
import { selectFilms } from "./selectors";

export const fetchFilm = async (path: string): Promise<FilmResponse> => {

  const response = await fetch(`https://swapi.dev/api/${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const result: FilmResponse = await response.json();

  const resCharacters = result.characters.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: CharactersResponse) => c.name)
  );
  const resPlanets = result.planets.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: PlanetsResponse) => c.name)
  );
  const resSpecies = result.species.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: SpeciesResponse) => c.name)
  );
  const resStarships = result.starships.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: StarshipsResponse) => c.name)
  );
  const resVehicles = result.vehicles.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: VehiclesResponse) => c.name)
  );
  const characters = await Promise.all(resCharacters);
  const planets = await Promise.all(resPlanets);
  const species = await Promise.all(resSpecies);
  const starships = await Promise.all(resStarships);
  const vehicles = await Promise.all(resVehicles);
  const data = {... result, characters, planets, species, starships, vehicles}

  return data;
};
