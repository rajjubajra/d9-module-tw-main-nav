<<<<<<< HEAD
const { src, dest, series } = require('gulp');
=======
const {src, dest, watch, series} = require('gulp');
>>>>>>> 3d93ce6a415a7691cb40837b3846b4e2ae121441

/**
 * 
 * Move Files and Folder from 
<<<<<<< HEAD
 * 'build' folder to ..simpliwebdesign deployment folder
=======
 * 'build' folder to 
 * ../tw2-*
 * 
>>>>>>> 3d93ce6a415a7691cb40837b3846b4e2ae121441
 */

/** IMPORTANT: 
 * Change working project Folder 
<<<<<<< HEAD
 * in following "src"  */


/** Simpliwebdesign - DEVELOPMENT SITE */
function moveFilesToDevelopment() {
  return src(['./r18tw3_swd_01/build/**/*.*','./r18tw3_swd_01/build/.htaccess','./r18tw3_swd_01/build/.htaccess.bak'])
    .pipe(dest('../simpliwebdesign.com/dev'))
}

/** Simpliwebdesign - MAKE COPY DEV TO PRODUCTION excluding some file/folder */
function copyFilesDevToPrd() {
  return src(['./r18tw3_swd_01_dev/**/*.*',
              '!./r18tw3_swd_01_dev/src/redux/config.js',
              '!./r18tw3_swd_01_dev/src/layout/**/*.*',
              '!./r18tw3_swd_01_dev/public/**/*.*',
              '!./r18tw3_swd_01_dev/build/**/*.*'])
    .pipe(dest('./r18tw3_swd_01_live'))
}



/** Simpliwebdesign - PRODUCTION SITE */
function moveFilesToProduction() {
  return src(['./r18tw3_swd_01/build/**/*.*','./r18tw3_swd_01/build/.htaccess','./r18tw3_swd_01/build/.htaccess.bak'])
    .pipe(dest('../simpliwebdesign.com'))
}




/** accounts DEVELOPEMNT SITE */
function moveFilesToAccountsDevelopment() {
  return src(['./react-apps/r18tw3d9_accounts_dev/build/**/*.*','./react-apps/r18tw3d9_accounts_dev/build/.htaccess','.react-apps/r18tw3d9_accounts_dev/build/.htaccess.bak'])
    .pipe(dest('../simpliwebdesign.com/dev/accounts'))
}

/** accounts PRODUCTON SITE */
function moveFilesToAccountsProduction() {
  return src(['./react-apps/r18tw3d9_accounts_prd/build/**/*.*','./react-apps/r18tw3d9_accounts_prd/build/.htaccess','./react-apps/r18tw3d9_accounts_prd/build/.htaccess.bak'])
    .pipe(dest('../simpliwebdesign.com/accounts'))
}



/** Demo Website - SITE */
function moveFilesToDemoWebsite() {
  return src(['./demo-website/build/**/*.*','./demo-website/build/.htaccess','./demo-website/build/.htaccess.bak'])
    .pipe(dest('../simpliwebdesign.com/demo-website'))
}




// function watchTask() {
//   watch('./r18tw3_yw_01/build/**/*.*');
// }

//default gulp
//exports.default = series(copyFilesDevToPrd);
exports.default = series(moveFilesToProduction);
//exports.default = series(moveFilesToDevelopment);
//exports.default = series(moveFilesToAccountsDevelopment);
//exports.default = series(moveFilesToAccountsProduction);
//exports.default = series(moveFilesToDemoWebsite);
=======
 * in following "src" and "watch" */



function moveThemeToProduction(){
  return src('./tw3r18/theme_002/build/**/*.*')
  .pipe(dest('../yellow-website.com/tw3r18/theme-002'))
}

function moveUiComponentsToProduction(){
  return src(['./tw3r18_ui_library/build/**/*.*','./tw3r18_ui_library/build/.htaccess'])
  .pipe(dest('../yellow-website.com/tw3r18_ui_library'))
}


//default gulp
//exports.default = series(moveThemeToProduction);
exports.default = series(moveUiComponentsToProduction);
>>>>>>> 3d93ce6a415a7691cb40837b3846b4e2ae121441
