import  Game, { IGame } from  '../Game/Game' ;
import './Styles.css';

interface IGameLists {
	games: Array<IGame>,
}

const GameLists = (props: IGameLists) => {
	const gamesList = props.games.map((game) => {
		return <Game id={game.id} name={game.name} logo={game.logo}/>
	})
	return (
		<div className='container-game-list'>
			{gamesList}
		</div>
	);
};

export default GameLists;
