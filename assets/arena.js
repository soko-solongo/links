let channelSlug = 'clutter-is-design' // The “slug” is just the end of the URL. It's channel title
let myUsername = 'soko-mungunsukh' // For linking to your profile.
let ownerUsername = 'kinza-ghanchi' // For linking to the channel owner's profile.


// First, let’s lay out some *functions*, starting with our basic metadata:
let placeChannelInfo = (channelData) => {
	// Target some elements in your HTML:
	let channelTitle = document.querySelector('#channel-title')
	// let channelDescription = document.querySelector('#channel-description')
	// let channelCount = document.querySelector('#channel-count')
	let channelLink = document.querySelector('#channel-link')

	// Then set their content/attributes to our data:
	channelTitle.innerHTML = channelData.title
	// channelDescription.innerHTML = channelData.description.html
	// channelCount.innerHTML = channelData.counts.blocks
	channelLink.href = `https://www.are.na/channel/${channelSlug}`
}



// Then our big function for specific-block-type rendering:
let renderBlock = (blockData) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.querySelector('#channel-blocks')
    let imageBlocks = document.querySelector('#image-blocks')
    let textBlocks = document.querySelector('#text-blocks')
    let linkBlocks = document.querySelector('#link-blocks')
    let embedBlocks = document.querySelector('#embed-blocks')
    let attachmentBlocks = document.querySelector('#attachment-blocks')

	// NEED TO REVISIT Links!
	if (blockData.type == 'Link') {
		// Declares a “template literal” of the dynamic HTML we want.
		let linkItem =
			`
            <li>
                <div class="link-controller">
                    <p><a href="${ blockData.source.url }">${blockData.title}</a></p>
                </div>
            </li>
			`
        // Always good to check your HTML string before you insert it.
		// And puts it into the page!
		linkBlocks.insertAdjacentHTML('beforeend', linkItem)
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
	}

	// Images!
	else if (blockData.type == 'Image') {
        let imageItem =
        `
        <li>
            <div class="image-controller">
                <img src="${blockData.image.medium.src_2x}" alt="image of clutter">
            </div>
        </li>
        `

        imageBlocks.insertAdjacentHTML('beforeend', imageItem)
		channelBlocks.insertAdjacentHTML('beforeend', imageItem)

	}

	// NEED TO REVISIT Text!
	else if (blockData.type == 'Text') {
		let textItem =
			`
            <li>
                <div class="text-controller">
                    <p>${blockData.content.html}</p>
                </div>
            </li>
			`
		textBlocks.insertAdjacentHTML('beforeend', textItem)
		// channelBlocks.insertAdjacentHTML('beforeend', textItem)
	}

	// NEED TO REVISIT Uploaded (not linked) media…
	else if (blockData.type == 'Attachment') {
		let contentType = blockData.attachment.content_type // Save us some repetition.

		// Uploaded videos!
		if (contentType.includes('video')) {
			// …still up to you, but we’ll give you the `video` element:
			let videoItem =
				`
				<li>
					<div class="video-controller">
						<video controls src="${ blockData.attachment.url }"></video>
					</div>
				</li>
				`

			attachmentBlocks.insertAdjacentHTML('beforeend', videoItem)
			channelBlocks.insertAdjacentHTML('beforeend', videoItem)
		}

		// Uploaded PDFs!
		else if (contentType.includes('pdf')) {
			let pdfItem =
				`
				<li>
					<div class="pdf-controller">
						<iframe src="${ blockData.attachment.url }"></iframe>
					</div>
				</li>
				`
			attachmentBlocks.insertAdjacentHTML('beforeend', pdfItem)
			channelBlocks.insertAdjacentHTML('beforeend', pdfItem)
		}

		// Uploaded audio!
		else if (contentType.includes('audio')) {
			// …still up to you, but here’s an `audio` element:
			// let audioItem =
			// 	`
			// 	<li>
			// 		<p><em>Audio</em></p>
			// 		<audio controls src="${ blockData.attachment.url }"></video>
			// 	</li>
			// 	`

			// channelBlocks.insertAdjacentHTML('beforeend', audioItem)

			// More on`audio`:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
		}
	}

	// Linked (embedded) media…
	else if (blockData.type == 'Embed') {
		let embedType = blockData.embed.type

		// Linked video!
		if (embedType.includes('video')) {
			// …still up to you, but here’s an example `iframe` element:
			let linkedVideoItem =
				`
				<li>
                    <div class="embed-controller">
                        ${ blockData.embed.html }
                    </div>
				</li>
				`
			embedBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
			channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
		}

		// Linked audio!
		else if (embedType.includes('rich')) {

			let linkedAudioItem =
			`
				<li>
					<div class="audio-embed-controller">
						${blockData.embed.html}
					</div>
				</li>
				`
      		embedBlocks.insertAdjacentHTML("beforeend", linkedAudioItem)
			channelBlocks.insertAdjacentHTML('beforeend', linkedAudioItem)
			}
		}
	}



