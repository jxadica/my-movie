import React, { useState, useEffect } from 'react';
import './Main.css';
import Side from '../Side/Side';

function Main( ) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [defaultRes, setDefaultRes] = useState([]);
  // const arrayDef=[...defaultRes];

  const fetchData = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=fd6375e3`);
      const data = await response.json();

      if (data.Response === 'False') {
        console.error('Movie not found!');
        setResults([]);
      } else {
        setResults(data.Search);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    }
  };

  const defaultFetch = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?s=miraculous&apikey=fd6375e3");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const defaultR = await response.json();
      setDefaultRes([defaultR]);
    } catch (error) {
      console.error('Error fetching default data:', error);
      setDefaultRes([]);
    }
  };
  useEffect(() => {
    defaultFetch();
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addToMovieList = (movie) => {
    let ul = document.querySelector(".movieList");
    let li = document.createElement("li");
    let span = document.createElement("button");

    li.innerText = movie.Title;
    span.innerText = "Delete";
    span.className = "del";
    li.style.color = "white";
    li.style.listStyle = "none";
    document.querySelector(".movieList").appendChild(li);
    li.appendChild(span);
    li.style.display = 'flex';
    li.style.justifyContent = "space-between";

    span.addEventListener("click", (e) => {
      e.preventDefault();
      ul.removeChild(li);
      addToMovieList(movie);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    setDefaultRes([]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input className='searchInput' type="text" placeholder="Search movie..." value={searchTerm} onChange={handleChange} />
        <button className='searchBut' type="submit">Search</button>
      </form>
      <div className='moviesAppear'>
        {results.map(movie => (
          <div className="main">

          <div className='myMovies' key={movie.imdbID}>
            <div className='posterAndInfo'>
              <img className='wholeImg' src={movie.Poster} alt={movie.Title} />
              <div className='movieInfo'>
                <h2 className='nameOfMovie'>{movie.Title}</h2>
                <button onClick={() => addToMovieList(movie)} className='adding'>Add to list</button><br />
                <a className='link' href={`https://www.imdb.com/title/${movie.imdbID}/?ref_=chtmvm_t_2`} target="_blank" rel="noopener noreferrer">Details</a>
              </div>
            </div>
          </div>
          </div>
        ))}
        {/* Here */}
{/* {        console.log('d', defaultRes)} */}

 {defaultRes[0] && defaultRes[0].Search.map(defaults => (
          <div className="posterAndInfo" key={defaults.imdbID}>
            <img src={defaults.Poster} className='wholeImg' alt={defaults.Title} style={{ width: '135px' }} />
            <div className="movieInfo">
              <h2 className="nameOfMovie">{defaults.Title}</h2>
              <button onClick={() => addToMovieList(defaults)} className='adding'>Add to list</button><br />
              <a className='link' href={`https://www.imdb.com/title/${defaults.imdbID}/?ref_=chtmvm_t_2`} target="_blank" rel="noopener noreferrer">Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
