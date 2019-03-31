const initialState = {
   
}

export default function NewslettersReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case 'GET_TALK_DATA_FULFILLED': {
            return {
                ...state,
                talkInfo: payload.talkInfo,
                organizers: payload.organizers
            }
        }
   
        default: {
            return state
          }
    }
}
