import { SHOW_ITEM } from '../actions/types';

const initialState = {
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}
