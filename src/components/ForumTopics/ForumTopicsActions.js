import axios from 'axios';

export const thread = (value, id) => {
	console.log('thread value: ', value)

	return {
		type: 'TOGGLE_THREAD_VIEW',
		payload: {
        viewingThread: value,
        id: id

		}
	}
}
export const getBlogs = () => {
    console.log('inside get blogs')
	return {
		type: 'GET_BLOGS',
		payload: axios({
			method: 'get',
			url: '/api/blogPosts'
		})
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

export const getThreadsById = (id) => {
    console.log('inside getThreadsById: ',id)
    const test = '5cce55288722dd4aedf1adf3'
    console.log('this is test: ', test)
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_THREADS_BY_ID',
		payload: 
            axios({
			method: 'get',
            url: `http://localhost:3000/api/threads/?filter=%7B%22where%22%3A%7B%22blogPostId%22%3A%22${id}%22%7D%7D&access_token=${accessToken}`
        })      
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

// {"where":{"id":5cce56488722dd4aedf1adf8}}
// `%7B%22where%22%3A%7B%22id%22%3A${id}%7D%7D`

// {"where":{"blogPostId":"5cce532f8722dd4aedf1ade7"}}
