import { SHOW_CONTENT, SEARCH_ITEM } from './types';
import request from 'superagent';

export const showContent = () => dispatch => {
    const APIContent = 'https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_so=chrome&device_manufacturer=generic&HKS=m9kpsvofksdglsl494resh4h16&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43864'

    request
    .get(APIContent)
    .then(response => {
        dispatch({
            type: SHOW_CONTENT,
            payload: response.body.response.groups
        })
    })
    .catch( error => {
        console.log(error);
    });
}

export const searchItem = e => dispatch => {
    let itemSearched = e.target.value.toLowerCase();
    dispatch({
        type: SEARCH_ITEM,
        payload: itemSearched
    })
}