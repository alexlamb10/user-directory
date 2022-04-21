import React from 'react'

function Card() {
  return (
    <div className="card-div">
      <h1 className="index">1/25</h1>
      <div className='person-info'>
        <h1 className='name'>Marion Santori</h1>
        <p className='more-info'>
          <strong>From:</strong> Liverpool, United Kingdom
        </p>
        <p className='more-info'>
          <strong>Job Title:</strong> Research Associate
        </p>
        <p className='more-info'>
          <strong>Employer:</strong> Skinix
        </p>
        <h3 className='list-title'>Favorite Movies:</h3>
        <ol className='list'>
          <li>Fathom</li>
          <li>Strange Magic</li>
          <li>Martian Child</li>
        </ol>
      </div>
    </div>
  );
}

export default Card