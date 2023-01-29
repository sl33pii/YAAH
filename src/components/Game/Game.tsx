import './Styles.css';

export interface IGame {
	id: number,
	name: string,
	logo?: string,
}

const Game = (props: IGame)  => {
	return(
		<div className="game-title">
			<img src={props?.logo} alt={props?.name} />
		</div>
	)
};
export default Game;
