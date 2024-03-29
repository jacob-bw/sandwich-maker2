import bread from './bread.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js'
import veggies from './veggies.js';

const createFinalOrder = (ingredients) => {
    const total = ingredients.reduce((prev, curr) => prev + curr.price, 0);
    let domString2 = '';
    for (let i = 0; i < ingredients.length; i++){
        domString2 += `<p>${ingredients[i].name} $${(ingredients[i].price/100).toFixed(2)}</p>`;
    }
    domString2 += `<h4>Total Cost: $${(total/100).toFixed(2)}</h4>`
    utilities.printToDom(domString2, 'final-order');
}

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const selectedVeggies = veggies.getSelectedVeggies();
    const selectedBreads = bread.getSelectedBreads();
    const selectedCondiments = condiments.getSelectedCondiments();
    const finalSandwich = selectedCheeses.concat(selectedBreads, selectedMeats, selectedCondiments, selectedVeggies);
    createFinalOrder(finalSandwich);
}

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-success">Make Sandwich</button>'
    utilities.printToDom(domString, 'final-order');
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton }