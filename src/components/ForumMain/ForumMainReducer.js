const initialstate = {
	newTopic      : '',
    newTopicActive: false,
     newTopicBody : ''

}
export default function ForumReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
		case 'TOGGLE_ACTIVE': {
			return {
				...state,
				newTopicActive: payload
			}
		}
	
		default: {
			return state
		}
	}
}
