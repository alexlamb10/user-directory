import { useState, useEffect } from "react";
import data from "../data";

function useDisplayHook(index, people) {
  
  const [id, setId] = useState(null);
  const [name, setName] = useState({});
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [employer, setEmployer] = useState(null);
  const [title, setTitle] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const { id, name, city, country, employer, title, favoriteMovies } =
      people[index];
    setId(id);
    setName(name)
    setCity(city);
    setCountry(country);
    setEmployer(employer);
    setTitle(title);
    setFavoriteMovies(favoriteMovies);
    setTotal(people.length);

  }, [index, people]);

  return [id, name, city, country, employer, title, favoriteMovies, total];
}

export default useDisplayHook;
