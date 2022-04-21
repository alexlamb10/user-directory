import React, { useState } from "react";
import useDisplayHook from "./useDisplayHook";

function Card() {
  const [index, setIndex] = useState(0);

  let [
    id,
    fname,
    lname,
    city,
    country,
    employer,
    title,
    favoriteMovies,
    total,
  ] = useDisplayHook(index);
  console.log(favoriteMovies)

  let movieOne = favoriteMovies[0]
  let movieTwo = favoriteMovies[1]
  let movieThree = favoriteMovies[2]
  
  function nextPerson(){
    if(id < total){
      setIndex(index + 1)
    }else {
      setIndex(total - 1)
    }
  }

  function prevPerson(){
    if(id > 1){
      setIndex(index - 1)
    }
  }

  return (
    <div>

    <div className="card-div">
      <h1 className="index">
        {id}/{total}
      </h1>
      <div className="person-info">
        <h1 className="name">
          {fname} {lname}
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
        <ol className="list">
          <li>{movieOne}</li>
          <li>{movieTwo}</li>
          <li>{movieThree}</li>
        </ol>
      </div>

    </div>
      <div className="edit-div">
        <div>
          <h3 onClick={() => prevPerson()} className="prev">&#10094; Previous</h3>
        </div>
        <div className="buttons-div">
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
          <button className="btn">New</button>
        </div>
        <div>
          <h3 onClick={() => nextPerson()} className="next">Next &#10095;</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
