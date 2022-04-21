import React, { useState } from "react";
import useDisplayHook from "./useDisplayHook";
import data from "../data";

function Card() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  function deletePerson() {
    let newArr = [...people];
    newArr.splice(index, 1);
    setPeople(newArr);
  }

  let [
    id,
    name,
    city,
    country,
    employer,
    title,
    favoriteMovies,
    total,
  ] = useDisplayHook(index, people);

  let movieList = favoriteMovies.map((movie, index) => {
    return <li key={index}>{movie}</li>;
  });

  function nextPerson() {
    if (id < total) {
      setIndex(index + 1);
    } else {
      setIndex(people.length - 1);
    }
  }

  function prevPerson() {
    if (id > 1) {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <div className="card-div">
        <h1 className="index">
          {index + 1}/{people.length}
        </h1>
        <div className="person-info">
          <h1 className="name">
            {name.first} {name.last}
          </h1>
          <p className="more-info">
            <strong>From:</strong> {city}, {country}
          </p>
          <p className="more-info">
            <strong>Job Title:</strong> {title}
          </p>
          <p className="more-info">
            <strong>Employer:</strong> {employer}
          </p>
          <h3 className="list-title">Favorite Movies:</h3>
          <ol className="list">{movieList}</ol>
        </div>
      </div>
      <div className="edit-div">
        <div>
          <h3 onClick={() => prevPerson()} className="prev">
            &#10094; Previous
          </h3>
        </div>
        <div className="buttons-div">
          <button className="btn">Edit</button>
          <button onClick={() => deletePerson()} className="btn">
            Delete
          </button>
          <button className="btn">New</button>
        </div>
        <div>
          <h3 onClick={() => nextPerson()} className="next">
            Next &#10095;
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
