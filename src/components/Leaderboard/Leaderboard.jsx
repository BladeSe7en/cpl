import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import testData from './testData';
import { type, sortBy, getData, profile } from './LeaderboardActions';

class Leaderboard extends Component {
    constructor(props) {
        super(props)

        this.handleType = this.handleType.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
        this.bestCiv = this.bestCiv.bind(this);
        this.winPercent = this.winPercent.bind(this);
        this.handleProfile = this.handleProfile.bind(this);

    }

    componentDidMount() {
        const { dispatch, typeOfGame, sortOrder } = this.props;
        dispatch(getData(typeOfGame, sortOrder));
    }

    handleType(e) {
        console.log('is this triggering')
        const { dispatch } = this.props;
        console.log('this is e.target.value: ',e.target.value);
        dispatch(type(e.target.value))
    }

    handleSortBy(e) {
        const { dispatch, sortOrder } = this.props;
        dispatch(sortBy(e.target.value, sortOrder));
    }

    bestCiv(civs) {
        const civ = civs.sort((a, b) =>
            civs.filter(v => v === a).length
            - civs.filter(v => v === b).length
        ).pop();
        return civ;
    }

    winPercent(wins, losses) {
        const percent = Math.trunc((wins / (wins + losses)) * 100);
        return percent;
    }

    handleProfile(e) {
        const { dispatch } = this.props;
        dispatch(profile(e.target.value));
    }

