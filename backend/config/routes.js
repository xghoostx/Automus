module.exports = app => {
    app.route('/data')
        .post(app.api.data.insert);
}