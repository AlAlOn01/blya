const app = new Vue({
	el: '#app',
	data: {
		posts: []
	},
	created () {
		fetch('https://legal-consult.online/blya/api/test/')
		.then (response => response.posts) // эй! ту-то response.json() оставь!) ты к ответу распрасивалку json применяешь тут!)
		.then (json => {
			this.posts = json.posts
		})
	}
})
