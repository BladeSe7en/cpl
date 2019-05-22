import axios from 'axios';

export const toggleActive = (value) => {
	return {
		type: 'TOGGLE_ACTIVE',
		payload: {
			newTopicActive: value

		}
	}
}

export const togglePopularity = (value) => {
	return {
		type: 'TOGGLE_POPULARITY',
		payload: {
			popularityOrder: !value
		}
	}
}

export const toggleSignIn = () => {
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
	return {
		type: 'UPDATE_PLAYER_DATA',
		payload: {
			signedIn: value
		}
	}
}

export const blogsByDate = (order) => {
	let bangOrder = order === true ? 'ASC' : 'DESC';
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
	return {
		type: 'DATE_ORDER',
		payload: {
			dateOrder: !order

		}
	}
}

export const topicSubmit = (date, newTopic, newTopicBody, memberId, name) => {
	return {
		type: 'TOPIC_SUBMIT',
		payload: axios({
			method: 'post',
			url: `/api/blogPosts`,
			data: {
				"blogTitle": newTopic,
				"blogBody": newTopicBody,
				"date": date,
				"upVotes": 0,
				"numComments": 0,
				"voteNames": [],
				"memberId": memberId,
				"steamNameId": name
			}
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}

export const onChange = (key, value) => {
	return {
		type: 'ON_CHANGE',
		payload: {
			[key]: value
		}
	}
}




// let player = {
// 	id: response._json.steamid,
// 	name: response._jsonusername,
// 	profile: response._json.profile,
// 	avatar: response._json.avatar.small
//   }