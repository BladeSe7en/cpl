import { commentCount } from "./ForumTopicsActions";

const initialstate = {
    viewingThread: false,
    blogs        : [],
    threads      : [],
    id           : '',
    number       : 0,
    comment      : '',
    count        : []
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
			console.log('inside GET BLOG reducer')
			return {
				...state,
                threads: payload
			}
        };
        
        case 'GET_COUNT_FULFILLED': {
            // console.log('this is payload: ',payload)
            // let countArray = []//[...state.count]
            // countArray.push(payload.length+1)
			// return {
			// 	...state,
            //    count: countArray
			// }
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
            console.log('inside upvote fullfilled payload: ', payload)
			return {
				...state,
				...payload
			}
        }

        default: {
            return state
          }
    }
}

4
2
2
2
1
3
1
2
2
2
1