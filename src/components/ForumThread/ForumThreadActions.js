import axios from 'axios';

export const threadEdit = (value) => {
	return {
		type: 'TOGGLE_THREAD_EDIT',
		payload: axios({
            method: 'get',
            url: '/api/threadEdit'
        })
        .then(response => {
            return response.data
        })
        .catch(err => err)
	}
}

export const threadDelete = (value) => {
	return {
		type: 'TOGGLE_THREAD_DELETE',
		payload: axios({
            method: 'get',
            url: '/api/threadDelete'
        })
        .then(response => {
            return response.data
        })
        .catch(err => err)
	}
}

