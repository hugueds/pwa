let version = 3;

var files = ['/','css/style.css','js/script.js'];	

self.addEventListener('install', function(){
	console.log("Installing application");
});

self.addEventListener('activate', function(){
	caches.delete('static-files')
	.then(function(){
		caches.open('static-files').then( cache => {
			cache.addAll(files)
		})
	})
});

self.addEventListener('fetch', loadFromCacheStorage);


function loadFromCacheStorage(event){
	let pedido = event.request;
	let promiseRes = caches.match(pedido).then( resCache => {
		let res = resCache ? resCache : fetch(pedido);
		return res;
	})

	event.respondWith(promiseRes);

	console.log('Loading page...');
}

function refreshCache(){

}