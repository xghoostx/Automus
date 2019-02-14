module.exports = app => {

    const data = app.moongose.model('Data', {
        hour : Number,
        minute : Number
    });

    const insert = (req, res) =>{
        const time = await Data.create(...req.body);

        data.save()
            .then(() => console.log('Agenda atualizada !'));

        return res.json(time);
    }

    return {Data, insert};
}

