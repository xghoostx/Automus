const mongoose = require('mongoose');


mongoose.connect('mongodb://admin:admin123@ds135305.mlab.com:35305/automus',
    {
        useNewUrlParser: true
    }).catch(e => {
        const msg = 'Não foi possível conectar com o MongoDB !';
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
    });