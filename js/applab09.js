'use strict'
let time = ['Locations', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', 'Daily Location Total']

// console.log(time.length);
let arrofloctions = []
function Location(name, avg, max, min) {
    this.name = name;
    this.avg = avg;
    this.min = min;
    this.max = max;
    this.cookies = []
    arrofloctions.push(this)


}

Location.prototype.cookiesperhour = function (max, min, avg) {

    return Math.floor(Math.random() * (max - min + 1 + min) * avg);
}
let Seattle = new Location('Seattle', 6.3, 65, 23)
let Tokyo = new Location('Tokyo', 1.2, 24, 3)
let Dubai = new Location('Dubai', 3.7, 38, 11)
let Paris = new Location('Paris', 2.3, 38, 20)
let Lima = new Location('Lima', 4.6, 16, 2)

const addlocationsform = document.getElementById('addlocation')
addlocationsform.addEventListener('submit', handledata)
let City
function handledata(event) {
   event.preventDefault();
    const newlocat = event.target.locationField.value;
    const maxNew = parseInt(event.target.maxi.value);
    const minNew = parseInt(event.target.mini.value);
    const avgNew = parseInt(event.target.avg.value);
    City = new Location(newlocat, avgNew, maxNew, minNew);
    console.log(City);
    console.log(arrofloctions);
    City.data((arrofloctions.length-1));
    City.tablestructre((arrofloctions.length-1));
    totalrow();
}
console.log(arrofloctions);
let hourlycookies = []
let hourstotal = 0
//console.log(Seattle.max);
let daily = [];

// code for table contents 
for (let i = 0; i < (time.length - 2); i++) {
    hourlycookies[i] = 0
}
Location.prototype.data = function (q) {
    for (let i = 0; i < (time.length - 2); i++) {
        this.cookies.push(this.cookiesperhour(this.max, this.min, this.avg));
        // console.log(Seattle.cookies);
        daily[q] += this.cookies[i]
        hourlycookies[i] += arrofloctions[q].cookies[i]

    }
    hourstotal += daily[q]
}

for (let q = 0; q < arrofloctions.length; q++) {
    daily[q] = 0
    arrofloctions[q].data(q)
}

console.log(hourstotal);
console.log(daily);
hourlycookies.push(hourstotal)

// table strcture  

let tablehtmllocation = document.getElementById('fromjs');
console.log(tablehtmllocation);
let tablehtml = document.createElement('table');
tablehtmllocation.appendChild(tablehtml);

//header 
let tr0 = document.createElement('tr');
tablehtml.appendChild(tr0);

for (let i = 0; i < time.length; i++) {
    let th = document.createElement('th');
    tr0.appendChild(th);
    th.textContent = time[i];
}
/// other rows
Location.prototype.tablestructre = function (q) {
    let tr = document.createElement('tr');
    tablehtml.appendChild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = arrofloctions[q].name;
    for (let i = 0; i < this.cookies.length; i++) {

        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.cookies[i]
    }
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = daily[q];
}
for (let q = 0; q < arrofloctions.length; q++) {
    arrofloctions[q].tablestructre(q)
}

// total row
totalrow();
function totalrow(){
// trtotals.remove();
let trtotals = document.createElement('tr');
tablehtml.appendChild(trtotals);

let td6 = document.createElement('td');
trtotals.appendChild(td6);
td6.textContent = 'Totals'

for (let i = 0; i < hourlycookies.length; i++) {

    let td6 = document.createElement('td');
    trtotals.appendChild(td6);
    td6.textContent = hourlycookies[i]
}
}

