const initialstate = {
    profile: 'no profile'
}

export default function PlayerProfileReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
       
        case 'GET_PROFILE_FULFILLED': {
            let data = [];
            data.push(payload)
            return {
                ...state,
                profileData: data
            }
        }
        default: {
            return state
        }
    }
}
