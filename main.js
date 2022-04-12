let d1 = document.querySelector('.kitekat-1');
let c1 = document.querySelector('.club-4-paws');
let w1 = document.querySelector('.whiskas');
let s1 = document.querySelector('.shleika');
let t1 = document.querySelector('.parrow');
let b1 = document.querySelector('.rat');
let f1 = document.querySelector('.mouse');
let m1 = document.querySelector('.cats-1');
let btn = document.querySelector('button');
let an = document.querySelector('.answer');
let an1 = document.querySelector('.answer1');
let an2 = document.querySelector('.answer2');
let an3 = document.querySelector('.answer3');
let an4 = document.querySelector('.answer4');
let an5 = document.querySelector('.answer5');
let an6 = document.querySelector('.answer6');
let an7 = document.querySelector('.answer7');
let alls = document.querySelector('.all');
let kite = 'kitekat цена:250тг'
let club = 'club-4-paws цена:200тг'
let whis = 'whiskas цена:190тг'
let shle = 'Шлейка цена:500тг'
let tort = 'Черепашка цена:700тг'
let butr = 'Бабочка цена:690тг'
let fish = 'Рыбка цена:699тг'
let cat = 'Кошка цена:750тг'
let kiteprice = 250;
let clubprice = 200;
let whisprice = 190;
let shleprice = 500;
let tortprice = 700;
let butrprice = 690;
let fishprice = 699;
let catsprice = 750;
let k = 0;
let l = 0;
let p = 0;
let u = 0;
let o = 0;
let n = 0;
let q = 0;
let m = 0;
d1.onclick = function(event) {
    k = prompt("kitekat цена:250тг кол-во:");
    an.textContent = 'kitekat стоит' + ' ' + k * kiteprice + 'тг';
};
c1.onclick = function(event) {
    l = prompt("club-4-paws цена:200тгкол-во:");
    an1.textContent = 'club-4-paws стоит' + ' ' + l * clubprice + 'тг';
};
w1.onclick = function(event) {
    p = prompt("Whiskas цена:190тг кол-во:");
    an2.textContent = 'Whiskas стоит' + ' ' + p * whisprice + 'тг';
};
s1.onclick = function(event) {
    u = prompt("Шлейка цена:500тг кол-во:");
    an3.textContent = 'Шлейка стоит' + ' ' + u * shleprice + 'тг';
};
t1.onclick = function(event) {
    o = prompt("Игрушка черепашка цена:500тг кол-во:");
    an4.textContent = 'Черепашка стоит' + ' ' + o * tortprice + 'тг';
};
b1.onclick = function(event) {
    n = prompt("Игрушка Бабочка цена:690тг кол-во:");
    an5.textContent = 'Бабочка стоит' + ' ' + n * butrprice + 'тг';
};
f1.onclick = function(event) {
    q = prompt("Игрушка Рыбка цена:699тг кол-во:");
    an6.textContent = 'Рыбка стоит' + ' ' + q * fishprice + 'тг';
};
m1.onclick = function(event) {
    m = prompt("Игрушка Кошка цена:750тг кол-во:");
    an7.textContent = 'Кошка стоит' + ' ' + m * catsprice + 'тг';
};
let allprice = 0;
btn.onclick = function(event) {
    allprice += k * kiteprice;
    allprice += l * clubprice;
    allprice += p * whisprice;
    allprice += u * shleprice;
    allprice += o * tortprice;
    allprice += n * butrprice;
    allprice += q * fishprice;
    allprice += m * fishprice;
    alls.textContent = `цена : ${allprice}`;
}