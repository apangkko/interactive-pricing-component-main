const pricesRange = document.querySelector('input[name="prices"]');
const cycle = document.querySelector('.prices_cycle');
const pageviewsEl = document.querySelector('.pageviews');
const pricesAmount = document.querySelector('.prices_amount');
const billing = document.querySelector('input[name="billing"]');
const discount = document.querySelector('.discount');

billing.oninput = () => {
    if(billing.checked) {
        cycle.innerHTML = '/ year';  
    } else {
        cycle.innerHTML = '/ month';
    }
    pricesChange();
} 

pricesRange.oninput = () => pricesChange();

const pricesChange = () => {
    const priceDefauts = pricesRange.value;
    let prices;
    let pageviews;
    if(billing.checked) {
        prices = (priceDefauts*12)*0.75;
        pageviews = (priceDefauts*6.25)*12;
    } else {
        prices = priceDefauts;
        pageviews = priceDefauts*6.25;
    }
    pricesAmount.innerHTML = `$${prices}.00`;
    pageviewsEl.innerHTML = `${pageviews}k Pageviews`;

    const min = pricesRange.min
    const max = pricesRange.max
    const val = pricesRange.value
    pricesRange.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}


const discountTextChange = () => {
    const width = window.innerWidth;
    if(width > 540) {
        discount.innerHTML = '25% discount';
    } else {
        discount.innerHTML = '-25%';
    }
}

discountTextChange();

window.onresize = () => {
    discountTextChange();
}

    