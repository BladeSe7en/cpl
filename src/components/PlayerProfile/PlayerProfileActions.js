import Axios from "axios";

export const getProfile = (profile) => {
    console.log('5: ', profile)
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	return {
		type: 'GET_PROFILE',
		payload: Axios({
			method: 'get',
			url: `api/players/${profile}?access_token=${accessToken}`
		})
			.then(response => {
				console.log('playerData: ', response.data)
				return response.data
			})
			.catch(err => err)
	}
}
