const { src, dest, watch, series } = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

/** IMPORTANT: 
 * Change working project Folder 
 * in following "src" and "watch" */



function moveFiles() {
  return src('./r18tw3Review-01/build/**/*.*')
    .pipe(dest('./r18tw3Review-01'))
}

function moveToGithubPages() {
  return src('./r18tw3Review-01/build/**/*.*')
    .pipe(dest('../github-pages/r18tw3Review-01'))
}

// function watchTask() {
//   watch('./tw3r18_profile_11/build/**/*.*');
// }

//default gulp
exports.default = series(moveFiles, moveToGithubPages);