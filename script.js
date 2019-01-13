'use strict';

function searchNutrient() { 
    fetch(`http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=203&sort=c`)
        .then(response => response.json())
        .then(responseJson => getNutrientInfo(responseJson))
        // .then(responseJson => console.log(responseJson))
        // .then(responseJson => console.log(responseJson.report.foods[0].name))
        // .then(responseJson => console.log(responseJson.report.foods[0].nutrients[0].gm))
        .catch(error => console.error(error));
}

function searchFood(){
    fetch(`https://api.edamam.com/search?q=turkey&app_id=4d646771&app_key=3eb644f27fc05523aa0687b2a0361dd9`)
        .then(response => response.json())
        // .then(jsonData => console.log(jsonData.hits[3].recipe))
        .then(jsonData => console.log(jsonData))
        .catch(error => console.error(error));
        // .then(responseJson => console.log(responseJson.report.foods[0].name))
        // .then(responseJson => console.log(responseJson.report.foods[0].nutrients[0].gm))
}

function getNutrientInfo(responseJson) {
    if (!responseJson){
        console.log("This doesn't exist"); 
    }
    const nutrientInfo = responseJson.report.foods; 
    const nutrientAmt = responseJson.report.foods[0].nutrients[0].gm; 
    const foodsMatchingNutrientSearch = []; 
    for (let i = 0; i < nutrientInfo.length; i++) {
        if (nutrientAmt == 29.51) {
            console.log(nutrientInfo[i].name); 
            // foodsMatchingNutrientSearch.push(nutrientInfo[i].name); 
        }
        else {
            console.log('Not found'); 
        }
    }
}

