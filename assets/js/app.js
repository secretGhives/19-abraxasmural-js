(function () {
	console.log('Hello Abraxas');

	// IMAGE PRELOADING
	// const checkImage = path =>
	// 	new Promise(resolve => {
	// 		const img = new Image();
	// 		img.onload = () => resolve({ path, status: 'ok' });
	// 		img.onerror = () => resolve({ path, status: 'error' });

	// 		img.src = path;
	// 		console.log('checkImage ' + path);
	// 	});

	// const loadImg = (...paths) => Promise.all(paths.map(checkImage));
	// loadImg('/assets/images/murals/1.jpg',
	// 	'/assets/images/murals/2.jpg',
	// 	'/assets/images/murals/3.jpg',
	// 	'/assets/images/murals/4.jpg',
	// 	'/assets/images/murals/5.jpg',
	// 	'/assets/images/murals/6.jpg',
	// 	'/assets/images/murals/7.jpg',
	// 	'/assets/images/murals/8.jpg',
	// 	'/assets/images/murals/9.jpg',
	// 	'/assets/images/murals/10.jpg',
	// 	'/assets/images/murals/11.jpg',
	// 	'/assets/images/murals/12.jpg');


	// WINDOW ON-LOAD
	window.addEventListener("load", function () {

		console.log('inside on-load');

		// HERO SLIDER
		const sliderData = [
			{
				img: "/assets/images/murals/1.jpg",
				desc: "(2010) Lady Flowers Parking lot, 40x30"
			},
			{
				img: "/assets/images/murals/2.jpg",
				desc: "(2010) Beezwax storefront, 10x60"
			},
			{
				img: "/assets/images/murals/3.jpg",
				desc: "(2011) Biggie/Tupac memorial, 20x30"
			},
			{
				img: "/assets/images/murals/4.jpg",
				desc: "(2011) Mayan Cobra and Phoenix, 20x40"
			},
			{
				img: "/assets/images/murals/5.jpg",
				desc: "(2012) Fear of the Dead, 20x90"
			},
			{
				img: "/assets/images/murals/6.jpg",
				desc: '(2013) Gummy things, 30x30'
			}
		];

		for (let i = 0; i < sliderData.length; i++) {
			const slider = document.querySelector(".slider");
			const { img, desc } = sliderData[i];
			const slideData = `
				<div class="slide ${i == 0 ? 'visible' : ''}" data-slide="slide-${i}">
					<div class="slide-image">
					<img src="${img}" />
					</div>
					<div class="slide-caption">
						<div class="slide-caption-content">
							<p>${desc}</p>
						</div>
					</div>
				</div>
			`;
			slider.innerHTML += slideData;
		}

		const slides = document.querySelectorAll(".slide");
		let currentSlide = 0;
		const slideInterval = setInterval(() => {
			slides[currentSlide].classList.remove("visible");
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].classList.add("visible");
		}, 5000);


		// BIND LIGHTSENSE
		Lightense('img:not(.no-lightense),.lightense');


	}, false);



})();