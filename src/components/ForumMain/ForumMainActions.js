import axios from 'axios';

export const toggleActive = (value) => {
	console.log('toggle active value: ', value)

	return {
		type: 'TOGGLE_ACTIVE',
		payload: {
			newTopicActive: value

		}
	}
}

export const toggleSignIn = () => {
	console.log('in toggle sign in action')
	return {
		type: 'TOGGLE_SIGNIN',
		payload: axios({
			
			method: 'get',
			headers: {
			'Access-Control-Allow-Origin': '*',
			},
			mode: 'no-cors',
			url: `/authenticate`,
		})
			.then((response) => {
				return {
					user: response.data
				}
			})

	}
}

export const playerData = (value) => {
	console.log('inside player data action')
	console.log('value: ', value)
	return {
		type: 'UPDATE_PLAYER_DATA',
		payload: {
			player: value
		}
	}
}


// let player = {
// 	id: response._json.steamid,
// 	name: response._jsonusername,
// 	profile: response._json.profile,
// 	avatar: response._json.avatar.small
//   }