let amount = 1


const showButtton = document.querySelector('.pae__button_show'),
	hideButton = document.querySelector('.pae__button_hide')
showButtton.addEventListener('click', (e)=>{
	const tl = gsap.timeline({});
	tl.to(".pae__pixel_item", {
		background: "#0ce402",
		duration: .1,
		stagger: {
			amount: amount,
			grid: "auto",
			from: "center",
		},

	}).to(".pae__pixel_item", {
		background: "#e63037",
		duration: .1,
		stagger: {
			amount: amount,
			grid: "auto",
			from: "random",
		},

	}, "<").to(".pae__pixel_item", {
		background: "#f3fd7a",
		duration: .1,
		stagger: {
			amount: amount,
			grid: "auto",
			from: "random",
		},

	}, "<").to(".pae__pixel_item", {
		opacity: 0,
		duration: .1,
		stagger: {
			amount: amount,
			grid: "auto",
			from: "random",
		},

	}, "<") 

})

hideButton.addEventListener('click', (e) => {
	const tl = gsap.timeline({});
	tl.to(".pae__pixel_item", {
		opacity: 1,
		duration: .1,
		stagger: {
			amount: amount,
			grid: "auto",
			from: "random",
		},

	}).to(".pae__pixel_item", {
		background: "#FFF",
		duration: .1,
		stagger: {
			amount: amount,
			grid: "auto",
			from: "random",
		},

	}, "<")
		

})