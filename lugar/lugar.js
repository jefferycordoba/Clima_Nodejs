const axios = require('axios');
const getLugarLatLng = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {'x-rapidapi-key': '5e20f31f41mshd0f9d7ad37d97e7p109bf3jsndaba6c8c0adf'}
    });

    let resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error (`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const ciudad = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        ciudad,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}