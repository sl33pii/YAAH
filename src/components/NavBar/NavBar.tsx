import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Styles.css';
library.add(fab, faSearch)

const SearchBar = () => {
	return(
		<div className='nav-search-bar'>
			<input type='text' placeholder='SEARCH GAMES' id='input-search'/>
			<FontAwesomeIcon className='nav-search-icon' icon="search"/>
		</div>
	);
};

const NavBar = () => {
	return(
		<nav className="nav-bar">
			<a className='nav-bar-left' href="#">Y.A.A.H.</a>
			<SearchBar />
			<div className='nav-bar-right'>
				<a href="#">ABOUT</a>
				<a href="#">CONTACT</a>
				<div className='nav-profile-img'></div>
			</div>
			</nav>
	);
}
export default NavBar;
