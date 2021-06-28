
'use strict'
let Seattle = {
    name: 'Seattle',
    cookies: [],
    getcookies: function () {
        for (let i = 0; i < 14; i++) {
            this.cookies[i] = Math.floor(randomcookies(65, 23) * 6.3);
        }

    }

}
function randomcookies(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Seattle.getcookies();
console.log(Seattle.cookies);


let Tokyo = {
    name: 'Tokyo',
    cookies: [],
    getcookies: function () {
        for (let i = 0; i < 14; i++) {
            this.cookies[i] = Math.floor(randomcookies(24, 3) * 1.2);
        }

    }

}
Tokyo.getcookies();
console.log(Tokyo.cookies);
let Dubai = {
    name: 'Dubai',
    cookies: [],
    getcookies: function () {
        for (let i = 0; i < 14; i++) {
            this.cookies[i] = Math.floor(randomcookies(38, 11) * 3.7);
        }

    }

}
Dubai.getcookies();
console.log(Dubai.cookies);

let paris = {
    name: 'Paris',
    cookies: [],
    getcookies: function () {
        for (let i = 0; i < 14; i++) {
            this.cookies[i] = Math.floor(randomcookies(38, 20) * 2.3);
        }

    }

}
paris.getcookies();
console.log(paris.cookies);

let Lima = {
    name: 'Lima',
    cookies: [],
    getcookies: function () {
        for (let i = 0; i < 14; i++) {
            this.cookies[i] = Math.floor(randomcookies(16, 2) * 4.6);
        }

    }

}
Lima.getcookies();
console.log(Lima.cookies);
let shopnames = document.getElementById('fromjs')
console.log(shopnames);

// seatle
let Seattleshop = document.createElement('h2');
shopnames.appendChild(Seattleshop);
Seattleshop.textContent = Seattle.name;
let t1 = 0
let Seattleunorder = document.createElement('ul');
shopnames.appendChild(Seattleunorder);
let c
for (let i = 0; i < Seattle.cookies.length; i++) {
    c = 6 + i
    let Seattlelist = document.createElement('li');
    Seattleunorder.appendChild(Seattlelist);
    Seattlelist.textContent = "@ " + c + ':00: ' + Seattle.cookies[i];
    t1 = t1 + Seattle.cookies[i]
    if (i == 13) {
        let Seattlelist = document.createElement('li');
        Seattleunorder.appendChild(Seattlelist);
        Seattlelist.textContent = 'Total: ' + t1
    }
}
// tokyo 

let Tokyoshop = document.createElement('h2');
shopnames.appendChild(Tokyoshop);
Tokyoshop.textContent = Tokyo.name;

let t2 = 0

let Tokyounorder = document.createElement('ul');
shopnames.appendChild(Tokyounorder);

for (let i = 0; i < Tokyo.cookies.length; i++) {
    c = 6 + i
    let Tokyolist = document.createElement('li');
    Tokyounorder.appendChild(Tokyolist);
    Tokyolist.textContent = "@ " + c + ':00: ' + Tokyo.cookies[i];
    t2 = t2 + Tokyo.cookies[i]
    if (i == 13) {
        let Tokyolist = document.createElement('li');
        Tokyounorder.appendChild(Tokyolist);
        Tokyolist.textContent = 'Total: ' + t2
    }
}
//dubai

let Dubaishop = document.createElement('h2');
shopnames.appendChild(Dubaishop);
Dubaishop.textContent = Dubai.name;

let Dubaiunorder = document.createElement('ul');
shopnames.appendChild(Dubaiunorder);
let t3 = 0
for (let i = 0; i < Dubai.cookies.length; i++) {
    c = 6 + i
    let Dubailist = document.createElement('li');
    Dubaiunorder.appendChild(Dubailist);
    Dubailist.textContent = "@ " + c + ':00: ' + Dubai.cookies[i];
    t3 = t3 + Dubai.cookies[i]
    if (i == 13) {
        let Dubailist = document.createElement('li');
        Dubaiunorder.appendChild(Dubailist);
        Dubailist.textContent = 'Total: ' +t3

    }
}
// paris
let parisshop = document.createElement('h2');
shopnames.appendChild(parisshop);
parisshop.textContent = paris.name;

let parisunorder = document.createElement('ul');
shopnames.appendChild(parisunorder);
let t4 = 0

for (let i = 0; i < paris.cookies.length; i++) {
    c = 6 + i
    let parislist = document.createElement('li');
    parisunorder.appendChild(parislist);
    parislist.textContent = "@ " + c + ':00: ' + paris.cookies[i];
    t4 = t4 + paris.cookies[i]
    if (i == 13) {
        let parislist = document.createElement('li');
        parisunorder.appendChild(parislist);
        parislist.textContent = 'Total: ' + t4
    }
}
//lima
let Limashop = document.createElement('h2');
shopnames.appendChild(Limashop);
Limashop.textContent = Lima.name;

let Limaunorder = document.createElement('ul');
shopnames.appendChild(Limaunorder);
let t5 = 0
for (let i = 0; i < Lima.cookies.length; i++) {
    c = 6 + i
    let Limalist = document.createElement('li');
    Limaunorder.appendChild(Limalist);

    Limalist.textContent = "@ " + c + ':00: ' + Lima.cookies[i];
    t5 = t5 + Lima.cookies[i]
    if (i == 13) {
        let Limalist = document.createElement('li');
        Limaunorder.appendChild(Limalist);
        Limalist.textContent = 'Total: ' + t5
        break;
    }
}
