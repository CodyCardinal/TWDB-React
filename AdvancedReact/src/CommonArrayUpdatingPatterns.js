// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE
const shoppingCart = [
  { id: 1, product: 'HDMI Cable', price: 4 },
  { id: 2, product: 'Easy Bake Oven', price: 28 },
  { id: 3, product: 'Peach Pie', price: 6.5 },
];

// ADDING TO AN ARRAY
const updatedCart1 = [...shoppingCart, { id: 4, product: 'Coffee Mug', price: 7.99 }];
console.log('After adding a new product:', updatedCart1);

// REMOVING AN ELEMENT
const updatedCart2 = shoppingCart.filter((item) => item.id !== 2);
console.log('After removing the product with id 2:', updatedCart2);

// UPDATING ALL ELEMENTS IN AN ARRAY
const updatedCart3 = shoppingCart.map((item) => {
  return {
    ...item,
    product: item.product.toLowerCase(),
  };
});
console.log('After updating all product names to lowercase:', updatedCart3);

// MODIFYING A SPECIFIC ELEMENT IN AN ARRAY
const updatedCart4 = shoppingCart.map((item) => {
  if (item.id === 3) {
    return { ...item, price: 10.99 };
  } else {
    return item;
  }
});
console.log('After modifying the price of the product with id 3:', updatedCart4);

// ### Test Question

// Write a function in React that performs the following operations on the `shoppingCart` array:

// 1. Adds a new product with `id: 5`, `product: "Wireless Mouse"`, and `price: 15.99`.
const updatedCart5 = [...shoppingCart, { id: 5, product: 'Wireless Mouse', price: 15.99 }];
console.log('After adding a new product with id 5:', updatedCart5);

// 2. Removes the product with `id: 1`.
const updatedCart6 = shoppingCart.filter((item) => item.id !== 1);
console.log('After removing the product with id 1:', updatedCart6);

// 3. Updates all product names to uppercase.
const updatedCart7 = shoppingCart.map((item) => {
  return {
    ...item,
    product: item.product.toUpperCase(),
  };
});
console.log('After updating all product names to uppercase:', updatedCart7);

// 4. Modifies the price of the product with `id: 2` to `30.00`.
const updatedCart8 = shoppingCart.map((item) => {
  if (item.id === 2) {
    return { ...item, price: 30.0 };
  } else {
    return item;
  }
});
console.log('After modifying the price of the product with id 2:', updatedCart8);

// ### Test Question 2

const library = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genres: ['Fiction', 'Classic'],
    available: true,
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genres: ['Fiction', 'Dystopian'],
    available: false,
    ratings: [5, 5, 4, 4],
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genres: ['Fiction', 'Classic'],
    available: true,
    ratings: [4, 4, 5, 3],
  },
];

// Test Questions

// Add a new book with id: 4, title: "Brave New World", author: "Aldous Huxley", genres: ["Fiction", "Dystopian"], available: true, and ratings: [5, 4, 4].
const updatedLibrary1 = [
  ...library,
  {
    id: 4,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genres: ['Fiction', 'Dystopian'],
    available: true,
    ratings: [5, 4, 4],
  },
];
console.log('After adding a new book with id 4:', updatedLibrary1);

// Remove the book with id: 2.
const updatedLibrary2 = library.filter((item) => item.id !== 2);
console.log('After removing the book with id 2:', updatedLibrary2);

// Update the title of all books to be in uppercase.
const updatedLibrary3 = library.map((item) => {
  return {
    ...item,
    title: item.title.toUpperCase(),
  };
});
console.log('After updating all book titles to uppercase:', updatedLibrary3);

// Change the available status of the book with id: 3 to false and add a new rating of 5 to its ratings array.
const updatedLibrary4 = library.map((item) => {
  if (item.id === 3) {
    return {
      ...item,
      available: false,
      ratings: [...item.ratings, 5],
    };
  } else {
    return item;
  }
});
console.log('After changing the available status and adding a new rating to the book with id 3:', updatedLibrary4);
