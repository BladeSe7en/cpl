const app = require('../server')

function getPlayerStats(names) {
  debugger
    console.log('names: ', names)
    return new Promise((resolve, reject) => {
        const { Player } = app.models;
        const playerData = names.map(name => {

            console.log('single name: ', name)
            const defaultSkill = 1500;
          return  Player.findOrCreate({ where: { name: name } },
                {
                    "name": name,
                    "careerSkill": defaultSkill,
                    "careerHighestSkill": defaultSkill,
                    "careerWins": 0,
                    "careerLosses": 0,
                    "careerPercent": 0,
                    "careerBestLeader": "none",
                    "careerAllLeader": ["none"],
                    "highestCareerSkill": defaultSkill,
                    "careerSeasonWins": 0,
                    "careerSeasonLosses": 0,
                    "careerSeasonPercent": 0,
                    "teamSkill": defaultSkill,
                    "highestTeamSkill": defaultSkill,
                    "teamWins": 0,
                    "teamLosses": 0,
                    "teamPercent": 0,
                    "teamBestLeader": "none",
                    "teamAllLeader": ["none"],
                    "teamSeasonWins": 0,
                    "teamSeasonLosses": 0,
                    "teamSeasonPercent": 0,
                    "duelSkill": defaultSkill,
                    "highestDuelSkill": defaultSkill,
                    "duelWins": 0,
                    "duelLosses": 0,
                    "duelPercent": 0,
                    "duelBestLeader": "none",
                    "duelAllLeader": ["none"],
                    "duelSeasonWins": 0,
                    "duelSeasonLosses": 0,
                    "duelSeasonPercent": 0,
                    "ffaSkill": defaultSkill,
                    "highestffaSkill": defaultSkill,
                    "ffaWins": defaultSkill,
                    "ffaLosses": 0,
                    "ffaPercent": 0,
                    "ffaBestLeader": "none",
                    "ffaAllLeader": ["none"],
                    "ffaSeasonWins": 0,
                    "ffaSeasonLosses": 0,
                    "ffaSeasonPercent": 0,
                    "careerHighSkill": defaultSkill,
                    "teamHighSkill": defaultSkill,
                    "duelHighSkill": defaultSkill,
                    "ffaHighSkill": defaultSkill
                },
                (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                }
            )
        })
        Promise.all(playerData)
            .then(results => resolve(results))
            .catch(err => reject(new Error('could not return results')))
    })
}

module.exports = { getPlayerStats };

//["player0", "player1", "player2"]

