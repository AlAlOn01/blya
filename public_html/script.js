const app = new Vue({
	el: '#app',
	data: {
		posts: []
	},
	created () {
		fetch('https://legal-consult.online/blya/api/test/')
		.then(function(response) {
			alert(response.headers.get('Content-Type')); 
			alert(response.status); 
			
			return response.json();
		})
		.then(function(posts) {
			alert(posts);//запилил такой код, выдает TypeError: Failed to fetch
		})
		.catch(alert);
	}
})
