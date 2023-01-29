import  Game, { IGame } from  '../Game/Game' ;
import './Styles.css';

const GameLists = ({games}) => {
	return (
		<div className='container-game-list'>
			{games?.map((game: IGame) => Game(game) ) }
		</div>
	);
};

export default GameLists;
