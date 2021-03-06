// this whole page and the leaderboard model needs to be refactored. Codenaugh changed the db that the actual player stats will be pulled from to compliment
// the reporting bots that he has created in his own project. to contact Condenaugh please message him or CanuckSoldier on our discord server https://discord.gg/ubwTNdd

import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { type, sortBy, searchBy, getData } from './LeaderboardActions';
import { getProfile } from '../PlayerProfile/PlayerProfileActions';
import LeaderPagination from '../LeaderPagination';

class Leaderboard extends Component {
    constructor(props) {
        super(props)

        this.handleType           = this.handleType          .bind(this);
        this.handleSortBy         = this.handleSortBy        .bind(this);
        this.bestCiv              = this.bestCiv             .bind(this);
        this.handleProfile        = this.handleProfile       .bind(this);
        this.handleSearchByLeader = this.handleSearchByLeader.bind(this);
    }

    componentDidMount() {
        const { dispatch, sortBy, sortOrder } = this.props;
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-200px";
            }
            prevScrollpos = currentScrollPos;
        }
        dispatch(getData(sortBy, sortOrder, 10, 0));
    }

    handleType(e) {
        const { dispatch } = this.props;
        dispatch(type(e.target.value))
    }

    handleSortBy(e) {
        const { dispatch, sortOrder } = this.props;
        dispatch(getData(e.target.value, sortOrder, 10, 0))
        dispatch(sortBy(e.target.value, sortOrder));
    }

    handleSearchByLeader(e) {
        const { dispatch, typeOfGame } = this.props;
        const selected = e.currentTarget.value
        dispatch(searchBy(selected, typeOfGame, 'BestLeader'));
    }

    bestCiv(civs) {
        const civ = civs.sort((a, b) =>
            civs.filter(v => v === a).length
            - civs.filter(v => v === b).length
        ).pop();
        return civ;
    }

    handleProfile(e) {
        const { dispatch } = this.props;
        dispatch(getProfile(e.target.value))
    }

    render() {
        const { typeOfGame, data, sortOrder, viewPerPageLeader, currentPageLeader } = this.props;
        const img = (<img id={`chevron_${sortOrder ? 'down' : 'up'}`} src={`/pics/chevron_${sortOrder ? 'down' : 'up'}.png`} />);
        let numSkip = (+viewPerPageLeader*currentPageLeader);
        const civList = ['ZuluShaka', 'SwedenKristina', 'SumeriaGilgamesh', 'SpainPhilipII', 'ScythiaTomyris', 'ScotlandRobertTheBruce', 'RussiaPeterTheGreat',
            'RomeTrajan', 'PolandJadwiga', 'PhoeniciaDido', 'PersiaCyrus', 'OttomanSuleiman', 'NubiaAmanitore', 'NorwayHaraldHardrada', 'MongoliaGenghisKhan',
            'MapucheLautaro', 'MaoriKupe', 'MaliMansa', 'MacedonAlexander', 'KoreaSeondeok', 'KongoMvembaANzinga', 'KhmerJayavarmanVII', 'JapanHojoTokimune',
            'IndonesiaGitarja', 'IndiaGandhi', 'IndiaChandragupta', 'IncaPachacuti', 'HungaryMatthias', 'GreecePericles', 'GreeceGorgo', 'GermanyFrederickBarbarossa',
            'GeorgiaTamar', 'FranceCatherinedeMedici', 'EnglandVictoria', 'EnglandFranceEleanor', 'EgyptCleopatra', 'DutchWilhelmina', 'CreePoundmaker',
            'ChinaQinShiHuang', 'CanadaWilfrid', 'BrazilPedroII', 'AztecMontezuma', 'AustraliaJohnCurtin', 'ArabiaSaladin', 'AmericaTheodoreRoosevelt']
        return (
            <div>
                <Navbar />
                <div className='banner'>
                 <div className='banner-opacity-leaderboard'>
                    <div className='leaderboard'>
                        <div className='leaderboard-header'>
                            <div className='item'>
                                <div className="dropdown">
                                    <button className="dropbtn btn">GAME TYPE: {typeOfGame}</button>
                                    <div className="dropdown-content">
                                        <button className="btn" value="career" onClick={this.handleType}>CAREER STATS</button>
                                        <button className="btn" value="ffa" onClick={this.handleType}>FFA</button>
                                        <button className="btn" value="team" onClick={this.handleType}>TEAMS</button>
                                        <button className="btn" value="duel" onClick={this.handleType}>DUEL</button>
                                    </div>

                                </div>
                            </div>
                            <div className='item'>
                                <button className="header" value="RANK">RANK{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="name" onClick={this.handleSortBy}>PLAYER{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value={`${typeOfGame}Skill`} onClick={this.handleSortBy}> SKILL{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value={`${typeOfGame}Wins`} onClick={this.handleSortBy}> WINS{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value={`${typeOfGame}Losses`} onClick={this.handleSortBy}> LOSSES{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value={`${typeOfGame}Percent`} onClick={this.handleSortBy}>WIN %{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value={`${typeOfGame}HighestSkill`} onClick={this.handleSortBy}> HIGHEST SKILL{img}</button>
                            </div>
                            <div className='item'>
                                <div className="dropdown">
                                    <button className="dropbtn header">BEST CIV</button>
                                    <div className="dropdown-content">
                                        {civList.map(item => {
                                            const leaderIcon = (<img className='leaderIcon' value={item} src={` ./pics/civ_icons/${item}.png`} />);
                                            return (<button className="btn" value={item} onClick={this.handleSearchByLeader}>{leaderIcon}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <button className="header" value="careerSeasonWins" onClick={this.handleSortBy}> SEASON WIN{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="careerSeasonLosses" onClick={this.handleSortBy}> SEASON LOSSES{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="careerSeasonPercent" onClick={this.handleSortBy}> SEASON WIN %{img}</button>
                            </div>
                        </div>
                    </div>
                    {data && data.map((stat, index) => {
                        if (typeOfGame === 'career') {
                            return (
                                <div className='leaderboard'>
                                    <div className='leaderboard-child'>
                                        <div className='item'>
                                            <Link to="/PlayerProfile">
                                                <button className="btn" value={stat.id} onClick={this.handleProfile}>Player Profile</button>
                                            </Link>
                                        </div>
                                        <div className='item'>{index + numSkip + 1}</div>
                                        <div className='item'>{stat.name}</div>
                                        <div className='item'>{stat.careerSkill}</div>
                                        <div className='item'>{stat.careerWins}</div>
                                        <div className='item'>{stat.careerLosses}</div>
                                        <div className='item'>{stat.careerPercent}%</div>
                                        <div className='item'>{stat.careerHighestSkill}</div>
                                        <div className='item'><img className='leaderIcon' src={` ./pics/civ_icons/${stat.careerBestLeader}.png`} /></div>
                                        <div className='item'>{stat.careerSeasonWins}</div>
                                        <div className='item'>{stat.careerSeasonLosses}</div>
                                        <div className='item'>{stat.careerSeasonPercent}%</div>
                                    </div>
                                </div>
                            )
                        }

                        if (typeOfGame === 'team') {
                            return (
                                <div className='leaderboard'>
                                    <div className='leaderboard-child'>
                                        <div className='item'>
                                        <Link to="/PlayerProfile">
                                            <button className="btn" value={stat.id} onClick={this.handleProfile}>Player Profile</button>
                                       </Link>
                                        </div>
                                        <div className='item'>{index + numSkip + 1}</div>
                                        <div className='item'>{stat.name}</div>
                                        <div className='item'>{stat.teamSkill}</div>
                                        <div className='item'>{stat.teamWins}</div>
                                        <div className='item'>{stat.teamLosses}</div>
                                        <div className='item'>{stat.teamPercent}%</div>
                                        <div className='item'>{stat.teamHighestSkill}</div>
                                        <div className='item'><img className='leaderIcon' src={` ./pics/civ_icons/${stat.teamBestLeader}.png`} /></div>
                                        <div className='item'>{stat.teamSeasonWins}</div>
                                        <div className='item'>{stat.teamSeasonLosses}</div>
                                        <div className='item'>{stat.teamSeasonPercent}%</div>
                                    </div>
                                </div>
                            )
                        }

                        if (typeOfGame === 'duel') {
                            return (
                                <div className='leaderboard'>
                                    <div className='leaderboard-child'>
                                        <div className='item'>
                                        <Link to="/PlayerProfile">
                                            <button className="btn" value={stat.id} onClick={this.handleProfile}>Player Profile</button>
                                      </Link>
                                        </div>
                                        <div className='item'>{index + numSkip + 1}</div>
                                        <div className='item'>{stat.name}</div>
                                        <div className='item'>{stat.duelSkill}</div>
                                        <div className='item'>{stat.duelWins}</div>
                                        <div className='item'>{stat.duelLosses}</div>
                                        <div className='item'>{stat.duelPercent}%</div>
                                        <div className='item'>{stat.duelHighestSkill}</div>
                                        <div className='item'><img className='leaderIcon' src={` ./pics/civ_icons/${stat.duelBestLeader}.png`} /></div>
                                        <div className='item'>{stat.duelSeasonWins}</div>
                                        <div className='item'>{stat.duelSeasonLosses}</div>
                                        <div className='item'>{stat.duelSeasonPercent}%</div>
                                    </div>
                                </div>
                            )
                        }

                        if (typeOfGame === 'ffa') {
                            return (
                                <div className='leaderboard'>
                                    <div className='leaderboard-child'>
                                        <div className='item'>
                                        <Link to="/PlayerProfile">
                                            <button className="btn" value={stat.id} onClick={this.handleProfile}>Player Profile</button>
                                       </Link>
                                        </div>
                                        <div className='item'>{index + numSkip + 1}</div>
                                        <div className='item'>{stat.name}</div>
                                        <div className='item'>{stat.ffaSkill}</div>
                                        <div className='item'>{stat.ffaWins}</div>
                                        <div className='item'>{stat.ffaLosses}</div>
                                        <div className='item'>{stat.ffaPercent}%</div>
                                        <div className='item'>{stat.ffaHighestSkill}</div>
                                        <div className='item'><img className='leaderIcon' src={` ./pics/civ_icons/${stat.ffaBestLeader}.png`} /></div>
                                        <div className='item'>{stat.ffaSeasonWins}</div>
                                        <div className='item'>{stat.ffaSeasonLosses}</div>
                                        <div className='item'>{stat.ffaSeasonPercent}%</div>
                                    </div>
                                </div>
                            )
                        }
                    }
                    )}
                    <div className='blog-pagination-container'>
                    <LeaderPagination/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Leaderboard;
