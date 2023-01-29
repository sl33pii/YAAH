import steamLogo from "../../assets/steam-logo.png"
import './Styles.css';
import NavBar from "../../components/NavBar/NavBar";
import GameLists from "../../components/GameLists/GameLists";
import Game from "../../components/Game/Game";

export default function LandingScreen() {
	const game1 = {id: 1, name: "Game 1", logo: steamLogo};
	const games = { game1 };
	return (
		<div className="App">
			<NavBar />

			<div className='container-title-content'>
				<div className='title-content-top'>
					<p className='title'>YET ANOTHER ACHIEVEMENT HELPER</p>
					<p className='subtitle'>A RESOURCE FOR GAME COMPLETIONISTS</p>
				</div>
				<div className='title-content-bottom'>
						<button className='btn-style-1'>
							LOG IN WITH STEAM ACCOUNT
							<img className='steam-logo-img' src={steamLogo}/>
						</button>
					<div className='container-buttons-lg-su'>
						<button className='btn-style-2'>LOG IN</button>
						<button className='btn-style-3'>SIGN UP</button>
					</div>
				</div>
			</div>
				<GameLists games={ [game1] } />
		</div>
	);
}