    render() {
         const { typeOfGame, data, highToLow, sortBy } = this.props;
        // if (typeOfGame === 'career') {
        //    const sorted = stat.careerSkill.sort((a, b) => a - b)
        // } 
        // if (typeOfGame === 'ffa') {
        //     const sorted = stat.ffaSkill.sort((a, b) => a - b)
        //  } 
        //  if (typeOfGame === 'team') {
        //     const sorted = stat.teamSkill.sort((a, b) => a - b)
        //  } 
        //  if (typeOfGame === 'duel') {
        //     const sorted = stat.duelSkill.sort((a, b) => a - b)
        //  } 
        //  if (sortBy === 'career') {
        //     const sorted = stat.careerSkill.sort((a, b) => a - b)
        //  } 
        //  if (sortBy === 'ffa') {
        //      const sorted = stat.ffaSkill.sort((a, b) => a - b)
        //   } 
        //   if (sortBy === 'team') {
        //      const sorted = stat.teamSkill.sort((a, b) => a - b)
        //   } 
        //   if (sortBy === 'duel') {
        //      const sorted = stat.duelSkill.sort((a, b) => a - b)
        //   }
        //   if (sortBy === 'career') {
        //     const sorted = stat.careerSkill.sort((a, b) => a - b)
        //  } 
        //  if (sortBy === 'ffa') {
        //      const sorted = stat.ffaSkill.sort((a, b) => a - b)
        //   } 
        //   if (sortBy === 'team') {
        //      const sorted = stat.teamSkill.sort((a, b) => a - b)
        //   } 
        //   if (sortBy === 'duel') {
        //      const sorted = stat.duelSkill.sort((a, b) => a - b)
        //   }
        const img = (<img id={`chevron_${highToLow ? 'down' : 'up'}`} src={`/pics/chevron_${highToLow ? 'down' : 'up'}.png`} />);
        const civList = ['ZuluShaka', 'SwedenKristina', 'SumeriaGilgamesh', 'SpainPhilipII', 'ScythiaTomyris', 'ScotlandRobertTheBruce', 'RussiaPeterTheGreat',
            'RomeTrajan', 'PolandJadwiga', 'PhoeniciaDido', 'PersiaCyrus', 'OttomanSuleiman', 'NubiaAmanitore','NorwayHaraldHardrada', 'MongoliaGenghisKhan', 
            'MapucheLautaro', 'MaoriKupe', 'MaliMansa', 'MacedonAlexander', 'KoreaSeondeok', 'KongoMvembaANzinga', 'KhmerJayavarmanVII', 'JapanHojoTokimune',
             'IndonesiaGitarja', 'IndiaGandhi', 'IndiaChandragupta', 'IncaPachacuti', 'HungaryMatthias', 'GreecePericles', 'GreeceGorgo', 'GermanyFrederickBarbarossa', 
             'GeorgiaTamar', 'FranceCatherinedeMedici', 'EnglandVictoria', 'EnglandFranceEleanor', 'EgyptCleopatra', 'DutchWilhelmina', 'CreePoundmaker',
            'ChinaQinShiHuang', 'CanadaWilfrid', 'BrazilPedroII', 'AztecMontezuma', 'AustraliaJohnCurtin', 'ArabiaSaladin', 'AmericaTheodoreRoosevelt']
        return (
            <div>
                <Navbar />
                <div className='banner'>
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
                                <button className="header" value="RANK" onClick={this.handleSortBy}>RANK{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="PLAYER" onClick={this.handleSortBy}>PLAYER{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="CURRENTSKILL" onClick={this.handleSortBy}> SKILL{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="CAREERWINS" onClick={this.handleSortBy}> WINS{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="CAREERLOSSES" onClick={this.handleSortBy}> LOSSES{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="WIN%" onClick={this.handleSortBy}>WIN %{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="HIGHESTSKILL" onClick={this.handleSortBy}> HIGHEST SKILL{img}</button>
                            </div>
                            <div className='item'>
                                <div className="dropdown">
                                    <button className="dropbtn header">BEST CIV</button>
                                    <div className="dropdown-content">
                                        {civList.map(index => {
                                            const leaderIcon = (<img id='leaderIcon' />);
                                            return (<button className="btn" value={index} onClick={this.handleSortBy}>{index}{leaderIcon}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <button className="header" value="SEASONWIN" onClick={this.handleSortBy}> SEASON WIN{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="SEASONLOSSES" onClick={this.handleSortBy}> SEASON LOSSES{img}</button>
                            </div>
                            <div className='item'>
                                <button className="header" value="SEASONWIN%" onClick={this.handleSortBy}> SEASON WIN %{img}</button>
                            </div>
                        </div>
                    </div>
                    {data && data.map((stat, index) => {
                       // const sorted = stat.careerSkill.sort((a, b) => a - b)
                        if (typeOfGame === 'careerSkill') {
                            console.log('im here now')
                           // console.log('this is sorted: ', sorted)

                            return (
                                <div className='leaderboard'>
                                    <div className='leaderboard-child'>
                                        <div className='item'>
                                            <button className="btn" value={stat.id} onClick={this.handleProfile}>Player Profile</button>
                                        </div>
                                        <div className='item'>{index + 1}</div>
                                        <div className='item'>{stat.name}</div>
                                        <div className='item'>{stat.careerSkill}</div>
                                        <div className='item'>{stat.careerWins}</div>
                                        <div className='item'>{stat.careerLosses}</div>
                                        <div className='item'>{this.winPercent(stat.careerWins, stat.careerLosses, index)}%</div>
                                        <div className='item'>{stat.careerHighSkill}</div>
                                        <div className='item'>{this.bestCiv(stat.careerBestLeader)}</div>
                                        <div className='item'>{stat.careerSeasonWins}</div>
                                        <div className='item'>{stat.careerSeasonLosses}</div>
                                        <div className='item'>{this.winPercent(stat.careerSeasonWins, stat.careerSeasonLosses, index)}%</div>
                                    </div>
                                </div>
                            )
                        }

                        if (typeOfGame === 'team') {
                            console.log('im now here')
                            return (
                                <div className='leaderboard'>
                                    <div className='leaderboard-child'>
                                        <div className='item'>
                                            <button className="btn" value={stat.id} onClick={this.handleProfile}>Player Profile</button>
                                        </div>
                                        <div className='item'>{index + 1}</div>
                                        <div className='item'>{stat.name}</div>
                                        <div className='item'>{stat.teamSkill}</div>
                                        <div className='item'>{stat.teamWins}</div>
                                        <div className='item'>{stat.teamLosses}</div>
                                        <div className='item'>{this.winPercent(stat.teamWins, stat.teamLosses, index)}%</div>
                                        <div className='item'>{stat.teamHighSkill}</div>
                                        <div className='item'>{this.bestCiv(stat.teamBestLeader)}</div>
                                        <div className='item'>{stat.teamSeasonWins}</div>
                                        <div className='item'>{stat.teamSeasonLosses}</div>
                                        <div className='item'>{this.winPercent(stat.teamSeasonWins, stat.teamSeasonLosses, index)}%</div>
                                    </div>
                                </div>
                            )
                        }

                        if (typeOfGame === 'duel') {
                            console.log('or here?')
                            return (
                                <div className='leaderboard'>
                                    <div className='leaderboard-child'>
                                        <div className='item'>
                                            <button className="btn" value={stat.id} onClick={this.handleProfile}>Player Profile</button>
                                        </div>
                                        <div className='item'>{index + 1}</div>
                                        <div className='item'>{stat.name}</div>
                                        <div className='item'>{stat.duelSkill}</div>
                                        <div className='item'>{stat.duelWins}</div>
                                        <div className='item'>{stat.duelLosses}</div>
                                        <div className='item'>{this.winPercent(stat.duelWins, stat.duelLosses, index)}%</div>
                                        <div className='item'>{stat.duelHighSkill}</div>
                                        <div className='item'>{this.bestCiv(stat.duelBestLeader)}</div>
                                        <div className='item'>{stat.duelSeasonWins}</div>
                                        <div className='item'>{stat.duelSeasonLosses}</div>
                                        <div className='item'>{this.winPercent(stat.duelSeasonWins, stat.duelSeasonLosses, index)}%</div>
                                    </div>
                                </div>
                            )
                        }

                        if (typeOfGame === 'ffa') {
                            console.log('surprise')
                            return (
                                <div className='leaderboard'>
                                <div className='leaderboard-child'>
                                    <div className='item'>
                                        <button className="btn" value={stat.id} onClick={this.handleProfile}>Player Profile</button>
                                    </div>
                                    <div className='item'>{index + 1}</div>
                                    <div className='item'>{stat.name}</div>
                                    <div className='item'>{stat.ffaSkill}</div>
                                    <div className='item'>{stat.ffaWins}</div>
                                    <div className='item'>{stat.ffaLosses}</div>
                                    <div className='item'>{this.winPercent(stat.ffaWins, stat.ffaLosses, index)}%</div>
                                    <div className='item'>{stat.ffaHighSkill}</div>
                                    <div className='item'>{this.bestCiv(stat.ffaBestLeader)}</div>
                                    <div className='item'>{stat.ffaSeasonWins}</div>
                                    <div className='item'>{stat.ffaSeasonLosses}</div>
                                    <div className='item'>{this.winPercent(stat.ffaSeasonWins, stat.ffaSeasonLosses, index)}%</div>
                                </div>
                            </div>
                            )
                        }
                    }
                    )}
                </div>
            </div>
        )
    }
}

export default Leaderboard;


// const civList = ['ZuluShaka', 'SwedenKristina', 'SumeriaGilgamesh', 'SpainPhilipII', 'ScythiaTomyris', 'ScotlandRobertTheBruce', 'RussiaPeterTheGreat',
//     'RomeTrajan', 'PolandJadwiga', 'PhoeniciaDido', 'PersiaCyrus', 'OttomanSuleiman', 'NubiaAmanitore',
//     'NorwayHaraldHardrada', 'MongoliaGenghisKhan', 'MapucheLautaro', 'MaoriKupe', 'MaliMansa', 'MacedonAlexander', 'KoreaSeondeok',
//     'KongoMvembaANzinga', 'KhmerJayavarmanVII', 'JapanHojoTokimune', 'IndonesiaGitarja', 'IndiaGandhi', 'IndiaChandragupta',
//     'IncaPachacuti', 'HungaryMatthias', 'GreecePericles', 'GreeceGorgo', 'GermanyFrederickBarbarossa', 'GeorgiaTamar',
//     'FranceCatherinedeMedici', 'EnglandVictoria', 'EnglandFranceEleanor', 'EgyptCleopatra', 'DutchWilhelmina', 'CreePoundmaker',
//     'ChinaQinShiHuang', 'CanadaWilfrid', 'BrazilPedroII', 'AztecMontezuma', 'AustraliaJohnCurtin', 'ArabiaSaladin', 'AmericaTheodoreRoosevelt']

// civList.map(index => {
//     const leaderIcon = (<img id='leaderIcon' />);
//     return (<button className="btn" value={index} onClick={this.handleSortBy}>{index}{leaderIcon}</button>
//     )
// })
// src={`/pics/${index}.png`}

//{"where":{"id":1}}