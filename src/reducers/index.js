import { combineReducers } from 'redux';
import contentReducers from './contentReducers';
import itemReducers from './itemReducers';

export default combineReducers({
    content: contentReducers,
    item: itemReducers
});