
// https://api.spoonacular.com/recipes/random

// https://api.spoonacular.com/recipes/random?apiKey=ETCETC&number=10
var SPOON_API="https://api.spoonacular.com/"


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

    $.ajax({
        url: SPOON_API + method,
        data: params,
        type: "GET",
        success: function(body) {
            // var json = $.parseJSON(body);
            console.log(body)
            callback(body)
        },
        error: function(xhr) {
            
        }
    });
}

let searchForm = $('#search')
let searchBox = $('#searchbox') // document.getElementById('searchbox')
let searchButton = $('#searchsubmit')


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
})

/*
$.get(SPOON_API + "recipes/random", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
    
});*/







// ALL CODE ABOVE IS FOR SEARCH FUNCTION






// fetch(“https://emoji-api.com/emojis?access_key=5715a029ed3fd2e22383b01663524c9319a127f7")
// .then(response => response.json())
// .then(data => console.log(data[185].character));

// let imageContainer = document.querySelector("#image-container")
// let imageNewContainer = document.querySelector("#imageNew-container")





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


// function likeCounter() {
//     // This will be a counter to increment the like dislike buttons

//     // need to add event listeners to the buttons
// }























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


