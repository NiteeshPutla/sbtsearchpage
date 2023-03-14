import React from 'react';
import PrasastiImage from "../assets/img/Prasasti.jpeg"

function Card({person}) {
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`Check out ${person.FirstName} ${person.LastName}'s Award for  ${person.Awardname} issued by Prasasti`)}`;
    window.open(url, '_blank', 'height=500,width=700');
  };
  
  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url/library?AssetPath=${encodeURIComponent({PrasastiImage})}&${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Check out ${person.FirstName} ${person.LastName}'s Award for  ${person.Awardname} issued by Prasasti`)}`;
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
    <div className="tc bg-light-blue dib br3 pa3 ma2  bw2 shadow-5">
      <img className="br-100 h5 w5 dib" alt={person.sbtid} src="https://drive.google.com/uc?export=view&id=11xQI4Zgx5KX-pdlVVHgPTUDhzQviWbW0" />
      <div>
        <label htmlFor="sbtid" style={{ display: 'inline-block', marginRight: '10px' }}>SBT ID:</label>
        <p style={{ display: 'inline-block' }}>{person.sbtid}</p>
        
        <h3>{person.FirstName + " " + person.LastName}</h3>

        <label htmlFor="sbtid" style={{ display: 'inline-block', marginRight: '10px' }}>Award:</label>
        <li style={{ display: 'inline-block' }}>{person.Awardname}</li>
        <br/>

        <label htmlFor="sbtid" style={{ display: 'inline-block', marginRight: '10px' }}>DOB:</label>
        <li style={{ display: 'inline-block' }}>{person.DateofBirth}</li>
        <br/>

        <label htmlFor="sbtid" style={{ display: 'inline-block', marginRight: '10px' }}>Email:</label>
        <li style={{ display: 'inline-block' }}>{person.EmailID}</li>
        <br/>

        <label htmlFor="sbtid"style={{ display: 'inline-block', marginRight: '10px' }}>Issued By:</label>
        <li style={{ display: 'inline-block' }}>{person.IssuedSchool}</li>
        <br/>

        <label htmlFor="sbtid" style={{ display: 'inline-block', marginRight: '10px' }}>SoulId:</label>
        <li style={{ display: 'inline-block' }}>{person.SoulID}</li>
        <div>
        {/* <button onClick={shareOnFacebook} style={{ fontSize: '14px', padding: '8px 12px',color:'white',backgroundColor:'#1877F2',borderRadius: '10px',outline: "none",boxshadow:"none" }}>Share on Facebook</button>
        <button onClick={shareOnTwitter} style={{ fontSize: '14px', padding: '8px 12px', color:'white', backgroundColor:'#1DA1F2', borderRadius: '10px', boxShadow: 'none', outline: 'none' }}>Share on Twitter</button>
        <button onClick={shareOnLinkedIn} style={{ fontSize: '14px', padding: '8px 12px',color:'white',backgroundColor:'#0A66C2',borderRadius: '10px' ,}}>Share on LinkedIn</button>
        <button onClick={shareOnInstagram} style={{ fontSize: '14px', padding: '8px 12px',color:'black',backgroundColor:'#E4405F',borderRadius: '10px' }}>Share on Instagram</button> */}
          <div style={{display: "flex" ,gap: "10px",alignItems:"center"}}>
            <label>Share </label>
  <a href onClick={shareOnTwitter} >
    <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Twitter-64.png" alt="Twitter" width="30"/>
  </a>
  <a href onClick={shareOnInstagram}>
    <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png" alt="Instagram" width="30"/>
  </a>
  <a href onClick= {shareOnLinkedIn}>
    <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-64.png" alt="LinkedIn" width="30"/>
  </a>
  <a href onClick={shareOnFacebook}>
    <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-64.png" alt="Facebook" width="30"/>
  </a>
  
</div>

        </div>
      </div>
    </div>
  );
}

export default Card;
