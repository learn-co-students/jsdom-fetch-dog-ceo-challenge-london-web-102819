console.log("%c HI", "color: firebrick");

let breeds = [];
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
// const div = document.querySelector("#dog-image-container");

document.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  fetchdogs();
  fetchBreeds();
}

// fetch dog images
function fetchdogs() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => getData(data));
}

function getData(data) {
  renderAllImages(data.message);
}

function appendImage(imageUrl) {
  const div = document.querySelector("#dog-image-container");

  const imgTag = document.createElement("img");
  imgTag.src = imageUrl;

  div.append(imgTag);
}

function renderAllImages(imagesArrays) {
  imagesArrays.map(function(img) {
    appendImage(img);
  });
}

//fetch dog breeds
function fetchBreeds() {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
      getBreeds(data);
      addBreedSelectListener();
    });
}

function getBreeds(data) {
  getAllBreeds(data.message);
}

function createBreedLi(breed) {
  const ul = document.querySelector("#dog-breeds");
  const li = document.createElement("li");
  li.innerText = breed;
  li.style.cursor = "grab";
  li.addEventListener("click", function() {
    li.style.color = "#ff0000";
  });
  ul.append(li);
}

function getAllBreeds(breedArray) {
  for (const breed in breedArray) {
    createBreedLi(breed);
    breeds.push(breed);
  }
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector("#breed-dropdown");
  breedDropdown.addEventListener("change", function(event) {
    filterBreeds(event.target.value);
    // console.log("WORKING!");
  });
}

function filterBreeds(letter) {
  let lis = document.getElementsByTagName("li");
  // debugger;
  for (const li of lis) {
    if (li.textContent.startsWith(letter) == false) {
      li.style.display = "none";
    } else {
      li.style.display = "";
    }
  }
}
