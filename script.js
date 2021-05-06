
let imageSearch = `
<nav>
    <div class='small-header-part-left'>
        <div class='josefin logo-margin'><span style="color: #ea4335; font-size: 24px;">E</span><span style="color: #34A853; font-size: 24px;" >l</span><span style="color: #4285f4; font-size: 24px;">g</span><span style="color: #fbbc05; font-size: 24px;">o</span><span style="color: #ea4335; font-size: 24px;">o</span><span style="color: #4285f4; font-size: 24px;">g</span></div>
    </div>
    <div id="input-container">
        <input placeholder="Search" id='page-input'>
        <button type="submit" onclick='pageSearchImages()' id='page-button'>
            <span class="material-icons icon-size" >
                search
            </span>
        </button>
    </div>
    <div class='small-header-part-right'></div>
</nav>
<div id='behind-header'></div>
<div id='images-container'>

</div>
<script src="script.js"></script>
`

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

function searchImages() {
    getData(search.value)
    console.log(search.value)
}


async function getData(query) {
    let response = await fetch(
        `https://pixabay.com/api/?key=21436194-8448b63b3ea01138555f85e5e&q=${query}`
    )
    let result = await response.json();

    displayData(result.hits)


}


let search = document.querySelector("#home-input");

search.addEventListener("keydown", function(event) {

  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#home-button").click();
  }
});

let pageSearch;

function showImages() {
    let body = document.querySelector('body');
    body.innerHTML = '';
    body.innerHTML = imageSearch;
    getData(search.value)

    pageSearch = document.querySelector("#page-input");

    pageSearch.addEventListener("keydown", function(event) {

    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector("#page-button").click();
    }
  });
   
}

function myFunction(event) { 
    event.target.parentNode.remove();
}

function pageSearchImages() {
    getData(pageSearch.value);
}


