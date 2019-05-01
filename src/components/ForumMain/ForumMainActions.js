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
	return {
		type: 'TOGGLE_SIGNIN',
		payload: axios({
			
			method: 'get',
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