import React, { Component } from 'react';
import { getPastTalks } from './LeaderboardActions'
import Navbar from '../Navbar/Navbar';
import testData from './testData';
import gameType from './LeaderboardActions';

class Leaderboard extends Component {
    constructor(props) {
        super(props)
    }

    handleGameType(e) {
        const { dispatch } = this.props;
        dispatch(gameType(e.target.value));
    }

    render() {
        const { gameType } = this.props;
        return (
            <div>
                <Navbar />
                <div className='banner'>
                    <div className='leaderboard'>
                        <div className='leaderboard-header'>
                            <div className='item'>
                                <div className="dropdown">
                                    <button className="dropbtn btn">GAME TYPE: {gameType}</button>
                                    <div className="dropdown-content">
                                        <button className="btn" value="careerStats" onClick={this.handleGameType}>CAREER STATS</button>
                                        <button className="btn" value="FFA" onClick={this.handleGameType}>FFA</button>
                                        <button className="btn" value="TEAMS" onClick={this.handleGameType}>TEAMS</button>
                                        <button className="btn" value="DUEL" onClick={this.handleGameType}>DUEL</button>
                                    </div>

                                </div>
                            </div>
                            <div className='item'>RANK</div>
                            <div className='item'>PLAYER</div>
                            <div className='item'>CURRENT SKILL</div>
                            <div className='item'>CAREER WINS</div>
                            <div className='item'>CAREER LOSSES</div>
                            <div className='item'>WIN %</div>
                            <div className='item'>HIGHEST SKILL</div>
                            <div className='item'>BEST LEADER</div>
                            <div className='item'>SEASON WIN</div>
                            <div className='item'>SEASON LOSS</div>
                            <div className='item'>SEASON WIN %</div>
                        </div>
                        </div>
                        {testData.map((stat, index) => {
                            return (
                                <div className='leaderboard'>
                                <div className='leaderboard-child' key={index}>
                                    <div className='item'>
                                    <button className="btn" value="DUEL" onClick={this.handleGameType}>Player Profile</button>
                                    </div>
                                    <div className='item'>{index + 1}</div>
                                    <div className='item'>{stat.name}</div>
                                    <div className='item'>{stat.currentSkill}</div>
                                    <div className='item'>{stat.careerWin}</div>
                                    <div className='item'>{stat.careerLoss}</div>
                                    <div className='item'>{stat.winPercent}%</div>
                                    <div className='item'>{stat.highestSkill}</div>
                                    <div className='item'>{stat.bestLeader}</div>
                                    <div className='item'>{stat.seasonWin}</div>
                                    <div className='item'>{stat.seasonLoss}</div>
                                    <div className='item'>{stat.seasonPercent}%</div>
                                </div>
                                </div>
                            )
                        }
                        )}
                </div>
            </div>
        )
    }
}

export default Leaderboard;