// A function to display the owner/collaborator info:
// !!! NEED TO FIGURE OUT THIS SECTION FOR FOOTER
let renderUser = (userData) => {
	let channelUsers = document.querySelector('#channel-users') // Container.

	let userAddress =
		`
		<address>
			<h3>${ userData.name }</h3>
			<p><a href="https://are.na/${ userData.slug }">Are.na profile ↗</a></p>
		</address>
		`

	channelUsers.insertAdjacentHTML('beforeend', userAddress)
}



// Finally, a helper function to fetch data from the API, then run a callback function with it:
let fetchJson = (url, callback) => {
	fetch(url, { cache: 'no-store' })
		.then((response) => response.json())
		.then((json) => callback(json))
}



// Now that we have said all the things we *can* do, go get the channel data:
fetchJson(`https://api.are.na/v3/channels/${channelSlug}`, (json) => {
	// console.log(json) // Always good to check your response!

	placeChannelInfo(json) // Pass all the data to the first function, above.
	renderUser(json.owner) // Pass just the nested object `.owner`.
})

// Get your info to put with mine:
fetchJson(`https://api.are.na/v3/users/${myUsername}/`, (json) => {
	renderUser(json) // Pass this to the same function, no nesting.
})

// Get your info to put with the owner's:
fetchJson(`https://api.are.na/v3/users/${ownerUsername}/`, (json) => {
	renderUser(json) // Pass this to the same function, no nesting.
})

// And the data for the blocks:
fetchJson(`https://api.are.na/v3/channels/${channelSlug}/contents?per=100&sort=position_desc`, (json) => {
	console.log(json) // See what we get back.

	// Loop through the nested `.data` array (list).
	json.data.forEach((blockData) => {
		// console.log(blockData) // The data for a single block.

		renderBlock(blockData) // Pass the single block’s data to the render function.
	})


// ATTRIBUTION: the following code structure is from T&I 2526 course curriculum: https://typography-interaction-2526.github.io/topic/javascript/#watching-for-scrolling
let rotateClass = 'rotate' // Set up variables again.
let rotateBlocks = document.querySelectorAll('li') // Gets all of them.

// Loop through the list, doing this `forEach` one.
rotateBlocks.forEach((block) => {
	// ATTRIBUTION: the following code is generating random numbers and learned from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	//                   Math.floor(Math.random() * (max - min + 1)) + min
	let randomRotation = Math.floor(Math.random() * (20 - (-20) + 1)) + (-20); // Random rotation between -20 and +20 degrees (including -20, 0, and +20).
	block.style.setProperty('--rotation', `${randomRotation}deg`)

	let sectionObserver = new IntersectionObserver(([entry])=> {
		// When it is intersecting, apply the class; otherwise, remove it.
		if (entry.isIntersecting) {
			block.classList.add(rotateClass)
		} else {
			block.classList.remove(rotateClass)
		}
	}, {
		rootMargin: '-10% 0% -25% 0%', // CSS-ish: top/right/bottom/left.
	})

	sectionObserver.observe(block) // Watch each one!
})

})
