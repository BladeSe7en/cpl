import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../Navbar/Navbar';

const Faq = () => {
    return (
        <div>
            <Navbar />
            <div className='faq'>
                <div className='banner-opacity-faq'>
                    <div className='faq-content'>
                        <h1 id='top-of-faq'>Civilization Players Leagues Faq </h1>
                        <h3>Contents</h3>
                        <ul>

                            <li>
                                <Link to="/Faq#Q1">
                                    <button className="btn">Q. How does the ranking work?</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Faq#Q2">
                                    <button className="btn">Q. How does the ELO system decide if I’ve gained or lost points over all?</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Faq#Q3">
                                    <button className="btn">Q. How are ties and subs dealt with?</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Faq#Q4">
                                    <button className="btn">Q. How are the win/loss stats determined?</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Faq#Q5">
                                    <button className="btn">Q. How are games processed within Discord? </button>
                                </Link>
                            </li>
                        </ul>
                        <h3 id='Q1'> Q. How does the ranking work?</h3>
                        <p>A. The ranking system uses ELO Skill, which was originally developed for Chess, but is now being
            used by many games and sports for ranking. Each time a game is reported, you gain or lose skill for each
            person you beat or lost to, respectively. More advanced versions like Glicko or Glicko2 have replaced it
            over the years. https://en.wikipedia.org/wiki/Elo_rating_system
</p>
                        <h3 id='Q2'>Q. How does the ELO system decide if I’ve gained or lost points over all?.</h3>
                        <p>A. ELO is a 1v1 system, so we treat our FFA and Team games like a series of 1v1s. ELO will calculate
                each 1v1 and decide based on starting skill if you have gained or lost skill. Beating players with higher
                skill than you will net higher points added to your skill, while beating players below your skill level will
                net very little points. The opposite is true for losing… If you lose to a lower skilled player, you will lose
                much more skill than if you lost to someone of a higher skill than you. Your total net points are a
                combination of all the 1v1s in the game.
                For example, if you came in 4th, in a 10-player FFA, that means that you lost to 3 players and you beat 6
                players. If most of the players you beat were higher skill than you, you will get a large point boost,
                conversely if the 3 players that beat you were much lower in skill, you could lose a lot of points. In the
                end, all the points you win and lose are combined for a net gain or loss.
                That net gain or loss is shown next to your name in the
                processed report. Outside of finishing 1st
                , which is
                always guaranteed to get some points, even 2nd place
                can lose points in the right circumstances. In team
                games, if your team wins, you get wins against each
                player on the losing team, and if you lose, it’s the
                opposite. How much you win or lose on a team game
                depends really on the average skill of the other team and
                how much better or worse it is compared to your skill. ELO is a zero-sum system, which means that
                overall, if a player gains points, the exact same points are removed from another player. As in the
screenshot above, all the + and – skill work out exactly to Zero.</p>
                        <Link to="/Faq#top-of-faq">
                            <button className="top-of-page">Top of Page</button>
                        </Link>
                        <h3 id='Q3'>Q. How are ties and subs dealt with?</h3>
                        <p>A. Ties are dealt with in that the two or more tying players do not have 1v1s processed against
                each other, but they do have 1v1s, processed as normal, against the players above and below them.
                Subs are given only the wins, while the original player takes all the losses, this is our way of encouraging
and rewarding players that volunteer to sub, as well as discouraging people from requesting subs.</p>
                        <Link to="/Faq#top-of-faq">
                            <button className="top-of-page">Top of Page</button>
                        </Link>
                        <h3 id='Q4'>Q. How are the win/loss stats determined?</h3>
                        <p>A. To maintain compatibility with MyLeague statistics, we are calculating the number of wins and
                losses just like it was done before. Let’s revert back to the previous scenario, where you finished the
                game in 4th place. You beat 6 players and lost to 3, which means that your record for that game was 6-
3. Each time a game is reported, these are added to your overall wins and losses.</p>
                        <Link to="/Faq#top-of-faq">
                            <button className="top-of-page">Top of Page</button>
                        </Link>
                        <h3 id='Q5'>Q. How are games processed within Discord?</h3>
                        <p>A. Like before, the game gets reported to #ranked_reporting. Anyone can now add a “blue C”
                reaction to the report, in order to Check the game for the proper format. This ensures that the report
                bot can process it successfully.
                If you are unsure of the correct format to use when reporting a game, see the #ranked_reporting pinned
                message.
                Games are processed by a Moderator or Game Reporter approximately 48 hours after its reported. This
                is to give the Staff time to process any issues, and also gives the players a window of time to dispute the
                report, if needed. Once a Game Reporter processes a game, the bot will process the scores, enter all the
                data into the database, and move the game to #ranked_history with a game ID number. The bot also
instantly updates the leaderboard in the #ranked_leaderboard channel every time a game is processed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;