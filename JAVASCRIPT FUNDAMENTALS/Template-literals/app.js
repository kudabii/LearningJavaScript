const name = 'Khalid';
const age = 32;
const job = "Web dev";
const city = 'Lagos';
let html;

// es5 without template strings is a lot and could get confusing and annoying while writing it.
html = '<ul> <li>Name: ' + name +' </li><li>Age: ' + age +' </li><li>Job: ' + job +' </li><li>City: ' + city + '  </li></ul>';

document.body.innerHTML = html; // this code replaces everything inside the <body> of the webpage with whatever is stored in the 'html' container... in this case it's the list 

//OR 

html = '<ul' +
        '<li>Name: ' + name + ' </li>'+
        '<li>Age: ' + age + ' </li>'+
        '<li>Job: ' +job + ' </li>'+
        '<li>City: ' + city + ' </li>'+
        '</ul>';
//this is the old way of writing it without template strings



//2.TEMPLATE STRINGS PROPER (short and simple to write and understand)
listt = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
  </ul>
`;

document.body.innerHTML= listt;