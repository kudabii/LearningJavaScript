document.querySelector('#load').addEventListener('click',loadposts);


function loadposts(){
     const xhr = new XMLHttpRequest();

     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true );

     xhr.onload = function(){
          if (this.status === 200){
               const response = JSON.parse(this.responseText );

               //to  print the content of the array 
               let output = '';

               response.forEach(function(post){
                    output+= `
                         <h3>${post.title}</h3>
                         <p>${post.body}<p>
                    `
               })
               document.getElementById('result').innerHTML = output;
          }
     }
     xhr.send();
}