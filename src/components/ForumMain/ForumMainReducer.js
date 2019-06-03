const initialstate = {
	newTopic        : '',
    newTopicActive  : false,
	 newTopicBody   : '',
	 signedIn       : {},
	 popularityOrder: true,
	 newPostToggle  : true,
	 dateOrder      : true
}
export default function ForumReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
		case 'TOGGLE_ACTIVE': {
			return {
				...state,
				...payload
			}
		};

		case 'TOGGLE_POPULARITY': {
			return {
				...state,
				...payload
			}
		};

		case 'TOGGLE_SORT_ORDER_FULFILLED': {
			return {
				...state,
				...payload
			}
		};
	
		case 'UPDATE_PLAYER_DATA': {
			return {
				...state,
				...payload 
			}
		};

		case 'GET_BLOGS_BY_DATE_FULFILLED': {
			return {
				...state,
				blogs: payload
			}
		};

		case 'DATE_ORDER': {
			return {
				...state,
				...payload
			}
		};

		 case 'ON_CHANGE': {
			return {
				...state,
				...payload
			}
		}
		
		case 'TOPIC_SUBMIT_FULFILLED': {
			return {
				...state,
				newTopic: '',
				newTopicBody: '',
				newTopicActive: false
			}
		}
	
		default: {
			return state
		};

	}
}
