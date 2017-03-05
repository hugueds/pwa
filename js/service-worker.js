
/*
caches.open('test').then( cache => {
	cache.matchAll(urls).then( res => {
		//lista de urls
	})
})
*/

self.addEventListener('fetch', loadFromCacheStorage);


function loadFromCacheStorage(){

	console.log('try to load');
	caches.open('teste').then( cache => {
		cache.matchAll(urls).then( res => {
		//lista de urls
		})
	})

}