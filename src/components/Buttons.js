import React from "react";

function Buttons() {
  return (
    <div className="edit-div">
      <div>
        <h3>&#10094; Previous</h3>
      </div>
      <div className="buttons-div">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
        <button className="btn">New</button>
      </div>
      <div>
        <h3>Next &#10095;</h3>
      </div>
    </div>
  );
}

export default Buttons;
