
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Basket from './Basket/Basket'; // Import Basket component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './Main/Main';
import Side from './Side/Side';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Header />
        </header>
        <div className='container'>
          <main>
            <Main/>
          </main>
          {/* <Routes>
            <Route path="/basket" component={Basket} />
          </ Routes> */}
          <aside>
            <Side />
          </aside>
          {/* <Basket movieList={movieList} listName={listName} /> */}

        </div>
      </div>
    </Router>
  );
}

export default App;