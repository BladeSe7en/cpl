import axios from 'axios';

export const toggleActive = (value) => {
	console.log('toggle active value: ', value)
	
	return {
		type: 'TOGGLE_ACTIVE',
		payload: {
			newTopicActive: value
			
		}
	}
}