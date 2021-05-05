



function displayData(arr) {
    let imagesContainer = document.querySelector('#images-container');
    imagesContainer.innerHTML = '';

    for (let i=0; i < arr.length; i++) {
        let image = `
        <div id='image-container'>
            <img src='${arr[i].webformatURL}' onclick="myFunction(event)">
            <div id='user-container'>
               <span id='user-span'>User:</span><a href='${arr[i].pageURL}' target='_blank'>${arr[i].user}</a>
            </div>
        </div>`;

        imagesContainer.innerHTML += image;

    }
}


async function getData(query) {
    let response = await fetch(
        `https://pixabay.com/api/?key=21436194-8448b63b3ea01138555f85e5e&q=${query}`
    )
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

function myFunction(event) { 
    event.target.parentNode.remove();
  }