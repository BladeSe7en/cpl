import Axios from "axios";

export const getProfile = (profile) => {
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	return {
		type: 'GET_PROFILE',
		payload: Axios({
			method: 'get',
			url: `api/players/${profile}?access_token=${accessToken}`
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}
