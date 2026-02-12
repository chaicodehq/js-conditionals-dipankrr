/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */

export function calculateShipping(weight, country, orderTotal) {

  if ( weight <= 0 || orderTotal < 0){
    return -1
  }

    let finalCost;

  function calculatePrices(upto1kgP, upto5kgP, over5kgP) {
    if (weight <= 1) {
      finalCost = upto1kgP;
    } else if (weight <= 5) {
      finalCost = upto5kgP;
    } else {
      finalCost = over5kgP;
    }
  }

  if (country.trim().toUpperCase() === "US") {

    if (orderTotal > 50) {
      return 0
    }

    calculatePrices(5, 10, 15)
    return finalCost;
  }

  if (orderTotal > 100) {
      return 0
    }
  calculatePrices(15, 25, 40)
  return finalCost;

}
