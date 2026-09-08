const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//event handler == this is soething that runs when something happens on the page

clearBtn.addEventListener('click', runEvent);
 
//double click -- dblclick
clearBtn.addEventListener('dblclick', runEvent);

//mouse down -- click and hold
clearBtn.addEventListener('mousedown', runEvent);

//mouse enter-- just the cursor being in the card triggers it
card.addEventListener('mouseenter', runEvent);

//mouse leave-- just the cursor going out or leaving the card
card.addEventListener('mouseleave', runEvent);

//mouse over- this fires up when you enter an element or one of its children ... mouse out fires up when you leave 
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);

//mouse move -- any movement inside of the element called (card)
card.addEventListener('mousemove' , runEvent);


function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);  
  
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY} `;

  document.body.style.backgroundColor = `rgb(${e.offsetX} ${e.offsetY} 29)`
}
