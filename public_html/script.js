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
		})
	}
})