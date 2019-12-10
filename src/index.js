console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let doglist = document.querySelector("#dog-image-container");
    let breedlist = document.querySelector("#dog-breeds");
    let filter = document.querySelector("#breed-dropdown");

    fetch(imgUrl).then(resp => resp.json()).then(displayDogs);
    fetch(breedUrl).then(resp => resp.json()).then(displayBreeds);

    function displayDogs(json) {

        let dogs = json.message;

        dogs.forEach(doglink => {
            let dogImg = document.createElement('img');
            let br = document.createElement('br');
            dogImg.src = doglink
            doglist.appendChild(dogImg);
            doglist.appendChild(br);
        });
    }

    function displayBreeds(json) {

        for (const breed in json.message) {

            const breedItem = document.createElement('li');
            breedItem.innerText = breed
            breedlist.appendChild(breedItem);

            breedItem.addEventListener('click', function(e){
                const color = e.target.style.color

                if (color === "green") {
                    e.target.style.color = "black";
                }
                else {
                    e.target.style.color = "green";
                }
            })
        }
    }

    function filterDogs() {
        
        const letter = this.value;
        let breedlist = document.querySelector("#dog-breeds");
        const breeds = Array.from(breedlist.children);
        
        breeds.forEach(function(breed){
            
            if (breed.innerText[0] !== letter) {
                breed.style.display = "none";
            }
            else {
                breed.style.display = "";
            }
        });

    }

    filter.oninput = filterDogs;


})
