
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
    editingCommentId: '',
    editingBlog     : false,
    editingBlogId   : ''
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
                blogs: payload,
                currentPageBlog: 0
			}
        };
        
        case 'GET_THREADS_BY_ID_FULFILLED': {
			return {
				...state,
                threads: payload
			}
        };
        
        case 'ADD_COMMENT_FULFILLED': {
            return {
				...state,
                comment: ''
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

        case 'TOGGLE_BLOG_EDIT': {
			return {
				...state,
				...payload
			}
        }
        
        case 'LIVE_CHANGE_BLOGS': {
            console.log('state: ',state)
            let newBlogs = [...state.blogs];
            console.log('newBlogs: ',newBlogs)
            console.log('new blogs length: ', newBlogs.length)
            console.log('this is payload: ',payload)
            if (payload.blogs == undefined) {
                newBlogs = [...state.blogs]
            } else {
                let newObj = payload.blogs;
                let index = newBlogs.findIndex(blog => {
                    return blog.id == payload.blogs.id;
                })
                console.log('newObj: ',newObj)
                console.log('index: ',index)
                if (index === -1) {
                    index = newBlogs.length;
                }
                if (newBlogs.length === 10) {
                    return {
                        ...state,
                        blogs: newBlogs
                    }
                }
                    newBlogs.splice(index, 1, {
                        ...newObj
                    })
                    return {
                        ...state,
                        blogs: newBlogs
                }
            }
        }

        case 'TOGGLE_THREAD_EDIT': {
			return {
				...state,
				...payload
			}
        }

        case 'TOGGLE_CLOSE_THREAD_EDIT': {
			return {
				...state,
				...payload
			}
        }

        case 'SUBMIT_UPDATED_COMMENT_FULFILLED': {
            return {
                ...state,
                ...payload,
                editingComment: false,
                editingCommentId: '',
                comment: ''
            }
        }

        case 'SUBMIT_UPDATED_BLOG_FULFILLED': {
            return {
                ...state,
                ...payload,
                editingBlog: false,
                editingBlogId: '',
                newBlogTopic: '',
                newBlogBody: ''
            }
        }

        case 'RESET': {
            return {
                ...initialstate
            }
        }
        
        default: {
            return state
          }
    }
}
