/**
 * Generates a multiplication table for a given number.
 * @param {number} base - The base number to generate the multiplication table for.
 * @param {number} [limit=10] - How far the table should go (default is 10).
 * @returns {string[]} - An array of strings representing the multiplication table.
 */
function generateMultiplicationTable(base, limit = 10) {
  if (typeof base !== "number" || typeof limit !== "number") {
    throw new TypeError("Both base and limit must be numbers.");
  }

  const table = [];
  for (let i = 1; i <= limit; i++) {
    table.push(`${base} × ${i} = ${base * i}`);
  }
  return table;
}

module.exports = generateMultiplicationTable;
