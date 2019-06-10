import axios from 'axios';

export const thread = (value, blogId) => {
	return {
		type: 'TOGGLE_THREAD_VIEW',
		payload: {
		viewingThread: value,
		viewingThreadId: blogId,
        blogId: blogId

		}
	}
}
export const getBlogs = (viewPerPage, skip) => {
	return {
		type: 'GET_BLOGS',
		payload: axios({
			method: 'get',
			url: `/api/blogPosts?filter[limit]=${viewPerPage}&filter[skip]=${skip}`
		})
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

export const sortByPopularity = (popularityOrder) => {
	const order = popularityOrder?'DESC':'ASC';
	return {
		type: 'SORT_POPULARITY',
		payload: axios({
			method: 'get',
			url: `/api/blogPosts/?filter=%7B%22order%22%3A%22upVotes%20${order}%22%7D`
		})
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

export const getThreadsById = (id, viewPerPage, skip) => {
    console.log('inside getThreadsById: ',id)
    const test = '5cce55288722dd4aedf1adf3'
    console.log('this is test: ', test)
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_THREADS_BY_ID',
		payload: 
            axios({
			method: 'get',
            url: `api/threads/?filter[where][blogPostId]=${id}&filter[limit]=${viewPerPage}&filter[skip]=${skip}&access_token=${accessToken}`
        })      
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

export const commentCount = (id) => {
    console.log('inside commentCount: ',id)
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_COUNT',
		payload: 
            axios({
			method: 'get',
            url: `api/threads/?filter=%7B%22where%22%3A%7B%22blogPostId%22%3A%22${id}%22%7D%7D&access_token=${accessToken}`
        })      
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

export const addComment = (data) => {
	console.log('1')
	const accessToken ='5cc16624e810e7579a1581c1'
	return {
		payload: 
            axios({
			method: 'post',
			url: `api/threads?access_token=${accessToken}`,
			data: data
        })      
		.then(response => {
			console.log('2')
            return response.data
		})
		.catch(err => err)
    }
}

export const submitUpdatedComment = (date, comment, memberId, threadId, avatar, steamName) => {
	console.log('1')
	const accessToken ='5cc16624e810e7579a1581c1'
	const data = {
		"comment": comment,
		"date": date,
		"wasEdited": true,
		"memberId": memberId,
		"steamAvatarId": avatar,
		"steamNameId": steamName
	}
	console.log('this is data: ',data)
	return {
		type: 'SUBMIT_UPDATED_COMMENT',
		payload: 
            axios({
			method: 'patch',
			url: `api/threads/${threadId}?access_token=${accessToken}`,
			data: data
        })      
		.then(response => {
			console.log('2')
            return response.data
		})
		.catch(err => err)
    }
}

export const updateCommentNum = (id, data, newNum) => {
	console.log('NEWNUM11: ',newNum)
	console.log('testing')
	const accessToken ='5cc16624e810e7579a1581c1'
	let newData = {
		"numComments": newNum
	}
	return {
		type: 'ADD_COMMENT',
		payload: 
            axios({
			method: 'patch',
			url: `api/blogPosts/${id}?access_token=${accessToken}`,
			data: newData
        })     
		.then(response => {
			addComment(data)
            return response.data
		})
		.catch(err => err)
    }
}

export const onCommentChange = (key, value) => {
	return {
		type: 'ON_CHANGE',
		payload: {
			[key]: value
		}
	}
}

export const vote = (id, voteCount, voteNames) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'UP_VOTE',
		payload: axios({
			method: 'get',
			url: `/api/blogPosts/${id}?access_token=${accessToken}`
		})
		.then(response => {
			let data = response.data
			console.log('this should be original data: ',data)
			let updatedData = {
				blogBody: data.blogBody,
				blogTitle: data.blogTitle,
				date: data.date,
				id: data.id,
				memberId: data.memberId,
				numComments: data.numComments,
				steamNameId: data.steamNameId,
				upVotes: +voteCount,
				voteNames: voteNames
			}
			axios({
				method: 'put',
				url: `/api/blogPosts?access_token=${accessToken}`,
				data: updatedData
			})      
			.then(response => {
				return response.data
			})
			.catch(err => err)
		})
		.catch(err => err)
	}
}

export const commentDelete = (deleteId, number, blogId) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	console.log('this is threadId inside action: ', deleteId)
	console.log('this is number in comment delete: ',number)
	console.log('this is blogId in comment delete: ',blogId)
	let newData = {
		"numComments": (+number - 1)
	}
	console.log('newData--: ',newData)
	return {
		type: 'DELETE_COMMENT',
		payload: 
            axios({
				method: 'patch',
				url: `api/blogPosts/${blogId}?access_token=${accessToken}`,
				data: newData
		})
		.then(response => {
			return response.data
		})
		.then(() => {
			return {
				payload:
					axios({
						method: 'delete',
						url: `api/threads/${deleteId}?access_token=${accessToken}`
					})
					.then(response => {
						return response.data
					})
			}
		})
		.catch(err => err)
    }
}



export const topicDelete = (deleteId) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'DELETE_TOPIC',
		payload: 
            axios({
			method: 'delete',
			url: `api/blogPosts/${deleteId}?access_token=${accessToken}`,
        })
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}


export const liveChangeBlogs = (value) => {
	console.log('testing live change blogs action value.data: ', value.data)
	return {
		type: 'LIVE_CHANGE_BLOGS',
		payload: {
			blogs: value.data
		}
	}
}

export const toggleThreadEdit = (value, id, comment) => {
	return {
		type: 'TOGGLE_THREAD_EDIT',
		payload: {
			editingComment: value,
			editingCommentId: id,
			comment: comment
		}
	}
}

export const toggleCloseThreadEdit = (value, id) => {
	console.log('value in toggleThreadEdit: ',value)
	return {
		type: 'TOGGLE_CLOSE_THREAD_EDIT',
		payload: {
			editingComment: value
		}
	}
}

export const reset = () => {
	console.log('inside reset action')
	return {
		type: 'RESET'
	}
}

export const deleteBlogPost = (blogId) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'DELETE_BLOG_POST',
		payload: 
            axios({
			method: 'delete',
			url: `api/blogPosts/${blogId}?access_token=${accessToken}`,
        })
		.then(response => {
            return response.data
		})
		.then(() => {
			axios({
				method: 'delete',
				url: `api/threads/%7B%22blogPostId%22%3A${blogId}%7D?access_token=${accessToken}`
			})
			.then(response => {
				return response.data
			})
		})
		.catch(err => err)
    }
}

export const editBlogPost = (editingBlog, blogId, blogTitle, blogBody) => {
	console.log('editingBlog: ',editingBlog)
	console.log('blogId: ',blogId)
	console.log('blogTitle: ',blogTitle)
	console.log('blogBody: ',blogBody)
		return {
			type: 'TOGGLE_BLOG_EDIT',
			payload: {
				editingBlog: editingBlog,
				editingBlogId: blogId,
				newBlogTitle: blogTitle,
				newBlogBody: blogBody
		}
	}
}

export const submitUpdatedBlog = (date, newBlogBody, newBlogTitle, blogId) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	const data = {
		"blogTitle": newBlogTitle,
		"blogBody": newBlogBody,
		"date": date,
		"wasEdited": true
	}
	console.log('this is data: ',data)
	return {
		type: 'SUBMIT_UPDATED_BLOG',
		payload: 
            axios({
			method: 'patch',
			url: `api/blogPosts/${blogId}?access_token=${accessToken}`,
			data: data
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
// {"order":"upVote ASC"}
// %7B%22order%22%3A%22date%20ASC%22%7D
