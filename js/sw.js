let casheName = 'cashe';

self.addEventListener('install',function (even) {
	// body...
	console.log('The service Worker is being installed.');
	even.waitUntil(precache());
});
self.addEventListener('fetch',function(even){
	console.log('The Service Worker is serving the asset.');
	even.respondWith(formCache(even.request));

});
function precache(){
	return caches.open(casheName).then(function(cashe){
		return cashe.addAll ([
			'/',
			'/index.html',
			'/restaurant.html',
			'/css/styles.css',
			'/js/dbhelper.js',
			'/js/main.js',
			'/js/restaurant_info.js'
			]);
	});
}
function formCache(request) {
	// body...
	return caches.open(casheName).then(function (cache) {
		// body...
		return cache.match(request).then(function (matching) {
			return matching || promise.reject('no-match');
			// body...
		});
	});
}