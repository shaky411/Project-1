// https://api.spoonacular.com/recipes/random

// https://api.spoonacular.com/recipes/random?apiKey=ETCETC&number=10
// var SPOON_API = "https://api.spoonacular.com/"
// let SPOON_API_KEY = "a932c80d4c7f4ff7a7be1a377cb8fce6"

// "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2"

// /*
// function callApi(method, params, callback) {
//     $.ajax({
//         url: "assets/fake-api/search-pizza.json",
//         data: params,
//         type: "GET",
//         success: function(body) {
//             console.log(body)
//             callback(body)
//         },
//             error: function(xhr) {

//         }
//     });
// }
// */

// function callApi(method, params, callback) {
//     params["apiKey"] = SPOON_API_KEY

//     console.log("calling " + method + " with ", params)

//     $.ajax({
//         url: SPOON_API + method,
//         data: params,
//         type: "GET",
//         success: function (body) {
//             // var json = $.parseJSON(body);
//             console.log(body)
//             callback(body)
//         },
//         error: function (xhr) {

//         }
//     });
// }

// 

// /*
// searchForm.submit(function(e) {
//     // Prevent default action of HTML form
//     e.preventDefault();

//     let searchQuery = searchBox.value
//     if (searchQuery == "") {
//         searchBox.attr("placeholder", "Search is empty!")
//         return
//     }

//     callApi("recipes/complexSearch", {
//         query: searchQuery
//     }, function(response) {
//         console.log(response)
//     })

//     // Prevent default form action
//     return false
// })*/


//     let numberOfRecipes = 2

//     // create HTML string containing the components of the carousel/slider
//     let html = "";
//     callApi("recipes/complexSearch", {
//         query: searchQuery,
//         number: numberOfRecipes
//         // numberOfRecipes incl here
//     }, function (response) {
//         let recipes = response.results;
//         console.log(recipes)

//         // not necessary
//         // let returnedData = [];

//         for (let i = 0; i < recipes.length; i++) {
//             // set recipe to the individual recipe from the 'recipes' variable
//             let recipe = recipes[i];

//             // shorthand variables
//             let title = recipe.title;
//             let imageURL = recipe.image;
//             let id = recipe.id
//             let instructions = response.instructions

//             console.log(instructions)

//             // https://api.spoonacular.com/recipes/

//             // todo: change this to use promises instead
//             // todo: change this 'response' variable so as not to clash with the above, although the items we need have been manually assigned (shorthand variables)
//             callApi("recipes/" + id + "/information", {}, function (response) {
//                 // this summary contains a HTML summary of the recipe

//                 console.log(instructions);

//                 // not necessary
//                 // returnedData.push(response)
//                 html += `<li tabindex="-1" style="">
//                             <div class="uk-card uk-card-default">
//                             <div class="uk-card-media-top" id="recipe-image-${i}">
//                                 <img src="${imageURL}" alt="${title}">
//                             </div>
//                             <div class="uk-card-body">
//                                 <h3 class="uk-card-title-${i}">${title}</h3>

//                                 <!-- This button launches the modal -->
//                                 <div class="recipe-button" id="recipe-button-${i}">
//                                 <a class="uk-button uk-button-default" href="#modal-overflow" uk-toggle>Recipe</a>
//                                 </div>
//                             </div>
//                             </div>
//                         </li>

//                         <div id="modal-overflow" uk-modal>
//                         <div class="uk-modal-dialog">

//                             <button class="uk-modal-close-default" type="button" uk-close></button>

//                             <div class="uk-modal-header">
//                                 <h2 class="uk-modal-title">${title}</h2>
//                             </div>

//                             <div class="uk-modal-body" uk-overflow-auto>

//                             <img src="${imageURL}" alt="${title}">

//                                 <p>${instructions}</p>

//                             </div>

//                             <div class="uk-modal-footer uk-text-right">
//                                 <div class="uk-modal-buttons">
//                                     <div class="like-buttons">
//                                         <button class="like">Like</button>
//                                         <button class="dislike">Dislike</button>
//                                     </div>
//                                     <button class="uk-button uk-button-default uk-modal-close"
//                                         type="button">Close</button>
//                                 </div>


//                             </div>

//                         </div>
//                     </div>



//                         `
//                 console.log(id, instructions)

//                 --numberOfRecipes;
//                 console.log(id, "Calls remaining", numberOfRecipes)
//                 if (numberOfRecipes <= 0) {
//                     $('#slider').html(html)
//                     console.log("DONE! setting slider html")
//                 }
//             })
//         }

//     })

//     // Prevent default form action
//     return false
// })


/*
$.get(SPOON_API + "recipes/random", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
    
});*/

// let searchForm = $('#search')
// let searchBox = $('#searchbox') // document.getElementById('searchbox')
// let searchButton = $('#searchsubmit')

// searchForm.submit(function (event) {
//     // Prevent default action of HTML form
//     event.preventDefault();

//     // get the value of searchBox and store in searchQuery
//     let searchQuery = searchBox.val()
//     // if the search query is empty, we don't want to fire off API requests
//     if (searchQuery == "") {
//         searchBox.attr("placeholder", "Search is empty!")
//         return
//     }
// });