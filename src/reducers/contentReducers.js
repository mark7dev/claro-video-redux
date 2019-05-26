import { SHOW_CONTENT, SEARCH_ITEM, SHOW_ITEM } from '../actions/types';

const initialState = {
    items: [],
    results: [],
    // item: {}
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
                // productos: state.productos.filter(producto => producto.id !== action.payload )
                // let results = this.props.items.filter(item => item.title.toLowerCase().search(itemSearched) !== -1 );
            }
        // case SHOW_ITEM:
        //     return {
        //         ...state,
        //         item: action.payload
        //     }
        default:
            return state;
    }
}