
document.addEventListener('DOMContentLoaded', main)

export {
  main,
  displayRamens,
  handleClick,
  submitListener,
  addImage,
}

// handles the rendering of existing ramen display and display of new ramen 
function main() {
  displayRamens();
  submitListener();
}

const ramenMenu = document.getElementById('ramen-menu')
const detailImage = document.querySelector('.detail-image')
const name = document.querySelector('.name')
const restaurant= document.querySelector('.restaurant')
const rating = document.getElementById('rating-display')
const comment = document.getElementById('comment-display')




// requesting data from server and displaying ramen 
function displayRamens() {
  return fetch ('db.json')
  .then(function(response) {
    return response.json()
  })
  .then(data => {

        data.ramens.forEach((ramen, index) => {
        const img = document.createElement('img') // creating image with source display
        img.src = ramen.image
        img.alt = ramen.name
        img.addEventListener('click', () => handleClick(ramen)) // moves ramen to main image upon click
        ramenMenu.appendChild(img) 
        if(index === 0) {  // sets first image as main image in initial ramen rendering
          handleClick(ramen) 
      }
    })
  })
}

// Linking HTML locational insert to ramen data to handleClick event 

  function handleClick(ramen) {
    detailImage.src = ramen.image
    name.textContent = ramen.name 
    restaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating 
    comment.textContent = ramen.comment
  }

// Targeting & submitting form element values for new-ramen
  function submitListener() {
    const form = document.querySelector('form')
    form.addEventListener('click', (e) => {
      e.preventDefault()
      const newObject = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value, // new element not previously defined
      }
      addImage(newObj) // adds input from addImage function to click + submit 
    })
  }
  
// creates a new image after input from form values and appends it to ramenMenu display
    function addImage(newObj) {
      const img = document.createElement('img')
        img.src = newObj.image 
        img.alt = newObj.name
        img.addEventListener('click', () => handleClick(newObj))
        ramenMenu.appendChild(img)  
    }
