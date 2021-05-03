



function displayData(arr) {
    let imagesContainer = document.querySelector('#images-container');
    imagesContainer.innerHTML = '';

    for (let i=0; 1 < arr.length; i++) {
        let imageContainer = `<div id='image-container'>
                        <img src='${arr[i].webformatURL}'>
                   </div>`;

        imagesContainer.innerHTML += imageContainer;
    }
}


async function getData(query) {
    let response = await fetch(
        `https://pixabay.com/api/?key=21436194-8448b63b3ea01138555f85e5e&q=${query}`
    )
    //console.log(response)
    let result = await response.json();

    displayData(result.hits)


}


var search = document.querySelector("input");


search.addEventListener("keydown", function(event) {

  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("button").click();
  }
});

function searchImages() {
    getData(search.value)
}