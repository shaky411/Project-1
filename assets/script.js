
// https://api.spoonacular.com/recipes/random

// https://api.spoonacular.com/recipes/random?apiKey=ETCETC&number=10
var SPOON_API = "https://api.spoonacular.com/"

/*
function callApi(method, params, callback) {
    $.ajax({
        url: "assets/fake-api/search-pizza.json",
        data: params,
        type: "GET",
        success: function(body) {
            console.log(body)
            callback(body)
        },
            error: function(xhr) {
    
        }
    });
}
*/

function callApi(method, params, callback) {
    params["apiKey"] = SPOON_API_KEY

    console.log("calling " + method + " with ", params)

    $.ajax({
        url: SPOON_API + method,
        data: params,
        type: "GET",
        success: function (body) {
            // var json = $.parseJSON(body);
            console.log(body)
            callback(body)
        },
        error: function (xhr) {

        }
    });
}

let searchForm = $('#search')
let searchBox = $('#searchbox') // document.getElementById('searchbox')
let searchButton = $('#searchsubmit')

/*
searchForm.submit(function(e) {
    // Prevent default action of HTML form
    e.preventDefault();

    let searchQuery = searchBox.value
    if (searchQuery == "") {
        searchBox.attr("placeholder", "Search is empty!")
        return
    }
    
    callApi("recipes/complexSearch", {
        query: searchQuery
    }, function(response) {
        console.log(response)
    })
    
    // Prevent default form action
    return false
})*/

searchForm.submit(function (e) {
    // Prevent default action of HTML form
    e.preventDefault();

    // get the value of searchBox and store in searchQuery
    let searchQuery = searchBox.val()
    // if the search query is empty, we don't want to fire off API requests
    if (searchQuery == "") {
        searchBox.attr("placeholder", "Search is empty!")
        return
    }

    let numberOfRecipes = 10

    // create HTML string containing the components of the carousel/slider
    let html = "";
    callApi("recipes/complexSearch", {
        query: searchQuery
        // numberOfRecipes incl here
    }, function (response) {
        let recipes = response.results;
        console.log(recipes)

        // not necessary
        // let returnedData = [];

        for (let i = 0; i < recipes.length; i++) {
            // set recipe to the individual recipe from the 'recipes' variable
            let recipe = recipes[i];

            // shorthand variables
            let title = recipe.title;
            let imageURL = recipe.image;
            let id = recipe.id

            // https://api.spoonacular.com/recipes/

            // todo: change this to use promises instead
            // todo: change this 'response' variable so as not to clash with the above, although the items we need have been manually assigned (shorthand variables)
            callApi("recipes/" + id + "/information", {}, function (response) {
                // this summary contains a HTML summary of the recipe
                let summary = response.summary

                // not necessary
                // returnedData.push(response)
                html += `<li tabindex="-1" style="">
                            <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top" id="recipe-image-${i}">
                                <img src="${imageURL}" width="1800" height="1200" alt="${title}">
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title-${i}">${title}</h3>
                                ${summary}
                                <!-- This button launches the modal -->
                                <div class="recipe-button" id="recipe-button-${i}">
                                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalLong">
                                    Recipe
                                </button>
                                </div>
                            </div>
                            </div>
                        </li>`
                console.log(id, summary)

                --numberOfRecipes;
                console.log(id, "Calls remaining", numberOfRecipes)
                if (numberOfRecipes <= 0) {
                    $('#slider').html(html)
                    console.log("DONE! setting slider html")
                }
            })
        }

    })

    // Prevent default form action
    return false
})


/*
$.get(SPOON_API + "recipes/random", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
    
});*/







// ALL CODE ABOVE IS FOR SEARCH FUNCTION




// let cardOneTitle = document.querySelector('.card-title-one');

// let queryURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=9576a7ab42504001b624812b6543e457"


// function getApi() {

//     fetch(queryURL)
//         .then(response => response.json())
//         .then(function (response) {
//             let results = response;

//             // stores results in local storage
//             localStorage.setItem('results', JSON.stringify(results));

//             // gets results from local storage and prints to the console
//             // console.log(localStorage.getItem('results'));

//             console.log(results.results[0].image);
//             let foodImageNew = results.results[1].image
//             let foodTitle = results.results[0].title

//     console.log(results.results)

//     let modalTitle = document.getElementById('exampleModalLongTitle');
//     let titleOne = document.createElement('h5');

//     modalTitle.innerHTML = `
//     <h3>${foodTitle}</h3>
//     `

//     titleOne.innerHTML = `
//     ${foodTitle}
// `


//     cardOneTitle.append(titleOne);

// })
// };

// getApi();



// Like/Dislike click counter
// still todo:
// prevent more than 1 click
// if like clicked, disable dislike and vice versa
// save to local storage
// connect emoji api


// if(!already) {
//     document.getElementById("num").innerHTML = x+=1;
//     already = true;
// }

// function cnt () {
//     if (!JSON.parse(localStorage.getItem('hasClicked'))) {
//         document.getElementById("num").innerHTML = x+=1;
//         localStorage.setItem('hasClicked', true);
//     }
//  }

// <div id="counter">
//     <h2> support counter </h2>
//     <div onclick="cnt()">
//          <span id="num">Click here to show support</span>
//     </div>
// </div>

// let likeClicks = 0;
// let dislikeClicks = 0;
// let likeClicked = false
// let dislikeClicked = false;



// THIS CODE IS FOR THE LIKE/DISLIKE EMOJI

let likeBtn = document.querySelector("#like-counter");
let dislikeBtn = document.querySelector('#dislike-counter');

function likeDislike() {

    let emojiContainer = document.getElementById('emojiContainer');

    fetch("https://emoji-api.com/emojis?access_key=5715a029ed3fd2e22383b01663524c9319a127f7")
            .then(response => response.json())
            .then(function (response) {
                let emojis = response;

                console.log(emojis)

                let thumbsDownEmoji = (response[186].character)
                let heartEmoji = (response[185].character)

                console.log(thumbsDownEmoji)
                console.log(heartEmoji)


    likeBtn.addEventListener('click', function () {

                let likeEmoji = document.createElement('h4');
                likeEmoji.innerHTML = `${heartEmoji}`

                emojiContainer.append(likeEmoji);

            });

            dislikeBtn.addEventListener('click', function () {
                
                let dislikeEmoji = document.createElement('h4');
                dislikeEmoji.innerHTML = `${thumbsDownEmoji}`

                emojiContainer.append(dislikeEmoji);

            });
    });

    // if (likeClicks = 1) {
    //     dislikeBtn.disabled = true;
    // }

};


likeDislike();
getEmoji();










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