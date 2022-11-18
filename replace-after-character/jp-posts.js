// This JS code is intended for the different category pages 
// https://blog.chainalysis.com/reports/category/crime/

window.addEventListener('DOMContentLoaded', () => {
	// Get all posts with an excerpt
	const jpPostCheck = () => {
		const allPostExcerpts = document.querySelectorAll('.grid-post.has-excerpt .post-excerpt p');
		
		if(allPostExcerpts) {
			allPostExcerpts.forEach((post) => {
				let postString = post.textContent;
				let jpPost = postString.indexOf('。') > -1;
				
				if(jpPost) {
					post.textContent = postString.split('。')[0].concat('...');
				}
			});	
		}
	}
	
	// Watch for new posts loading dynamically, after clicking "load more" button
	const postsParent = document.querySelector('.posts-dynamic .posts-wrap');
	if(postsParent) {
		const observer = new MutationObserver((mutationsList, observer) => {
				for(const mutation of mutationsList) {
						if (mutation.type === 'childList') {
							console.log('A child node has been added or removed.');				
							jpPostCheck();
						}
				}
		});
		
		observer.observe(postsParent, { 
				attributes: false, 
				childList: true, 
				subtree: false 
			}
		);
	}
	
	// Call when page is ready
	jpPostCheck();
});