import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 


  const filteredPersons = details.filter(
    person => {
        return (
          person
          .sbtid
          .toString()
          .toLowerCase() === searchField.toLowerCase() // check if id exactly matches the search string
        );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };
  function searchList() {
    if (searchShow && filteredPersons.length > 0) {
        return (
          <Scroll>
            <SearchList filteredPersons={filteredPersons} />
          </Scroll>
        );
    }
  }


  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
      <center>
        <h1>Welcome to the world of Prasasti</h1>
        <h3>View your Achievements on blockchain.</h3>
        <p>Enter Your SBT ID</p>
        </center>
      </div>
      <div className="pa2">
          {/* <label htmlFor="searchInput">
          <img src="https://cdn2.iconfinder.com/data/icons/thick-outlines-online-project-basics/128/20-blue_search-find-glass-64.png" alt="Search Icon" style={{ width: '60px', height: '60px' }} />
          </label> */}
                  <input 
            className="pa3 bb br3 b--none bg-lightest-blue ma3"
            type="search" 
            id="searchInput"
            placeholder="Input Your SBT Id" 
            style={{ 
              width: '300px', 
              height: '60px',
              backgroundImage: 'url(https://cdn2.iconfinder.com/data/icons/search-outline-24-px/24/files_and_folders_archive_zoom_magnifying_glass_search-64.png)',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              paddingLeft: '40px', 
              paddingRight:'60px'
            }}
            onChange={handleChange}
          />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
