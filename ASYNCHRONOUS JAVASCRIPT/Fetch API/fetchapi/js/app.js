document.getElementById('button1').addEventListener('click', loadTxt);

document.getElementById('button2').addEventListener('click', loadJson);

document.getElementById('button3').addEventListener('click', loadApi);



function loadTxt(){
  fetch('data.txt')
    .then((res) => res.text())

    .then((data) => {
      console.log(data);
      document.getElementById('result').innerHTML = data;
    })

    .catch(error => console.log(error));
}

//fetch returns promises and to get the response from a promise, we use .then

function loadJson(){
  fetch('employees.json')
    .then((res) => res.json())

    .then((data) => {
      console.log(data);

      let result = '';
      data.forEach((employees) => {
        result +=`<li> ${employees.name}: ${employees.job}</li>`
      }) 
      document.getElementById('result').innerHTML = result
    })

    .catch(error => console.log(error) );
}


function loadApi(){
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })

    .then(function(data){
      console.log(data);

      let result = '';
      data.forEach(function(user){
        result +=`<li> ${user.login}</li>`
      }) 
      document.getElementById('result').innerHTML = result
    })

    .catch(function(error){
      console.log(error);
    });
}

