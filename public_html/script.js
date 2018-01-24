const app = new Vue({
	el: '#app',
	data: {
		posts: []
	},
	created () {
		fetch('https://legal-consult.online/blya/api/test/')
		.then (response => response.posts)
		.then (json => {
			this.posts = json.posts
		})
	}
})
