import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
//import { getPlayerStats } from '../../../common/models/player'

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let civs = document.querySelectorAll(".civ");
		// const names = [ 'player0', 'player1', 'player2' ]
		// getPlayerStats(names)
		for (let i = 0; i < 45; i++) {
			let civ = civs[i];
			animateCivs(civ);
		}

		function animateCivs(civ) {
			let xMax = window.innerWidth;
			let yMax = window.innerWidth;

			civ.keyframes = [{
				transform: "translate3d(" + (Math.random() * xMax +40) + "px, " + (Math.random() * yMax) + "px, 0px)"
			}, {
				transform: "translate3d(" + (Math.random() * xMax +40) + "px, " + (Math.random() * yMax) + "px, 0px)"
			}, {
				transform: "translate3d(" + (Math.random() * xMax +40) + "px, " + (Math.random() * yMax) + "px, 0px)"
			}];

			civ.animProps = {
				duration: 2000 + Math.random() * 10000,
				easing: "ease-out",
				iterations: 100
			}

			let animationPlayer = civ.animate(civ.keyframes, civ.animProps);
			addFinishHandler(animationPlayer, civ);

			animationPlayer.addEventListener('finish', function (e) {
				// do something
			}, false);


			function addFinishHandler(anim, el) {
				anim.addEventListener('finish', function(e) {
				  animateCivs(el);
				}, false);
			  }

		}
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className='banner'>
					<div className='banner-opacity-home'>

		<div><img className="civ" value="ZuluShaka" src=" ./pics/civ_icons/ZuluShaka.png"/></div>
		<div><img className="civ" value="SwedenKristina" src=" ./pics/civ_icons/SwedenKristina.png"/></div>
		<div><img className="civ" value="SumeriaGilgamesh" src=" ./pics/civ_icons/SumeriaGilgamesh.png"/></div>
		<div><img className="civ" value="SpainPhilipII" src=" ./pics/civ_icons/SpainPhilipII.png"/></div>
		<div><img className="civ" value="ScythiaTomyris" src=" ./pics/civ_icons/ScythiaTomyris.png"/></div>
		<div><img className="civ" value="ScotlandRobertTheBruce" src=" ./pics/civ_icons/ScotlandRobertTheBruce.png"/></div>
		<div><img className="civ" value="RussiaPeterTheGreat" src=" ./pics/civ_icons/RussiaPeterTheGreat.png"/></div>
		<div><img className="civ" value="RomeTrajan" src=" ./pics/civ_icons/RomeTrajan.png"/></div>
		<div><img className="civ" value="PolandJadwiga" src=" ./pics/civ_icons/PolandJadwiga.png"/></div>
		<div><img className="civ" value="PhoeniciaDido" src=" ./pics/civ_icons/PhoeniciaDido.png"/></div>
		<div><img className="civ" value="PersiaCyrus" src=" ./pics/civ_icons/PersiaCyrus.png"/></div>
		<div><img className="civ" value="OttomanSuleiman" src=" ./pics/civ_icons/OttomanSuleiman.png"/></div>
		<div><img className="civ" value="NubiaAmanitore" src=" ./pics/civ_icons/NubiaAmanitore.png"/></div>
		<div><img className="civ" value="NorwayHaraldHardrada" src=" ./pics/civ_icons/NorwayHaraldHardrada.png"/></div>
		<div><img className="civ" value="MongoliaGenghisKhan" src=" ./pics/civ_icons/MongoliaGenghisKhan.png"/></div>
		<div><img className="civ" value="MapucheLautaro" src=" ./pics/civ_icons/MapucheLautaro.png"/></div>
		<div><img className="civ" value="MaoriKupe" src=" ./pics/civ_icons/MaoriKupe.png"/></div>
		<div><img className="civ" value="MaliMansa" src=" ./pics/civ_icons/MaliMansa.png"/></div>
		<div><img className="civ" value="MacedonAlexander" src=" ./pics/civ_icons/MacedonAlexander.png"/></div>
		<div><img className="civ" value="KoreaSeondeok" src=" ./pics/civ_icons/KoreaSeondeok.png"/></div>
		<div><img className="civ" value="KongoMvembaANzinga" src=" ./pics/civ_icons/KongoMvembaANzinga.png"/></div>
		<div><img className="civ" value="KhmerJayavarmanVII" src=" ./pics/civ_icons/KhmerJayavarmanVII.png"/></div>
		<div><img className="civ" value="JapanHojoTokimune" src=" ./pics/civ_icons/JapanHojoTokimune.png"/></div>
		<div><img className="civ" value="IndonesiaGitarja" src=" ./pics/civ_icons/IndonesiaGitarja.png"/></div>
		<div><img className="civ" value="IndiaGandhi" src=" ./pics/civ_icons/IndiaGandhi.png"/></div>
		<div><img className="civ" value="IndiaChandragupta" src=" ./pics/civ_icons/IndiaChandragupta.png"/></div>
		<div><img className="civ" value="IncaPachacuti" src=" ./pics/civ_icons/IncaPachacuti.png"/></div>
		<div><img className="civ" value="HungaryMatthias" src=" ./pics/civ_icons/HungaryMatthias.png"/></div>
		<div><img className="civ" value="GreecePericles" src=" ./pics/civ_icons/GreecePericles.png"/></div>
		<div><img className="civ" value="GreeceGorgo" src=" ./pics/civ_icons/GreeceGorgo.png"/></div>
		<div><img className="civ" value="GermanyFrederickBarbarossa" src=" ./pics/civ_icons/GermanyFrederickBarbarossa.png"/></div>
		<div><img className="civ" value="GeorgiaTamar" src=" ./pics/civ_icons/GeorgiaTamar.png"/></div>
		<div><img className="civ" value="FranceCatherinedeMedici" src=" ./pics/civ_icons/FranceCatherinedeMedici.png"/></div>
		<div><img className="civ" value="EnglandVictoria" src=" ./pics/civ_icons/EnglandVictoria.png"/></div>
		<div><img className="civ" value="EnglandFranceEleanor" src=" ./pics/civ_icons/EnglandFranceEleanor.png"/></div>
		<div><img className="civ" value="EgyptCleopatra" src=" ./pics/civ_icons/EgyptCleopatra.png"/></div>
		<div><img className="civ" value="DutchWilhelmina" src=" ./pics/civ_icons/DutchWilhelmina.png"/></div>
		<div><img className="civ" value="CreePoundmaker" src=" ./pics/civ_icons/CreePoundmaker.png"/></div>
		<div><img className="civ" value="ChinaQinShiHuang" src=" ./pics/civ_icons/ChinaQinShiHuang.png"/></div>
		<div><img className="civ" value="CanadaWilfrid" src=" ./pics/civ_icons/CanadaWilfrid.png"/></div>
		<div><img className="civ" value="BrazilPedroII" src=" ./pics/civ_icons/BrazilPedroII.png"/></div>
		<div><img className="civ" value="AztecMontezuma" src=" ./pics/civ_icons/AztecMontezuma.png"/></div>
		<div><img className="civ" value="AustraliaJohnCurtin" src=" ./pics/civ_icons/AustraliaJohnCurtin.png"/></div>
		<div><img className="civ" value="ArabiaSaladin" src=" ./pics/civ_icons/ArabiaSaladin.png"/></div>
		<div><img className="civ" value="AmericaTheodoreRoosevelt" src=" ./pics/civ_icons/AmericaTheodoreRoosevelt.png"/></div>

						<h1>Civilization Players League</h1>
						<p>The number one community to play competitive, no quitting Civiliation VI</p>
						<div className='media'>
							<h5>About Us</h5>
							<p>
								Civilization Players League (CPL) is a longstanding Civilization community aiming to deliver a fun and friendly, yet competitive, environment for Civilization VI players. Our community hosts numerous games at all hours of the day with players from all over the world. We strive to give our players the best experience free of the common problems found in public games such as players randomly quitting or you getting disconnected from a multiplayer game.
							</p>
							<ul>
								<li><a href='https://www.facebook.com/groups/civplayers/' target='_blank'><img className='link-icon' src='/pics/facebook_icon.png'></img></a></li>
								<li><a href='https://discord.gg/ubwTNdd' target='_blank'><img className='link-icon' src='/pics/discord_icon.jpg'></img></a></li>
								<li><a href='https://www.youtube.com/user/TheCanuckSoldier' target='_blank'><img className='link-icon' src='/pics/youtube_icon.png'></img></a></li>
								<li><a href='https://steamcommunity.com/gid/103582791431089902' target='_blank'><img className='link-icon' src='/pics/Steam_icon.png'></img></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		
		)
	}



}
export default Home;
