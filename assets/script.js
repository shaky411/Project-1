var SPOON_API="https://api.spoonacular.com/"

// https://api.spoonacular.com/recipes/random

// https://api.spoonacular.com/recipes/random?apiKey=ETCETC&number=10

$.ajax({
    // url: SPOON_API + "recipes/random",
    // data: { 
    //     "apiKey": SPOON_API_KEY,
    //     "number": 10
    // },
    url: 'assets/fake-api/random-recipies-10.json',
    type: "GET",
    success: function(body) {
        console.log(body)
    },
    error: function(xhr) {

    }
});

/*
$.get(SPOON_API + "recipes/random", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
    
});*/