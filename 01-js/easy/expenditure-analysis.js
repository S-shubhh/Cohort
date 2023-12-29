/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const { Timestamp } = require("mongodb");

function calculateTotalSpentByCategory(transactions) {


  const totalSpent = {};

  
  for (const transaction of transactions) {

    const category = transaction.category;

    
    if (totalSpent[category] === undefined) {
      
      totalSpent[category] = 0;
    }

   
    totalSpent[category] += transaction.price;
  }

  // Convert the object to an array of category objects
  const categories = [];
  for (const category in totalSpent) {
    categories.push({ category, totalSpent: totalSpent[category] });
  }

  return categories;
 
}

module.exports = calculateTotalSpentByCategory;
