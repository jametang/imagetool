
// gm - Copyright Aaron Heckmann <aaron.heckmann+github@gmail.com> (MIT Licensed)

const fs = require('fs');
var gm = require('gm'), dir = __dirname + '/imgs'

//common
/*gm(dir + '/original.png')
  .crop(200, 155, 300, 0)
  .write(dir + "/crop.jpg", function(err){
    if (err) {
    	console.log(err)
    } else {
    	console.log('done');
    } 
  }
)*/ 

//composite
/*gm()
	.command("composite") 
	.in("-gravity", "West")
	.in(dir + '/crop.jpg')
	.crop(50,50,50,50)
	.in(dir + '/photo.JPG')
	.write( dir + 'compositeByMelo2.jpg', function (err) {
  	if (!err) 
    	console.log(' done! ');
  	else
    	console.log(err);
});*/


//mosaic
/*gm()
	.in('-page', '+0+0')
	.in(dir + '/photo.JPG')
	.in('-page', '+50+50') 
	.in(dir + '/crop.jpg')
	.mosaic()
	.write( dir + 'compositeByMelo1.jpg', function (err) {
  	if (!err) 
    	console.log(' done! ');
  	else
    	console.log(err);
});*/

//circle
//没有找到执行成功的的代码片段，使用shell命令代替
var exec = require('child_process').exec;

exec('convert -size 200x200 xc:none -fill imgs/circle.png -draw "circle 100,100 100,1" circle_thumb.png', function (error, stdOut, stdErr) {
    // do what you want!
    if (!error) {
    	console.log ('done man')
    } else {
    	console.log (error)
    }
});
