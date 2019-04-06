import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import testData from './testData';
import { type, sortBy, searchBy, getData } from './LeaderboardActions';

class Leaderboard extends Component {
    constructor(props) {
        super(props)

        this.handleType = this.handleType.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
        this.bestCiv = this.bestCiv.bind(this);
        this.winPercent = this.winPercent.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleSearchByLeader = this.handleSearchByLeader.bind(this);


    }

    componentDidMount() {
        const { dispatch, typeOfGame, sortOrder } = this.props;

        dispatch(getData(typeOfGame, sortOrder));
    }

    handleType(e) {
        console.log('is this triggering')
        const { dispatch } = this.props;
        console.log('this is e.target.value: ', e.target.value);
        dispatch(type(e.target.value))
    }

    handleSortBy(e) {
        const { dispatch, sortOrder } = this.props;
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
    const img = (<img id={`chevron_${highToLow ? 'down' : 'up'}`} src={`/pics/chevron_${highToLow ? 'down' : 'up'}.png`} />);
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
                            <button className="header" value="name" onClick={this.handleSortBy}>PLAYER{img}</button>
                        </div>
                        <div className='item'>
                            <button className="header" value="careerSkill" onClick={this.handleSortBy}> SKILL{img}</button>
                        </div>
                        <div className='item'>
                            <button className="header" value="careerWins" onClick={this.handleSortBy}> WINS{img}</button>
                        </div>
                        <div className='item'>
                            <button className="header" value="careerLosses" onClick={this.handleSortBy}> LOSSES{img}</button>
                        </div>
                        <div className='item'>
                            <button className="header" value="win%" onClick={this.handleSortBy}>WIN %{img}</button>
                        </div>
                        <div className='item'>
                            <button className="header" value="highestSkill" onClick={this.handleSortBy}> HIGHEST SKILL{img}</button>
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
                            <button className="header" value="careerSeason%" onClick={this.handleSortBy}> SEASON WIN %{img}</button>
                        </div>
                    </div>
                </div>
                {data && data.map((stat, index) => {
                    if (typeOfGame === 'career') {
                        console.log('bestleader: ', index, stat.careerBestLeader)
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
                                    <div className='item'><img className='leaderIcon' src={` ./pics/civ_icons/${stat.careerBestLeader}.png`} /></div>
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
    // 'RomeTrajan', 'PolandJadwiga', 'PhoeniciaDido', 'PersiaCyrus', 'OttomanSuleiman', 'NubiaAmanitore',
    // 'NorwayHaraldHardrada', 'MongoliaGenghisKhan', 'MapucheLautaro', 'MaoriKupe', 'MaliMansa', 'MacedonAlexander', 'KoreaSeondeok',
    // 'KongoMvembaANzinga', 'KhmerJayavarmanVII', 'JapanHojoTokimune', 'IndonesiaGitarja', 'IndiaGandhi', 'IndiaChandragupta',
    // 'IncaPachacuti', 'HungaryMatthias', 'GreecePericles', 'GreeceGorgo', 'GermanyFrederickBarbarossa', 'GeorgiaTamar',
    // 'FranceCatherinedeMedici', 'EnglandVictoria', 'EnglandFranceEleanor', 'EgyptCleopatra', 'DutchWilhelmina', 'CreePoundmaker',
    // 'ChinaQinShiHuang', 'CanadaWilfrid', 'BrazilPedroII', 'AztecMontezuma', 'AustraliaJohnCurtin', 'ArabiaSaladin', 'AmericaTheodoreRoosevelt']

// civList.map(index => {
//     const leaderIcon = (<img id='leaderIcon' />);
//     return (<button className="btn" value={index} onClick={this.handleSortBy}>{index}{leaderIcon}</button>
//     )
// })
// src={`/pics/${index}.png`}

//{"where":{"id":1}}


// {
//     "careerBestLeader": ["ZuluShaka", "SwedenKristina", "GeorgiaTamar", "SumeriaGilgamesh","ZuluShaka", "SwedenKristina", "SumeriaGilgamesh","ZuluShaka", "MapucheLautaro", "MaoriKupe", "MaliMansa", "MacedonAlexander", "KoreaSeondeok", "KongoMvembaANzinga", "KhmerJayavarmanVII", "JapanHojoTokimune", "IndonesiaGitarja", "IndiaGandhi", "IndiaChandragupta", "IncaPachacuti", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa", "GeorgiaTamar", "FranceCatherinedeMedici", "EnglandVictoria", "EnglandFranceEleanor", "EgyptCleopatra", "DutchWilhelmina", "CreePoundmaker",
//       "ChinaQinShiHuang", "CanadaWilfrid", "BrazilPedroII", "AztecMontezuma", "MaoriKupe", "MaliMansa", "MacedonAlexander", "KoreaSeondeok",
//       "KongoMvembaANzinga", "KhmerJayavarmanVII", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "JapanHojoTokimune", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "AustraliaJohnCurtin", "AustraliaJohnCurtin", "AustraliaJohnCurtin", "AustraliaJohnCurtin","IndonesiaGitarja", "AustraliaJohnCurtin", "IndiaGandhi", "IndiaChandragupta", "IncaPachacuti", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa", "GermanyFrederickBarbarossa"]
//   }
//   {
//     "teamBestLeader": ["SumeriaGilgamesh", "ZuluShaka", "SwedenKristina", "SumeriaGilgamesh", "ZuluShaka", "MapucheLautaro", "MaoriKupe", "MaliMansa", "KongoMvembaANzinga", "KhmerJayavarmanVII", "JapanHojoTokimune", "IndonesiaGitarja", "IndiaGandhi", "IndiaChandragupta", "IncaPachacuti", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa",  "ChinaQinShiHuang", "CanadaWilfrid", "BrazilPedroII", "AztecMontezuma", "MaoriKupe", "MaliMansa", "MacedonAlexander", "KoreaSeondeok", "KongoMvembaANzinga", "KhmerJayavarmanVII", "JapanHojoTokimune", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "AustraliaJohnCurtin", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa", "GermanyFrederickBarbarossa", "ZuluShaka", "SwedenKristina", "GeorgiaTamar", "SumeriaGilgamesh","ZuluShaka", "SwedenKristina", "SumeriaGilgamesh","ZuluShaka", "MapucheLautaro", "MaoriKupe", "MaliMansa", "MacedonAlexander", "GeorgiaTamar", "FranceCatherinedeMedici", "EnglandVictoria", "EnglandFranceEleanor", "EgyptCleopatra", "DutchWilhelmina", "CreePoundmaker",
//       "ChinaQinShiHuang", "CanadaWilfrid", "BrazilPedroII", "AztecMontezuma", "MaoriKupe", "MaliMansa", "MacedonAlexander", "KoreaSeondeok",
//       "KongoMvembaANzinga", "KhmerJayavarmanVII", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "JapanHojoTokimune", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "AustraliaJohnCurtin", "AustraliaJohnCurtin", "AustraliaJohnCurtin", "AustraliaJohnCurtin","IndonesiaGitarja", "AustraliaJohnCurtin", "IndiaGandhi", "IndiaChandragupta", "IncaPachacuti", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa", "GermanyFrederickBarbarossa"]
// },
// {
// "ffaBestLeader": ["ZuluShaka", "SwedenKristina", "GeorgiaTamar", "SumeriaGilgamesh","ZuluShaka", "SwedenKristina", "SumeriaGilgamesh","ZuluShaka", "MapucheLautaro", "MaoriKupe", "MaliMansa", "KongoMvembaANzinga", "KhmerJayavarmanVII", "JapanHojoTokimune", "IndonesiaGitarja", "IndiaGandhi", "IndiaChandragupta", "IncaPachacuti", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa",  "ChinaQinShiHuang", "CanadaWilfrid", "BrazilPedroII", "AztecMontezuma", "MaoriKupe", "MaliMansa", "MacedonAlexander", "KoreaSeondeok",
//       "KongoMvembaANzinga", "KhmerJayavarmanVII", "JapanHojoTokimune", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "AustraliaJohnCurtin", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa", "GermanyFrederickBarbarossa", "ZuluShaka", "SwedenKristina", "GeorgiaTamar", "SumeriaGilgamesh","ZuluShaka", "SwedenKristina", "SumeriaGilgamesh","ZuluShaka", "MapucheLautaro", "MaoriKupe", "MaliMansa", "MacedonAlexander", "GeorgiaTamar", "FranceCatherinedeMedici", "EnglandVictoria", "EnglandFranceEleanor", "EgyptCleopatra", "DutchWilhelmina", "CreePoundmaker",
//       "ChinaQinShiHuang", "CanadaWilfrid", "BrazilPedroII", "AztecMontezuma", "MaoriKupe", "MaliMansa", "MacedonAlexander", "KoreaSeondeok",
//       "KongoMvembaANzinga", "KhmerJayavarmanVII", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "JapanHojoTokimune", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "AustraliaJohnCurtin", "AustraliaJohnCurtin", "AustraliaJohnCurtin", "AustraliaJohnCurtin","IndonesiaGitarja", "AustraliaJohnCurtin", "IndiaGandhi", "IndiaChandragupta", "IncaPachacuti", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa", "GermanyFrederickBarbarossa"]
//   },
// {
//     "duelBestLeader": ["ZuluShaka", "SwedenKristina", "GeorgiaTamar", "SumeriaGilgamesh","ZuluShaka", "SwedenKristina", "SumeriaGilgamesh","ZuluShaka", "MapucheLautaro", "MaoriKupe", "MaliMansa", "KongoMvembaANzinga", "KhmerJayavarmanVII", "JapanHojoTokimune", "IndonesiaGitarja", "IndiaGandhi", "IndiaChandragupta", "IncaPachacuti", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa",  "ChinaQinShiHuang", "CanadaWilfrid", "BrazilPedroII", "AztecMontezuma", "MaoriKupe", "MaliMansa", "MacedonAlexander", "KoreaSeondeok",
//       "KongoMvembaANzinga", "KhmerJayavarmanVII", "JapanHojoTokimune", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "AustraliaJohnCurtin", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa", "GermanyFrederickBarbarossa", "ZuluShaka", "SwedenKristina", "GeorgiaTamar", "SumeriaGilgamesh","ZuluShaka", "SwedenKristina", "SumeriaGilgamesh","ZuluShaka", "MapucheLautaro", "MaoriKupe", "MaliMansa", "MacedonAlexander", "GeorgiaTamar", "FranceCatherinedeMedici", "EnglandVictoria", "EnglandFranceEleanor", "EgyptCleopatra", "DutchWilhelmina", "CreePoundmaker",
//       "ChinaQinShiHuang", "CanadaWilfrid", "BrazilPedroII", "AztecMontezuma", "MaoriKupe", "MaliMansa", "MacedonAlexander", "KoreaSeondeok",
//       "KongoMvembaANzinga", "KhmerJayavarmanVII", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "IncaPachacuti", "JapanHojoTokimune", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "GeorgiaTamar", "AustraliaJohnCurtin", "AustraliaJohnCurtin", "AustraliaJohnCurtin", "AustraliaJohnCurtin","IndonesiaGitarja", "AustraliaJohnCurtin", "IndiaGandhi", "IndiaChandragupta", "IncaPachacuti", "HungaryMatthias", "GreecePericles", "GreeceGorgo", "GermanyFrederickBarbarossa", "GermanyFrederickBarbarossa"]
//   }

