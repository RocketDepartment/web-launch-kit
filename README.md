##Rocket Dept. Web Starter

This is the Rocket Department, Inc. starting project for all websites and web apps.

###Features
####Development
 - Compiles SASS stylesheets with node-sass
 - Includes reset.css, [Bourbon][1], [Neat][2]
 - Browserify for javascript files, Reactify and Browserify transforms included
 - Minifies images
 - Uses BrowserSync to live reload and sync browser actions between windows
 - Basic Express server, functions as static file server

####Production
 - CSS: Autoprefixes, combines media queries and minifies
 - JS: Minifies
 - Page Speed Insights
 
####In Progress
 - SVG Webfont generator for icons

<br/>
###Installation
[NodeJS][3] is required to run this project

####Gulp
    npm install gulp -g
####Browserify
    npm install browserify -g
####Install dev dependencies
    npm install
<br>
###Commands
####Development
Site will be available at http://localhost:3000

    gulp
####Production
    gulp minify


  [1]: http://bourbon.io
  [2]: http://neat.bourbon.io
  [3]: http://nodejs.org