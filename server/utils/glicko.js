
//to test this function in loopback enter in this data and the huge array on the bottom of the page under the allPlayerStats input
//matches = [[player0, player1, 1],[player0, player2, 1],[player1, player2, 1]]
//names = ["player0", "player1", "player2"] if you enter this into the getPlayerStats function it will give you the allPlayerStats array
//gameType = 'ffa'

var glicko2 = require('glicko2');

function glicko(allPlayerStats, matches, gameType) {
    var settings = {
        tau: 0.5,
        rating: 1500,
        rd: 200,
        vol: 0.06
    };

    var ranking = new glicko2.Glicko2(settings);
    const madePlayers = [];

    console.log('allPlayerStats: ', allPlayerStats)
    console.log('matches: ', matches)
    console.log('gameType: ', gameType)

    if (gameType === 'ffa') {
        makeTheFfaPlayers();
        function makeTheFfaPlayers() {
            allPlayerStats.map((playerName, i) => {
                let singlePlayerStats = {
                    user: playerName[0].name, value: ranking.makePlayer(playerName[0].ffaSkill, playerName[0].ffaRatingDiviation, playerName[0].ffaVolatility)
                }
                madePlayers.push(singlePlayerStats)
            });
        }
        evaluate(madePlayers)
    }

    if (gameType === 'team') {
        makeTheTeamPlayers();
        function makeTheTeamPlayers() {
            allPlayerStats.map((playerName, i) => {
                let singlePlayerStats = {
                    user: playerName[0].name, value: ranking.makePlayer(playerName[0].teamSkill, playerName[0].teamRatingDiviation, playerName[0].teamVolatility)
                }
                madePlayers.push(singlePlayerStats)
            });
        }
        evaluate(madePlayers)
    }

    if (gameType === 'duel') {
        makeTheDuelPlayers();
        function makeTheDuelPlayers() {
            allPlayerStats.map((playerName, i) => {
                let singlePlayerStats = {
                    user: playerName[0].name, value: ranking.makePlayer(playerName[0].duelSkill, playerName[0].duelRatingDiviation, playerName[0].duelVolatility)
                }
                madePlayers.push(singlePlayerStats)
            });
        }
        evaluate(madePlayers)
    }

    if (gameType === 'ffa') {
        makeTheFfaPlayers();
        function makeTheFfaPlayers() {
            allPlayerStats.map((playerName, i) => {
                let singlePlayerStats = {
                    user: playerName[0].name, value: ranking.makePlayer(playerName[0].ffaSkill, playerName[0].ffaRatingDiviation, playerName[0].ffaVolatility)
                }
                madePlayers.push(singlePlayerStats)
            });
        }
        evaluate(madePlayers)
    }

    function evaluate(madePlayers) {
        console.log('madePlayers----', madePlayers),
            console.log('madePlayers[0].value---: ', madePlayers[0].value)


        let matches = []

        madePlayers.forEach((player, index) => {
            const otherPlayers = madePlayers.slice(index)
            const matchesForPlayer = []
            otherPlayers.forEach(otherPlayer => {
                matchesForPlayer.push([
                    player.value,
                    otherPlayer.value,
                    1
                ])
            })

            matches = [...matches, ...matchesForPlayer]
        })

        console.log('this is matches: ', matches)
        ranking.updateRatings(matches)

        return madePlayers.map((playerName, i) => (
            console.log('not another log!: ', playerName),
            console.log('yes another log!: ', playerName.value),
            console.log(`${playerName.user} player new rating: ` + madePlayers[i].value.getRating()),
            console.log(`${playerName.user} new rating deviation: ` + madePlayers[i].value.getRd()),
            console.log(`${playerName.user} new volatility: ` + madePlayers[i].value.getVol())
        ));
    }
    var players = ranking.getPlayers();
    console.log('this is players:-------',players)
}
module.exports = { glicko }