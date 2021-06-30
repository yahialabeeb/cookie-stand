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

let hourlycookies = []
let hourstotal = 0
//console.log(Seattle.max);
let daily = [0, 0, 0, 0, 0];
let names = [Seattle.name, Tokyo.name, Dubai.name, Paris.name, Lima.name]
// code for table contents 
for (let i = 0; i < 14; i++) {


    Seattle.cookies.push(Seattle.cookiesperhour(Seattle.max, Seattle.min, Seattle.avg));
    // console.log(Seattle.cookies);
    daily[0] = daily[0] + Seattle.cookies[i]

    Tokyo.cookies.push(Tokyo.cookiesperhour(Tokyo.max, Tokyo.min, Tokyo.avg));
    daily[1] = daily[1] + Tokyo.cookies[i]

    Dubai.cookies.push(Dubai.cookiesperhour(Dubai.max, Dubai.min, Dubai.avg));
    daily[2] = daily[2] + Dubai.cookies[i]

    Paris.cookies.push(Paris.cookiesperhour(Paris.max, Paris.min, Paris.avg));
    daily[3] = daily[3] + Paris.cookies[i]

    Lima.cookies.push(Lima.cookiesperhour(Lima.max, Lima.min, Lima.avg));
    daily[4] = daily[4] + Lima.cookies[i]

    hourlycookies[i] = Lima.cookies[i] + Paris.cookies[i] + Dubai.cookies[i] + Tokyo.cookies[i] + Seattle.cookies[i];

    hourstotal = hourstotal + hourlycookies[i]
}
// console.log(hourstotal);
// console.log(daily);
hourlycookies.push(hourstotal)

// table strcture  

let tablehtmllocation = document.getElementById('fromjs');
console.log(tablehtmllocation);
let tablehtml = document.createElement('table');
tablehtmllocation.appendChild(tablehtml);


//header 

let tr1 = document.createElement('tr');
tablehtml.appendChild(tr1);

for (let i = 0; i < time.length; i++) {
    let th = document.createElement('th');
    tr1.appendChild(th);
    th.textContent = time[i];
}

//first row
let tr2 = document.createElement('tr');
tablehtml.appendChild(tr2);
let td1 = document.createElement('td');
tr2.appendChild(td1);
td1.textContent = Seattle.name;
for (let i = 0; i < Seattle.cookies.length; i++) {

    let td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.textContent = Seattle.cookies[i]
}
td1 = document.createElement('td');
tr2.appendChild(td1);
td1.textContent = daily[0];
// second row
let tr3 = document.createElement('tr');
tablehtml.appendChild(tr3);
let td2 = document.createElement('td');
tr3.appendChild(td2);
td2.textContent = Tokyo.name;
for (let i = 0; i < Tokyo.cookies.length; i++) {

    let td2 = document.createElement('td');
    tr3.appendChild(td2);
    td2.textContent = Tokyo.cookies[i]
}
td2 = document.createElement('td');
tr3.appendChild(td2);
td2.textContent = daily[1]
// third row

let tr4 = document.createElement('tr');
tablehtml.appendChild(tr4);

let td3 = document.createElement('td');
tr4.appendChild(td3);
td3.textContent = Dubai.name;

for (let i = 0; i < Dubai.cookies.length; i++) {

    let td3 = document.createElement('td');
    tr4.appendChild(td3);
    td3.textContent = Dubai.cookies[i]
}

td3 = document.createElement('td');
tr4.appendChild(td3);
td3.textContent = daily[2];

// fourth row

let tr5 = document.createElement('tr');
tablehtml.appendChild(tr5);
let td4 = document.createElement('td');
tr5.appendChild(td4);
td4.textContent = Paris.name;

for (let i = 0; i < Paris.cookies.length; i++) {

    let td4 = document.createElement('td');
    tr5.appendChild(td4);
    td4.textContent = Paris.cookies[i]
}

td4 = document.createElement('td');
tr5.appendChild(td4);
td4.textContent = daily[3];
// fifth row

let tr6 = document.createElement('tr');
tablehtml.appendChild(tr6);
let td5 = document.createElement('td');
tr6.appendChild(td5);
td5.textContent = Lima.name;

for (let i = 0; i < Lima.cookies.length; i++) {

    let td5 = document.createElement('td');
    tr6.appendChild(td5);
    td5.textContent = Lima.cookies[i]
}

td5 = document.createElement('td');
tr6.appendChild(td5);
td5.textContent = daily[4];

// total row

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
const formfield = document.getElementById("from")