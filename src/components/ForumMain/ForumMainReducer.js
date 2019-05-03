const initialstate = {
	newTopic      : '',
    newTopicActive: false,
	 newTopicBody : '',
	 player       : {}

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
	
		case 'UPDATE_PLAYER_DATA': {
			console.log('inside player data reducer')
			return {
				...state,
				player: payload 
			}
		};

		default: {
			return state
		};

	}
}
