import React from 'react';
import Search from './components/Search';
import studentSbts from './data/studentSbts';

function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={studentSbts}/>
    </div>
  );
}

export default App;