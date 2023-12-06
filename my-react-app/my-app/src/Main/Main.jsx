import React, { useState } from 'react';
import  './Main.css'
// import Side from '../Side/Side';
function Main({addToMovieList}) {
 const [searchTerm, setSearchTerm] = useState('');
 const [results, setResults] = useState([]);

 const fetchData = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=fd6375e3`);
      const data = await response.json();
      
      if (data.Response === 'False') {
        console.error('Movie not found!');
        setResults([]);
      } else {
        setResults(data.Search);
        console.log(data.imdbID);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    }
 };

 const handleChange = (event) => {
    setSearchTerm(event.target.value);
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
 };
 const addingEl = (movie) => {
  addToMovieList(movie);
};

 return (
  <div className="App">
      <form onSubmit={handleSubmit}>
          <input className='searchInput' type="text" placeholder="Search movie..." value={searchTerm} onChange={handleChange} />
          <button className='searchBut' type="submit">Search</button>
      </form>
    <div className='moviesAppear'>
      {results.map(movie => (
        <div className='myMovies'  key={movie.imdbID}>
          <div className='posterAndInfo'>

            <img style={{width:'135px'}} src={movie.Poster} alt={movie.Title} />
            <div className='movieInfo'>
           <h2 className='nameOfMovie'>{movie.Title}</h2>
          <button onClick={()=>addingEl(movie)} className='adding'>Add to list</button><br />
          <a className='link' href={`https://www.imdb.com/title/${movie.imdbID}/?ref_=chtmvm_t_2`} target="_blank" rel="noopener noreferrer">Details</a>
            </div>
           </div>
   </div>
      ))}
      
      </div>
    </div>
 );
}

export default Main;