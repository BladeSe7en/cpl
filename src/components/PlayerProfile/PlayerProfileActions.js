import Axios from "axios";

export const getProfile = (profile) => {
    console.log('5: ', profile)
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	return {
		type: 'GET_PROFILE',
		payload: Axios({
			method: 'get',
			url: `http://localhost:3000/api/players?filter=%7B%22where%22%3A%20%7B%22id%22%3A%20${profile}%7D%7D&access_token=${accessToken}`
		})
			.then(response => {
				console.log('ddddddd: ', response.data)
				return response.data
			})
			.catch(err => err)
	}
}

export const getTalkData = accessToken => {
    return {
        type: 'GET_TALK_DATA',
        payload: axios({
            method: 'get',
            url: 'api/talks/getTalkDetails',
            headers: {
                Authorization: accessToken
            }
        })
            .then(talkInfo => {
                const date = moment().subtract(1, 'day').format();
                const filtered = talkInfo.data.filter(talk => moment(talk.eventDate).format() > date);
                filtered.sort(function(a, b) {
                    a = moment(a.eventDate).format();
                    b = moment(b.eventDate).format();
                    return a<b ? -1 : a>b ? 1 : 0;
                })
                return axios({
                    method: 'get',
                    url: 'api/organizers',
                    headers: {
                        Authorization: accessToken
                    }
                })
                    .then((organizers) => {
                        return {
                            talkInfo: filtered,
                            organizers: organizers.data
                        }
                    })
            })
    }
};

// export const getPlayersStats = accessToken => {
// 	return {
// 		type: 'GET_PLAYERS_STATS',
// 		payload: axios({
// 			method: 'get',
// 			url: 'http://localhost:3000/api/players?filter=%7B%22where%22%3A%7B%22or%22%3A%5B%7B%22name%22%3A%22player0%22%7D%2C%7B%22name%22%3A%22player1%22%7D%2C%20%7B%22name%22%3A%22player2%22%7D%2C%20%7B%22name%22%3A%22player3%22%7D%2C%7B%22name%22%3A%22player4%22%7D%2C%7B%22name%22%3A%22player5%22%7D%2C%7B%22name%22%3A%22player6%22%7D%2C%7B%22name%22%3A%22player7%22%7D%2C%7B%22name%22%3A%22player8%22%7D%2C%20%7B%22name%22%3A%22player9%22%7D%2C%20%7B%22name%22%3A%22player10%22%7D%2C%7B%22name%22%3A%22player11%22%7D%5D%7D%7D&access_token=ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
// 		})
// 	}
// }
// const str
// const names = ["player0", "player1", "player2"]
// const url = names.map(name => {
// str.concat(name)
// })
// console.log(url)