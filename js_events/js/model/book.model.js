var Book = (function () {
  'use strict';

  function Book(id, title, author, coverPath, rating) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.coverPath = coverPath;
    this.rating = rating;
  }

  return Book;
})();