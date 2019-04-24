import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { getProfile } from './PlayerProfileActions';

class PlayerProfile extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const { profileData } = this.props
        return (
            <div>
                <Navbar />
                <div className='banner'>
                <div className='banner-opacity'>
                            {!profileData ? <div className='loading' src='./pics/loading.gif'></div> : profileData.map((stat, index) => {
                                console.log('7')

                                return (
                                    <div>
                                        <div className='header-profile'> {stat.name}'s Stats Profile</div>
                                        <div className='stats-container'>
                                            <div className='header-0'></div>
                                            <div className='header-1'> Skill</div>
                                            <div className='header-2'> Wins</div>
                                            <div className='header-3'> Losses</div>
                                            <div className='header-4'> Win Percentage</div>
                                            <div className='header-5'> High Skill</div>
                                            <div className='header-6'> Best Leader</div>
                                            <div className='header-7'> Season Wins</div>
                                            <div className='header-8'> Season Losses</div>
                                            <div className='header-9'> Season Win Percentage</div>

                                            <div className='career-0'> Career Stats</div>
                                            <div className='career-1'>{stat.careerSkill}</div>
                                            <div className='career-2'> {stat.careerWins}</div>
                                            <div className='career-3'> {stat.careerLosses}</div>
                                            <div className='career-4'>  {stat.careerPercent}%</div>
                                            <div className='career-5'> {stat.careerHighestSkill}</div>
                                            <div className='career-6'>  <img className='leaderIcon' src={` ./pics/civ_icons/${stat.careerBestLeader}.png`} /></div>
                                            <div className='career-7'>  {stat.careerSeasonWins}</div>
                                            <div className='career-8'>  {stat.careerSeasonLosses}</div>
                                            <div className='career-9'> {stat.careerSeasonPercent}%</div>

                                            <div className='team-0'>Team Stats</div>
                                            <div className='team-1'>{stat.teamSkill}</div>
                                            <div className='team-2'> {stat.teamWins}</div>
                                            <div className='team-3'> {stat.teamLosses}</div>
                                            <div className='team-4'> {stat.teamPercent}%</div>
                                            <div className='team-5'> {stat.teamHighestSkill}</div>
                                            <div className='team-6'> <img className='leaderIcon' src={` ./pics/civ_icons/${stat.teamBestLeader}.png`} /></div>
                                            <div className='team-7'> {stat.teamSeasonWins}</div>
                                            <div className='team-8'> {stat.teamSeasonLosses}</div>
                                            <div className='t-9'> {stat.teamSeasonPercent}%</div>

                                            <div className='duel-0'>Duel Stats</div>
                                            <div className='duel-1'>{stat.duelSkill}</div>
                                            <div className='duel-2'> {stat.duelWins}</div>
                                            <div className='duel-3'> {stat.duelLosses}</div>
                                            <div className='duel-4'> {stat.duelPercent}%</div>
                                            <div className='duel-5'> {stat.duelHighestSkill}</div>
                                            <div className='duel-6'> <img className='leaderIcon' src={` ./pics/civ_icons/${stat.duelBestLeader}.png`} /></div>
                                            <div className='duel-7'> {stat.duelSeasonWins}</div>
                                            <div className='duel-8'> {stat.duelSeasonLosses}</div>
                                            <div className='duel-9'> {stat.duelSeasonPercent}%</div>

                                            <div className='ffa-0'>FFA Stats</div>
                                            <div className='ffa-1'>{stat.ffaSkill}</div>
                                            <div className='ffa-2'> {stat.ffaWins}</div>
                                            <div className='ffa-3'> {stat.ffaLosses}</div>
                                            <div className='ffa-4'> {stat.ffaPercent}%</div>
                                            <div className='ffa-5'> {stat.ffaHighestSkill}</div>
                                            <div className='ffa-6'> <img className='leaderIcon' src={` ./pics/civ_icons/${stat.ffaBestLeader}.png`} /></div>
                                            <div className='ffa-7'> {stat.ffaSeasonWins}</div>
                                            <div className='ffa-8'> {stat.ffaSeasonLosses}</div>
                                            <div className='ffa-9'> {stat.ffaSeasonPercent}%</div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                    </div>
                </div>
        )
    }
}

export default PlayerProfile;






