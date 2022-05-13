const { from } = rxjs;
const { map, filter } = rxjs.operators;
let i=1;
window.onload = function() {
    document.getElementById('emp-list-btn').onclick = function() {
        fetchEmployees(document.getElementById("noEmp").value);
        i=1;
    }
}

async function fetchEmployees(numberOfEmps) {
    
    let result = await fetch(`https://randomuser.me/api/?results=`+ numberOfEmps);
    let emps = await result.json();
    console.log("emps are ", emps.results)
    renderEmployees(emps.results);
}

function renderEmployees(emps) {
    document.getElementById("empList").style.display="block";
    const empDiv = document.getElementById('employees');
    empDiv.innerHTML = '';
    let template = `
            <table class="table table-striped table-dark items">
  
  <tbody>`;

    from(emps)
        .pipe(
            map(emp => {
                emp.myname = emp.name.first + " " + emp.name.last;
                emp['mylocation'] = {};
                emp.mylocation.address1 = emp.location.street.number + ' ' + emp.location.street.name;
                emp.mylocation.address2 = emp.location.city + ' ' + emp.location.state + ' ' + emp.location.country + ' ' + emp.location.postcode;
                return emp;
            })
        )
        .subscribe(emp => {
           
            let template = `
            <table class="table table-light items">
  
  <tbody>
    <tr>
      <th scope="row" style="width:5%; text-align:left">${i}</th>
      <td style="width:25%; text-align:left">${emp.myname}</td>
      <td style="width:65%"><p>${emp.mylocation.address1} </p>
      <p>${emp.mylocation.address2}</p></td>
    </tr>
  </tbody>
</table>
            `
            i++
            let div = document.createElement('div'); //<div></div>
            div.innerHTML = template; //<div>template</div>
            div.classList = 'row'; //<div class="row">template</div>
            empDiv.appendChild(div);
        });
}
