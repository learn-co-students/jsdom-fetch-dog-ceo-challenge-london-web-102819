console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function () {
    addImage();
    addBreed();

});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const li = document.createElement('li');

//dogs img /////////////////
//CHALLENGE 1////
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(data => data.json())
    .then(dataMessage)
// we are getting array of images


function dataMessage(data) {
    for (let i = 0; i < data.message.length; i++) {
        addImage(data.message[i]);
    }
}

function addImage(dogPicURL) {
    const dogsUrL = document.querySelector('#dog-image-container');
    const imgTag = document.createElement("img");
    imgTag.src = dogPicURL
    dogsUrL.appendChild(imgTag);
}

//dogs breed //////////
//CHALLENGE 2//////

fetch(breedUrl)
    .then(data => data.json())
    .then(data => {
        breedsData(data);
        addingEventListener();

    });

function breedsData(data) {
    for (const key in data.message) {
        addBreed(key);
    }
}

function addBreed(breed) {
    const breedUL = document.querySelector('#dog-breeds')
    const li = document.createElement('li');
    li.append(breed);
    // CHALLENGE 3    CHANGE COLOR OF <li>/////////
    li.addEventListener("click", function () {
        li.style.color = "blue"
    })
    breedUL.append(li);


}



//drop down
function addingEventListener() {
    const activities = document.getElementById("breed-dropdown");
    activities.addEventListener("change", function (e) {
        filterBreeds(e.target.value);
    });
}

function filterBreeds(value) {
    const lis = document.getElementsByTagName("li");
    for (const li of lis) {
        if (li.textContent.startsWith(value) == false) {
            li.style.display = "none";
        }
        else {
            li.style.display = "";
        }
    }
}


