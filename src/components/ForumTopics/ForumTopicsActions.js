import axios from 'axios';

export const thread = (value) => {
	console.log('thread value: ', value)

	return {
		type: 'TOGGLE_THREAD_VIEW',
		payload: {
		viewingThread: value

		}
	}
}
