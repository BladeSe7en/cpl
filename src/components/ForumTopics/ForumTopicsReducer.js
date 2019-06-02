
const initialstate = {
    viewingThread   : false,
    viewingThreadId : 0,
    blogs           : [],
    threads         : [],
    blogId          : '',
    number          : 0,
    comment         : '',
    count           : [],
    editingComment  : false,
    editingCommentId: ''
    
}

export default function ForumTopicsReducer(state = initialstate, action) {
    const { payload, type } = action;
    switch (type){
        case 'TOGGLE_THREAD_VIEW':{
            return {
                ...state,
               ...payload
            }
        }
        case 'GET_BLOGS_FULFILLED': {
			return {
				...state,
			    blogs: payload
			}
        };
        
        case 'GET_THREADS_BY_ID_FULFILLED': {
			return {
				...state,
                threads: payload
			}
        };
        
        case 'ADD_COMMENT_FULFILLED': {
            console.log('this is payload: ',payload)
            return {
				...state,
                comment: ''
                //blogs: payload
			}
        };

        case 'SORT_POPULARITY_FULFILLED': {
            return {
                ...state,
                blogs: payload
            }
        }

        case 'ON_CHANGE': {
			return {
				...state,
				...payload
			}
        }

        case 'UP_VOTE_FULFILLED': {
			return {
				...state,
				...payload
			}
        }

        case 'DELETE_COMMENT_FULFILLED': {
            console.log('payload1: ',payload)
			return {
				...state,
				...payload
			}
        }

        case 'DELETE_TOPIC_FULFILLED': {
			return {
				...state,
				...payload
			}
        }

        case 'LIVE_CHANGE_BLOGS': {
            let newBlogs = [...state.blogs];
            if (payload.blogs == undefined) {
                newBlogs = [...state.blogs]
            } else {
                let newObj = payload.blogs;
                console.log('this is newObj: ', newObj)
                let index = newBlogs.findIndex(blog => {
                    return blog.id == payload.blogs.id;
                })
                newBlogs.splice(index, 1, {
                    ...newObj
                })
            }
            return {
                ...state,
                blogs: newBlogs
            }
        }

        case 'TOGGLE_THREAD_EDIT': {
            console.log('payload: ',payload)
			return {
				...state,
				...payload
			}
        }

        case 'TOGGLE_CLOSE_THREAD_EDIT': {
            console.log('payload: ',payload)
			return {
				...state,
				...payload
			}
        }

        case 'SUBMIT_UPDATED_COMMENT_FULFILLED': {
            console.log('payload: ',payload)
            return {
                ...state,
                ...payload,
                editingComment: false,
                editingCommentId: '',
                comment: ''
            }
        }

        case 'RESET': {
            console.log('inside reset reducer')
            return {
                ...initialstate
            }
        }
        
        default: {
            return state
          }
    }
}
