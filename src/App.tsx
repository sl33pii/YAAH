import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
        <div className='game-list-row-1'>
          <div className='game-title glist-item-col1'></div>
          <div className='game-title glist-item-col2'></div>
          <div className='game-title glist-item-col3'></div>
          <div className='game-title glist-item-col4'></div>
        </div>
        <div className='game-list-row-2'>
          <div className='game-title glist-item-col1'></div>
          <div className='game-title glist-item-col2'></div>
          <div className='game-title glist-item-col3'></div>
          <div className='game-title glist-item-col4'></div>
          <div className='game-title glist-item-col5'></div>
        </div>

      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
