var csv2array = require('csv2array');
var map = require('./mapper.json');
var fs = require('fs');

var data = fs.readFileSync('FoodFacts.csv','utf8');

var dataset = data.split('\r\n');
var header;
var indexOfCountry, indexOfFat, indexOfCarbohydrates, indexOfProtien;
var regionWiseNutrition = {};

dataset.forEach(function(data,index) {
  if(data!="") {
    var line = csv2array(data)[0];
    // console.log(line);
    if(index == 0) {
      header = line;
      indexOfFat = line.indexOf('fat_100g');
      indexOfCarbohydrates = line.indexOf('carbohydrates_100g');
      indexOfProtien = line.indexOf('proteins_100g');
      indexOfCountry = line.indexOf('countries');
    }
    else {
      if(line==undefined) {
        console.log(index);
        console.log(line);
        console.log(data);
        console.log(csv2array(data));
      }
      if(map[line[indexOfCountry]]!=undefined) {
        if(regionWiseNutrition[map[line[indexOfCountry]]]==undefined) {
          regionWiseNutrition[map[line[indexOfCountry]]] = {};
          regionWiseNutrition[map[line[indexOfCountry]]][header[indexOfFat]] = 0;
          regionWiseNutrition[map[line[indexOfCountry]]][header[indexOfCarbohydrates]] = 0;
          regionWiseNutrition[map[line[indexOfCountry]]][header[indexOfProtien]] = 0;
        }
        regionWiseNutrition[map[line[indexOfCountry]]][header[indexOfFat]] += parseFloat(line[indexOfFat])?parseFloat(line[indexOfFat]):0;
        regionWiseNutrition[map[line[indexOfCountry]]][header[indexOfCarbohydrates]] += parseFloat(line[indexOfCarbohydrates])?parseFloat(line[indexOfCarbohydrates]):0;
        regionWiseNutrition[map[line[indexOfCountry]]][header[indexOfProtien]] += parseFloat(line[indexOfProtien])?parseFloat(line[indexOfProtien]):0;
      }
    }
  }
});
var arrayOfRegionWiseNutrition = [];
for(var property in regionWiseNutrition) {
  var nutritionData = regionWiseNutrition[property];
  nutritionData.region = property;
  arrayOfRegionWiseNutrition.push(nutritionData);
}
//console.log(arrayOfRegionWiseNutrition);
var file = 'data2.json';
var obj=JSON.stringify(arrayOfRegionWiseNutrition);
console.log(arrayOfRegionWiseNutrition);
fs.writeFileSync(file, obj);
