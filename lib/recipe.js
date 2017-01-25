'use strict';

// const OneQuantity = {
//   ingredient: 'thing'
//   measurement: 'small'
//   quantity: '1'
//   notes: 'chopped'
// };

// const twoQuantity = {
//   ingredient: 'things'
//   measurement: 'big'
//   quantity: '2'
//   notes: 'diced'
// };

const recipe = {
  name:'Some Food',
  author:'Some Guy',
  steps: [
    '1. First Step',
    '2. Second Step',
    '3. Third Step',
    '4. Fourth Step'],
  ingredientList: [oneQuantity], [twoQuantity],
  servings: 3,
}

listSteps: function () {
  for (let i=0; i< this.steps.length; ++1) [
    console.log(this.step[i]);
  ]
}


// /const ingredientList = {
//   ingredient
//   boolean for being in fridge
// }
module.exports = recipe
