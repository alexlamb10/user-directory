import React, { useState } from "react";
import useDisplayHook from "./useDisplayHook";
import data from "../data";

function Card() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);
  const [show, setShow] = useState(false);

  const newUser = {
    id: people.length + 1,
    name: {
      first: "",
      last: "",
    },
    city: "",
    country: "",
    employer: "",
    title: "",
    favoriteMovies: [],
  };

  function deletePerson() {
    let newArr = [...people];
    newArr.splice(index, 1);
    setPeople(newArr);
  }

  let [id, name, city, country, employer, title, favoriteMovies, total] =
    useDisplayHook(index, people);

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
  function handleChange(e) {
    let key = e.target.name;
    newUser[key] = e.target.value;
    console.log(newUser);
  }
  function handleNameChange(e) {
    let key = e.target.name;
    newUser.name[key] = e.target.value;
    console.log(newUser);
  }
  function handleFavMovies(e) {
    let arr = e.target.value.split(", ");
    newUser.favoriteMovies = arr;
    console.log(newUser);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newArr = [...people];
    newArr.push(newUser);
    setPeople(newArr);
    setShow(false);
  }

  return (
    <div>
      <div className={show ? "add-form" : "hide"}>
        <h1 className="add-user">Add New Person</h1>
        <form>
          <input
            type="text"
            name="first"
            placeholder="First Name"
            onChange={handleNameChange}
          />
          <input
            type="text"
            name="last"
            placeholder="Last Name"
            onChange={handleNameChange}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="country"
            onChange={handleChange}
          />
          <input
            type="text"
            name="employer"
            placeholder="employer"
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            onChange={handleChange}
          />
          <input
            type="text"
            name="favoriteMovies"
            placeholder="Favorite Movies"
            onChange={handleFavMovies}
          />
          <button className="btn add" onClick={handleSubmit}>Submit User</button>
        </form>
      </div>
      <div className={!show ? "card-div" : "hide"}>
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
      <div className={!show ? "edit-div" : "hide"}>
        <div>
          <h3 onClick={() => prevPerson()} className="prev">
            &#10094; Previous
          </h3>
        </div>
        <div className={"buttons-div"}>
          <button className="btn">Edit</button>
          <button onClick={() => deletePerson()} className="btn">
            Delete
          </button>
          <button className="btn" onClick={() => setShow(true)}>
            New
          </button>
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
