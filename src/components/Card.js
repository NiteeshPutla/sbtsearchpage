import React from 'react';

function Card({person}) {
  return(
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={person.sbtid} src={"../assets/img/Prasasti.jpeg"} />
      <div>
        <label htmlFor="sbtid">SBT ID:</label>
        <p>{person.sbtid}</p>
        <h2>{person.FirstName + " " + person.LastName}</h2>
        <li>{person.Awardname}</li>
        <li>{person.DateofBirth}</li>
        <li>{person.EmailID}</li>
        <li>{person.IssuedSchool}</li>
        <li>{person.SoulID}</li>
      </div>
    </div>
  );
}

export default Card;