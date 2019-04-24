import React from 'react';
import Navbar from '../Navbar/Navbar';

const Rules = () => {
    return (
        <div>
            <Navbar />
            <div className='faq'>
                <div className='banner-opacity-faq'>
                    <div className='rules-content'>
                        <h1>Civilization Players Leagues Rules</h1>
                        <h3>Contents</h3>
                        <ul>
                            <li> Required Bans</li>
                            <li> Other Game Configurations</li>
                            <li> In-Game Offenses</li>
                            <li> Finding A Sub</li>
                            <li> Consequences and Punishments </li>
                            <li> Scrapping A Game</li>
                            <li> Re-Mapping A Game</li>
                            <li> Concede Thresholds</li>
                            <li> Drop Policy</li>
                            <li> Team Game Specific Rules</li>
                        </ul>

                            <br></br>

                            <p>All of the current rules listed in this document are the current in-game rules. For a full list of the non-game related rules, please see here:
                            http://www.civplayers.com/index.php?section=smf&topic=10533.0
                            Note:  The league management will enforce the league's rules in a fair and consistent manner.  But not all situations can ever be covered by even our full in-depth ruleset. 
                            League staff are in all cases the final arbitrators of all disputes, and will deal with all cases that don't fall neatly within established rules according to their judgement.</p>
                        
                            <br></br>

                        <h3> REQUIRED BANS</h3>
                        <p> These bans are required for any league sanctioned game. These settings are always, <strong>by default, in-game rules.</strong> </p>
                        <h4>Liberating cities of a Major Civilization that brings back an AI into the game</h4>
                        <ul>
                            <li> You may liberate any city so long that it does not bring a computer AI back into the game.</li>
                        </ul>

                        <h4>Late-turn Great Person passing</h4>
                        <ul>
                            <li>If you receive a Great Person without having clicked Recruit, and it was due to someone else making a late-turn pass on that Great Person, you are entitled a relobby.</li>
                        </ul>

                        <h4>No trading with AI civilizations</h4>
                        <ul>
                            <li>Since the AI is known to make absurd deals, trading with an AI civ is not allowed with the exception of peace deals and ceding cities. This is not to be confused with sending trade routes. Sending trade routes to other players (including AI) is always allowed unless voted against.</li>
                        </ul>

                        <h4>Unit stacking</h4>
                        <ul>
                            <li>You are not allowed to stack multiple units of the same type (land, sea, etc..) within cities. If this happens, and you cannot move a unit out by the end of the turn, you must delete the stacked units until only 1 of their type remains. </li>
                            <li>There are also times where one of your units may accidentally stack on your own or an opposing player's unit. If this happens, the player who stacked on top, must unstack at the first available opportunity... i.e. You may not perform any other moves on the next turn until you unstack.</li>
                        </ul>

                        <h4>Changing the names of captured city states</h4>
                        <ul>
                            <li>A player may never change the name of a captured city-state. This is to avoid the appearance that a player is trying to hide the fact that he/she captured a city-state, in the hopes of getting away with capturing another one.</li>
                        </ul>

                        <h4>Relic abuse</h4>
                        <ul>
                            <li>In team games, you may not generate relics from teammates using Apostle and/or Missionary martyr abilities.</li>
                        </ul>

                        <h4>Pillage abuse</h4>
                        <ul>
                            <li>You may not collude with another player to pillage and repair each others tiles. This will be treated as cheating and therefore, severely punished.</li>
                        </ul>

                        <h4>Priority targeting anti-air units</h4>
                        <ul>
                            <li>Priority targeting anti-air units allows planes to kill them without taking any damage. This is not allowed until fixed by Firaxis.</li>
                        </ul>

                        <br></br>

                        <h3>OTHER GAME CONFIGURATIONS</h3>
                        <h4>Ties In Votes</h4>
                        <ul>
                            <li>All vote ties are broken by the game host</li>
                        </ul>

                        <h4>Backing Out Of A Game</h4>
                        <ul>
                            <li>Prior to the draft being presented, players are allowed to back out of a game. Once the draft comes out, all players have consented to the rules of that game and are no longer allowed to leave. Leaving the game will be considered an intentional quit.</li>
                        </ul>

                        <h4>Draft Trading</h4>
                        <ul>
                            <li>If draft trading is permitted by vote, players are allowed to trade another player's civ options with any player of their choosing as long as both parties are in agreement. You must trade all of your draft picks.</li>
                        </ul>

                        <h4>Drafting DLC Civs You Do Not Own</h4>
                        <ul>
                            <li>If a player receives a draft where they do not own that specific DLC civ(s), they must choose from the option(s) that they have left (or trade as per rule above). If a player receives a draft where they do not own any civ, the host will separately draft him/her a civ using the .draft-1 command. This will be done after everyone else has picked their civ, and the player must pick the first civ in that draft command that nobody chose and is not banned.</li>
                        </ul>

                        <h4>Voting Via Text</h4>
                        <ul>
                            <li>All votes need to be done in the in-game or discord chat. Voting via voice chat is no longer a valid vote.</li>
                        </ul>

                        <h4>Turn Timer Changes</h4>
                        <ul>
                            <li>Turn timer changes mid-game can be voted on and requires a majority of all players still in game.</li>
                        </ul>

                        <br></br>
                    
                        <h3>IN-GAME OFFENSES</h3>
                        <h4>Reporting A Player</h4>
                        <ul>
                            <li>To report a player, please let an Admin or Moderator know, and if possible take a screenshot and send us your net_message_debug.log file found in ~\Documents\My Games\Sid Meier's Civilization VI\Logs</li>
                        </ul>

                        <h4>Violating in-game rules including by not limited to: </h4>
                        <ul>
                            <li>Great Person Passing</li>
                            <li>City Trading</li>
                            <li>Private communication or public chatter about current game in always war games</li>
                        </ul>

                        <h4>Different war moves</h4>
                        <ul>
                            <li>In the event of a reload, players must make the same moves as they did in that turn.  If caught making different moves, a warning or punishment will be given to that player.</li>
                        </ul>

                        <h4>Quitting a game before permitted:</h4>
                        <ul>
                            <li>The game officially starts when all settings have been voted on, and Civ Drafting commences. i.e. leaving after the draft is posted is considered quitting! If a vote for settings is not used, players can leave a game without penalty as long as they have not clicked the in-game ready button.</li>
                            <li>In order to leave a game you must either lose 66% of your cities or get a successful irrelevancy vote (simple majority vote). We aren't against you leaving the game as much as we are against your leaving making a considerable impact on the outcome of the game.</li>
                        </ul>

                        <h4>Intentional Feeding:</h4>
                        <ul>
                            <li>You are not allowed to intentionally make yourself a target to get eliminated from the game.  This is worse than early quitting since you are putting up less of a fight than an AI would.</li>
                        </ul>

                        <h4>Attempting to negatively affect the community:</h4>
                        <ul>
                            <li>Any action involving flame wars, encouraging members to break rules, hack, cheat, falsifying reported game results, impersonating another member or publicly recruiting away from our group are forbidden.  (To be clear....you ARE allowed to join and participate in other groups and communities but suggesting for players to leave this one to join another one will be taken as a serious offense).</li>
                        </ul>

                        <h4>Amani abuse</h4>
                        <ul>
                            <li>If you remove Amani from a city-state that you are suzerain of, you may not place her back into that city-state for 5 turns (so that she takes no less than 5 turns to re-establish). If you do so, any other player may request and must be granted a relobby.</li>
                        </ul>
                        <h4>NOTE: Rule breaking events that can be fixed by relobbying must be. These include, but are not limited to:</h4>
                        <ul>
                            <li>Great Person passing</li>
                            <li>Different war moves</li>
                            <li>Capturing and keeping more than the allowed number of City-States</li>
                            <li>Amani abuse</li>
                        </ul>
                        <h4>NOTE: Admins/Mods have the right to issue temporary penalties until other members of the Admin/mod team can review the case and issue a formal review in #suspended_players. Even if your case is issued a verdict by the admin/mod team, you have the right to appeal for a second review of the case by a group of admins including @-KC-CanuckSoldier🍁.</h4>
                        <h4>NOTE: We also reserve the right to determine what conduct we consider to be a violation of the rules.</h4>

                        <br></br>

                        <h3>FINDING A SUB</h3>
                        <h4>Sub Rules</h4>
                        <ul>
                            <li>If players need and wish to find a substitute for a missing player, no vote is necessary if the subbing player is within 15% skill of the player being subbed out. For a non-team game, if the player subbing is outside of the 15% skill range, it requires a majority vote to allow that player into the game. For a team game, each team must have a separate majority vote to allow the player in or not. If players cannot find and agree to a sub within 10 minutes, a concede vote must happen. If the concede vote fails, a scrap vote must be held. If the scrap vote also fails, the game must continue with an AI.</li>
                            <li>If you have subbed out of a game, you may not play a different game (Civ or other game) until the Civ game you subbed out of has ended. If caught trying to do so, you'll receive a quit from the game you subbed out of, regardless of other factors.</li>
                            <li>2 subs per month only are deemed reasonable. 3 or more subs in the same month will each be treated as a quit and penalised accordingly</li>
                            <li>You no longer need to have an emergency to sub out of a game… You may sub out for any reason, but more than 2 in a 30 day period will be treated as quits, as mentioned above.</li>
                            <li>To be clear, finding an acceptable sub prior to you leaving the game does not count as a quit, but does count towards your current sub count.</li>
                        </ul>
                        

                        <h3>CONSEQUENCES AND PUNISHMENTS</h3>
                        <h4>Breaking in-game rules and unsportsmanlike behavior</h4>
                        <ul>
                            <li>1st offense: Verbal/written warning</li>
                            <li>2nd offense: 3-7 day suspension</li>
                            <li>3rd offense: 7-14 day suspension</li>
                            <li>4th offense: 14+ day suspension to ban</li>
                        </ul>

                        <h4>Stream Sniping</h4>
                        <ul>
                        <li>1st offense: 7-14 day suspension</li>
                            <li>2nd offense: 14-30 day suspension</li>
                            <li>3rd offense: 6 month suspension</li>
                        </ul>

                        <h4>Quitting A Game</h4>
                        <ul>
                            <li>1st Tier Offense: Suspended:  1 day  | Quitter Tag: 1 game</li>
                            <li>2nd Tier Offense: Suspended:  3 days  | Quitter Tag: 3 games</li>
                            <li>3rd Tier Offense: Suspended:  7 days  | Quitter Tag: 5 games</li>
                            <li>4th Tier Offense: Suspended:  14 days  | Quitter Tag: 7 games</li>
                            <li>5th Tier Offense: Suspended:  21 days  | Quitter Tag: 10 games</li>
                            <li>6th Tier Offense: Suspended:  30 days  | Quitter Tag: 15 games</li>
                            <li>7th Tier Offense: Suspended:  BAN  | Quitter Tag: 1 game</li>
                            <li>NOTE: You go up a tier with each quit within 3 months, and go down a tier for each 3 months without a quit</li>
                            <li>NOTE: The CPL admin/moderator team reserves the right to review and adjust punishments as deemed necessary</li>
                            <li>NOTE: Quitting while having the quitter tag adds an additional 3 days.  CPL takes quitting very seriously so please follow the rules on when you can properly leave a game.</li>
                            <li>NOTE: Players who announce they have limited time for a game must now be given written consent by all players to avoid receiving a quitter tag.</li>
                        </ul>

                        <br></br>

                        <h3>SCRAPPING A GAME</h3>
                        <ul>
                            <li>On or before turn 30, a scrap vote requires at least a 2/3 majority to pass.</li>
                            <li>After turn 30, a scrap vote requires an all but 1 majority to pass.</li>
                            <li>If a scrap was due to a player leaving/quitting, or some sort of technical issue please let us know by adding that into the game report. </li>
                            <li>For more information, please see rule 34 in the Civplayers link</li>
                        </ul>

                        <br></br>

                        <h3>RE-MAPPING A GAME</h3>
                        <h4>Remap</h4>
                        <ul>
                            <li>A player can request a 'remap' on or before turn 12 if they feel their spawn is so bad as to be unplayable. It requires at least a 66% majority vote to pass.</li>
                            <li>A 'remap' request must be granted if 2 players initial settlers are spawned (not settled) less than 9 tiles from each other or less than 6 tiles from a CS. Screenshot proof is required, but if proven, no vote is necessary and the remap request must be granted. This is due to a bug with the game code that has been occurring since the last patch, although there are steps that can be taken to avoid the issue, including start spawn correcting mods and tweaking the game settings to reduce the likelihood of spawn issues.</li>
                            <li>Note: not required with Better Balanced Starts mod or other suggested start position mods</li>
                            <li>In either case, players are required to stay for the first 2 remaps. If a 3rd vote passes, they are allowed to leave the game.</li>
                        </ul>

                        <h3>CONCEDE THRESHOLDS</h3>
                        <h4>Ancient Start</h4>
                        <table>
                            <thead>
                            <tr>
                            <th>Turns 0-70</th>
                            <th>Unanimous</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>Turns 71-90</td>
                            <td>All but 1</td>
                            </tr>
                            <tr>
                            <td>Turns 91+</td>
                            <td>All but 2</td>
                            </tr>
                            </tbody>
                            </table>

                            <h4>Other Age Starts</h4>
                        <table>
                            <thead>
                            <tr>
                            <th>Starting Age</th>
                            <th>All But 1</th>
                            <th>All But 2</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>Classical (40)</td>
                            <td>81-105</td>
                            <td>106+</td>
                            </tr>
                            <tr>
                            <td>Medieval (71)</td>
                            <td>96-120</td>
                            <td>121+</td>
                            </tr>
                            <tr>
                            <td>Renaissance (98)</td>
                            <td>121-145</td>
                            <td>146+</td>
                            </tr>
                            <tr>
                            <td>Industrial (128)</td>
                            <td>146-170</td>
                            <td>171+</td>
                            </tr>
                            <tr>
                            <td>Modern (158)</td>
                            <td>166-190</td>
                            <td>191+</td>
                            </tr>
                            <tr>
                            <td>Atomic (183)</td>
                            <td>Always ironman</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Info (208)</td>
                            <td>Always ironman</td>
                            <td></td>
                            </tr>
                            </tbody>
                            </table>

                            <h4>Other Concede Rules</h4>
                        <ul>
                            <li>In any case in a FFA, first place has no vote in the decision</li>
                            <li>Players who are in the top half of positions will have veto. This is rounded up and will always include at least 2nd and 3rd position. For example 2, 3, and 4 have veto in a 7 person game.</li>
                            <li>If 2 or more players tie for a position, everyone else moves up that many positions, potentially gaining vetos. For example, if you are in 4th place, but 2 players above you tie, you will become 3rd place and gain a veto.</li>
                            <li>SCIENCE VETO: Players who have completed the first 2 major stages of a science victory will have veto</li>
                            <li>CULTURE VETO: Players who have 50% or more of the tourists needed for a culture victory will have veto</li>
                            <li>RELIGION VETO: Players who have converted 66% or more of remaining civs to their religion will have veto</li>
                            <li>Nobody can ask for a CC if the previous vote was asked within 10 turns</li>
                            <li>Ties for first place are no longer allowed in any game modes</li>
                            <li>If a city was captured on that turn, players may not CC until the next turn</li>
                        </ul>

                        <br></br>

                        <h3>DROP POLICY</h3>
                        <h4>3 Drop Policy</h4>
                        <ul>
                            <li>Each player (including the host) gets three penalty-free disconnect from the game. After the 3rd drop the host can refuse to let you back in the game, the host has the final authority on that decision. You have 10 minutes to rejoin the game without penalty. If someone leaves a game (for whatever reason), the remaining players have the right to either continue playing the game, scrap the game, concede the game, or allow a substitute after the 3rd 10 minute waiting period has passed, or if the player doesn't return within any of the 10 min waiting periods. All these options require a majority vote by the remaining players, lead by the Host. </li>
                            <li>Due to the unstable nature of Firaxis Crashes, we will not consider Firaxis crashes as a drop </li>
                            <li>To prove that it was a Firaxis crash and not a disconnect, you must provide a valid screenshot of the crash with a timestamp within 2 minutes of the crash.</li>
                        </ul>

                        <br></br>

                        <h3>TEAM GAME SPECIFIC RULES</h3>
                        <ul>
                            <li>By default All team games are Always War (AW)</li>
                            <li>The maximum amount of units spawned from city trading with England is 1 per city. Any past that, you must delete that unit.</li>
                            <li>The team captain or any other player starts a vote within the team whether to concede or not. It requires a majority vote on the team considering conceding for that decision to pass.  50% is not a pass it must be greater than 50% for the number of players in the team present in the game still.</li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules;