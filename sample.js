var fs = require("fs");

var data = fs.readFileSync('ff.csv');
var stringData=data.toString();

//console.log(stringData);
var arrayOne= stringData.split('\r\n');
//console.log(arrayOne);

var header=arrayOne[0].split(',');
var sugarIndex,saltIndex,countriesIndex;
sugarIndex=header.indexOf('sugars_100g');
saltIndex=header.indexOf('salt_100g');
countriesIndex=header.indexOf('countries');
//console.log(header[cnt]);

var noOfRow = arrayOne.length;
var noOfCol = header.length;

var jArray=[];
var obj1={};
var i,j;
for (i = 1; i < noOfRow-1; i++) {

   for (j = 0; j< noOfCol; j++) {

       var myNewLine=arrayOne[i].split(',');

   };

   obj1[header[countriesIndex]]=myNewLine[countriesIndex];
   obj1[header[sugarIndex]]=myNewLine[sugarIndex];
   obj1[header[saltIndex]]=myNewLine[saltIndex];
   if((obj1.countries == "France") ||(obj1.countries=="Canada")||(obj1.countries=="United Kingdom")||(obj1.countries=="Usa")||(obj1.countries=="Australia")||(obj1.countries=="France")||(obj1.countries=="Germany")||(obj1.countries=="Spain")||(obj1.countries=="South Africa"))
   {
   jArray.push(obj1);
   }
   obj1={};
};
var file = 'data.json';
var obj=JSON.stringify(jArray);
console.log( jArray);
fs.writeFileSync(file, obj);


//data2
var jArray=[];
var obj1={};
var fatIndex,carbohydratesIndex,proteinsIndex,countriesIndex;
countriesIndex=header.indexOf('countries');
fatIndex=header.indexOf('fat_100g');
carbohydratesIndex=header.indexOf('carbohydrates_100g');
proteinsIndex=header.indexOf('proteins_100g');

var i,j;
for (i = 1; i < noOfRow-1; i++) {

   for (j = 0; j< noOfCol; j++) {

       var myNewLine=arrayOne[i].split(',');

   };
   obj1[header[countriesIndex]]=myNewLine[countriesIndex];
   obj1[header[fatIndex]]=myNewLine[fatIndex];
   obj1[header[carbohydratesIndex]]=myNewLine[carbohydratesIndex];
   obj1[header[proteinsIndex]]=myNewLine[proteinsIndex];
   if((obj1.countries == "France") ||(obj1.countries=="Canada")||(obj1.countries=="United Kingdom")||(obj1.countries=="Usa")||(obj1.countries=="Australia")||(obj1.countries=="France")||(obj1.countries=="Germany")||(obj1.countries=="Spain")||(obj1.countries=="South Africa"))
   {
   jArray.push(obj1);
   }
   obj1={};
};
var file = 'data2.json';
var obj=JSON.stringify(jArray);
console.log( jArray);
fs.writeFileSync(file, obj);
