window.addEventListener('DOMContentLoaded', () => {
	// Get all posts with an excerpt
	const jpPostCheck = () => {
		const allPostExcerpts = document.querySelectorAll('.grid-post.has-excerpt .post-excerpt p');
		
		if(allPostExcerpts) {
			allPostExcerpts.forEach((post) => {
				let postString = post.textContent;
				let jpPost = postString.indexOf('。') > -1; // look for this specific Japanese character
				
				if(jpPost) {
					post.textContent = postString.split('。')[0].concat('...'); // apply "..." after the Japanese character, only apply to posts that are Japanese 
				}
			});	
		}
	}
	
	// Call when page is ready
	jpPostCheck();
});