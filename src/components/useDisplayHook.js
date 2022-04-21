import { useState, useEffect } from "react";
import data from "../data";

function useDisplayHook(index) {
  const [people, setPeople] = useState(data);
  const [id, setId] = useState(null);
  const [fname, setFName] = useState(null);
  const [lname, setLName] = useState(null)
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [employer, setEmployer] = useState(null);
  const [title, setTitle] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const { id, name, city, country, employer, title, favoriteMovies } =
      people[index];
    setId(id);
    setFName(name.first);
    setLName(name.last);
    setCity(city);
    setCountry(country);
    setEmployer(employer);
    setTitle(title);
    setFavoriteMovies(favoriteMovies);
    setTotal(people.length);

  }, [index, people]);

  return [id, fname, lname, city, country, employer, title, favoriteMovies, total];
}

export default useDisplayHook;
