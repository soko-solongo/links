let showAllButton = document.querySelector('#show-all')
let showImagesButton = document.querySelector('#show-images')
let showTextButton = document.querySelector('#show-text')

let channelBlocks = document.querySelector('#channel-blocks')

showAllButton.addEventListener('click', () => {
  channelBlocks.classList.remove('show-images')
  channelBlocks.classList.remove('show-text')
})

showImagesButton.addEventListener('click', () => {
  channelBlocks.classList.add('show-images')
  channelBlocks.classList.remove('show-text')
})

showTextButton.addEventListener('click', () => {
  channelBlocks.classList.remove('show-images')
  channelBlocks.classList.add('show-text')
})