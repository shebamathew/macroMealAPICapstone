'use strict';


function searchNutrient() { 
    fetch(`http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=203&sort=c&fg=5&max=5`)
        .then(response => response.json())
        .then(responseJson => getNutrientInfo(responseJson))
        // .then(responseJson => console.log(responseJson.report.foods[0].name))
        // .then(responseJson => console.log(responseJson.report.foods[0].nutrients[0].gm))
        .catch(error => console.error(error));
}

// const nutrientSearchResult = {
//     "report": {
//       "sr": "1",
//       "groups": "All groups",
//       "subset": "All foods",
//       "end": 5,
//       "start": 0,
//       "total": 7524,
//       "foods": [
//         {
//           "ndbno": "05711",
//           "name": "Turkey, retail parts, breast, meat only, cooked, roasted",
//           "weight": 863,
//           "measure": "1.0 breast",
//           "nutrients": [
//             {
//               "nutrient_id": "203",
//               "nutrient": "Protein",
//               "unit": "g",
//               "value": "254.67",
//               "gm": 29.51
//             }
//           ]
//         },
//         {
//           "ndbno": "36629",
//           "name": "Restaurant, Chinese, orange chicken",
//           "weight": 648,
//           "measure": "1.0 order",
//           "nutrients": [
//             {
//               "nutrient_id": "203",
//               "nutrient": "Protein",
//               "unit": "g",
//               "value": "93.70",
//               "gm": 14.46
//             }
//           ]
//         },
//         {
//           "ndbno": "01258",
//           "name": "Egg, white, dried, stabilized, glucose reduced",
//           "weight": 107,
//           "measure": "1.0 cup, sifted",
//           "nutrients": [
//             {
//               "nutrient_id": "203",
//               "nutrient": "Protein",
//               "unit": "g",
//               "value": "89.97",
//               "gm": 84.08
//             }
//           ]
//         },
//         {
//           "ndbno": "01136",
//           "name": "Egg, white, dried, powder, stabilized, glucose reduced",
//           "weight": 107,
//           "measure": "1.0 cup, sifted",
//           "nutrients": [
//             {
//               "nutrient_id": "203",
//               "nutrient": "Protein",
//               "unit": "g",
//               "value": "88.17",
//               "gm": 82.4
//             }
//           ]
//         },
//         {
//           "ndbno": "36633",
//           "name": "Restaurant, Chinese, sesame chicken",
//           "weight": 547,
//           "measure": "1.0 order",
//           "nutrients": [
//             {
//               "nutrient_id": "203",
//               "nutrient": "Protein",
//               "unit": "g",
//               "value": "78.39",
//               "gm": 14.33
//             }
//           ]
//         }
//       ]
//     }
//   }

function getNutrientInfo() {
    const nutrientInfo = responseJson.report.foods; 
    const nutrientAmt = responseJson.report.foods[0].nutrients[0].gm; 
    for (let i = 0; i < nutrientInfo.length; i++) {
        if (nutrientAmt == 29.51) {
            console.log(`${nutrientInfo[i].name} : ${nutrientAmt}`); 
        }
        else {
            console.log('Not found'); 
        }
    }
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      searchNutrient();
    });
}

  
$(function() {
    console.log('Waiting...');
    watchForm();
});