const lugar = require('./lugar/lugar.js');
const climas = require('./climas/climas.js')
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

const getInfo = async (direccion) => {

    try{
        let ciudad = await lugar.getLugarLatLng(direccion);
        let temp = await climas.getClima(ciudad.lat, ciudad.lng);
        console.log(`En la ciudad de ${ciudad.ciudad} la temperatura actual es de ${temp} grados `);
    }catch(e){
        console.log('No se pudo determinar el clima de ', direccion);
    }
    
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
