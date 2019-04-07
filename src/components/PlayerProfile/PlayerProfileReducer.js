const initialstate = {
    profile: []
}

export default function PlayerProfileReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
       
        case 'GET_PROFILE_FULFILLED': {
            console.log('6: ', payload)
            return {
                ...state,
                profileData: payload
            }
        }
        default: {
            return state
        }
    }
}
