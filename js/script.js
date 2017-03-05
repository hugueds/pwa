/*
function onUpdateReady() {
    window.location.reload();
}
window.applicationCache.addEventListener('updateready', onUpdateReady);
if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
  onUpdateReady();
}
*/
const hug = 'https://avatars2.githubusercontent.com/u/19835938?v=3&s=400';
const ana = "https://avatars0.githubusercontent.com/u/10088900?v=3&s=400";

var urls = [hug, ana];




$(document).on('ready', function(e){
	
    $('#title').text('PWA APPLICATION');
    $('#some-text').text("THIS IS MY FIRST PWA!");
    $('button').on('click', function(){
        var link = $('input').val();
	console.log('click');
	console.log(link);
        $('body').append(`<img src=${link} />`);
    });
});


