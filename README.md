# Sublime Theme Starter

A super simple scaffolding for Statamic themes. Includes browserify for modularization of javascripts – and ease of importing vendor scripts – and gulp for automating Sass, Coffee, and watch tasks.


## Using the Starter

1. Download the ZIP
2. In `theme_name/gulpfile.js`, change the value of the `theme` variable to the desired name of your theme.
2. Then, rename the `theme_name` folder to the desired name of your theme.
3. Copy the theme folder into the `site/themes` folder of your Statamic installation.
4. `cd` into the theme directory and `npm install`
5. Run `gulp` to build the theme `js` and `css` file and begin watching for changes.



## Setup

- Gulp
- Browserify
- [Swell](http://github.com/octopuscreative/scss-util)
