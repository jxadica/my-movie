import React, { useState } from 'react'
import './Side.css'
// import Main from '../Main/Main'
function Side({movieList}) {
  // const movieList=[]
  return (
    <div className='side'>
         <h3 className="sideH3">Your list</h3>
        <input type="text" className='listName'/>
        <button className='save'>save</button>
        <div className='basketList'>

        {movieList.map((movie)=>(
          <p key={movie.id}>{movie.title}</p>
        ))}
        </div>
    </div>
  )
}

export default Side