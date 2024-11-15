let amount = 1

const tl = gsap.timeline({});
tl.to(".pae__pixel_item", {
	background: "#0ce402",
	duration: .1,
	delay: 3,
	stagger: {
		amount: amount,
		grid: "auto",
		from: "center",
		// onComplete: function () {
		// 	let df = this.targets()[0]
		// 	gsap.to(df, {
		// 		opacity: 0,
		// 		duration: 1
		// 	})
		// }
		
	},
	
}).to(".pae__pixel_item", {
	background: "#e63037",
	duration: .1,
	stagger: {
		amount: amount,
		grid: "auto",
		from: "random",
		// onComplete: function () {
		// 	let df = this.targets()[0]
		// 	gsap.to(df, {
		// 		opacity: 0,
		// 		duration: 1
		// 	})
		// }

	},

}, "<").to(".pae__pixel_item", {
	background: "#f3fd7a",
	duration: .1,
	stagger: {
		amount: amount,
		grid: "auto",
		from: "random",
		// onComplete: function () {
		// 	let df = this.targets()[0]
		// 	gsap.to(df, {
		// 		opacity: 0,
		// 		duration: 1
		// 	})
		// }

	},

}, "<").to(".pae__pixel_item", {
	opacity:0,
	duration: .1,
	stagger: {
		amount: amount,
		grid: "auto",
		from: "random",
		// onComplete: function () {
		// 	let df = this.targets()[0]
		// 	gsap.to(df, {
		// 		opacity: 0,
		// 		duration: 1
		// 	})
		// }

	},

}, "<") 

