/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. See https://github.com/JeffreyWay/laravel-mix.
 |
 */
// const proxy = 'http://jonard.docksal';
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Configuration
 |--------------------------------------------------------------------------
 */
// mix
//     .setPublicPath('assets')
//     .disableNotifications()
//     .options({
//         processCssUrls: false
//     });

/*
 |--------------------------------------------------------------------------
 | VENDOR
 |--------------------------------------------------------------------------
 */
mix.copy('node_modules/bootstrap/dist/js/bootstrap.js', 'src/js/bootstrap.js');
mix.copy('node_modules/clipboard/dist/clipboard.min.js', 'assets/js/clipboard.min.js');


/*
 |--------------------------------------------------------------------------
 | SASS
 |--------------------------------------------------------------------------
 */
mix.sass('src/sass/jonard.style.scss', 'css').sourceMaps()
    .sass('src/sass/extra.admin.scss', 'css').sourceMaps()
    .sass('src/sass/wysiwyg.scss', 'css').sourceMaps()
    .sass('src/sass/rd-navbar/rd-navbar.scss', 'css').sourceMaps()
    .sass('src/sass/swiper/swiper.style.scss', 'css').sourceMaps()
    .sass('src/sass/netsuite.style.scss', 'css').sourceMaps();

/*
 |--------------------------------------------------------------------------
 | JS
 |--------------------------------------------------------------------------
 */
mix.js('src/js/jonard.script.js', 'js').sourceMaps();
mix.js('src/js/jquery.rd-navbar.js', 'js').sourceMaps();
mix.js('src/js/jonard.news-events.tabs.js', 'js').sourceMaps();
mix.js('src/js/jonard.documents.js', 'js').sourceMaps();