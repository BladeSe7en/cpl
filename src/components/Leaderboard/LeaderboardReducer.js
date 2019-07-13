const initialstate = {
    data         : [],
    highToLow    : true,
    playerProfile: [],
    profile      : {},
    sortBy       : "careerSkill",
    sortOrder    : true,
    typeOfGame   : 'career'
}

export default function LeaderboardReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
        
        case 'CHANGE_GAME_TYPE': {
            return {
                ...state,
                ...payload
            }
        }

        case 'TOGGLE_HIGH_TO_LOW': {
            return {
                ...state,
                highToLow: payload
            }
        }

        case 'TOGGLE_SORT_BY': {
            return {
                ...state,
                ...payload 
            }
        }

        case 'GET_DATA_FULFILLED': {
            return {
                ...state,
                data: payload
            }
        }

        case 'UPDATE_PROFILE_ID': {
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
