import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import steamLogo from "./assets/steam-logo.png"
library.add(fab, faSearch)

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
          <a className='nav-bar-left' href="#">Y.A.A.H.</a>
          <div className='nav-bar-right'>
              <a href="#">ABOUT</a>
              <a href="#">CONTACT</a>
              <div className='nav-search-bar'>
                <input type='text' placeholder='SEARCH GAMES' id='input-search'/>
                <FontAwesomeIcon className='nav-search-icon' icon="search"/>
              </div>
              <div className='nav-profile-img'></div>
          </div>
      </nav>
      <div className='container-title-content'>
        <div className='title-content-top'>
          <p className='title'>YET ANOTHER ACHIEVEMENT HELPER</p>
          <p className='subtitle'>A RESOURCE FOR GAME COMPLETIONISTS</p>
        </div>
        <div className='title-content-bottom'>
          <button className='btn-style-1'>LOG IN WITH STEAM ACCOUNT <img className='steam-logo-img' src={steamLogo}/></button>
          <div className='container-buttons-lg-su'>
              <button className='btn-style-2'>LOG IN</button>
              <button className='btn-style-3'>SIGN UP</button>
          </div>
        </div>
      </div>
      <div className='container-game-list'>
          <div className='game-title glist-item-1'></div>
          <div className='game-title glist-item-2'></div>
          <div className='game-title glist-item-3'></div>
          <div className='game-title glist-item-4'></div>
          <div className='game-title glist-item-5'></div>
          <div className='game-title glist-item-6'></div>
          <div className='game-title glist-item-7'></div>
          <div className='game-title glist-item-8'></div>
      </div>
    </div>
  );
}

export default App;
