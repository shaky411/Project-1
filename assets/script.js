
let marcApi = "9576a7ab42504001b624812b6543e457"
let OyeApi = "a932c80d4c7f4ff7a7be1a377cb8fce6"
let robApi = "26f9309b69bd42e1af98887f1581f721"
let marcNewApi = "9f001cee50b5401a8cfee3a040f6f6cc"
let extraApi = "3ae081f84edc442d9668cad9fc23abe2"
let myApi = "0c95ff29cfcf4c4392aaef1efe6610e5"


let searchBox = document.querySelector("#searchbox");
let recipeSearch = [];

let numberOfRecipe = 1;

// This function handles events when the search button is clicked and also generates the specified number of results by pulling data from getAPIData function currently being called from within it

function launchButton() {
    for (let i = 0; i < recipeSearch.length; i++) {
        const recipe = recipeSearch[i];
    }
}



$("#searchsubmit").on("click", function (event) {
    event.preventDefault();

    let aboutCardEl = document.getElementById('about-card');
    aboutCardEl.classList.add("hide");

    if (searchBox.value.trim() !== "") {
        let searchQuery = searchBox.value;
        searchBox.value = "";
        launchButton();
        getApiData(searchQuery);

        console.log(searchQuery);
    };
});


function getApiData(recipeName) {


    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&addRecipeInformation=true&number=${numberOfRecipe}&apiKey=${}`)


        .then(response => response.json())
        .then(data => {

            let recipes = data.results;
            let cardData = document.getElementById('slider');
            let modalData = document.getElementById('modals');
            let html = "";
            let modalHtml = "";
            console.log(recipes);

            for (let i = 0; i < recipes.length; i++) {
                let recipe = recipes[i];

                let title = recipe.title;
                console.log(title);

                let imageURL = recipe.image;
                console.log(imageURL);

                let summary = recipe.summary;
                console.log(summary);

                let source = recipe.spoonacularSourceUrl;
                console.log(source);


                html += `
            <li>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top" id="recipe-image-1">
                            <img src="${imageURL}"
                                alt="" class="wdn-stretch rounded-corners">
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title-2">${title}</h3>
                            <!-- This button launches the modal -->
                            <div class="recipe-button" id="recipe-button-2">
                                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal${i}">
                                    Recipe
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            `

                modalHtml += `
            <div class="modal fade" id="modal${i}" role="dialog" aria-labelledby="exampleModalLongTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" id="modal-header">
                    <h3 class="modal-title" id="exampleModalLongTitle">${title}</h3>
                    <div id="emojiContainer" class="emoji-container">
                        <!-- Emoji from API goes here -->
                    </div>
                </div>
                <div class="modal-body">
                    <div class="modal-top" id="modal-recipe-image-1">
                        <img src="${imageURL}"
                            class="card-img-top modal-image" alt="...">

                    </div>
                    <div class="modal-bottom">
                        <h4 class="recipe">
                            Summary
                        </h4>
                        <p class="recipe-text">
                            ${summary}
                        </p>
                        <a href="${source}"
                            target="_blank">read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>

                <div class="modal-footer">
                    <div class="like-dislike left-buttons">
                        <!-- Like counter will increment by 1 and only allow 1 click per uesr -->
                        <button id="like-counter-${i}" type="button" class="btn btn-success"><i
                                class="fa-solid fa-thumbs-up"></i>Like</button>
                        <!-- Dislike counter will increment by 1 and only allow 1 click per uesr -->
                        <button id="dislike-counter-${i}" type="button" class="btn btn-danger"><i
                                class="fa-solid fa-thumbs-down"></i>Dislike</button>
                        <a><i id="clear-buttons-${i}" class="fa-regular fa-circle-xmark"></i></a>
                    </div>
                    <button type="button" id="clear-button" class="btn btn-light" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
            
            `

            }

            cardData.innerHTML = html
            modalData.innerHTML = modalHtml

            for (let i = 0; i < recipes.length; i++) {
                emojiCode(i);
            }

        });

};

getApiData();



function emojiCode(index) {
    let likeBtn = document.querySelector(`#like-counter-${index}`);
    let clearLikeBtn = document.querySelector(`#clear-buttons-${index}`);
    let clearDislikeBtn = document.querySelector(`#clear-buttons-${index}`);
    let dislikeBtn = document.querySelector(`#dislike-counter-${index}`);

    console.log(likeBtn, index)
    console.log(dislikeBtn, index)

    function likeDislike() {

        let emojiContainer = document.getElementById('emojiContainer');

        fetch("https://emoji-api.com/emojis?access_key=5715a029ed3fd2e22383b01663524c9319a127f7")
            .then(response => response.json())
            .then(function (response) {
                let emojis = response;
                // console.log(emojis)
                let thumbsDownEmoji = (response[186].character)
                let heartEmoji = (response[185].character)

                likeBtn.addEventListener('click', function () {

                    let likeEmoji = document.createElement('h4');
                    likeEmoji.setAttribute('id', 'para-1');

                    likeEmoji.innerHTML = `${heartEmoji}`
                    emojiContainer.append(likeEmoji);
                    dislikeBtn.disabled = true
                    likeBtn.disabled = true

                    clearLikeBtn.addEventListener('click', function () {

                        likeBtn.disabled = false
                        dislikeBtn.disabled = false
                        likeEmoji.remove();

                    })

                });

                dislikeBtn.addEventListener('click', function () {

                    let dislikeEmoji = document.createElement('h4');
                    dislikeEmoji.setAttribute('id', 'para-2');

                    dislikeEmoji.innerHTML = `${thumbsDownEmoji}`
                    emojiContainer.append(dislikeEmoji);
                    likeBtn.disabled = true
                    dislikeBtn.disabled = true

                    clearDislikeBtn.addEventListener('click', function () {

                        likeBtn.disabled = false
                        dislikeBtn.disabled = false
                        dislikeEmoji.remove();

                    })
                });

            });

    };

    likeDislike();
}







// localStorage.setItem(likeEmoji.innerHTML, JSON.stringify())


                // window.localStorage.setItem("likeEmoji", likeEmoji.innerHTML);

                // window.addEventListener('DOMContentLoaded', e => {
                //     localStorage.getItem(likeEmoji);
                // })




// likeBtn.addEventListener('click', function() {
//     likeClicks += 1;
//     document.getElementById('likes').innerHTML = likeClicks;
//     // likeBtn.disabled = true;
// });

// dislikeBtn.addEventListener('click', function() {
//     dislikeClicks += 1;
//     document.getElementById('dislikes').innerHTML = dislikeClicks;
// });




    // let anotherDiv = document.createElement("div");
    // anotherDiv.classList.add('card-display');

    // let newDiv = document.createElement("div");
    // newDiv.classList.add('card-display')

    //   newDiv.innerHTML = `
    // <img src="${foodImage}">
    // <h1>Mushroon Salad</h1>
    // <button>Recipe</Button>
    // `;

    // anotherDiv.innerHTML = `
    // <img src="${foodImageNew}">
    // <h1>Mushroon Salad</h1>
    // <button>Recipe</Button>
    // `;

    // imageContainer.append(newDiv);
    // imageNewContainer.append(anotherDiv);