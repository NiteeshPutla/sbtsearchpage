import React from 'react';

function Card({person}) {
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`Check out ${person.FirstName} ${person.LastName}'s Award for  ${person.Awardname} issued by Prasasti`)}`;
    window.open(url, '_blank', 'height=500,width=700');
  };
  
  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Check out ${person.FirstName} ${person.LastName}'s Award for  ${person.Awardname} issued by Prasasti`)}`;
    window.open(url, '_blank', 'height=500,width=700');
  };
  
  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(`Check out ${person.FirstName} ${person.LastName}'s Award for  ${person.Awardname} issued by Prasasti`)}`;
    window.open(url, '_blank', 'height=500,width=700');
  };
  
  const shareOnInstagram = () => {
    const url = `instagram://library?AssetPath=${encodeURIComponent('../assets/img/Prasasti.jpeg')}&InstagramCaption=${encodeURIComponent(`Check out ${person.FirstName} ${person.LastName}'s Award for  ${person.Awardname} issued by Prasasti`)}`;
    window.open(url, '_blank');
  };

  return(
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={person.sbtid} src={"../assets/img/Prasasti.jpeg"} />
      <div>
        <label htmlFor="sbtid">SBT ID:</label>
        <p>{person.sbtid}</p>
        <h2>{person.FirstName + " " + person.LastName}</h2>
        <label htmlFor="sbtid">Award:</label>

        <li>{person.Awardname}</li>
        <label htmlFor="sbtid">DOB:</label>

        <li>{person.DateofBirth}</li>
        <label htmlFor="sbtid">Email:</label>

        <li>{person.EmailID}</li>
        <label htmlFor="sbtid">Issued By:</label>

        <li>{person.IssuedSchool}</li>
        <label htmlFor="sbtid">SoulId:</label>

        <li>{person.SoulID}</li>
        <div>
          <button onClick={shareOnFacebook}>Share on Facebook</button>
          <button onClick={shareOnTwitter}>Share on Twitter</button>
          <button onClick={shareOnLinkedIn}>Share on LinkedIn</button>
          <button onClick={shareOnInstagram}>Share on Instagram</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
