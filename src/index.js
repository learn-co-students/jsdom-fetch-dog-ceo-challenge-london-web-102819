console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener('DOMContentLoaded', function () {
    getImages();
    getDogBreeds();
    dogFilter = document.querySelector('#breed-dropdown');
    dogFilter.addEventListener('change', filterDogs);
});

function filterDogs(event) {
    let letter = event.target.value;
    breedList = document.querySelectorAll('li');
    for (let i = 0; i < breedList.length; i++) {
        filterByLetter(letter, breedList[i])
    }
}

function filterByLetter(letter, dogItem) {
    if (dogItem.innerText[0] === letter) {dogItem.style.display = ""}
    else { dogItem.style.display = "none"}
}

function getImages() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json.message.forEach(imageURL => addImageToDOM(imageURL)));
} 

function getDogBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            let message = json.message
            for (const breed in message) {
                addBreedToDOM(breed)
            }
        });
} 

function addImageToDOM(imageURL) {
    let container = document.querySelector('#dog-image-container');
    let dogPic = document.createElement('img');
    dogPic.src = imageURL;
    container.appendChild(dogPic);
}

function addBreedToDOM(breed) {
    let container = document.querySelector('#dog-breeds');
    let dogBreed = document.createElement('li');
    dogBreed.addEventListener('click', changeColour);
    dogBreed.innerText = breed;
    container.appendChild(dogBreed);
}

function changeColour(event) {
    if (event.target.style.color === "" ) {
        event.target.style.color = "green";
    }
    else { event.target.style.color = "" }
}