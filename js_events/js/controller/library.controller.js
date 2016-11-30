var libraryController = (function (library) {
    'use strict';

    var MAX_RATING_VALUE = library.maxRatingValue;

    function getLibrary() {
        return library.LibraryDB;
    }

    function getNotifications() {
        return library.NotificationDB;
    }

    function getMostPopular() {
        var filtered = [];

        for (var i = 0; i < getLibrary().length; i++) {
            if (getLibrary()[i].rating === MAX_RATING_VALUE) {
                filtered.push(getLibrary()[i]);
            }
        }

        var notification = new Notification(
            getNotifications().length + 1,
            null,
            null,
            'Most Popular',
            null,
            null,
            new Date(),
            'filter'
        );

        library.NotificationDB.push(notification);

        return filtered;
    }

    function searchBook(searchQuery) {
        var result = getLibrary().filter(function (elem) {
            return elem.title.substring(0, searchQuery.length).toLowerCase() === searchQuery.toLowerCase();
        });

        var notification = new Notification(
            getNotifications().length + 1,
            null,
            null,
            null,
            searchQuery,
            null,
            new Date(),
            'search'
        );

        if (notification.search !== null) {
            library.NotificationDB.push(notification);
        } else {
            library.NotificationDB.splice(-1, 1);
        }

        return result;
    }

    function addBook() {
        var book = new Book(
            getLibrary().length + 1,
            window.document.querySelector(".addBookTitle").value,
            window.document.querySelector(".addBookAuthor").value,
            library.coversFolder + 'uploaded/' + window.document.querySelector(".addBookCover").value.split(/(\\|\/)/g).pop(),
            0
        );

        var notification = new Notification(
            getNotifications().length + 1,
            window.document.querySelector('.addBookTitle').value,
            window.document.querySelector('.addBookAuthor').value,
            'Library',
            null,
            null,
            new Date(),
            'add'
        );

        if (book.author && book.title) {
            library.LibraryDB.push(book);
        }

        if (notification.author && notification.title) {
            library.NotificationDB.push(notification);
        }
    }

    function updateRating(currentRating, libraryIdOfClickedBook) {
        library.LibraryDB[libraryIdOfClickedBook].rating = currentRating;

        var notification = new Notification(
            libraryController.getNotifications().length + 1,
            libraryController.getLibrary()[libraryIdOfClickedBook].title,
            libraryController.getLibrary()[libraryIdOfClickedBook].author,
            null,
            null,
            libraryController.getLibrary()[libraryIdOfClickedBook].rating,
            new Date(),
            'rating'
        );

        library.NotificationDB.push(notification);

        for (var k = 0; k < libraryController.getNotifications().length; k++) {
            if (libraryController.getNotifications()[k].tag === 'rating') {
                libraryView.createRatingNotificationHTML(libraryController.getNotifications()[k]);
                library.NotificationDB.splice(-1, 1);
            }
        }
    }

    function timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);

        // Check years
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + ' years ago';
        }

        // Check months
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + ' months ago';
        }

        // Check days
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + ' days ago';
        }

        // Check hours
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + ' hours ago';
        }

        //Check minutes
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + ' minutes ago';
        }

        return 'less than a minute ago';
    }


    return {
        getLibrary: getLibrary,
        getNotifications: getNotifications,
        getMostPopular: getMostPopular,
        searchBook: searchBook,
        addBook: addBook,
        timeSince: timeSince,
        updateRating: updateRating
    }
})(library);