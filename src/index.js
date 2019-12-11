console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener("DOMContentLoaded", function(){
    
    fetchImgs();
    fetchBreeds();
  });

  function fetchImgs(){
    fetch(imgUrl)
    .then(data=>data.json())
    .then(addImgsToDom);
  }

  function appendImgElements(image){
    let div=document.querySelector("#dog-image-container");
    const img=document.createElement('img');
    img.src=image;
    div.appendChild(img);
  }

  function addImgsToDom(images){
    for (let i=0; i<images.message.length; i++){
        appendImgElements(images.message[i]);
    }
  }

  function fetchBreeds(){
    fetch(breedUrl)
    .then(data=>data.json())
    .then(addBreedListToDom);
  }

  function appendBreedsElement(breed){
      let ul=document.querySelector("#dog-breeds");
      const li=document.createElement("li");
      li.innerText=breed;
      ul.appendChild(li);
  }

  function addBreedListToDom(breeds){
    for(const key in breeds.message){
        if (breeds.message[key].length>0){
            for (let i=0; i<breeds.message[key].length; i++){
                appendBreedsElement(breeds.message[key][i]+" " + key );
            }
        } else {
            appendBreedsElement(key);
        }
    }
  }