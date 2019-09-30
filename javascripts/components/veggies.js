import utilities from "../helpers/utilities.js";

const veggies = [
    {
        id: 'veggie1',
        name: 'tomato',
        price: 50
    },
    {
        id: 'veggie2',
        name: 'lettuce',
        price: 25
    },
    {
        id: 'veggie3',
        name: 'cucumber',
        price: 50
    },
    {
        id: 'veggie4',
        name: 'sauerkraut',
        price: 100
    },
    {
        id: 'veggie5',
        name: 'red onion',
        price: 50
    },
];

const getSelectedVeggies = () => {
    const selectedVeggies = [];
  
    const veggieCheckboxes = document.getElementsByClassName("veggie");
  
    for (let j = 0; j < veggieCheckboxes.length; j++) {
      for (let k = 0; k < veggies.length; k++) {
        if (
          veggieCheckboxes[j].checked &&
          veggieCheckboxes[j].id === veggies[k].id
        ) {
          selectedVeggies.push(veggies[k]);
        }
      }
    }
    return selectedVeggies;
  };
  
  const printVeggieOptions = () => {
    let domString = "";
    for (let i = 0; i < veggies.length; i++) {
      domString += `<div class="form-group form-check">
      <input type="checkbox" class="form-check-input veggies" id="${veggies[i].id}">
      <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
      </div>
      `;
    }
  
    utilities.printToDom(domString, "veggie-counter");
  };
  
  export default { printVeggieOptions, getSelectedVeggies };
  