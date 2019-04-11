const app = require('../server');

function glicko(allPlayerData) {
    console.log('allPlayerData: ', allPlayerData);

    var glicko2 = require("glicko2")

    const test = allPlayerData.filter(player => {
        const name              = player.name;
        const careerSkill        = player.careerSkill;
        const careerSeasonSKill = player.careerSeasonSKill;
        const teamSkill         = player.teamSkill;
        const teamSeasonSKill   = player.teamSeasonSKill;
        const ffaSkill          = player.ffaSkill;
        const ffaSeasonSKill    =  player.ffaSeasonSKill;
        const duelSkill         =  player.duelSkill;
        const duelSeasonSKill   =  player.duelSeasonSKill;
        name = ranking.makePlayer(player.careerSkill, 200, vol) 

    })
    console.log('this is test: ', test)

    var settings = {
        // tau : "Reasonable choices are between 0.3 and 1.2, though the system should
        //       be tested to decide which value results in greatest predictive accuracy."
        tau: 0.5,
        // rating : default rating
        rating: 1500,
        //rd : Default rating deviation
        //     small number = good confidence on the rating accuracy
        rd: 200,
        //vol : Default volatility (expected fluctation on the player rating)
        vol: 0.06
    };
    var ranking = new glicko2.Glicko2(settings);

    // Create players
    var Ryan = ranking.makePlayer();
    var Bob = ranking.makePlayer(1400, 30, 0.06);
    var John = ranking.makePlayer(1550, 100, 0.06);
    var Mary = ranking.makePlayer(1700, 300, 0.06);
    //We can then enter results, calculate the new ratings...

    var matches = [];
    matches.push([Ryan, Bob, 1]); //Ryan won over Bob
    matches.push([Ryan, John, 0]); //Ryan lost against John
    matches.push([Ryan, Mary, 0.5]); //A draw between Ryan and Mary
    ranking.updateRatings(matches);
    //... and get these new ratings.

    console.log("Ryan new rating: " + Ryan.getRating());
    console.log("Ryan new rating deviation: " + Ryan.getRd());
    console.log("Ryan new volatility: " + Ryan.getVol());
    //Get players list

    var players = ranking.getPlayers()

    Promise.all(test)
        .then(results => resolve(results))
        .catch(err => reject(new Error('could not return results')));

}


module.exports = { glicko };

//["player0", "player1", "player2"]
