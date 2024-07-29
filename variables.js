let favouriteBook1 = 'Atomic Habbits';
const favouriteBook2 = 'Doraemon';

try {
  favouriteBook1 = 'Dilan';
  favouriteBook2 = 'Ancika';
} catch (error) {
  console.log(`Error : ${error.message}`);
}

let combinedBooks = `${favouriteBook1} & ${favouriteBook2}`;
console.log(combinedBooks);
