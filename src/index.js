


function (main ('DOMContentLoaded', (displayRamens, addSubmitListener) => {
  const displayRamens = () => {
    let menu = document.querySelector('#ramen-menu') 
    fetch('http://localhost:3000/ramens/ramen-menu')
    .then(res => res.json())
    .then(data => data.forEach(ramenImg) =>
     )

  }



const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}


const displayRamens = () => {
  let menu = document.querySelector('#ramen-menu') 
  fetch('http://localhost:3000/ramens/ramen-menu')
  .then(res => res.json())
  .then(data => console.log(data))

}


function initialize() {
  displayRamens()
}


const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};


}))