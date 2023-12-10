
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
  import './Side.css'
  // import Main from '../Main/Main';
  function Side() {
    const [movieList, setMovieList] = useState([]);
    const [isSaveClicked, setIsSaveClicked] = useState(false);
    const [listName, setListName] = useState('');
    // const input= document.querySelector(".liStName")
    const inputRef = useRef(null);

    const checkSave = (e) => {
      const checkThis = inputRef.current.value.trim();
    if (checkThis === '') {
      alert('List name cannot be empty!');
      return;
    }

    setIsSaveClicked(true);
    const addingButtons = document.querySelectorAll('.adding');
    addingButtons.forEach((button) => {
      button.disabled = true;
    });

    const deleteButtons = document.querySelectorAll('.del');
    deleteButtons.forEach((button) => {
      button.style.display = 'none';
    });

  };
  const handleListNameChange = (e) => {
    
    setListName(e.target.value);
  };
  return (
    <div className='side'>
         <h3 className="sideH3">Your list</h3>
        <input type="text" className='liStName' ref={inputRef} onChange={handleListNameChange}/>
        <button className='save'
        onClick={checkSave}> 
         <Link
         to={{
          pathname: "/basket",
          state: {
            listName: listName,
            movieList: movieList,
          },
        }}
         className="saveLink">Save</Link>
        </button>
        <div className='basketList'>  
        <ul className="movieList">
        {movieList.map((movie, index)=>(
         <li className='sideMovieNames' key={index}>{movie.title}</li>
        ))}

        </ul>
        </div>
    </div>
  )
}



export default Side;