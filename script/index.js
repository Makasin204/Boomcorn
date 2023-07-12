let product1 = document.querySelector(`#product-1`)
let product2 = document.querySelector(`#product-2`)
let product3 = document.querySelector(`#product-3`)
let product4 = document.querySelector(`#product-4`)
let product5 = document.querySelector(`#product-5`)
let product6 = document.querySelector(`#product-6`)
let product7 = document.querySelector(`#product-7`)
let product8 = document.querySelector(`#product-8`)
let product9 = document.querySelector(`#product-9`)
let product10 = document.querySelector(`#product-10`)
let menu1 = document.querySelector(`#menu-product-1`)
let menu2 = document.querySelector(`#menu-product-2`)
let menu3 = document.querySelector(`#menu-product-3`)
let menu4 = document.querySelector(`#menu-product-4`)
let menu5 = document.querySelector(`#menu-product-5`)
let menu6 = document.querySelector(`#menu-product-6`)
let menu7 = document.querySelector(`#menu-product-7`)
let menu8 = document.querySelector(`#menu-product-8`)
let menu9 = document.querySelector(`#menu-product-9`)
let menu10 = document.querySelector(`#menu-product-10`)


function clearAll1 () {
    product1.style.display = `none`;
    product2.style.display = `none`;
    product3.style.display = `none`;
    product4.style.display = `none`;
    product5.style.display = `none`;
    product6.style.display = `none`;
    product7.style.display = `none`;
    menu1.classList.remove(`active_product`)
    menu2.classList.remove(`active_product`);
    menu3.classList.remove(`active_product`);
    menu4.classList.remove(`active_product`);
    menu5.classList.remove(`active_product`);
    menu6.classList.remove(`active_product`);
    menu7.classList.remove(`active_product`);
}
function clearAll2 () {
    product8.style.display = `none`;
    product9.style.display = `none`;
    product10.style.display = `none`;
    menu8.classList.remove(`active_product`);
    menu9.classList.remove(`active_product`);
    menu10.classList.remove(`active_product`);
}

function openProduct1 () {
    clearAll1();
    product1.style.display = `flex`;
    menu1.classList.add(`active_product`);
}
function openProduct2 () {
    clearAll1();
    product2.style.display = `flex`;
    menu2.classList.add(`active_product`);
}
function openProduct3 () {
    clearAll1();
    product3.style.display = `flex`;
    menu3.classList.add(`active_product`);
}
function openProduct4 () {
    clearAll1();
    product4.style.display = `flex`;
    menu4.classList.add(`active_product`);
}
function openProduct5 () {
    clearAll1();
    product5.style.display = `flex`;
    menu5.classList.add(`active_product`);
}
function openProduct6 () {
    clearAll1();
    product6.style.display = `flex`;
    menu6.classList.add(`active_product`);
}
function openProduct7 () {
    clearAll1();
    product7.style.display = `flex`;
    menu7.classList.add(`active_product`);
}
function openProduct8 () {
    clearAll2();
    product8.style.display = `flex`;
    menu8.classList.add(`active_product`);
}
function openProduct9 () {
    clearAll2();
    product9.style.display = `flex`;
    menu9.classList.add(`active_product`);
}
function openProduct10 () {
    clearAll2();
    product10.style.display = `flex`;
    menu10.classList.add(`active_product`);
}

