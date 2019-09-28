import utilities from "../helpers/utilities.js";

const breads = [
  {
    id: "bread1",
    name: "wheat",
    price: 200
  },
  {
    id: "bread2",
    name: "white",
    price: 100
  },
  {
    id: "bread3",
    name: "rye",
    price: 200
  },
  {
    id: "bread4",
    name: "hoagie",
    price: 150
  },
  {
    id: "bread5",
    name: "wrap",
    price: 250
  }
];

const getSelectedBreads = () => {
  const selectedBreads = [];

  const breadCheckboxes = document.getElementsByClassName("bread");

  for (let j = 0; j < breadCheckboxes.length; j++) {
    for (let k = 0; k < breads.length; k++) {
      if (
        breadCheckboxes[j].checked &&
        breadCheckboxes[j].id === breads[k].id
      ) {
        selectedBreads.push(breads[k]);
      }
    }
  }
  return selectedBreads;
};

const printBreadOptions = () => {
  let domString = "";
  for (let i = 0; i < breads.length; i++) {
    domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input bread" id="${breads[i].id}">
    <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
    </div>
    `;
  }

  utilities.printToDom(domString, "bread-counter");
};

export default { printBreadOptions, getSelectedBreads };
