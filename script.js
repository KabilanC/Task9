// a)Get all the countries from Asia continent 

var data=new XMLHttpRequest();

data.open('GET','https://restcountries.com/v2/all',true);

data.send();
data.onload=function(){
    
    var name=JSON.parse(data.response)

   
     let cd=name.filter((element)=>element.region=="Asia");
    console.log (cd);
    
}


// b) Get all the countries with a population 

var data=new XMLHttpRequest();

data.open('GET','https://restcountries.com/v2/all',true);

data.send();

data.onload=function(){
    
    var value=JSON.parse(data.response)

   
     let ab=value.filter((element)=>element.population<200000);
    console.log (ab);
    
}

// 3)Print the following details name, capital, flag 

var data=new XMLHttpRequest();

data.open('GET','https://restcountries.com/v2/all',true);

data.send();

data.onload=function(){
  
    
    var value=JSON.parse(data.response)
    console.log(value)
   
     value.forEach(function(element){
        console  .log(element.name)
        console.log(element.capital)
        console.log(element.flag)

     });
    
    
}

// 4)Print the total population of countries

var  request= new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function(){
var data=JSON.parse(request.response);

var res=data.reduce((acc,element)=>{
    return acc+element.population;
},0)
console.log(res);


}