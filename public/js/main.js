const likeButtons = document.querySelectorAll('button.like-button') // Grab all the like buttons

Array.from(likeButtons).forEach( (btn) => {
  btn.addEventListener('click', addLike) // Add a click event listener to every button
})

async function addLike() {
  const postId = this.dataset.postId // Get post ID
  try {
    const response = await fetch(`/post/likePost/${postId}`, { method: 'put' })  // Simple put request with post ID in the URL
    const data = await response.json() // Parse response to get new likes
    document.querySelector(`span[data-post-id='${postId}']`).innerText = data.likes // Update span with new like count
  } catch (err) {
    console.error(err)
  }
}