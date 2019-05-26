import { SHOW_ITEM } from './types';
import request from 'superagent';

export const showItem = (id) => dispatch => {
    // const APIItem = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=m9kpsvofksdglsl494resh4h16&group_id=${this.props.match.params.id}`
    const APIItem = 'https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=m9kpsvofksdglsl494resh4h16&group_id='+id;
    request
    .get(APIItem)
    .then(response => {
        
        const changeDate = (date) => {
            if(date.length > 10) {
                date = date.slice(6,8)+'/'+date.slice(4,6)+'/'+date.slice(0,4);
                return date
            } else {
                return date
            }
        }
        
        let date = response.body.response.group.common.date;
            date = changeDate(date);

        dispatch({
            type: SHOW_ITEM,
            // payload: response.body.response.group.common
            payload: {
                // item: response.body.response.group.common,
                // date: response.body.response.group.common.date,
                // ranking: response.body.response.group.common.ranking,
                // media: response.body.response.group.common.extendedcommon.media,
                // country: response.body.response.group.common.extendedcommon.media.countryoforigin.desc,
                // language: response.body.response.group.common.extendedcommon.media.language.original.desc,
                // genres: response.body.response.group.common.extendedcommon.genres.genre,
                // code: response.body.response.group.common.extendedcommon.media.rating.code,

                backgroundImage: response.body.response.group.common.image_background,
                title: response.body.response.group.common.title,
                imageLarge: response.body.response.group.common.image_large,
                imageLargeAlt: response.body.response.group.common.image_large_alt,
                originalTitle: response.body.response.group.common.extendedcommon.media.originaltitle,
                country: response.body.response.group.common.extendedcommon.media.countryoforigin.desc,
                date: date,
                duration: response.body.response.group.common.duration,
                language: response.body.response.group.common.extendedcommon.media.language.original.desc,
                code: response.body.response.group.common.extendedcommon.media.rating.code,
                genres: response.body.response.group.common.extendedcommon.genres.genre,
                largeDescription: response.body.response.group.common.large_description,
                rankingViews: response.body.response.group.common.ranking.views_count,
                rankingVotes: response.body.response.group.common.ranking.votes_count,
                rankingAverage: response.body.response.group.common.ranking.average_votes
            }
        })
    })
    .catch(error => {
        console.log(error);
    })
}