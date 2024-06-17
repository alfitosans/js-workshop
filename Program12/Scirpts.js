// membuat object mobil
var mobil = {
    nama : 'XPander',
    merek : 'Mitsubitsi',
    tipeMobil : 'Mini Jeep',
    tahunDibuat : 2007,
    warna : 'putih',
    majuKencang : function () {
        console.log('Mobil ini melaju dengan kecepatan 300km/h');
    },
    majuPelan : function () {
        console.log('Mobil ini melaju dengan kecepatan 10km/h');
    },
    mundur : function () {
        console.log('Mobil ini melaju kebelakang');
    },
    stop : function () {
        console.log('Mobil ini berhenti');
    },
};
mobil.majuKencang(); 
mobil.majuPelan(); 
mobil.mundur(); 
mobil.stop();