import fetch from '../utils/fetch';

//获取data.json
export const getDatas = async() => {
    return fetch.get('/api/child/data.json', {});
};
