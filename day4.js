// Multiply by 10 //
const nums1 = [1, 2, 3];
const multiplied = nums1.map(num => num * 10);
console.log(multiplied);

// Short Names //
const names = ["James", "Ada", "Lily", "Alberto"];
const shortNames = names.filter(name => name.length < 5);
console.log(shortNames);

// Log Everything //
const nums2 = [1, 2, 3, 4];
nums2.forEach(num => {
    console.log(num + "- logged in terminal");
});

// Uppercased //
const words = ["lion", "tiger", "bear"];
const uppercased = words.map(word => word.toUpperCase());
console.log(uppercased);

// Even Only //
const nums3 = [1, 2, 3, 4, 5, 6];
const evens = nums3.filter(num => num % 2 == 0);
console.log(evens);

// Price Tags //
const prices = [5, 10];
const priceTags = prices.map(price => price.toFixed(2));
console.log(priceTags);

// Search for A//
const namesA = ["Alice", "Bob", "Andrew", "Carol"];
const startsWithA = namesA.filter(name => name.startsWith("A"));
console.log(startsWithA);

// Server Logs //
const codes = [200, 400, 500];
codes.forEach(code => {
    console.log(`Status received: ${code}`);
});

// Half Price //
const prices2 = [20, 40, 60];
const halfPrice = prices2.map(price => price * 0.5);
console.log(halfPrice);

// Passing Grade //
const scores = [55, 60, 88, 92, 40];
const passing = scores.filter(score => score > 65);
console.log(passing);
