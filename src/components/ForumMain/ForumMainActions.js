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

export const togglePopularity = (value) => {
	console.log('toggle popularity value: ', value)
	console.log('bang popularity value: ', !value)
	return {
		type: 'TOGGLE_POPULARITY',
		payload: {
			popularityOrder: !value
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
					signedIn: response.data
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
			signedIn: value
		}
	}
}

export const blogsByDate = (order) => {
		console.log('inside blogsByDate order: ', order)
		let bangOrder = order === true ? 'ASC' : 'DESC';
		console.log('this is bangOrder: ', bangOrder)
		return {
			type: 'GET_BLOGS',
			payload: axios({
				method: 'get',
				url: `/api/blogPosts/?filter=%7B%22order%22%3A%22date%20${bangOrder}%22%7D`
			})
			.then(response => {
				return response.data
			})
			.catch(err => err)
		}
	}

	export const dateToggle = (order) => {
		console.log('toggle active value: ', order)
	
		return {
			type: 'DATE_ORDER',
			payload: {
				dateOrder: !order
	
			}
		}
	}





// let player = {
// 	id: response._json.steamid,
// 	name: response._jsonusername,
// 	profile: response._json.profile,
// 	avatar: response._json.avatar.small
//   }