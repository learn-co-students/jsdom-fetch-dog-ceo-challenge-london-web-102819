console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    console.log("YAY! DOM fully loaded");
    // getDogImage();
    allDogBreeds();


});

function allDogBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
       .then(dogBreeds => dogBreeds.json())
       .then(breed => {
        breeds = Object.keys(breed.message)
        breeds.forEach(breed => listBreed(breed))
    });
};


function listBreed(breed){
    let list = document.querySelector('#dog-breeds')
    let listItem = document.createElement('li')
    listItem.innerText = breed;
    listItem.addEventListener('click', function(){
        listItem.innerHTML =  `<p style="color:red;">${breed}</p>`
    });
    list.appendChild(listItem)
};

function getDogImage(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(dogImages => dogImages.json())
        .then(image => {
           image.message.forEach(image => addImage(image))
    });
} 

    function addImage(url) {
        let container = document.querySelector('#dog-image-container');
        let pic = document.createElement('img');
        pic.src = url;
        container.appendChild(pic)
    }