const recipeResults = {
    "q": "turkey",
    "from": 0,
    "to": 10,
    "params": {
      "sane": [],
      "q": [
        "turkey"
      ],
      "app_key": [
        "3eb644f27fc05523aa0687b2a0361dd9"
      ],
      "app_id": [
        "4d646771"
      ]
    },
    "more": true,
    "count": 26498,
    "hits": [
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_414951caa44422f528ad37a35cf0812e",
          "label": "Smoked Turkey",
          "image": "https://www.edamam.com/web-img/6e5/6e5cdc3ba168fd8952cc776552afbbe9.jpg",
          "source": "Leite's Culinaria",
          "url": "http://leitesculinaria.com/91246/recipes-smoked-turkey.html",
          "shareAs": "http://www.edamam.com/recipe/smoked-turkey-414951caa44422f528ad37a35cf0812e/turkey",
          "yield": 22,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [],
          "ingredientLines": [
            "Turkey brine (optional)",
            "1 whole (about 12 pounds) turkey",
            "2 tablespoons kosher salt",
            "2 tablespoons coarsely ground black pepper"
          ],
          "ingredients": [
            {
              "text": "1 whole (about 12 pounds) turkey",
              "weight": 5002
            },
            {
              "text": "2 tablespoons kosher salt",
              "weight": 29.124999999507587
            },
            {
              "text": "2 tablespoons coarsely ground black pepper",
              "weight": 13.8
            }
          ],
          "calories": 7187.4980000000005,
          "totalWeight": 5031.433269477269,
          "totalTime": 0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 7187.4980000000005,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 282.56268,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 73.27131600000001,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 3.10124,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 91.43850200000001,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 73.46704400000002,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 15.327700000000002,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.4914000000000005,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 3.5897200000000007,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1083.86662,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 3601.44,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 11664.142584,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 615.1059846745446,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 1274.2543326947728,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 11389.132661558184,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 44.40876978927499,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 89.21545326947727,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 9175.464,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 854.066,
              "unit": "µg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.415864,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 9.27854,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 381.86035400000003,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 30.002138000000002,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 352.48600000000005,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 352.48600000000005,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 61.0244,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 15.006,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 4.64532,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 22.590600000000002,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 359.3749,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 434.71181538461536,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 366.35658000000006,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 5.109233333333334,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 13.965600000000002,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 2167.73324,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1200.48,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 486.00594099999995,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 61.51059846745446,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 303.39388873685067,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 242.32197152251456,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 246.7153877181944,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 811.049575177066,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1310.7805714285714,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 94.89622222222224,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 201.322,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 713.7338461538461,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 2386.6272125,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2307.8567692307697,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 88.12150000000001,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2542.6833333333334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 100.03999999999999,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 30.968799999999998,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 18.8255,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 282.56268,
              "hasRDI": true,
              "daily": 434.71181538461536,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 73.27131600000001,
                  "hasRDI": true,
                  "daily": 366.35658000000006,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 3.10124,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 91.43850200000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 73.46704400000002,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 15.327700000000002,
              "hasRDI": true,
              "daily": 5.109233333333334,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 11.836300000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 3.4914000000000005,
                  "hasRDI": true,
                  "daily": 13.965600000000002,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 3.5897200000000007,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 1083.86662,
              "hasRDI": true,
              "daily": 2167.73324,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 3601.44,
              "hasRDI": true,
              "daily": 1200.48,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 11664.142584,
              "hasRDI": true,
              "daily": 486.00594099999995,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 615.1059846745446,
              "hasRDI": true,
              "daily": 61.51059846745446,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 1274.2543326947728,
              "hasRDI": true,
              "daily": 303.39388873685067,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 11389.132661558184,
              "hasRDI": true,
              "daily": 242.32197152251456,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 44.40876978927499,
              "hasRDI": true,
              "daily": 246.7153877181944,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 89.21545326947727,
              "hasRDI": true,
              "daily": 811.049575177066,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 9175.464,
              "hasRDI": true,
              "daily": 1310.7805714285714,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 854.066,
              "hasRDI": true,
              "daily": 94.89622222222224,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.415864,
              "hasRDI": true,
              "daily": 201.322,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 9.27854,
              "hasRDI": true,
              "daily": 713.7338461538461,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 381.86035400000003,
              "hasRDI": true,
              "daily": 2386.6272125,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 30.002138000000002,
              "hasRDI": true,
              "daily": 2307.8567692307697,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 352.48600000000005,
              "hasRDI": true,
              "daily": 88.12150000000001,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 352.48600000000005,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 61.0244,
              "hasRDI": true,
              "daily": 2542.6833333333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 15.006,
              "hasRDI": true,
              "daily": 100.03999999999999,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 4.64532,
              "hasRDI": true,
              "daily": 30.968799999999998,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 22.590600000000002,
              "hasRDI": true,
              "daily": 18.8255,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e450c377860e3362e33711117b1ed3e0",
          "label": "Basic Turkey Gravy Recipe",
          "image": "https://www.edamam.com/web-img/f0c/f0c28799f982d3feb7cda573a6ae217f.jpg",
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2013/11/basic-turkey-gravy-thanksgiving-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/basic-turkey-gravy-recipe-e450c377860e3362e33711117b1ed3e0/turkey",
          "yield": 6,
          "dietLabels": [],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [],
          "ingredientLines": [
            "1/4 cup butter",
            "1/4 cup flour",
            "4 cups turkey drippings or turkey stock",
            "Kosher salt and freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "1/4 cup butter",
              "weight": 56.75
            },
            {
              "text": "1/4 cup flour",
              "weight": 31.25
            },
            {
              "text": "4 cups turkey drippings or turkey stock",
              "weight": 960
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "weight": 6.288
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "weight": 3.144
            }
          ],
          "calories": 874.1389399999999,
          "totalWeight": 1053.88954427246,
          "totalTime": 25,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 874.1389399999999,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 57.95866939999999,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 32.32514198,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.860265,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 17.56703916,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 3.93214212,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 59.779512999999994,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.6391820000000001,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 15.306546599999999,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 28.2291616,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 150.8125,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2444.4143491199998,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 61.69435062539037,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 51.8136954427246,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1097.0609035417967,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 2.7073176960991177,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 1.65398414427246,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 311.53752,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 398.61888000000005,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.92,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.37973302,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.8534542,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 15.65679592,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.61020154,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 58.36198,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 58.36198,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.096475,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.8512500000000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.6560476000000002,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 11.132978000000001,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 43.706947,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 89.16718369230767,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 161.6257099,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 19.926504333333334,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 6.5567280000000006,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 56.4583232,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 50.270833333333336,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 101.85059787999998,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 6.169435062539037,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 12.336594153029667,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 23.341721351953122,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 15.040653867217323,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 15.036219493386,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 44.505359999999996,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 44.290986666666676,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 2.1333333333333333,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 31.64441833333333,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 65.65032307692307,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 97.8549745,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 46.93858,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 14.590495,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.019791666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 5.675,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 11.040317333333336,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 9.277481666666667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 57.95866939999999,
              "hasRDI": true,
              "daily": 89.16718369230767,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 32.32514198,
                  "hasRDI": true,
                  "daily": 161.6257099,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.860265,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 17.56703916,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 3.93214212,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 59.779512999999994,
              "hasRDI": true,
              "daily": 19.926504333333334,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 58.140330999999996,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.6391820000000001,
                  "hasRDI": true,
                  "daily": 6.5567280000000006,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 15.306546599999999,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 28.2291616,
              "hasRDI": true,
              "daily": 56.4583232,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 150.8125,
              "hasRDI": true,
              "daily": 50.270833333333336,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2444.4143491199998,
              "hasRDI": true,
              "daily": 101.85059787999998,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 61.69435062539037,
              "hasRDI": true,
              "daily": 6.169435062539037,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 51.8136954427246,
              "hasRDI": true,
              "daily": 12.336594153029667,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1097.0609035417967,
              "hasRDI": true,
              "daily": 23.341721351953122,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 2.7073176960991177,
              "hasRDI": true,
              "daily": 15.040653867217323,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 1.65398414427246,
              "hasRDI": true,
              "daily": 15.036219493386,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 311.53752,
              "hasRDI": true,
              "daily": 44.505359999999996,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 398.61888000000005,
              "hasRDI": true,
              "daily": 44.290986666666676,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 1.92,
              "hasRDI": true,
              "daily": 2.1333333333333333,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.37973302,
              "hasRDI": true,
              "daily": 31.64441833333333,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.8534542,
              "hasRDI": true,
              "daily": 65.65032307692307,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 15.65679592,
              "hasRDI": true,
              "daily": 97.8549745,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.61020154,
              "hasRDI": true,
              "daily": 46.93858,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 58.36198,
              "hasRDI": true,
              "daily": 14.590495,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 58.36198,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.096475,
              "hasRDI": true,
              "daily": 4.019791666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.8512500000000001,
              "hasRDI": true,
              "daily": 5.675,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.6560476000000002,
              "hasRDI": true,
              "daily": 11.040317333333336,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 11.132978000000001,
              "hasRDI": true,
              "daily": 9.277481666666667,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6fea0aa1eacab4eab257d8dd8dc416e3",
          "label": "Easy Turkey Stock",
          "image": "https://www.edamam.com/web-img/225/22527186369007bb1e209c7c70b41b5c.jpg",
          "source": "Ruhlman",
          "url": "http://ruhlman.com/2010/11/how-to-make-thanksgiving-gravy-it-starts-with-easy-turkey-stock/",
          "shareAs": "http://www.edamam.com/recipe/easy-turkey-stock-6fea0aa1eacab4eab257d8dd8dc416e3/turkey",
          "yield": 2,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious"
          ],
          "cautions": [],
          "ingredientLines": [
            "2 large turkey drumsticks",
            "2 large turkey wings",
            "2 spanish onion, sliced",
            "4 carrots, cut in pieces",
            "4 ribs celery cut in pieces",
            "3 bay leaves",
            "1 tablespoon peppercorns, cracked beneath a pan or with mortar and pestle",
            "1/4 cup tomato paste",
            "Fresh parsley and thyme (optional)"
          ],
          "ingredients": [
            {
              "text": "2 large turkey drumsticks",
              "weight": 890
            },
            {
              "text": "2 large turkey wings",
              "weight": 320
            },
            {
              "text": "2 spanish onion, sliced",
              "weight": 250
            },
            {
              "text": "4 carrots, cut in pieces",
              "weight": 244
            },
            {
              "text": "4 ribs celery cut in pieces",
              "weight": 160
            },
            {
              "text": "3 bay leaves",
              "weight": 1.7999999999999998
            },
            {
              "text": "1 tablespoon peppercorns, cracked beneath a pan or with mortar and pestle",
              "weight": 6.9
            },
            {
              "text": "1/4 cup tomato paste",
              "weight": 66
            }
          ],
          "calories": 87.52052,
          "totalWeight": 77.54800000000002,
          "totalTime": 246,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 87.52052,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 4.0837288,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 1.1134387199999998,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.027768000000000004,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 1.4696476400000003,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 1.0899040799999997,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 2.7887924,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.742684,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 1.2957024000000001,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 10.0870516,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 38.152,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 70.83816,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 15.850360000000002,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 14.706360000000002,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 198.05852,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 0.7666316000000001,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 1.3079644,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 85.43664000000001,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 94.84740000000002,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 2.12588,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.038118160000000005,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.13060792,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 2.4890254800000005,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.21112716000000004,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 9.583720000000001,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 9.583720000000001,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.72632,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.17800000000000002,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.2641664,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 3.956292,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4.3760259999999995,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 6.282659692307693,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 5.567193599999999,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 0.9295974666666668,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 2.970736,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 20.1741032,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 12.717333333333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2.95159,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 1.5850360000000003,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 3.5015142857142862,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4.214011063829787,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 4.259064444444444,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 11.890585454545453,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 12.205234285714287,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 10.538600000000002,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 2.3620888888888887,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.1765133333333337,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 10.046763076923076,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 15.556409250000003,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 16.240550769230772,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 2.3959300000000003,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 30.263333333333332,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.1866666666666668,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.7611093333333334,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 3.2969099999999996,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 4.0837288,
              "hasRDI": true,
              "daily": 6.282659692307693,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 1.1134387199999998,
                  "hasRDI": true,
                  "daily": 5.567193599999999,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.027768000000000004,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 1.4696476400000003,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 1.0899040799999997,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 2.7887924,
              "hasRDI": true,
              "daily": 0.9295974666666668,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 2.0461084,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.742684,
                  "hasRDI": true,
                  "daily": 2.970736,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 1.2957024000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 10.0870516,
              "hasRDI": true,
              "daily": 20.1741032,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 38.152,
              "hasRDI": true,
              "daily": 12.717333333333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 70.83816,
              "hasRDI": true,
              "daily": 2.95159,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 15.850360000000002,
              "hasRDI": true,
              "daily": 1.5850360000000003,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 14.706360000000002,
              "hasRDI": true,
              "daily": 3.5015142857142862,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 198.05852,
              "hasRDI": true,
              "daily": 4.214011063829787,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 0.7666316000000001,
              "hasRDI": true,
              "daily": 4.259064444444444,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 1.3079644,
              "hasRDI": true,
              "daily": 11.890585454545453,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 85.43664000000001,
              "hasRDI": true,
              "daily": 12.205234285714287,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 94.84740000000002,
              "hasRDI": true,
              "daily": 10.538600000000002,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 2.12588,
              "hasRDI": true,
              "daily": 2.3620888888888887,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.038118160000000005,
              "hasRDI": true,
              "daily": 3.1765133333333337,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.13060792,
              "hasRDI": true,
              "daily": 10.046763076923076,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 2.4890254800000005,
              "hasRDI": true,
              "daily": 15.556409250000003,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.21112716000000004,
              "hasRDI": true,
              "daily": 16.240550769230772,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 9.583720000000001,
              "hasRDI": true,
              "daily": 2.3959300000000003,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 9.583720000000001,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.72632,
              "hasRDI": true,
              "daily": 30.263333333333332,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.17800000000000002,
              "hasRDI": true,
              "daily": 1.1866666666666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.2641664,
              "hasRDI": true,
              "daily": 1.7611093333333334,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 3.956292,
              "hasRDI": true,
              "daily": 3.2969099999999996,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b2f105d1efedcb54914ae9486d78112d",
          "label": "Roast turkey crown",
          "image": "https://www.edamam.com/web-img/a92/a92d1edb41681ffd984ed2ca7eeb97ec.jpg",
          "source": "BBC",
          "url": "http://www.bbc.co.uk/food/recipes/roastleglessturkey_13963",
          "shareAs": "http://www.edamam.com/recipe/roast-turkey-crown-b2f105d1efedcb54914ae9486d78112d/turkey",
          "yield": 6,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 turkey breast crown (a wingless, legless turkey)",
            "50g/2oz butter",
            "Salt and pepper",
            "About 10 rashers streaky bacon"
          ],
          "ingredients": [
            {
              "text": "1 turkey breast crown (a wingless, legless turkey)",
              "weight": 2000
            },
            {
              "text": "50g/2oz butter",
              "weight": 50
            },
            {
              "text": "Salt and pepper",
              "weight": 14.040000000000001
            },
            {
              "text": "Salt and pepper",
              "weight": 7.0200000000000005
            },
            {
              "text": "About 10 rashers streaky bacon",
              "weight": 290
            }
          ],
          "calories": 4725.4202,
          "totalWeight": 2353.086474197843,
          "totalTime": 150,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4725.4202,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 296.28485199999994,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 102.5401184,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 2.0247,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 114.3354778,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 53.5081596,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 8.231290000000001,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.7760600000000004,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 2.974928,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 475.55237800000003,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1598.9,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 5457.9480696,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 319.0545538074823,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 527.8648647419784,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 6179.981117935828,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 25.900661364852883,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 34.956604474197846,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 4160.6916,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 415.7954,
              "unit": "µg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.9704816,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.5645360000000004,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 115.7650386,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 10.3933282,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 142.6934,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 142.6934,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 9.935,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.91,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.4800079999999998,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 14.991740000000002,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 236.27101,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 455.8228492307692,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 512.7005919999999,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 2.7437633333333338,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.104240000000002,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 951.1047560000001,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 532.9666666666667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 227.41450289999997,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 31.90545538074823,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 125.68211065285199,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 131.48895995608146,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 143.89256313807158,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 317.7873134017986,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 594.3845142857143,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 46.19948888888888,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 164.20680000000002,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 197.27200000000002,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 723.5314912499999,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 799.4867846153845,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 35.67335,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 413.95833333333337,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 12.733333333333333,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 16.533386666666665,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 12.493116666666669,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 296.28485199999994,
              "hasRDI": true,
              "daily": 455.8228492307692,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 102.5401184,
                  "hasRDI": true,
                  "daily": 512.7005919999999,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 2.0247,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 114.3354778,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 53.5081596,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 8.231290000000001,
              "hasRDI": true,
              "daily": 2.7437633333333338,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 6.455230000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.7760600000000004,
                  "hasRDI": true,
                  "daily": 7.104240000000002,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 2.974928,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 475.55237800000003,
              "hasRDI": true,
              "daily": 951.1047560000001,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1598.9,
              "hasRDI": true,
              "daily": 532.9666666666667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 5457.9480696,
              "hasRDI": true,
              "daily": 227.41450289999997,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 319.0545538074823,
              "hasRDI": true,
              "daily": 31.90545538074823,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 527.8648647419784,
              "hasRDI": true,
              "daily": 125.68211065285199,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 6179.981117935828,
              "hasRDI": true,
              "daily": 131.48895995608146,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 25.900661364852883,
              "hasRDI": true,
              "daily": 143.89256313807158,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 34.956604474197846,
              "hasRDI": true,
              "daily": 317.7873134017986,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 4160.6916,
              "hasRDI": true,
              "daily": 594.3845142857143,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 415.7954,
              "hasRDI": true,
              "daily": 46.19948888888888,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.9704816,
              "hasRDI": true,
              "daily": 164.20680000000002,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.5645360000000004,
              "hasRDI": true,
              "daily": 197.27200000000002,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 115.7650386,
              "hasRDI": true,
              "daily": 723.5314912499999,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 10.3933282,
              "hasRDI": true,
              "daily": 799.4867846153845,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 142.6934,
              "hasRDI": true,
              "daily": 35.67335,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 142.6934,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 9.935,
              "hasRDI": true,
              "daily": 413.95833333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.91,
              "hasRDI": true,
              "daily": 12.733333333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.4800079999999998,
              "hasRDI": true,
              "daily": 16.533386666666665,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 14.991740000000002,
              "hasRDI": true,
              "daily": 12.493116666666669,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6a7aacb8249a547d61e06e8e99f6c17d",
          "label": "Hot Turkey Sandwich recipes",
          "image": "https://www.edamam.com/web-img/177/1778a391d653beee620873b79a8e81ac",
          "source": "Simply Recipes",
          "url": "http://www.simplyrecipes.com/recipes/open_faced_turkey_and_gravy_sandwich/",
          "shareAs": "http://www.edamam.com/recipe/hot-turkey-sandwich-recipes-6a7aacb8249a547d61e06e8e99f6c17d/turkey",
          "yield": 4,
          "dietLabels": [
            "High-Protein"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 1/2 lb leftover turkey meat, sliced",
            "1/2 cup or so of leftover turkey gravy",
            "stock",
            "4 large slices of rustic bread"
          ],
          "ingredients": [
            {
              "text": "1 1/2 lb leftover turkey meat, sliced",
              "weight": 680.388555
            },
            {
              "text": "1/2 cup or so of leftover turkey gravy",
              "weight": 119
            },
            {
              "text": "stock",
              "weight": 188.877711
            },
            {
              "text": "4 large slices of rustic bread",
              "weight": 145
            }
          ],
          "calories": 1277.87115756,
          "totalWeight": 1133.266266,
          "totalTime": 10,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1277.87115756,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 22.5950316435,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 5.59373091976,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.08532719885000001,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 6.295871685370001,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.95535648548,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 84.2749271753,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 6.276,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 12.2799398223,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 177.43768716920002,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 463.90666318,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2496.1836216300003,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 278.11907238000003,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 258.89001829,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2183.5947008000003,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 12.1414847661,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 15.461078207400002,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1594.29523647,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 63.12374706000001,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.667755422,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.03185147635,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.92894207995,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 67.79929589724,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.724198782309999,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 203.00108439999997,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 153.7010844,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 29,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 8.555818082,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.3607771100000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.0040130128,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 7.482755422,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 63.893557878,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 34.76158714384616,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 27.968654598799997,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 28.091642391766666,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 25.104,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 354.8753743384001,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 154.63555439333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 104.00765090125002,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 27.811907238000003,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 61.6404805452381,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 46.45946171914894,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 67.452693145,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 140.5552564309091,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 227.75646235285714,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 7.013749673333334,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.7419504688888889,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 85.98762302916667,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 148.38015999615385,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 423.74559935775,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 363.3999063315384,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 50.75027109999999,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 356.49242008333334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 9.071847400000001,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.693420085333333,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 6.235629518333334,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 22.5950316435,
              "hasRDI": true,
              "daily": 34.76158714384616,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 5.59373091976,
                  "hasRDI": true,
                  "daily": 27.968654598799997,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.08532719885000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 6.295871685370001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 5.95535648548,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 84.2749271753,
              "hasRDI": true,
              "daily": 28.091642391766666,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 77.9989271753,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 6.276,
                  "hasRDI": true,
                  "daily": 25.104,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 12.2799398223,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 177.43768716920002,
              "hasRDI": true,
              "daily": 354.8753743384001,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 463.90666318,
              "hasRDI": true,
              "daily": 154.63555439333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2496.1836216300003,
              "hasRDI": true,
              "daily": 104.00765090125002,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 278.11907238000003,
              "hasRDI": true,
              "daily": 27.811907238000003,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 258.89001829,
              "hasRDI": true,
              "daily": 61.6404805452381,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2183.5947008000003,
              "hasRDI": true,
              "daily": 46.45946171914894,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 12.1414847661,
              "hasRDI": true,
              "daily": 67.452693145,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 15.461078207400002,
              "hasRDI": true,
              "daily": 140.5552564309091,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1594.29523647,
              "hasRDI": true,
              "daily": 227.75646235285714,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 63.12374706000001,
              "hasRDI": true,
              "daily": 7.013749673333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.667755422,
              "hasRDI": true,
              "daily": 0.7419504688888889,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.03185147635,
              "hasRDI": true,
              "daily": 85.98762302916667,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.92894207995,
              "hasRDI": true,
              "daily": 148.38015999615385,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 67.79929589724,
              "hasRDI": true,
              "daily": 423.74559935775,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 4.724198782309999,
              "hasRDI": true,
              "daily": 363.3999063315384,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 203.00108439999997,
              "hasRDI": true,
              "daily": 50.75027109999999,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 153.7010844,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 29,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 8.555818082,
              "hasRDI": true,
              "daily": 356.49242008333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.3607771100000001,
              "hasRDI": true,
              "daily": 9.071847400000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.0040130128,
              "hasRDI": true,
              "daily": 6.693420085333333,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 7.482755422,
              "hasRDI": true,
              "daily": 6.235629518333334,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_59e09323ce8c6b8128ef08131f6b0323",
          "label": "Turkey Soup",
          "image": "https://www.edamam.com/web-img/a1c/a1cb44fd10a461e46dc0b0e82207fb07.jpg",
          "source": "Saveur",
          "url": "http://www.saveur.com/article/Recipes/Turkey-Soup",
          "shareAs": "http://www.edamam.com/recipe/turkey-soup-59e09323ce8c6b8128ef08131f6b0323/turkey",
          "yield": 24,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 turkey carcass, broken into pieces",
            "2 1/2 cups leftover turkey stuffing",
            "2 cups turkey gravy",
            "3 carrots, peeled and thickly sliced",
            "3 ribs celery with leaves, sliced",
            "1 onion, chopped",
            "1/2 cup chopped fresh parsley",
            "1 bay leaf",
            "2 tsp. dried thyme, crumbled",
            "Salt to taste"
          ],
          "ingredients": [
            {
              "text": "1 turkey carcass, broken into pieces",
              "weight": 5002
            },
            {
              "text": "2 1/2 cups leftover turkey stuffing",
              "weight": 500
            },
            {
              "text": "2 cups turkey gravy",
              "weight": 476
            },
            {
              "text": "3 carrots, peeled and thickly sliced",
              "weight": 183
            },
            {
              "text": "3 ribs celery with leaves, sliced",
              "weight": 120
            },
            {
              "text": "1 onion, chopped",
              "weight": 125
            },
            {
              "text": "1/2 cup chopped fresh parsley",
              "weight": 30
            },
            {
              "text": "1 bay leaf",
              "weight": 0.6
            },
            {
              "text": "2 tsp. dried thyme, crumbled",
              "weight": 2
            },
            {
              "text": "Salt to taste",
              "weight": 38.631600000000006
            }
          ],
          "calories": 8443.048000000003,
          "totalWeight": 6448.878568367822,
          "totalTime": 0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 8443.048000000003,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 336.31276,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 84.97890999999998,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 3.10124,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 114.84853,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 89.08662000000001,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 175.67661999999996,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 27.4608,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 30.9224,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1115.83256,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 3610.96,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 14972.835528000001,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 953.0708564082769,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 1387.9027856836783,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 13359.89628546943,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 57.474619275613826,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 95.52837856836784,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 9652.898,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 3126.7440000000006,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 64.946,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.415754,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 10.417696000000001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 398.09824,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 30.749359999999996,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 783.5400000000002,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 598.5400000000001,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 110,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 61.550399999999996,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 15.006,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.671199999999999,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 654.606,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 422.1524000000001,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 517.4042461538462,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 424.89454999999987,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 58.558873333333324,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 109.8432,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 2231.66512,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1203.6533333333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 623.868147,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 95.3070856408277,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 330.4530442103996,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 284.2531124567964,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 319.3034404200768,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 868.4398051669804,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1378.9854285714284,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 347.4160000000001,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 72.16222222222221,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 284.64616666666666,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 801.3612307692308,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 2488.114,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2365.335384615384,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 195.88500000000005,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2564.6,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 100.03999999999999,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 91.14133333333332,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 545.505,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 336.31276,
              "hasRDI": true,
              "daily": 517.4042461538462,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 84.97890999999998,
                  "hasRDI": true,
                  "daily": 424.89454999999987,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 3.10124,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 114.84853,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 89.08662000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 175.67661999999996,
              "hasRDI": true,
              "daily": 58.558873333333324,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 148.21581999999995,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 27.4608,
                  "hasRDI": true,
                  "daily": 109.8432,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 30.9224,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 1115.83256,
              "hasRDI": true,
              "daily": 2231.66512,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 3610.96,
              "hasRDI": true,
              "daily": 1203.6533333333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 14972.835528000001,
              "hasRDI": true,
              "daily": 623.868147,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 953.0708564082769,
              "hasRDI": true,
              "daily": 95.3070856408277,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 1387.9027856836783,
              "hasRDI": true,
              "daily": 330.4530442103996,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 13359.89628546943,
              "hasRDI": true,
              "daily": 284.2531124567964,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 57.474619275613826,
              "hasRDI": true,
              "daily": 319.3034404200768,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 95.52837856836784,
              "hasRDI": true,
              "daily": 868.4398051669804,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 9652.898,
              "hasRDI": true,
              "daily": 1378.9854285714284,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 3126.7440000000006,
              "hasRDI": true,
              "daily": 347.4160000000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 64.946,
              "hasRDI": true,
              "daily": 72.16222222222221,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.415754,
              "hasRDI": true,
              "daily": 284.64616666666666,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 10.417696000000001,
              "hasRDI": true,
              "daily": 801.3612307692308,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 398.09824,
              "hasRDI": true,
              "daily": 2488.114,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 30.749359999999996,
              "hasRDI": true,
              "daily": 2365.335384615384,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 783.5400000000002,
              "hasRDI": true,
              "daily": 195.88500000000005,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 598.5400000000001,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 110,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 61.550399999999996,
              "hasRDI": true,
              "daily": 2564.6,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 15.006,
              "hasRDI": true,
              "daily": 100.03999999999999,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 13.671199999999999,
              "hasRDI": true,
              "daily": 91.14133333333332,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 654.606,
              "hasRDI": true,
              "daily": 545.505,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_25ec8d3352b2cb9b99946939462aee8a",
          "label": "BBQ Turkey",
          "image": "https://www.edamam.com/web-img/0c9/0c9ed68b75f60ef410776cc10aac6bbd.jpg",
          "source": "Chowhound",
          "url": "https://www.chowhound.com/recipes/bbq-turkey-31638",
          "shareAs": "http://www.edamam.com/recipe/bbq-turkey-25ec8d3352b2cb9b99946939462aee8a/turkey",
          "yield": 12,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [],
          "ingredientLines": [
            "About 1/4 cup kosher salt",
            "1 (14-pound) turkey, preferably organic and pasture-raised, defrosted if frozen",
            "1/2 cup unsalted butter (1 stick), at room temperature"
          ],
          "ingredients": [
            {
              "text": "About 1/4 cup kosher salt",
              "weight": 58.25
            },
            {
              "text": "1 (14-pound) turkey, preferably organic and pasture-raised, defrosted if frozen",
              "weight": 6350.293180000001
            },
            {
              "text": "1/2 cup unsalted butter (1 stick), at room temperature",
              "weight": 113
            }
          ],
          "calories": 7257.662665653999,
          "totalWeight": 6489.011937127537,
          "totalTime": 2160,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 7257.662665653999,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 345.94544009992,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 123.918066185458,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 6.4995390578359995,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 106.082740961428,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 69.536251593348,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 5.92912060514,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 3.22389571046,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 976.6449453479199,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 3489.2198736159994,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 15030.259024226401,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 529.2503990686087,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 1129.6942270212753,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 10128.683774042203,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 38.88236205560086,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 80.38242396596752,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 8278.055928774,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1539.4003868260002,
              "unit": "µg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.169829915744,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 8.379530091929999,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 344.10697952171796,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 27.010551865221995,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 318.99957104599997,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 318.99957104599997,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 55.198339525159994,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 15.221124473399998,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.679437342019999,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 7.910000000000001,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 362.8831332827,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 532.223753999877,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 619.5903309272901,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 1.9763735350466662,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1953.28989069584,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1163.0732912053331,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 626.2607926761001,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 52.92503990686087,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 268.9748159574465,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 215.5039100860043,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 216.01312253111587,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 730.7493087815229,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1182.5794183962857,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 171.04448742511113,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 180.81915964533334,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 644.5792378407691,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 2150.668622010737,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2077.7347588632306,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 79.74989276149999,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2299.930813548333,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 101.47416315599999,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 44.529582280133326,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 6.591666666666668,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 345.94544009992,
              "hasRDI": true,
              "daily": 532.223753999877,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 123.918066185458,
                  "hasRDI": true,
                  "daily": 619.5903309272901,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 6.4995390578359995,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 106.082740961428,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 69.536251593348,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 5.92912060514,
              "hasRDI": true,
              "daily": 1.9763735350466662,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 5.92912060514,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 3.22389571046,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 976.6449453479199,
              "hasRDI": true,
              "daily": 1953.28989069584,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 3489.2198736159994,
              "hasRDI": true,
              "daily": 1163.0732912053331,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 15030.259024226401,
              "hasRDI": true,
              "daily": 626.2607926761001,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 529.2503990686087,
              "hasRDI": true,
              "daily": 52.92503990686087,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 1129.6942270212753,
              "hasRDI": true,
              "daily": 268.9748159574465,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 10128.683774042203,
              "hasRDI": true,
              "daily": 215.5039100860043,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 38.88236205560086,
              "hasRDI": true,
              "daily": 216.01312253111587,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 80.38242396596752,
              "hasRDI": true,
              "daily": 730.7493087815229,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 8278.055928774,
              "hasRDI": true,
              "daily": 1182.5794183962857,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1539.4003868260002,
              "hasRDI": true,
              "daily": 171.04448742511113,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.169829915744,
              "hasRDI": true,
              "daily": 180.81915964533334,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 8.379530091929999,
              "hasRDI": true,
              "daily": 644.5792378407691,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 344.10697952171796,
              "hasRDI": true,
              "daily": 2150.668622010737,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 27.010551865221995,
              "hasRDI": true,
              "daily": 2077.7347588632306,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 318.99957104599997,
              "hasRDI": true,
              "daily": 79.74989276149999,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 318.99957104599997,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 55.198339525159994,
              "hasRDI": true,
              "daily": 2299.930813548333,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 15.221124473399998,
              "hasRDI": true,
              "daily": 101.47416315599999,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.679437342019999,
              "hasRDI": true,
              "daily": 44.529582280133326,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 7.910000000000001,
              "hasRDI": true,
              "daily": 6.591666666666668,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d8b7cf3b6d9630e58b643368ddbeee28",
          "label": "Turkey Avgolemono Soup",
          "image": "https://www.edamam.com/web-img/f4c/f4cf4db4250dec890875de98de129518.jpg",
          "source": "The Kitchn",
          "url": "http://www.thekitchn.com/leftover-thanksgiving-turkey-s-134229",
          "shareAs": "http://www.edamam.com/recipe/turkey-avgolemono-soup-d8b7cf3b6d9630e58b643368ddbeee28/turkey",
          "yield": 6,
          "dietLabels": [],
          "healthLabels": [
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [],
          "ingredientLines": [
            "2 quarts turkey stock (or low-sodium chicken stock)",
            "3/4 cup long grain white rice",
            "2 cups roasted turkey, shredded",
            "4 eggs",
            "2 lemons, juiced"
          ],
          "ingredients": [
            {
              "text": "2 quarts turkey stock (or low-sodium chicken stock)",
              "weight": 1920
            },
            {
              "text": "3/4 cup long grain white rice",
              "weight": 0.15000000000000002
            },
            {
              "text": "2 cups roasted turkey, shredded",
              "weight": 280
            },
            {
              "text": "4 eggs",
              "weight": 172
            },
            {
              "text": "2 lemons, juiced",
              "weight": 116
            }
          ],
          "calories": 1371.74,
          "totalWeight": 2488.15,
          "totalTime": 0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1371.74,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 55.53807,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 15.676196999999998,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.23896,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 22.5919915,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 11.5847925,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 80.30861,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.2479999999999998,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 34.0684,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 131.865115,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 899.0400000000001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3305.7615,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 214.8935,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 176.7725,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3040.769,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 10.1472,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 9.96214,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1390.0819999999999,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 343.16,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 65.32,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.921705,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.9593120000000006,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 52.027,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.2338175000000002,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 209.21349999999998,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 209.21349999999998,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.9468000000000005,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 4.28,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.808,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 4.356,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 68.587,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 85.44318461538461,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 78.38098499999998,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 26.769536666666667,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 12.991999999999997,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 263.73023,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 299.68000000000006,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 137.74006250000002,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 21.489349999999998,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 42.08869047619048,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 64.69721276595745,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 56.373333333333335,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 90.56490909090908,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 198.58314285714283,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 38.12888888888889,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 72.57777777777777,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 76.80875,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 227.63938461538464,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 325.16875,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 248.7551923076923,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 52.303374999999996,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 206.1166666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 28.533333333333335,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 18.719999999999995,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 3.63,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 55.53807,
              "hasRDI": true,
              "daily": 85.44318461538461,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 15.676196999999998,
                  "hasRDI": true,
                  "daily": 78.38098499999998,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.23896,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 22.5919915,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 11.5847925,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 80.30861,
              "hasRDI": true,
              "daily": 26.769536666666667,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 77.06061,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 3.2479999999999998,
                  "hasRDI": true,
                  "daily": 12.991999999999997,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 34.0684,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 131.865115,
              "hasRDI": true,
              "daily": 263.73023,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 899.0400000000001,
              "hasRDI": true,
              "daily": 299.68000000000006,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3305.7615,
              "hasRDI": true,
              "daily": 137.74006250000002,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 214.8935,
              "hasRDI": true,
              "daily": 21.489349999999998,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 176.7725,
              "hasRDI": true,
              "daily": 42.08869047619048,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3040.769,
              "hasRDI": true,
              "daily": 64.69721276595745,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 10.1472,
              "hasRDI": true,
              "daily": 56.373333333333335,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 9.96214,
              "hasRDI": true,
              "daily": 90.56490909090908,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1390.0819999999999,
              "hasRDI": true,
              "daily": 198.58314285714283,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 343.16,
              "hasRDI": true,
              "daily": 38.12888888888889,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 65.32,
              "hasRDI": true,
              "daily": 72.57777777777777,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.921705,
              "hasRDI": true,
              "daily": 76.80875,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.9593120000000006,
              "hasRDI": true,
              "daily": 227.63938461538464,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 52.027,
              "hasRDI": true,
              "daily": 325.16875,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.2338175000000002,
              "hasRDI": true,
              "daily": 248.7551923076923,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 209.21349999999998,
              "hasRDI": true,
              "daily": 52.303374999999996,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 209.21349999999998,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.9468000000000005,
              "hasRDI": true,
              "daily": 206.1166666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 4.28,
              "hasRDI": true,
              "daily": 28.533333333333335,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.808,
              "hasRDI": true,
              "daily": 18.719999999999995,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 4.356,
              "hasRDI": true,
              "daily": 3.63,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d254505b2aff0e41ed30101fa73347e8",
          "label": "Herb-Roasted Turkey",
          "image": "https://www.edamam.com/web-img/a76/a76727fdd0157779b95d9ffc89d994e7.jpg",
          "source": "Martha Stewart",
          "url": "http://www.marthastewart.com/318384/herb-roasted-turkey",
          "shareAs": "http://www.edamam.com/recipe/herb-roasted-turkey-d254505b2aff0e41ed30101fa73347e8/turkey",
          "yield": 10,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Alcohol-Free"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 fresh turkey (16 to 18 pounds), giblets removed, turkey brought to room temperature (no more than 2 hours)",
            "8 tablespoons (1 stick) unsalted butter, softened",
            "Coarse salt and freshly ground pepper",
            "8 small sprigs fresh flat-leaf parsley",
            "12 fresh sage leaves",
            "5 cups chestnut-and-sausage stuffing"
          ],
          "ingredients": [
            {
              "text": "1 fresh turkey (16 to 18 pounds), giblets removed, turkey brought to room temperature (no more than 2 hours)",
              "weight": 7711.070290000001
            },
            {
              "text": "8 tablespoons (1 stick) unsalted butter, softened",
              "weight": 113.6
            },
            {
              "text": "Coarse salt and freshly ground pepper",
              "weight": 53.05602174000001
            },
            {
              "text": "Coarse salt and freshly ground pepper",
              "weight": 26.528010870000006
            },
            {
              "text": "8 small sprigs fresh flat-leaf parsley",
              "weight": 6
            },
            {
              "text": "12 fresh sage leaves",
              "weight": 12
            },
            {
              "text": "5 cups chestnut-and-sausage stuffing",
              "weight": 1000
            }
          ],
          "calories": 13717.8878219837,
          "totalWeight": 8887.713866528014,
          "totalTime": 397,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 13717.8878219837,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 615.487537510362,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 189.57357484821043,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 8.5046715798,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 203.20214149572928,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 143.0245279998826,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 251.72461432836502,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 40.74558675011,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 26.991888472568,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1705.8512710853931,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 5796.2106088,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 20625.14326470717,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 1523.9645558120235,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 2149.94762674428,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 18555.739959314946,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 83.62129571614845,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 141.12169005701102,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 14614.8368878746,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 3335.7285122349003,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 11.867999999999999,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 5.191283990939601,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 15.468054456066001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 604.2978809941443,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 46.998115548731704,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 1129.6926821479,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 759.6926821479001,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 220,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 94.368177538,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 24.837210870000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 24.793974574048,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 492.51835379419,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 685.894391099185,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 946.9039038620954,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 947.867874241052,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 83.90820477612168,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 162.98234700044,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 3411.7025421707863,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1932.0702029333333,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 859.3809693627987,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 152.39645558120236,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 511.89229208197145,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 394.8029778577648,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 464.56275397860253,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 1282.9244550637366,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2087.833841124943,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 370.63650135943334,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 13.186666666666666,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 432.60699924496674,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1189.8503427743078,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 3776.861756213402,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3615.2396575947464,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 282.423170536975,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 3932.0073974166667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 165.58140580000003,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 165.29316382698667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 410.4319614951583,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 615.487537510362,
              "hasRDI": true,
              "daily": 946.9039038620954,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 189.57357484821043,
                  "hasRDI": true,
                  "daily": 947.867874241052,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 8.5046715798,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 203.20214149572928,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 143.0245279998826,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 251.72461432836502,
              "hasRDI": true,
              "daily": 83.90820477612168,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 210.97902757825503,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 40.74558675011,
                  "hasRDI": true,
                  "daily": 162.98234700044,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 26.991888472568,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 1705.8512710853931,
              "hasRDI": true,
              "daily": 3411.7025421707863,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 5796.2106088,
              "hasRDI": true,
              "daily": 1932.0702029333333,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 20625.14326470717,
              "hasRDI": true,
              "daily": 859.3809693627987,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 1523.9645558120235,
              "hasRDI": true,
              "daily": 152.39645558120236,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 2149.94762674428,
              "hasRDI": true,
              "daily": 511.89229208197145,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 18555.739959314946,
              "hasRDI": true,
              "daily": 394.8029778577648,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 83.62129571614845,
              "hasRDI": true,
              "daily": 464.56275397860253,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 141.12169005701102,
              "hasRDI": true,
              "daily": 1282.9244550637366,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 14614.8368878746,
              "hasRDI": true,
              "daily": 2087.833841124943,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 3335.7285122349003,
              "hasRDI": true,
              "daily": 370.63650135943334,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 11.867999999999999,
              "hasRDI": true,
              "daily": 13.186666666666666,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 5.191283990939601,
              "hasRDI": true,
              "daily": 432.60699924496674,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 15.468054456066001,
              "hasRDI": true,
              "daily": 1189.8503427743078,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 604.2978809941443,
              "hasRDI": true,
              "daily": 3776.861756213402,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 46.998115548731704,
              "hasRDI": true,
              "daily": 3615.2396575947464,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 1129.6926821479,
              "hasRDI": true,
              "daily": 282.423170536975,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 759.6926821479001,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 220,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 94.368177538,
              "hasRDI": true,
              "daily": 3932.0073974166667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 24.837210870000003,
              "hasRDI": true,
              "daily": 165.58140580000003,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 24.793974574048,
              "hasRDI": true,
              "daily": 165.29316382698667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 492.51835379419,
              "hasRDI": true,
              "daily": 410.4319614951583,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_9f53f2ddc9d51e35edc6165c5f9af5ad",
          "label": "Turkey Gravy recipes",
          "image": "https://www.edamam.com/web-img/99b/99bb54eeef035cf63f2bfd72d9af8c26",
          "source": "Pioneer Woman",
          "url": "http://thepioneerwoman.com/food-and-friends/thanksgiving-dinner-how-to-make-gravy/",
          "shareAs": "http://www.edamam.com/recipe/turkey-gravy-recipes-9f53f2ddc9d51e35edc6165c5f9af5ad/turkey",
          "yield": 6,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [],
          "cautions": [],
          "ingredientLines": [
            "3-1/2 pounds Turkey Legs Or Wings",
            "1 pound Turkey Necks",
            "1 Large Onion, Chopped",
            "1 Large Carrot, Chopped Into Large Chunks",
            "1 stalk Celery, Chopped",
            "4 sprigs Parsley",
            "4 sprigs Thyme",
            "1 Bay Leaf",
            "1 cup Turkey Drippings",
            "6 cups Turkey Stock",
            "1/3 cup Turkey Fat",
            "1/3 cup Flour",
            "1 teaspoon Minced Fresh Thyme",
            "1 teaspoon Minced Fresh Sage"
          ],
          "ingredients": [
            {
              "text": "3-1/2 pounds Turkey Legs Or Wings",
              "weight": 1587.5732950000001
            },
            {
              "text": "1 pound Turkey Necks",
              "weight": 453.59237
            },
            {
              "text": "1 Large Onion, Chopped",
              "weight": 150
            },
            {
              "text": "1 Large Carrot, Chopped Into Large Chunks",
              "weight": 72
            },
            {
              "text": "1 stalk Celery, Chopped",
              "weight": 40
            },
            {
              "text": "4 sprigs Parsley",
              "weight": 4
            },
            {
              "text": "4 sprigs Thyme",
              "weight": 12
            },
            {
              "text": "1 Bay Leaf",
              "weight": 0.6
            },
            {
              "text": "1 cup Turkey Drippings",
              "weight": 140
            },
            {
              "text": "6 cups Turkey Stock",
              "weight": 1440
            },
            {
              "text": "1/3 cup Turkey Fat",
              "weight": 68.33333333333333
            },
            {
              "text": "1/3 cup Flour",
              "weight": 41.666666666666664
            },
            {
              "text": "1 teaspoon Minced Fresh Thyme",
              "weight": 0.8
            },
            {
              "text": "1 teaspoon Minced Fresh Sage",
              "weight": 2.666666666847008
            }
          ],
          "calories": 4411.301475117235,
          "totalWeight": 4013.2323316668476,
          "totalTime": 75,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4411.301475117235,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 230.79559252602306,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 64.76608200711269,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.3251071701000001,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 85.42267554177005,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 59.14053301136983,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 110.35752000010952,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 9.487466666739342,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 33.35090000000309,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 466.41110330235256,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 2037.1413274000001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4730.519922466687,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 497.27109868631254,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 565.8492474507718,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 6460.832972368596,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 31.495585166717383,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 67.4354015570085,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3910.2761341168307,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1176.9607314671985,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 46.42380000005844,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.7851076899180267,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 7.082705793367273,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 134.012555125477,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 9.207560363521516,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 287.3740162004942,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 287.3740162004942,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 39.855118317,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 12.998643585,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.8092761083468245,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 136.14900000309194,
              "unit": "µg"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 220.56507375586176,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 355.07014234772777,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 323.83041003556343,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 36.78584000003651,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 37.94986666695737,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 932.8222066047051,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 679.0471091333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 197.10499676944528,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 49.72710986863125,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 134.7260112978028,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 137.4645313269914,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 174.9754731484299,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 613.0491050637137,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 558.6108763024043,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 130.7734146074665,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 51.58200000006494,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 148.75897415983556,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 544.8235225667133,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 837.5784695342313,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 708.2738741170397,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 71.84350405012356,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1660.629929875,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 86.6576239,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 45.3951740556455,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 113.45750000257661,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 230.79559252602306,
              "hasRDI": true,
              "daily": 355.07014234772777,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 64.76608200711269,
                  "hasRDI": true,
                  "daily": 323.83041003556343,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.3251071701000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 85.42267554177005,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 59.14053301136983,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 110.35752000010952,
              "hasRDI": true,
              "daily": 36.78584000003651,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 100.87005333337018,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 9.487466666739342,
                  "hasRDI": true,
                  "daily": 37.94986666695737,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 33.35090000000309,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 466.41110330235256,
              "hasRDI": true,
              "daily": 932.8222066047051,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 2037.1413274000001,
              "hasRDI": true,
              "daily": 679.0471091333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4730.519922466687,
              "hasRDI": true,
              "daily": 197.10499676944528,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 497.27109868631254,
              "hasRDI": true,
              "daily": 49.72710986863125,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 565.8492474507718,
              "hasRDI": true,
              "daily": 134.7260112978028,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 6460.832972368596,
              "hasRDI": true,
              "daily": 137.4645313269914,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 31.495585166717383,
              "hasRDI": true,
              "daily": 174.9754731484299,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 67.4354015570085,
              "hasRDI": true,
              "daily": 613.0491050637137,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3910.2761341168307,
              "hasRDI": true,
              "daily": 558.6108763024043,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1176.9607314671985,
              "hasRDI": true,
              "daily": 130.7734146074665,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 46.42380000005844,
              "hasRDI": true,
              "daily": 51.58200000006494,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.7851076899180267,
              "hasRDI": true,
              "daily": 148.75897415983556,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 7.082705793367273,
              "hasRDI": true,
              "daily": 544.8235225667133,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 134.012555125477,
              "hasRDI": true,
              "daily": 837.5784695342313,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 9.207560363521516,
              "hasRDI": true,
              "daily": 708.2738741170397,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 287.3740162004942,
              "hasRDI": true,
              "daily": 71.84350405012356,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 287.3740162004942,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 39.855118317,
              "hasRDI": true,
              "daily": 1660.629929875,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 12.998643585,
              "hasRDI": true,
              "daily": 86.6576239,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.8092761083468245,
              "hasRDI": true,
              "daily": 45.3951740556455,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 136.14900000309194,
              "hasRDI": true,
              "daily": 113.45750000257661,
              "unit": "µg"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      }
    ]
  }

function getRecipe(recipeResults) {
    const recipeName = recipeResults.hits[3].recipe.label; 
    // console.log(`${recipeName} with ${mainIngredient.weight} of ${mainIngredient.text}`); 
}

function calculateIngredients(recipeResults) {
    const mainIngredient = recipeResults.hits[3].recipe.ingredients[0]; 
    const servingSize = mainIngredient.weight/100;
    const ingredientList = recipeResults.hits[3].recipe.ingredients; 
    for (let i = 0; i < ingredientList.length; i++){
        ingredientList[i].weight = ingredientList[i].weight/servingSize; 
        console.log(`${ingredientList[i].weight}g of ${ingredientList[i].text}`); 
    }
}

function getNutritionFacts(recipeResults) {
    const nutritionFacts = recipeResults.hits[3].totalNutrients; 
    Object.keys(nutritionFacts).forEach(function (item) {
        if (item == FAT) {
            console.log(item); 
        }
    }); 
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getNutritionFacts(recipeResults); 
    // searchNutrient();
    // searchFood(); 
    // calculateIngredients(recipeResults);
    // getRecipe(recipeResults); 
    });
}

$(function() {
    console.log('Waiting...');
    watchForm();
});