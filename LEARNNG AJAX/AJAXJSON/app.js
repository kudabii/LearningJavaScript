document.getElementById('button1').addEventListener('click', loadEmployee );

document.getElementById('button2').addEventListener('click', loadEmployees );


function loadEmployee(){
     const xhr = new XMLHttpRequest;


     xhr.open('GET', 'employee.json', true);

     xhr.onload = function(){
          if (this.status == 200){
               //get the response as an object
               const employee =  JSON.parse(this.responseText);

               //build the template
               const output = `
                    <ul>
                         <li>ID : ${employee.id}</li>
                         <li>NAME: ${employee.nameee}</li>
                         <li>COMPANY: ${employee.company}</li>
                         <li>JOB: ${employee.job}</li>
                    </ul>
               `;
               //print the output HTML
               document.getElementById('employee').innerHTML = output;

          //     document.getElementById('employee').innerHTML = JSON.parse(this.responseText);
         //this would print it out as a normal string , so we use JSON.parse to convert it to an object

           } 
     }

     xhr.send();
}



//------------------------------------------------------WHEN WORKING WITH MULTIPLE OBJECTS---------------------------------------------
//FOR EACH LOOP IS USED

function loadEmployees(){
     const xhr = new XMLHttpRequest;


     xhr.open('GET', 'employees.json', true);

     xhr.onload = function(){
          if (this.status == 200){
               //get the response as an object
               const employees =  JSON.parse(this.responseText);

               //build the template
               let output = '';
               employees.forEach(function(employee){
                    output += `
                              <ul>
                                        <li>ID : ${employee.id}</li>
                                        <li>NAME: ${employee.nameee}</li>
                                        <li>COMPANY: ${employee.company}</li>
                                        <li>JOB: ${employee.job}</li>
                                   </ul>
                               `
               });
               document.getElementById('employees').innerHTML = output;
               }


          //     document.getElementById('employee').innerHTML = JSON.parse(this.responseText);
         //this would print it out as a normal string , so we use JSON.parse to convert it to an object

           } 
      xhr.send();
     }

