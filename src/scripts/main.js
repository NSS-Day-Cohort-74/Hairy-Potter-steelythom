// Imports go first
import { makePottery } from "./Potterywheel.js";
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";

//variable to hold pottery
let pottery = []

// Make 5 pieces of pottery at the wheel
pottery.push(makePottery("mug", 3, 10))
pottery.push(makePottery("platter", 5, 1))
pottery.push(makePottery("vase", 7, 2.2))
pottery.push(makePottery("mug", 6, 2.1))
pottery.push(makePottery("gravy boat", 10, 2))

// Fire each piece of pottery in the kiln
for (const pot of pottery) {
    firePottery(pot,pot.height * 1000)
}

// Determine which ones should be sold, and their price
for (const pot of pottery) {
    toSellOrNotToSell(pot)
}

// Invoke the component function that renders the HTML list

