import { SHOW_ITEM } from '../actions/types';

const initialState = {
    item: {},
    genres: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ITEM:
            return {
                ...state,
                item: action.payload,
                genres: action.payload.genres
            }
        default:
            return state;
    }
}
