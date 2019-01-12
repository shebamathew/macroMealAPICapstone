'use strict';

function searchNutrient() { 
    fetch(`http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=203&sort=c`)
        .then(response => response.json())
        .then(responseJson => getNutrientInfo(responseJson))
        // .then(responseJson => console.log(responseJson.report.foods[0].name))
        // .then(responseJson => console.log(responseJson.report.foods[0].nutrients[0].gm))
        .catch(error => console.error(error));
}

function searchFood(){
    fetch(`https://api.edamam.com/search?q=turkey&app_id=4d646771&app_key=3eb644f27fc05523aa0687b2a0361dd9`)
        .then(response => response.json())
        // .then(jsonData => console.log(jsonData.hits[3].recipe))
        .then(jsonData => console.log(jsonData.hits[3].recipe.label))
        .catch(error => console.error(error));
        // .then(responseJson => console.log(responseJson.report.foods[0].name))
        // .then(responseJson => console.log(responseJson.report.foods[0].nutrients[0].gm))
}

function getNutrientInfo(responseJson) {
    const nutrientInfo = responseJson.report.foods; 
    const nutrientAmt = responseJson.report.foods[0].nutrients[0].gm; 
    for (let i = 0; i < nutrientInfo.length; i++) {
        if (nutrientAmt == 29.51) {
            console.log(`${nutrientInfo[i].name} : ${nutrientAmt}g per 100g`); 
        }
        else {
            console.log('Not found'); 
        }
    }
}

function getRecipe(jsonData) {
    const recipeName = jsonData.hits[3].recipe.label; 
    const mainIngredient = jsonData.hits[3].recipe.ingredients[0]; 
    console.log(`${recipeName} with ${mainIngredient}`)
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
    //   searchNutrient();
      searchFood(); 
      getRecipe(); 
    });
}

$(function() {
    console.log('Waiting...');
    watchForm();
});