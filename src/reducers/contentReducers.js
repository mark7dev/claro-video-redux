import { SHOW_CONTENT, SEARCH_ITEM } from '../actions/types';

const initialState = {
    items: [],
    results: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_CONTENT:
            return {
                ...state,
                items: action.payload,
                results: action.payload
            }
        case SEARCH_ITEM:
            return {
                ...state,
                results: state.items.filter(result => result.title.toLowerCase().search(action.payload) !== -1)
            }
        default:
            return state;
    }
}