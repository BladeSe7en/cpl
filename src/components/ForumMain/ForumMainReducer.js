const initialstate = {
	newTopic        : '',
    newTopicActive  : false,
	 newTopicBody   : '',
	 signedIn       : {},
	 popularityOrder: true
	

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
			console.log('inside toggle popularity fulfilled')
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
			console.log('inside UPDATE_PLAYER_DATA reducer')
			return {
				...state,
				...payload 
			}
		};

	

		default: {
			return state
		};

	}
}
