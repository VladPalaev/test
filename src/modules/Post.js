class Post {
	constructor(title, img) {
		this.title = title;
		this.img = img;
		this.date = new Date();
	}

	toString() {
		return JSON.stringify({
			title: this.title,
			date: this.date.toJSON(),
			image: this.img,
		}, null, 2)
	}

	getUpperTitle() {
		return this.title.toUpperCase();
	}
}

export {Post}