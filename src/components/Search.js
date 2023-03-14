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
        <h3>View your Achivements on blockchain.</h3>
        <p>Enter Your SBT ID</p>
        </center>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3  b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Input Your SBT Id" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
