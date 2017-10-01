function main(mealCost, tipPercent, taxPercent){
    var mealCost = 12;
    var tipPercent = mealCost * 0.2;
    var taxPercent = mealCost * 0.08;
    var totalCost = Math.round(mealCost + tipPercent + taxPercent);
    console.log("The total meal cost is " + totalCost + " dollars.");
}