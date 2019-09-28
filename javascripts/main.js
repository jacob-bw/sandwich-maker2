console.log("hoooooboy here we go");

import bread from "./components/bread.js";
import cheese from "./components/cheese.js";
import order from "./components/sandwich.js";

const init = () => {
  cheese.printCheeseOptions();
  bread.printBreadOptions();
  order.printOrderButton();
};

init();
