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
let sectionImages = document.querySelector('#section-images')
let sectionTexts = document.querySelector('#section-texts')
let sectionLinks = document.querySelector('#section-links')

// select specific buttons
let showAllButton = document.querySelector('[data-target="section-all"]')
let showImagesButton = document.querySelector('[data-target="section-images"]')
let showTextButton = document.querySelector('[data-target="section-texts"]')
let showLinksButton = document.querySelector('[data-target="section-links"]')

// defining the click functions
showAllButton.addEventListener('click', () => {
  sectionAll.classList.add('active')
  sectionImages.classList.remove('active')
  sectionTexts.classList.remove('active')
  sectionLinks.classList.remove('active')
//   window.scrollTo({ top: 0, behavior: 'smooth' })
})

showImagesButton.addEventListener('click', () => {
  sectionAll.classList.remove('active')
  sectionImages.classList.add('active')
  sectionTexts.classList.remove('active')
  sectionLinks.classList.remove('active')
//   window.scrollTo({ top: 0, behavior: 'smooth' })
})

showTextButton.addEventListener('click', () => {
  sectionAll.classList.remove('active')
  sectionImages.classList.remove('active')
  sectionTexts.classList.add('active')
  sectionLinks.classList.remove('active')
//   window.scrollTo({ top: 0, behavior: 'smooth' })
})

showLinksButton.addEventListener('click', () => {
    sectionAll.classList.remove('active')
    sectionImages.classList.remove('active')
    sectionTexts.classList.remove('active')
    sectionLinks.classList.add('active')
    // window.scrollTo({ top: 0, behavior: 'smooth' })
  })