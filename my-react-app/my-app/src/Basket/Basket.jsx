import React from 'react'
import './Basket.css'
// import Main from '../Main/Main'
// import { Route } from 'react-router-dom';

// import Side from '../Side/Side'
function Basket({location}) {
  const listName=location.state ? location.state.listName : '';
  const movieList = location.state ? location.state.movieList : [];
  // console.log(movieList);
  // const moviePosters= document.querySelectorAll(".sideMovieNames")
  // const listName=document.querySelector(".listName").innerText
  // console.log();
  return (
    <div className='basketContainer'>
        <div className="holder">
            <h2 className="basketName">Your Lists</h2>
            <div className="basketList">
              <h3>{listName}</h3>
              <ul className="basketUl">
                {
                  movieList.map((movie,index)=>(
                    <li className='sideMovieNames' key={index}>{movie.title}</li>
                  ))
                }
                {/* {
                moviePosters.map(e=>{
                  const name=document.createElement("h3")
                  const titles= document.createElement("li");
                  name.append(listName )
                 titles.appendChild(e.Title);
                })
                } */}
              </ul>

            </div>
        </div>
    </div>
  )
}

export default Basket
