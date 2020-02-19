const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

var path = require('path');
var PreenderSpaPlugin = require('prerender-spa-plugin');
module.exports = {
    //...
    plugins: [
        new PreenderSpaPlugin(
            // Absolute path to complied SPA
            path.join(__dirname, '.'),
            //list of routes to prerender
            ['/', '/home', '/about', '/portfolio', '/resume', 'contact']
        )
    ]
};
