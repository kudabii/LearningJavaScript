const countries = ['Canada ', 'Nigeria ', 'Togo ' , 'Japan '];


function newCountry (country, callback){
  setTimeout (function(){
    //add the new country
    countries.push(country);

    //execute the callback
    callback();
  },2000);
}


//display the countries after one second

function displaycountries(){
  setTimeout(function(){
    let html = '';
    countries.forEach(function(country){
      html += 
      `<li> ${country}</li>`
    });
    document.body.innerHTML = html;
  }, 1000);
}

newCountry('Jamaica', displaycountries);

displaycountries();