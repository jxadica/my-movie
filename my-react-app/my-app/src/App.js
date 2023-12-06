import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Side from './Side/Side';
function App() {
  const [movieList, setMovieList] = useState([]);
  const addToMovieList = (movie) => {
    setMovieList((prevList) => [...prevList, movie]);
  };
  return (
    <div className="app">
<header>
  < Header />
</header>
<div className='container'>

<section>
  < Main addToMovieList={addToMovieList}/>
</section>
<aside>
  < Side movieList={movieList}/>
</aside>
</div>
    </div>
  );
}

export default App;
