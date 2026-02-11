/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */

export function getTicketPrice(age, isWeekend) {

  if ( typeof age !== "number" || age == undefined || age < 0){
    return -1
  }

  let finalPrice = 0;

  if ( age <= 12 ){
    finalPrice = 8;
  } else if ( age <= 17 ) {
    finalPrice = 12;
  } else if ( age <= 59 ) {
    finalPrice = 15;
  } else {
    finalPrice = 10;
  }

  if (isWeekend){
    finalPrice +=3;
  }

  return finalPrice;

}


// export function getTicketPrice(age, isWeekend) {
//   // Your code here

//   //conditions
//   const invalidAge = age < 0 || age == undefined || age == String || age == null;
//   const children = age >= 0 && age <= 12;
//   const teen = age >= 13 && age <= 17;
//   const adult = age >= 18 && age <= 59;
//   const senior = age >= 60;

//   let finalPrice = 0;

//   if (invalidAge){
//     return -1
//   } else if (children){
//     finalPrice = 8;
//   } else if (teen){
//     finalPrice = 12;
//   } else if (adult){
//     finalPrice = 15;
//   } else if (senior){
//     finalPrice = 10;
//   }

//   if (isWeekend) {
//     finalPrice = finalPrice+3;
//   }

//   return finalPrice;

// }
