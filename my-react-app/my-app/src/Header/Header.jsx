// import React from 'react'
// import './Header.css'
// import { Link, useNavigate,Route, Routes } from 'react-router-dom';
// // import Basket from '../Basket/Basket';
// import {useHistory} from "react-router-dom"
// function Header() {
//   const navigate = useNavigate();
// //  const goToBasket = () => {
// //     navigate("/basket");
// //  }
// // let history= useHistory();

//   return (
//     <div className='header'>
//         <h1 className='h1'>MustWatch</h1>
//         <Link to="/basket" className="basketLink">Your basket</Link>
// {/* <Routes>
//   <Route path='/basket' element={<Basket/>}/>
// </Routes> */}
//         {/* <a onClick={()=>{history.push("./basket")}} href={Basket} className="basketLink">Your basket</a> */}
//     </div>
//   )
// }

// export default Header
import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const goToBasket = () => {
    navigate("/basket");
  };

  return (
    <div className='header'>
      <h1 className='h1'>MustWatch</h1>
      <button onClick={goToBasket} className="basketLink">Your basket</button>
    </div>
  );
}

export default Header;
