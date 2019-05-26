import { SHOW_CONTENT, SEARCH_ITEM, SHOW_ITEM } from './types';
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
    console.log(itemSearched);
    // let results = this.props.items.filter(item => item.title.toLowerCase().search(itemSearched) !== -1 );
    dispatch({
        type: SEARCH_ITEM,
        payload: itemSearched
    })
}

// export const showItem = () => dispatch => {
//     // const APIItem = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=m9kpsvofksdglsl494resh4h16&group_id=${this.props.match.params.id}`
//     const APIItem = 'https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=m9kpsvofksdglsl494resh4h16&group_id=780840'
//     request
//     .get(APIItem)
//     .then(response => {
//         // let date = response.body.response.group.common.date;
//         // if(date.length > 10) {
//         //     date = date.slice(6,8)+'/'+date.slice(4,6)+'/'+date.slice(0,4);
//         //     this.setState({ date: date })
//         // } else {
//         //     this.setState({ date: date })
//         // }

//         dispatch({
//             type: SHOW_ITEM,
//             // payload: response.body.response.group.common
//             payload: {
//                 item: response.body.response.group.common,
//                 date: response.body.response.group.common.date,
//                 ranking: response.body.response.group.common.ranking,
//                 media: response.body.response.group.common.extendedcommon.media,
//                 country: response.body.response.group.common.extendedcommon.media.countryoforigin.desc,
//                 language: response.body.response.group.common.extendedcommon.media.language.original.desc,
//                 genres: response.body.response.group.common.extendedcommon.genres.genre,
//                 code: response.body.response.group.common.extendedcommon.media.rating.code
//             }
//         })
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }