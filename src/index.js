console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener("DOMContentLoaded", function(){
    fetchImgs();
    fetchBreeds();
  });

  function fetchImgs(){
    fetch(imgUrl)
    .then(data => data.json())
    .then(addImgsToDom);
  }

  function appendImgElements(image){
    let div = document.querySelector("#dog-image-container");
    const img = document.createElement('img');
    const br=document.createElement('br');

    img.src = image;
    div.appendChild(img);
    div.appendChild(br);
  }

  function addImgsToDom(images){
    for (let i = 0; i<images.message.length; i++){
        appendImgElements(images.message[i]);
    }
  }

  function fetchBreeds(){
    fetch(breedUrl)
    .then(data => data.json())
    .then(addBreedListToDom);
  }

  let ul = document.querySelector("#dog-breeds");

  function appendBreedsElement(breed){
    const li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
      //addEventListner for click. 
  }

  const sort=document.querySelector("#sort");
  sort.addEventListener("click",function(){
      sortList(ul);
  });



  function sortList(ul){   
    //   debugger       
    let allLi=ul.querySelectorAll("li");

    const allLiArray=[...allLi];
   

    let sortedAA = allLiArray.sort(function(a,b){
        let contentA=a.innerText.toUpperCase();
        let contentB=b.innerText.toUpperCase();
        if (contentA < contentB){
            return -1;
        }
        if (contentA>contentB){
            return 1;
        }
        return 0;
    });
    // console.log(sortedAA.map(el => el.innerText))
    sortedAA.forEach(liEl => {
        debugger
        ul.appendChild(liEl)} )
  
}

  function addBreedListToDom(breeds){
    for(const key in breeds.message){
        if (breeds.message[key].length>0){
            for (let i = 0; i < breeds.message[key].length; i++){
                appendBreedsElement(breeds.message[key][i]+" " + key );
            }
        } else {
            appendBreedsElement(key);
        }
    }
    //alphabetic order in dropdown
  }



