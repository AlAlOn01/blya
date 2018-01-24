const app = new Vue({
	el: '#app',
	data: {
		products: []
	},
	created () {
		fetch('https://legal-consult.online/blya/api/test/')
		.then (response => response.json())
		.then (json => {
			this.products = json.products
			// Тут должно быть не json.products, а путь к списку posts в приходящем json, то бишь json.posts
            // Ну и переименуй products в posts наверху, у нас таки посты, а не продукты))
		})
	}
})