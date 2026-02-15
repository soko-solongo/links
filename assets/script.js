// // ATTRIBUTION: the following code structure is from T&I 2526 course curriculum: https://typography-interaction-2526.github.io/topic/javascript/#watching-for-scrolling


// let highlightClass = 'highlight' // Set up variables again.
// let highlightBlocks = document.querySelectorAll('li') // Gets all of them.

// // Loop through the list, doing this `forEach` one.
// highlightBlocks.forEach((block) => {
// 	let sectionObserver = new IntersectionObserver(([entry])=> {
// 		// When it is intersecting, apply the class; otherwise, remove it.
// 		if (entry.isIntersecting) {
// 			block.classList.add(highlightClass)
// 		} else {
// 			block.classList.remove(highlightClass)
// 		}
// 	}, {
// 		root: null, // This is only needed here in the example `iframe`!
// 		rootMargin: '-25% 0% -25% 0%', // CSS-ish: top/right/bottom/left.
// 	})

// 	sectionObserver.observe(block) // Watch each one!
// })