console.log("hoooooboy here we go");

import bread from "./components/bread.js";
import cheese from "./components/cheese.js";
import meat from "./components/meat.js";
import order from "./components/sandwich.js";
import veggies from "./components/veggies.js";
import condiments from "./components/condiments.js";

const init = () => {
  cheese.printCheeseOptions();
  condiments.printCondimentOptions();
  bread.printBreadOptions();
  meat.printMeatOptions();
  order.printOrderButton();
  veggies.printVeggieOptions();
};

init();
