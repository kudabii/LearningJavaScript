document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //when orking with AJAX , you have to perform 4 diffferent steps
  //1.create the new XMLHttpRequest() object
  //2. OPEN the connection -- xhr.open
  //3. execution of the ajax code , onload() which would be a function
  //4. send the request

  const xhr = new XMLHttpRequest();

  //OPEN -- this is where we specify the type of request we want to make and also the url/file name we want to make it to --
  //1. GET - type of request
  //2. data.txt - file we want to make it to
  //3. true - we want it to be asynchronous so we set it to true
  xhr.open('GET', 'dhadhaiadata.txt', true);

  xhr.onload = function(){
    //we want to do whatever with the data we get
    if(this.status==200){
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
      //this response text is from the file we opened so it would be posted in the h1 which would be in the output div
    } else if (this.status == 404){
      document.getElementById('output').innerHTML = 'YE YE YE YE'
    } else {
      document.getElementById('output').innerHTML = 'STOP PLAYING'
    }
  }
  xhr.send();
}

// HTTP STATUSES
// 200: OK
// 403: FORBIDDEN
// 404: NOT FOUND
