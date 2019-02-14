const schedule = require('node-schedule');

module.exports = app => {

        // Analyzes whether the event time is the same as the current time 
        const shedule = require('node-schedule');

        // Check the current time whenever it is 3 seconds
        const timer = shedule.scheduleJob('3 * * * * *', () => {
            
            const date = new Date();
            let hours, hoursNow, minutes, minutesNow;
            hoursNow = date.getHours();
            minutesNow = date.getMinutes()
            hours = '21';
            minutes = '20';

            if (hours == hoursNow && minutes == minutesNow ?
                console.log('acertou a hora') : console.log('hora errada'));

        });

}