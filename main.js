// Vue JS
const app = new Vue({
	el: '#app',
	data: {
		showMenu: false,
		image5: './images/five.jpg',
		thisImage: true,
		isScrolled: false,
		logo: './images/logo.png'
	},
	methods: {
		imageToggle(event) {
			console.log(event.target);
			if (event.target.classList.contains('swatchOne')) {
				this.image5 = './images/five.jpg';
			} else {
				this.image5 = './images/five-2.jpg';
			}
		},
		scrollEvent() {
			if (window.scrollY > 1) {
				this.isScrolled = true;
			} else if (window.scrollY === 0) {
				this.isScrolled = false;
			}
		},
		openMenu() {
			this.showMenu = !this.showMenu;
			if (this.showMenu) {
				this.logo = './images/newLogo.png';
			} else {
				this.logo = './images/logo.png';
			}
		}
	},
	created() {
		window.addEventListener('scroll', this.scrollEvent);
	}
});
