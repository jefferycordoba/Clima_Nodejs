const axios = require('axios');

const getClima = async (lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f7b24d9dda62f3c19c87821c98315a8a&units=metric`);

    if(resp.data.leght === 0){
        throw new Error (`No existe una temperatura para esa latitud=${lat} y longitud=${lng}`);
    }

    return resp.data.main.temp;

};

module.exports = {
    getClima
};