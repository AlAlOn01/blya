const app = new Vue({
	el: '#app',
	data: {
		posts: []
	},
	created () {
		fetch('https://legal-consult.online/blya/api/test/')
		.then (response => response.json()) // эй! ту-то response.json() оставь!) ты к ответу распрасивалку json применяешь тут!)
  		.then (json => {
  			this.posts = response.posts;
  		});
	}
})
