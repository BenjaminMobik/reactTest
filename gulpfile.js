var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    // mix.sass('app.scss')
    mix.styles(['myStyle.css'])
    // mix.styles([
    //   'resources/assets/css/style.css'
    // ], 'public/css/app.css', './');
    mix.scripts([
     'app.js'
    ]);
    mix.browserify('app.js');
    mix.browserSync(
      {
        proxy: 'localhost:8000'
      }
    );
});
