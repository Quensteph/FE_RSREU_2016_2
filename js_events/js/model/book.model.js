var Book = (function () {
    'use strict';

    function Book(id, title, author, coverPath, rating) {
        var _id;

        this.title = title;
        this.author = author;
        this.coverPath = coverPath;
        this.rating = rating;

        this.setId = function (id) {
            if (id) {
                _id = id;
            } else {
                throw new Error('No Id provided.')
            }
        };

        this.getId = function () {
            return _id;
        };


        this.setId(id);
    }

    return Book;
})();