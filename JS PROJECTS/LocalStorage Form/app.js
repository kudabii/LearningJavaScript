//Variables






// Event Listeners
eventListeners ();

function eventListeners (){
  //form submission 
  document.querySelector('#form').addEventListener('submit', newTweet);
}


//Function
function newTweet(e){
  e.preventDefault();

//to read the text area value also in the console
  const tweet = document.getElementById('tweet').value;
  console.log(tweet); 


  //creat an <li> element
  const li = document.createElement('li');
  li.textContent = tweet;
  tweetList.appendChild(li);
}


