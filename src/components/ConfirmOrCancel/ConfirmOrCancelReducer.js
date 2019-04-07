const initialstate = {
   
}

export default function OrganizersReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'HANDLE_SPEAKER_TOKEN': {
			return {
				...state,
				speakerToken: payload
			}
        }

        default: {
			return state
        }
        
	}
}
