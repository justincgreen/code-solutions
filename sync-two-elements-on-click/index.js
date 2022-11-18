const allImages = document.querySelectorAll('.image');
const allText = document.querySelectorAll('.text');
const clearActiveText = () => {
	allText.forEach((text) => {
		text.classList.remove('is-active');
	});
}		
const clearActiveImage = () => {
	allImages.forEach((image) => {
		image.classList.remove('is-active');
	});
}		

allText.forEach((text) => {
	text.addEventListener('click', () => {
		const textFirstClass = text.className.split(' ')[0]; // grab the first class on the element - .sync--[index]
		clearActiveText();
		text.classList.add('is-active');
		
		allImages.forEach((image) => {
			// If the ".image" element contains the matching class from textFirstClass, add an active class to it
			// For this to sync properly the ".sync--[index]" class must be the first class on the ".text" and the ".image" elements			
			allImages.forEach((image) => {
				 if(image.classList.contains(textFirstClass)) {
					 clearActiveImage();
					 image.classList.add('is-active');
				 }
			 });	
		});
	});
});