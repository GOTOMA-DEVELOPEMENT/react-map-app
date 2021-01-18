import axios from 'axios';

const URL = '/list/get-last-map-object';

export const fetchLastObject = async () => {
    const {data} = await axios.get(URL);

    return data;
};
