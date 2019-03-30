const initialstate = {

}
export default function SignUpReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
		case 'UPDATE_NAME': {
			return {
				...state,
				speakerName: payload
			}
		}
	
		default: {
			return state
		}
	}
}
