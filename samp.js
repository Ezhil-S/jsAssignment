var fs = require("fs");
var csv2array=require('csv2array');

var data = fs.readFileSync('ff.csv');
var stringData=data.toString();

//console.log(stringData);
var arrayOne= stringData.split('\r\n');
//console.log(arrayOne);

var header=arrayOne[0].split(',');
var sugarIndex,saltIndex,countriesIndex,count=0;
sugarIndex=header.indexOf('sugars_100g');
saltIndex=header.indexOf('salt_100g');
countriesIndex=header.indexOf('countries');


var noOfRow = arrayOne.length;
var noOfCol = header.length;

var jArray=[];
var obj1={};
var i,j;
var arr=["Netherlands", "Canada", "United Kingdom", "Australia", "France", "Germany", "Spain","South Africa"]
for (i = 1; i < noOfRow-1; i++) {
   var myNewLine=csv2array(arrayOne[i])[0];
  // console.log(myNewLine[0]);
  //  for (j = 0; j< noOfCol; j++) {

  //   //   var myNewLine=arrayOne[i].split(',');
   //
// }

   obj1[header[countriesIndex]]=myNewLine[countriesIndex];
   obj1[header[sugarIndex]]=myNewLine[sugarIndex];
   obj1[header[saltIndex]]=myNewLine[saltIndex];
   for(j=0;j<arr.length;j++)
    {
     if(obj1.countries==arr[j])
     {
     jArray.push(obj1);
      }
    }
   obj1={};
};

var jArray1=[];
var sugars_100g=0,salt_100g=0;
for(i=0;i<arr.length;i++)
add(arr[i]);

function add(country)
{
  var obj2={};
  for(var i=0;i<jArray.length;i++)
  {
  if(jArray[i].countries===country&&jArray[i].salt_100g!=''&&jArray[i].sugars_100g!='')
  {
    if(jArray[i].sugars_100g!=''){
      count++;
    sugars_100g+=parseFloat(jArray[i].sugars_100g);
  }
}
}
sugars_100g=sugars_100g/count;
count=0;
obj2["countries"]=country;
obj2["indicator"]="sugars_100g";
obj2["value"]=sugars_100g;

jArray1.push(obj2);
obj2={};

for(var i=0;i<jArray.length;i++)
{
if(jArray[i].countries===country&&jArray[i].salt_100g!=''&&jArray[i].sugars_100g!='')
{
  if(jArray[i].sugars_100g!=''){
    count++;
    salt_100g+=parseFloat(jArray[i].salt_100g);
}
}
}
salt_100g=salt_100g/count;
obj2["countries"]=country;
obj2["indicator"]="salt_100g";
obj2["value"]=salt_100g;


jArray1.push(obj2);
sugars_100g=0;
salt_100g=0;
}

var file = 'data1.json';
var obj=JSON.stringify(jArray1);
console.log( jArray1);
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
var arr=["United Kingdom", "Denmark", "Sweden","Norway","France", "Belgium", "Germany", "Switzerland", "Netherlands","Portugal", "Greece", "Italy", "Spain", "Croatia", "Albania"];
for (i = 1; i < noOfRow-1; i++) {
   var myNewLine=csv2array(arrayOne[i])[0];
  //  for (j = 0; j< noOfCol; j++) {

  //      var myNewLine=arrayOne[i].split(',');
   //
  //  };

   obj1[header[countriesIndex]]=myNewLine[countriesIndex];
   obj1[header[fatIndex]]=myNewLine[fatIndex];
   obj1[header[carbohydratesIndex]]=myNewLine[carbohydratesIndex];
   obj1[header[proteinsIndex]]=myNewLine[proteinsIndex];
    for(j=0;j<arr.length;j++)
     {
      if(obj1.countries==arr[j])
      {
      jArray.push(obj1);
       }
     }
   obj1={};
};


var jArray1=[];
var fat_100g=0,carbohydrates_100g=0,proteins_100g=0;
for(i=0;i<arr.length;i++)
add1(arr[i]);

function add1(country){
  var obj2={};
  for(var i=0;i<jArray.length;i++)
  {
  if(jArray[i].countries===country&&jArray[i].fat_100g!=''&&jArray[i].carbohydrates_100g!=''&&jArray[i].proteins_100g!='')
  {
    fat_100g+=parseFloat(jArray[i].fat_100g);
    carbohydrates_100g+=parseFloat(jArray[i].carbohydrates_100g);
    proteins_100g+=parseFloat(jArray[i].proteins_100g);
  }
}
obj2["countries"]=country;
obj2["fat_100g"]=fat_100g;
obj2["carbohydrates_100g"]=carbohydrates_100g;
obj2["proteins_100g"]=proteins_100g;

jArray1.push(obj2);
fat_100g=0;
carbohydrates_100g=0;
proteins_100g=0;
}
var file = 'data2.json';
var obj=JSON.stringify(jArray1);
console.log( jArray1);
fs.writeFileSync(file, obj);
