'use strict';


function searchNutrient() { 
    fetch(`http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=203&sort=c&fg=5`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        // .then(responseJson => console.log(responseJson.report.foods[0].name))
        // .then(responseJson => console.log(responseJson.report.foods[0].nutrients.gm))
        .catch(error => console.error(error));
    // const nutrientValue = foods.nutrient.gm???
    // for foods in report 
    //  if nutrientValue = 29.51
    //  console.log(name)
    //console.log(responseJson[report]); 
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      searchNutrient();
    });
}

const nutrientReport = {
    "report": {
      "sr": "1",
      "groups": "All groups",
      "subset": "All foods",
      "end": 150,
      "start": 0,
      "total": 7524,
      "foods": [
        {
          "ndbno": "05711",
          "name": "Turkey, retail parts, breast, meat only, cooked, roasted",
          "weight": 863,
          "measure": "1.0 breast",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "254.67",
              "gm": 29.51
            }
          ]
        },
        {
          "ndbno": "36629",
          "name": "Restaurant, Chinese, orange chicken",
          "weight": 648,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "93.70",
              "gm": 14.46
            }
          ]
        },
        {
          "ndbno": "01258",
          "name": "Egg, white, dried, stabilized, glucose reduced",
          "weight": 107,
          "measure": "1.0 cup, sifted",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "89.97",
              "gm": 84.08
            }
          ]
        },
        {
          "ndbno": "01136",
          "name": "Egg, white, dried, powder, stabilized, glucose reduced",
          "weight": 107,
          "measure": "1.0 cup, sifted",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "88.17",
              "gm": 82.4
            }
          ]
        },
        {
          "ndbno": "36633",
          "name": "Restaurant, Chinese, sesame chicken",
          "weight": 547,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "78.39",
              "gm": 14.33
            }
          ]
        },
        {
          "ndbno": "36617",
          "name": "Restaurant, Chinese, lemon chicken",
          "weight": 623,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "73.95",
              "gm": 11.87
            }
          ]
        },
        {
          "ndbno": "36621",
          "name": "Restaurant, Chinese, sweet and sour chicken",
          "weight": 706,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "71.31",
              "gm": 10.1
            }
          ]
        },
        {
          "ndbno": "36618",
          "name": "Restaurant, Chinese, general tso's chicken",
          "weight": 535,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "69.02",
              "gm": 12.9
            }
          ]
        },
        {
          "ndbno": "16108",
          "name": "Soybeans, mature seeds, raw",
          "weight": 186,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "67.87",
              "gm": 36.49
            }
          ]
        },
        {
          "ndbno": "16410",
          "name": "Soybeans, mature seeds, roasted, no salt added",
          "weight": 172,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "66.31",
              "gm": 38.55
            }
          ]
        },
        {
          "ndbno": "16110",
          "name": "Soybeans, mature seeds, roasted, salted",
          "weight": 172,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "66.31",
              "gm": 38.55
            }
          ]
        },
        {
          "ndbno": "35190",
          "name": "Salmon, red (sockeye), filets with skin, smoked (Alaska Native)",
          "weight": 108,
          "measure": "1.0 filet",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "65.47",
              "gm": 60.62
            }
          ]
        },
        {
          "ndbno": "16076",
          "name": "Lupins, mature seeds, raw",
          "weight": 180,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "65.11",
              "gm": 36.17
            }
          ]
        },
        {
          "ndbno": "36057",
          "name": "CARRABBA'S ITALIAN GRILL, chicken parmesan without cavatappi pasta",
          "weight": 339,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "64.41",
              "gm": 19
            }
          ]
        },
        {
          "ndbno": "11667",
          "name": "Seaweed, spirulina, dried",
          "weight": 112,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "64.37",
              "gm": 57.47
            }
          ]
        },
        {
          "ndbno": "13379",
          "name": "Beef, chuck, blade roast, separable lean and fat, trimmed to 0\" fat, all grades, cooked, braised",
          "weight": 235,
          "measure": "1.0 piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "63.87",
              "gm": 27.18
            }
          ]
        },
        {
          "ndbno": "16119",
          "name": "Soy meal, defatted, raw",
          "weight": 122,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "60.02",
              "gm": 49.2
            }
          ]
        },
        {
          "ndbno": "36619",
          "name": "Restaurant, Chinese, kung pao chicken",
          "weight": 604,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "58.95",
              "gm": 9.76
            }
          ]
        },
        {
          "ndbno": "21255",
          "name": "BURGER KING, DOUBLE WHOPPER, with cheese",
          "weight": 399,
          "measure": "1.0 item",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "57.74",
              "gm": 14.47
            }
          ]
        },
        {
          "ndbno": "36626",
          "name": "Restaurant, Chinese, chicken and vegetables",
          "weight": 693,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "56.69",
              "gm": 8.18
            }
          ]
        },
        {
          "ndbno": "21399",
          "name": "Fast Foods, cheeseburger; double, large patty; with condiments, vegetables and mayonnaise",
          "weight": 355,
          "measure": "1.0 item",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "55.02",
              "gm": 15.5
            }
          ]
        },
        {
          "ndbno": "36011",
          "name": "T.G.I. FRIDAY'S, classic sirloin steak (10 oz)",
          "weight": 176,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "54.60",
              "gm": 31.02
            }
          ]
        },
        {
          "ndbno": "36622",
          "name": "Restaurant, Chinese, sweet and sour pork",
          "weight": 609,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "54.26",
              "gm": 8.91
            }
          ]
        },
        {
          "ndbno": "16117",
          "name": "Soy flour, defatted",
          "weight": 105,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "54.03",
              "gm": 51.46
            }
          ]
        },
        {
          "ndbno": "16135",
          "name": "Winged beans, mature seeds, raw",
          "weight": 182,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "53.96",
              "gm": 29.65
            }
          ]
        },
        {
          "ndbno": "16083",
          "name": "Mungo beans, mature seeds, raw",
          "weight": 207,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "52.18",
              "gm": 25.21
            }
          ]
        },
        {
          "ndbno": "21254",
          "name": "BURGER KING, DOUBLE WHOPPER, no cheese",
          "weight": 374,
          "measure": "1.0 item",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "52.14",
              "gm": 13.94
            }
          ]
        },
        {
          "ndbno": "21389",
          "name": "Fast foods, hamburger; double, large patty; with condiments, vegetables and mayonnaise",
          "weight": 374,
          "measure": "1.0 item",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "52.14",
              "gm": 13.94
            }
          ]
        },
        {
          "ndbno": "21243",
          "name": "WENDY'S, CLASSIC DOUBLE, with cheese",
          "weight": 310,
          "measure": "1.0 item",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "51.21",
              "gm": 16.52
            }
          ]
        },
        {
          "ndbno": "16067",
          "name": "Hyacinth beans, mature seeds, raw",
          "weight": 210,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "50.19",
              "gm": 23.9
            }
          ]
        },
        {
          "ndbno": "14058",
          "name": "Beverages, Whey protein powder isolate",
          "weight": 86,
          "measure": "3.0 scoop",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "50.00",
              "gm": 58.14
            }
          ]
        },
        {
          "ndbno": "36041",
          "name": "Restaurant, Italian, lasagna with meat",
          "weight": 457,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "49.49",
              "gm": 10.83
            }
          ]
        },
        {
          "ndbno": "36013",
          "name": "Restaurant, family style, sirloin steak",
          "weight": 166,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "49.47",
              "gm": 29.8
            }
          ]
        },
        {
          "ndbno": "16080",
          "name": "Mung beans, mature seeds, raw",
          "weight": 207,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "49.39",
              "gm": 23.86
            }
          ]
        },
        {
          "ndbno": "36059",
          "name": "Restaurant, Italian, chicken parmesan without pasta",
          "weight": 301,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "48.67",
              "gm": 16.17
            }
          ]
        },
        {
          "ndbno": "12160",
          "name": "Seeds, cottonseed kernels, roasted (glandless)",
          "weight": 149,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "48.56",
              "gm": 32.59
            }
          ]
        },
        {
          "ndbno": "21469",
          "name": "Fast Foods, Fried Chicken, Breast, meat and skin and breading",
          "weight": 203,
          "measure": "1.0 breast, with skin",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "47.73",
              "gm": 23.51
            }
          ]
        },
        {
          "ndbno": "36042",
          "name": "OLIVE GARDEN, lasagna classico",
          "weight": 422,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "47.60",
              "gm": 11.28
            }
          ]
        },
        {
          "ndbno": "36608",
          "name": "CRACKER BARREL, grilled sirloin steak",
          "weight": 151,
          "measure": "1.0 steak",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "47.60",
              "gm": 31.52
            }
          ]
        },
        {
          "ndbno": "21396",
          "name": "Fast foods, cheeseburger; double, large patty; with condiments",
          "weight": 280,
          "measure": "1.0 item",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "47.49",
              "gm": 16.96
            }
          ]
        },
        {
          "ndbno": "21345",
          "name": "McDONALD'S, DOUBLE QUARTER POUNDER with Cheese",
          "weight": 280,
          "measure": "1.0 item",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "47.49",
              "gm": 16.96
            }
          ]
        },
        {
          "ndbno": "16069",
          "name": "Lentils, raw",
          "weight": 192,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "47.29",
              "gm": 24.63
            }
          ]
        },
        {
          "ndbno": "16049",
          "name": "Beans, white, mature seeds, raw",
          "weight": 202,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "47.19",
              "gm": 23.36
            }
          ]
        },
        {
          "ndbno": "05021",
          "name": "Chicken, broilers or fryers, giblets, cooked, fried",
          "weight": 145,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "47.18",
              "gm": 32.54
            }
          ]
        },
        {
          "ndbno": "16035",
          "name": "Beans, kidney, royal red, mature seeds, raw",
          "weight": 184,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "46.61",
              "gm": 25.33
            }
          ]
        },
        {
          "ndbno": "36058",
          "name": "OLIVE GARDEN, chicken parmigiana without pasta",
          "weight": 304,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "46.60",
              "gm": 15.33
            }
          ]
        },
        {
          "ndbno": "21434",
          "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Breast, meat and skin with breading",
          "weight": 212,
          "measure": "1.0 breast, with skin",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "46.51",
              "gm": 21.94
            }
          ]
        },
        {
          "ndbno": "16037",
          "name": "Beans, navy, mature seeds, raw",
          "weight": 208,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "46.45",
              "gm": 22.33
            }
          ]
        },
        {
          "ndbno": "05130",
          "name": "Chicken, stewing, light meat, meat only, cooked, stewed",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "46.26",
              "gm": 33.04
            }
          ]
        },
        {
          "ndbno": "21461",
          "name": "Fast foods, grilled chicken, bacon and tomato club sandwich, with cheese, lettuce, and mayonnaise",
          "weight": 268,
          "measure": "1.0 sandwich",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "46.07",
              "gm": 17.19
            }
          ]
        },
        {
          "ndbno": "05040",
          "name": "Chicken, broilers or fryers, light meat, meat only, cooked, fried",
          "weight": 140,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "45.95",
              "gm": 32.82
            }
          ]
        },
        {
          "ndbno": "16144",
          "name": "Lentils, pink or red, raw",
          "weight": 192,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "45.91",
              "gm": 23.91
            }
          ]
        },
        {
          "ndbno": "36043",
          "name": "CARRABBA'S ITALIAN GRILL, lasagne",
          "weight": 437,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "45.80",
              "gm": 10.48
            }
          ]
        },
        {
          "ndbno": "07969",
          "name": "Kielbasa, fully cooked, pan-fried",
          "weight": 370,
          "measure": "1.0 link",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "45.73",
              "gm": 12.36
            }
          ]
        },
        {
          "ndbno": "16045",
          "name": "Beans, small white, mature seeds, raw",
          "weight": 215,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "45.39",
              "gm": 21.11
            }
          ]
        },
        {
          "ndbno": "43283",
          "name": "Pheasant, cooked, total edible",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "45.36",
              "gm": 32.4
            }
          ]
        },
        {
          "ndbno": "16085",
          "name": "Peas, green, split, mature seeds, raw",
          "weight": 196,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "45.32",
              "gm": 23.12
            }
          ]
        },
        {
          "ndbno": "21438",
          "name": "KFC, Fried Chicken, EXTRA CRISPY, Breast, meat and skin with breading",
          "weight": 212,
          "measure": "1.0 breast, with skin",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "45.03",
              "gm": 21.24
            }
          ]
        },
        {
          "ndbno": "16078",
          "name": "Mothbeans, mature seeds, raw",
          "weight": 196,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "44.96",
              "gm": 22.94
            }
          ]
        },
        {
          "ndbno": "16019",
          "name": "Beans, cranberry (roman), mature seeds, raw",
          "weight": 195,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "44.91",
              "gm": 23.03
            }
          ]
        },
        {
          "ndbno": "16030",
          "name": "Beans, kidney, california red, mature seeds, raw",
          "weight": 184,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "44.84",
              "gm": 24.37
            }
          ]
        },
        {
          "ndbno": "16101",
          "name": "Pigeon peas (red gram), mature seeds, raw",
          "weight": 205,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "44.48",
              "gm": 21.7
            }
          ]
        },
        {
          "ndbno": "36032",
          "name": "DENNY'S, spaghetti and meatballs",
          "weight": 565,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "44.30",
              "gm": 7.84
            }
          ]
        },
        {
          "ndbno": "05024",
          "name": "Chicken, gizzard, all classes, cooked, simmered",
          "weight": 145,
          "measure": "1.0 cup chopped or dice",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "44.07",
              "gm": 30.39
            }
          ]
        },
        {
          "ndbno": "21153",
          "name": "Fast foods, submarine sandwich, turkey, roast beef and ham on white bread with lettuce and tomato",
          "weight": 413,
          "measure": "12.0 inch sub",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "44.03",
              "gm": 10.66
            }
          ]
        },
        {
          "ndbno": "16040",
          "name": "Beans, pink, mature seeds, raw",
          "weight": 210,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "44.02",
              "gm": 20.96
            }
          ]
        },
        {
          "ndbno": "05161",
          "name": "Squab, (pigeon), meat only, raw",
          "weight": 251,
          "measure": "1.0 unit (yield from 1 lb ready-to-cook squab)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "43.92",
              "gm": 17.5
            }
          ]
        },
        {
          "ndbno": "16118",
          "name": "Soy flour, low-fat",
          "weight": 88,
          "measure": "1.0 cup, stirred",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "43.83",
              "gm": 49.81
            }
          ]
        },
        {
          "ndbno": "05064",
          "name": "Chicken, broilers or fryers, breast, meat only, cooked, roasted",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "43.43",
              "gm": 31.02
            }
          ]
        },
        {
          "ndbno": "16027",
          "name": "Beans, kidney, all types, mature seeds, raw",
          "weight": 184,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "43.39",
              "gm": 23.58
            }
          ]
        },
        {
          "ndbno": "15225",
          "name": "Fish, yellowtail, mixed species, cooked, dry heat",
          "weight": 146,
          "measure": "0.5 fillet",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "43.32",
              "gm": 29.67
            }
          ]
        },
        {
          "ndbno": "05041",
          "name": "Chicken, broilers or fryers, light meat, meat only, cooked, roasted",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "43.27",
              "gm": 30.91
            }
          ]
        },
        {
          "ndbno": "10181",
          "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, pan-fried",
          "weight": 142,
          "measure": "1.0 chop",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "43.25",
              "gm": 30.46
            }
          ]
        },
        {
          "ndbno": "16047",
          "name": "Beans, yellow, mature seeds, raw",
          "weight": 196,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "43.12",
              "gm": 22
            }
          ]
        },
        {
          "ndbno": "05012",
          "name": "Chicken, broilers or fryers, meat only, cooked, fried",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "42.80",
              "gm": 30.57
            }
          ]
        },
        {
          "ndbno": "36060",
          "name": "ON THE BORDER, soft taco with ground beef, cheese and lettuce",
          "weight": 324,
          "measure": "1.0 serving varied from 2-3 tacos per serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "42.74",
              "gm": 13.19
            }
          ]
        },
        {
          "ndbno": "15119",
          "name": "Fish, tuna, light, canned in oil, drained solids",
          "weight": 146,
          "measure": "1.0 cup, solid or chunks",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "42.53",
              "gm": 29.13
            }
          ]
        },
        {
          "ndbno": "36000",
          "name": "APPLEBEE'S, 9 oz house sirloin steak",
          "weight": 157,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "42.15",
              "gm": 26.85
            }
          ]
        },
        {
          "ndbno": "21456",
          "name": "POPEYES, Fried Chicken, Mild, Breast, meat and skin with breading",
          "weight": 194,
          "measure": "1.0 breast, with skin",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "42.04",
              "gm": 21.67
            }
          ]
        },
        {
          "ndbno": "36020",
          "name": "T.G.I. FRIDAY'S, chicken fingers",
          "weight": 225,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "42.03",
              "gm": 18.68
            }
          ]
        },
        {
          "ndbno": "17008",
          "name": "Lamb, foreshank, separable lean and fat, trimmed to 1/4\" fat, choice, cooked, braised",
          "weight": 148,
          "measure": "1.0 piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.99",
              "gm": 28.37
            }
          ]
        },
        {
          "ndbno": "17229",
          "name": "Lamb, foreshank, separable lean and fat, trimmed to 1/8\" fat, cooked, braised",
          "weight": 148,
          "measure": "1.0 piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.99",
              "gm": 28.37
            }
          ]
        },
        {
          "ndbno": "16014",
          "name": "Beans, black, mature seeds, raw",
          "weight": 194,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.90",
              "gm": 21.6
            }
          ]
        },
        {
          "ndbno": "05060",
          "name": "Chicken, broilers or fryers, breast, meat and skin, cooked, roasted",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.72",
              "gm": 29.8
            }
          ]
        },
        {
          "ndbno": "21462",
          "name": "Fast foods, crispy chicken, bacon, and tomato club sandwich, with cheese, lettuce, and mayonnaise",
          "weight": 271,
          "measure": "1.0 sandwich",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.68",
              "gm": 15.38
            }
          ]
        },
        {
          "ndbno": "16074",
          "name": "Lima beans, thin seeded (baby), mature seeds, raw",
          "weight": 202,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.65",
              "gm": 20.62
            }
          ]
        },
        {
          "ndbno": "43340",
          "name": "Cheese, parmesan, low sodium",
          "weight": 100,
          "measure": "1.0 cup, grated",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.60",
              "gm": 41.6
            }
          ]
        },
        {
          "ndbno": "16032",
          "name": "Beans, kidney, red, mature seeds, raw",
          "weight": 184,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.46",
              "gm": 22.53
            }
          ]
        },
        {
          "ndbno": "05149",
          "name": "Goose, domesticated, meat only, cooked, roasted",
          "weight": 143,
          "measure": "1.0 unit (yield from 1 lb ready-to-cook goose)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.43",
              "gm": 28.97
            }
          ]
        },
        {
          "ndbno": "16042",
          "name": "Beans, pinto, mature seeds, raw (Includes foods for USDA's Food Distribution Program)",
          "weight": 193,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.34",
              "gm": 21.42
            }
          ]
        },
        {
          "ndbno": "10067",
          "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, braised",
          "weight": 135,
          "measure": "1.0 chop",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.23",
              "gm": 30.54
            }
          ]
        },
        {
          "ndbno": "16092",
          "name": "Peanuts, spanish, oil-roasted, with salt",
          "weight": 147,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.17",
              "gm": 28.01
            }
          ]
        },
        {
          "ndbno": "16392",
          "name": "Peanuts, spanish, oil-roasted, without salt",
          "weight": 147,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.17",
              "gm": 28.01
            }
          ]
        },
        {
          "ndbno": "36023",
          "name": "APPLEBEE'S, chicken tenders platter",
          "weight": 209,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "41.01",
              "gm": 19.62
            }
          ]
        },
        {
          "ndbno": "01134",
          "name": "Egg, whole, dried, stabilized, glucose reduced",
          "weight": 85,
          "measure": "1.0 cup, sifted",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.94",
              "gm": 48.17
            }
          ]
        },
        {
          "ndbno": "16056",
          "name": "Chickpeas (garbanzo beans, bengal gram), mature seeds, raw",
          "weight": 200,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.94",
              "gm": 20.47
            }
          ]
        },
        {
          "ndbno": "21425",
          "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Breast, meat only, skin and breading removed",
          "weight": 152,
          "measure": "1.0 breast without skin",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.87",
              "gm": 26.89
            }
          ]
        },
        {
          "ndbno": "01133",
          "name": "Egg, whole, dried",
          "weight": 85,
          "measure": "1.0 cup, sifted",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.84",
              "gm": 48.05
            }
          ]
        },
        {
          "ndbno": "36606",
          "name": "CRACKER BARREL, farm raised catfish platter",
          "weight": 178,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.83",
              "gm": 22.94
            }
          ]
        },
        {
          "ndbno": "36623",
          "name": "Restaurant, Chinese, chicken chow mein",
          "weight": 604,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.83",
              "gm": 6.76
            }
          ]
        },
        {
          "ndbno": "17033",
          "name": "Lamb, rib, separable lean only, trimmed to 1/4\" fat, choice, cooked, broiled",
          "weight": 147,
          "measure": "1.0 piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.78",
              "gm": 27.74
            }
          ]
        },
        {
          "ndbno": "36603",
          "name": "Restaurant, Chinese, beef and vegetables",
          "weight": 574,
          "measure": "1.0 order",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.64",
              "gm": 7.08
            }
          ]
        },
        {
          "ndbno": "16133",
          "name": "Yardlong beans, mature seeds, raw",
          "weight": 167,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.63",
              "gm": 24.33
            }
          ]
        },
        {
          "ndbno": "05044",
          "name": "Chicken, broilers or fryers, dark meat, meat only, cooked, fried",
          "weight": 140,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.59",
              "gm": 28.99
            }
          ]
        },
        {
          "ndbno": "05065",
          "name": "Chicken, broilers or fryers, breast, meat only, cooked, stewed",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.57",
              "gm": 28.98
            }
          ]
        },
        {
          "ndbno": "15178",
          "name": "Mollusks, whelk, unspecified, cooked, moist heat",
          "weight": 85,
          "measure": "3.0 oz",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.53",
              "gm": 47.68
            }
          ]
        },
        {
          "ndbno": "21411",
          "name": "Fast foods, bagel, with breakfast steak, egg, cheese, and condiments",
          "weight": 254,
          "measure": "1.0 item",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.51",
              "gm": 15.95
            }
          ]
        },
        {
          "ndbno": "05013",
          "name": "Chicken, broilers or fryers, meat only, cooked, roasted",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.50",
              "gm": 28.93
            }
          ]
        },
        {
          "ndbno": "05042",
          "name": "Chicken, broilers or fryers, light meat, meat only, cooked, stewed",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.43",
              "gm": 28.88
            }
          ]
        },
        {
          "ndbno": "16089",
          "name": "Peanuts, all types, oil-roasted, with salt",
          "weight": 144,
          "measure": "1.0 cup, chopped",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.36",
              "gm": 28.03
            }
          ]
        },
        {
          "ndbno": "16389",
          "name": "Peanuts, all types, oil-roasted, without salt",
          "weight": 144,
          "measure": "1.0 cup,",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.36",
              "gm": 28.03
            }
          ]
        },
        {
          "ndbno": "10209",
          "name": "Pork, fresh, loin, country-style ribs, separable lean only, bone-in, cooked, roasted",
          "weight": 138,
          "measure": "1.0 rack",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.30",
              "gm": 29.2
            }
          ]
        },
        {
          "ndbno": "16111",
          "name": "Soybeans, mature seeds, dry roasted",
          "weight": 93,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.29",
              "gm": 43.32
            }
          ]
        },
        {
          "ndbno": "16024",
          "name": "Beans, great northern, mature seeds, raw (Includes foods for USDA's Food Distribution Program)",
          "weight": 183,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "40.00",
              "gm": 21.86
            }
          ]
        },
        {
          "ndbno": "10068",
          "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, broiled",
          "weight": 145,
          "measure": "1.0 chop",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.99",
              "gm": 27.58
            }
          ]
        },
        {
          "ndbno": "21490",
          "name": "Fast Foods, grilled chicken filet sandwich, with lettuce, tomato and spread",
          "weight": 230,
          "measure": "1.0 sandwich",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.88",
              "gm": 17.34
            }
          ]
        },
        {
          "ndbno": "16060",
          "name": "Cowpeas, catjang, mature seeds, raw",
          "weight": 167,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.83",
              "gm": 23.85
            }
          ]
        },
        {
          "ndbno": "43128",
          "name": "Chicken, meatless",
          "weight": 168,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.72",
              "gm": 23.64
            }
          ]
        },
        {
          "ndbno": "10011",
          "name": "Pork, fresh, leg (ham), whole, separable lean only, cooked, roasted",
          "weight": 135,
          "measure": "1.0 cup, diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.70",
              "gm": 29.41
            }
          ]
        },
        {
          "ndbno": "17010",
          "name": "Lamb, foreshank, separable lean only, trimmed to 1/4\" fat, choice, cooked, braised",
          "weight": 128,
          "measure": "1.0 piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.69",
              "gm": 31.01
            }
          ]
        },
        {
          "ndbno": "21464",
          "name": "Fast Foods, Fried Chicken, Breast, meat only, skin and breading removed",
          "weight": 142,
          "measure": "1.0 breast without skin",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.66",
              "gm": 27.93
            }
          ]
        },
        {
          "ndbno": "10063",
          "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, cooked, braised",
          "weight": 135,
          "measure": "1.0 chop",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.42",
              "gm": 29.2
            }
          ]
        },
        {
          "ndbno": "05132",
          "name": "Chicken, stewing, dark meat, meat only, cooked, stewed",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.40",
              "gm": 28.14
            }
          ]
        },
        {
          "ndbno": "16062",
          "name": "Cowpeas, common (blackeyes, crowder, southern), mature seeds, raw",
          "weight": 167,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.28",
              "gm": 23.52
            }
          ]
        },
        {
          "ndbno": "16052",
          "name": "Broadbeans (fava beans), mature seeds, raw",
          "weight": 150,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.18",
              "gm": 26.12
            }
          ]
        },
        {
          "ndbno": "16001",
          "name": "Beans, adzuki, mature seeds, raw",
          "weight": 197,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.14",
              "gm": 19.87
            }
          ]
        },
        {
          "ndbno": "16016",
          "name": "Beans, black turtle, mature seeds, raw",
          "weight": 184,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.10",
              "gm": 21.25
            }
          ]
        },
        {
          "ndbno": "10042",
          "name": "Pork, fresh, loin, center loin (chops), bone-in, separable lean only, cooked, broiled",
          "weight": 146,
          "measure": "1.0 chop without refuse (Yield from 1 cooked chop, with refuse, weighing 209g)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.07",
              "gm": 26.76
            }
          ]
        },
        {
          "ndbno": "12014",
          "name": "Seeds, pumpkin and squash seed kernels, dried",
          "weight": 129,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "39.00",
              "gm": 30.23
            }
          ]
        },
        {
          "ndbno": "16394",
          "name": "Peanuts, valencia, oil-roasted, without salt",
          "weight": 144,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.94",
              "gm": 27.04
            }
          ]
        },
        {
          "ndbno": "16094",
          "name": "Peanuts, valencia, oil-roasted, with salt",
          "weight": 144,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.94",
              "gm": 27.04
            }
          ]
        },
        {
          "ndbno": "05116",
          "name": "Chicken, roasting, giblets, cooked, simmered",
          "weight": 145,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.82",
              "gm": 26.77
            }
          ]
        },
        {
          "ndbno": "10064",
          "name": "Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, cooked, broiled",
          "weight": 145,
          "measure": "1.0 chop",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.60",
              "gm": 26.62
            }
          ]
        },
        {
          "ndbno": "12007",
          "name": "Seeds, cottonseed flour, partially defatted (glandless)",
          "weight": 94,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.50",
              "gm": 40.96
            }
          ]
        },
        {
          "ndbno": "05061",
          "name": "Chicken, broilers or fryers, breast, meat and skin, cooked, stewed",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.35",
              "gm": 27.39
            }
          ]
        },
        {
          "ndbno": "05045",
          "name": "Chicken, broilers or fryers, dark meat, meat only, cooked, roasted",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.32",
              "gm": 27.37
            }
          ]
        },
        {
          "ndbno": "05026",
          "name": "Chicken, heart, all classes, cooked, simmered",
          "weight": 145,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.29",
              "gm": 26.41
            }
          ]
        },
        {
          "ndbno": "05138",
          "name": "Chicken, capons, giblets, cooked, simmered",
          "weight": 145,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.27",
              "gm": 26.39
            }
          ]
        },
        {
          "ndbno": "21442",
          "name": "POPEYES, Fried Chicken, Mild, Breast, meat only, skin and breading removed",
          "weight": 132,
          "measure": "1.0 breast without skin",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.25",
              "gm": 28.98
            }
          ]
        },
        {
          "ndbno": "05014",
          "name": "Chicken, broilers or fryers, meat only, cooked, stewed",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.21",
              "gm": 27.29
            }
          ]
        },
        {
          "ndbno": "16071",
          "name": "Lima beans, large, mature seeds, raw",
          "weight": 178,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.20",
              "gm": 21.46
            }
          ]
        },
        {
          "ndbno": "16091",
          "name": "Peanuts, spanish, raw",
          "weight": 146,
          "measure": "1.0 cup",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.18",
              "gm": 26.15
            }
          ]
        },
        {
          "ndbno": "21430",
          "name": "KFC, Fried Chicken, EXTRA CRISPY, Breast, meat only, skin and breading removed",
          "weight": 140,
          "measure": "1.0 breast, without skin",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "38.15",
              "gm": 27.25
            }
          ]
        },
        {
          "ndbno": "05118",
          "name": "Chicken, roasting, light meat, meat only, cooked, roasted",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "37.98",
              "gm": 27.13
            }
          ]
        },
        {
          "ndbno": "36034",
          "name": "Restaurant, family style, chicken tenders",
          "weight": 201,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "37.95",
              "gm": 18.88
            }
          ]
        },
        {
          "ndbno": "05128",
          "name": "Chicken, stewing, giblets, cooked, simmered",
          "weight": 145,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "37.31",
              "gm": 25.73
            }
          ]
        },
        {
          "ndbno": "05190",
          "name": "Turkey, all classes, back, meat and skin, cooked, roasted",
          "weight": 140,
          "measure": "1.0 cup, chopped or diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "37.23",
              "gm": 26.59
            }
          ]
        },
        {
          "ndbno": "42155",
          "name": "Cheese, monterey, low fat",
          "weight": 132,
          "measure": "1.0 cup, diced",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "37.22",
              "gm": 28.2
            }
          ]
        },
        {
          "ndbno": "13150",
          "name": "Beef, rib, shortribs, separable lean only, choice, cooked, braised",
          "weight": 121,
          "measure": "1.0 piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "37.22",
              "gm": 30.76
            }
          ]
        },
        {
          "ndbno": "36027",
          "name": "DENNY'S, chicken strips",
          "weight": 194,
          "measure": "1.0 serving",
          "nutrients": [
            {
              "nutrient_id": "203",
              "nutrient": "Protein",
              "unit": "g",
              "value": "37.19",
              "gm": 19.17
            }
          ]
        }
      ]
    }
  }

console.log(nutrientReport.report.foods[0].name); 
console.log(nutrientReport.report.foods[0].nutrients[0].gm);

  
$(function() {
    console.log('Waiting...');
    watchForm();
});