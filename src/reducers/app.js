import { fromJS } from 'immutable';

/**
 * Actions
 */
const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

/**
 * Action Creators
 */
export const getUserData = (name) => ({
    type: RECEIVE_USER_DATA,
    payload: name
});

/**
 * Reducer
 */

const initialState = fromJS({
    user: {
        name: 'PIXNET'
    }
});

export default function App(state = initialState, action) {
    switch(action.type) {
    case RECEIVE_USER_DATA:
        return state.setIn(['user', 'name'], action.payload);
    default:
        return state;
    }
}
