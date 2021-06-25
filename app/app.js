(function () {
    'use strict';

    // load configuration
    const environment = process.env.NODE_ENV || 'development';
    const configuration = require(`./src/config/config.${environment}.json`);
    const port = process.env.PORT || configuration.api.port;

    // load modules
    const express = require('express');
    const path = require('path');
    const homePageRoutes = require('./src/routes/home.route');
    const NotFoundPageError = require('./src/errors/notFoundPageError');

    // initialize express application
    const app = express();

    // application body json and url encode
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    // application template engine and views folders position
    app.set("view engine", "pug");
    app.set("views", path.join(__dirname, './src/public/views'));

    // application static folder
    app.use(express.static(path.join(__dirname, './src/public')));

    // application's routes
    app.use('/app', homePageRoutes);
    // application handle wrong routes
    app.all('*', (req, res) => {
        throw new NotFoundPageError('Invalid Page');
    })
    // application handle wrong routes plus Error handler
    app.use((err, req, res, next) => {
        if (err instanceof NotFoundPageError) {
            res.render('notFound');
        } else {
            // only display full error details into development environment
            let error = (environment === 'development') ? err : 'Error Happened';
            res.render('error', {error: error});
        }
    });

    // make server run on chosen host and port
    app.listen(
        port,
        configuration.app.host,
        _ => console.log(`Running Node APP on http://${configuration.app.host}:${port}`)
    );
})();