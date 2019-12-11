console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogImageContainer = document.querySelector('#dog-image-container')
const dogBreedUl = document.querySelector('#dog-breeds')
const breedDropdown = document.querySelector('#breed-dropdown')

let breedList = [];

document.addEventListener('DOMContentLoaded', function () {
  getImg();
  getBreed();
});

// fetch dog image 
function getImg() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(imgData => imgData.message.forEach(insertImg))
}

function insertImg(data) {
  const imgTag = document.createElement('img');
  imgTag.src = data
  dogImageContainer.appendChild(imgTag)
}

// fetch dog breed
function getBreed() {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(breedData => breedList = Object.keys(breedData.message))
    .then(updateBreedList)
}

function updateBreedList() {
  // remove the existing elements
  dogBreedUl.innerHTML = ""
  // get value of dropdown
  const firstLetter = breedDropdown.value
  // filter the list of breed using the first letter
  const filtered = breedList.filter(breed => breed.startsWith(firstLetter))

  // put all elements in
  // of go through values
  // in go through keys
  for (const breed of filtered) {
    const liTag = document.createElement('li');
    liTag.innerText = breed;
    dogBreedUl.append(liTag);
    liTag.style.cursor = 'grab'
    liTag.addEventListener('click', function (event) {
      event.target.style.color = 'red'
    })
  }
}

breedDropdown.addEventListener('change', updateBreedList)