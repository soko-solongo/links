// ATTRIBUTION: Code in line 3-22 is from Eric's Loom voiceover instruction on creating buttons to filter blocks by type

// let showAllButton = document.querySelector('#show-all')
// let showImagesButton = document.querySelector('#show-images')
// let showTextButton = document.querySelector('#show-text')

// let channelBlocks = document.querySelector('#channel-blocks')

// showAllButton.addEventListener('click', () => {
//   channelBlocks.classList.remove('show-images')
//   channelBlocks.classList.remove('show-text')
// })

// showImagesButton.addEventListener('click', () => {
//   channelBlocks.classList.add('show-images')
//   channelBlocks.classList.remove('show-text')
// })

// showTextButton.addEventListener('click', () => {
//   channelBlocks.classList.remove('show-images')
//   channelBlocks.classList.add('show-text')
// })


// selecting all specific sections depending on type
let sectionAll = document.querySelector('#section-all')
let sectionImage = document.querySelector('#section-image')
let sectionText = document.querySelector('#section-text')
let sectionLink = document.querySelector('#section-link')
let sectionEmbed = document.querySelector('#section-embed')
let sectionAttachment = document.querySelector('#section-attachment') 

// select specific buttons
let showAllButton = document.querySelector('[data-target="section-all"]')
let showImageButton = document.querySelector('[data-target="section-image"]')
let showTextButton = document.querySelector('[data-target="section-text"]')
let showLinkButton = document.querySelector('[data-target="section-link"]')
let showEmbedButton = document.querySelector('[data-target="section-embed"]')
let showAttachmentButton = document.querySelector('[data-target="section-attachment"]')

// defining the click functions
showAllButton.addEventListener('click', () => {
  sectionAll.classList.add('active')
  sectionImage.classList.remove('active')
  sectionText.classList.remove('active')
  sectionLink.classList.remove('active')
  sectionEmbed.classList.remove('active')
  sectionAttachment.classList.remove('active')
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

showImageButton.addEventListener('click', () => {
  sectionAll.classList.remove('active')
  sectionImage.classList.add('active')
  sectionText.classList.remove('active')
  sectionLink.classList.remove('active')
  sectionEmbed.classList.remove('active')
  sectionAttachment.classList.remove('active')
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

showTextButton.addEventListener('click', () => {
  sectionAll.classList.remove('active')
  sectionImage.classList.remove('active')
  sectionText.classList.add('active')
  sectionLink.classList.remove('active')
  sectionEmbed.classList.remove('active')
  sectionAttachment.classList.remove('active')
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

showLinkButton.addEventListener('click', () => {
    sectionAll.classList.remove('active')
    sectionImage.classList.remove('active')
    sectionText.classList.remove('active')
    sectionLink.classList.add('active')
    sectionEmbed.classList.remove('active')
    sectionAttachment.classList.remove('active')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

showEmbedButton.addEventListener('click', () => {
    sectionAll.classList.remove('active')
    sectionImage.classList.remove('active')
    sectionText.classList.remove('active')
    sectionLink.classList.remove('active')
    sectionEmbed.classList.add('active')
    sectionAttachment.classList.remove('active')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

showAttachmentButton.addEventListener('click', () => {
    sectionAll.classList.remove('active')
    sectionImage.classList.remove('active')
    sectionText.classList.remove('active')
    sectionLink.classList.remove('active')
    sectionEmbed.classList.remove('active')
    sectionAttachment.classList.add('active')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })