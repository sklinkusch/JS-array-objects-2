library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false
  }
];

function showReadingStatus(books) {
  const bookStatus = books.map(book => {
    if (book.readingStatus) {
      return `Already read "${book.title}" by ${book.author}.`;
    } else {
      return `You still have to read "${book.title}" by ${book.author}.`;
    }
  });
  const text = bookStatus.join("<br>");
  document.getElementById("text").innerHTML = text;
}
showReadingStatus(library);
