document.addEventListener("DOMContentLoaded", function () {

    const products = document.querySelector("[data-id=products]");
    const orders = document.querySelector("[data-id=orders]");
    const pack = document.querySelector("[data-id=package]");
    const packPole = document.querySelector(".select__input");
    const accounting = document.querySelector("[data-id=accounting]");
    const terminal = document.querySelector("[data-id=terminal]");
    const totalPrice = document.querySelector(".summary__total");
    const totalPriceText =document.querySelector(".total__price");

    const inputProducts = document.querySelector("#products");
    const inputOrders = document.querySelector("#orders");
    const inputPack = document.querySelector("#package");
    const checkboxAcc = document.querySelector("#accounting");
    const checkboxTerm  = document.querySelector("#terminal");

    const accountingText = accounting.querySelectorAll("span");
    const terminalText = terminal.querySelectorAll("span");

    const prodText = products.querySelectorAll("span");
    const orderText = orders.querySelectorAll("span");
    const packText = pack.querySelectorAll("span");

    const dropDown = document.querySelector(".select__dropdown");
    const basic = document.querySelector("li[data-value=basic]");
    const premium = document.querySelector("li[data-value=premium]");
    const professional = document.querySelector("li[data-value=professional]");

    const Obj = {
        product: 2,
        productSum : 0,
        orderSum : 0,
        accountingSum : 0,
        terminalSum: 0,


        accounting : 30,
        terminal : 25,
        order: 0.65,
        premium: 60,
        basic: 0,
        professional: 25,
        package: 0,
        sum: 0
    }


    const toHide = {
       prodSwitcher : false,
       orderSwitcher : false,
       termSwitcher : false,
        accSwitcher : false,

        hide() {
           if( this.prodSwitcher === false && this.orderSwitcher === false && this.termSwitcher === false && this.accSwitcher === false) {
              totalPrice.classList.remove("open") ;
           }
        }
    }

    function forPackage(type) {
        packPole.innerHTML = type.innerText;
        pack.classList.add("open");
        packText[1].innerText = type.innerText;
        totalPrice.classList.add("open");
        totalPriceText.innerText = Obj.sum.toFixed(2) + "$";
    }

    function forCheckBox(type, change) {
        type.classList.toggle("open");
        change[1].innerText = Obj.type + "$";
        totalPrice.classList.toggle("open");
        totalPriceText.innerText = Obj.sum + "$";
    }


    inputProducts.addEventListener("input", e => {
        if (inputProducts.value !== "" && inputProducts.value >= 0) {
            toHide.prodSwitcher = true;
            products.classList.add("open");
            Obj.sum -= Obj.productSum;
            prodText[1].innerHTML = `${inputProducts.value} * ${Obj.product}$`;
            prodText[2].innerText = (inputProducts.value * Obj.product).toFixed(2) + "$";
            totalPrice.classList.add("open");
            Obj.productSum = inputProducts.value * Obj.product;
            Obj.sum += Obj.productSum;
            totalPriceText.innerText = Obj.sum.toFixed(2) + "$";
        } else {
            products.classList.remove("open");
            toHide.prodSwitcher = false;

        }
        toHide.hide();
    })

    inputOrders.addEventListener("input", e => {
        if (inputOrders.value !== "" && inputOrders.value >= 0) {
            toHide.orderSwitcher = true;
            orders.classList.add("open");
            Obj.sum -= Obj.orderSum;
            orderText[1].innerHTML = `${inputOrders.value} * ${Obj.order}$`;
            orderText[2].innerText = (inputOrders.value * Obj.order).toFixed(2) + "$";
            totalPrice.classList.add("open");
            Obj.orderSum = inputOrders.value * Obj.order;
            Obj.sum += Obj.orderSum;
            totalPriceText.innerText = Obj.sum.toFixed(2) + "$";
        } else {
            orders.classList.remove("open");
            toHide.orderSwitcher = false;
        }
        toHide.hide();

    })

    inputPack.addEventListener("click", e => {
        dropDown.classList.toggle("open");

    })

    basic.addEventListener("click", e => {
        Obj.sum -= Obj.package;
        Obj.package = 0;
        forPackage(basic);
        packText[2].innerHTML = Obj.basic.toFixed(2) + "$";
    })

    premium.addEventListener("click", e => {
        Obj.sum -= Obj.package;
       Obj.package = Obj.premium;
        Obj.sum += Obj.premium;
        forPackage(premium);
        packText[2].innerHTML = Obj.premium.toFixed(2) + "$";
    })

    professional.addEventListener("click", e => {
        Obj.sum -= Obj.package;
        Obj.package = Obj.professional;
        Obj.sum += Obj.professional;
        forPackage(professional);
        packText[2].innerHTML = Obj.professional.toFixed(2) + "$";
    })

    checkboxAcc.addEventListener("click", e => {
        Obj.accountingSum = Obj.accounting;
        if (checkboxAcc.checked) {
            Obj.sum += Obj.accountingSum;
            toHide.accSwitcher = true;
        } else  {
            Obj.sum -= Obj.accountingSum;
            toHide.accSwitcher = false
        }
        accounting.classList.toggle("open");
        accountingText[1].innerText = Obj.accounting.toFixed(2) + "$";
        totalPrice.classList.add("open");
        totalPriceText.innerText = Obj.sum.toFixed(2) + "$";
        toHide.hide();
    })

    checkboxTerm.addEventListener("click", e => {
        Obj.terminalSum = Obj.terminal;
        if (checkboxTerm.checked) {
            Obj.sum += Obj.terminalSum;
            toHide.termSwitcher = true;
        } else  {
            Obj.sum -= Obj.terminalSum;
            toHide.termSwitcher = false;
        }
        terminal.classList.toggle("open");
        terminalText[1].innerText = Obj.terminal.toFixed(2) + "$";
        totalPrice.classList.add("open");
        totalPriceText.innerText = Obj.sum.toFixed(2) + "$";
        toHide.hide();
    })



    // HEADER NAV

    const navItem = document.querySelectorAll(".menu__item");
    const hamburger = document.querySelector(".hamburger i");
    const mobileMenu = document.querySelector(".mobile__menu");

    for ( let el of navItem ) {
        el.addEventListener("mouseover", e => {
            el.style.borderBottom = "4px solid #08A6E4";
        })

        el.addEventListener("mouseout", e => {
            el.style.borderBottom = "none";
        })


    }

    hamburger.addEventListener("click", e => {
        mobileMenu.classList.toggle("open");
    })

});