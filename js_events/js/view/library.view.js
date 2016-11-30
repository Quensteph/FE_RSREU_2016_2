var libraryView = (function (libraryController) {
    'use strict';

    function initialize() {
        displayNotifications();
        displayLibrary();
        window.document.querySelector('#allBooksLabel').addEventListener('click', displayLibrary);
        window.document.querySelector('.search-panel__search-input').addEventListener('input', displaySearch);
        window.document.querySelector('#mostPopularLabel').addEventListener('click', displayMostPopular);
        window.document.querySelector('.sidebar__btnAdd').addEventListener('click', addBook);
    }

    function clearLibrary() {
        window.document.querySelector('.content__container').innerHTML = '';
    }

    function createBookHTML(Book) {
        var MAX_RATING_VALUE = library.maxRatingValue;
        var stars = (Book.rating === 5) ? 0 : MAX_RATING_VALUE - Book.rating;
        var bookHTML = '<div class="content__book-entry">\
                      <div class="content__book-cover">\
                        <img src="' + Book.coverPath + '" alt="' + Book.title + '" width="200" height="275" />\
                      </div>\
                      <div class="content__book-name">' + Book.title + '</div>\
                      <div class="content__book-author">\
                        by ' + Book.author + '</div>\
                      <div class="content__book-rating">';

        var ratingHTML = '';

        for (var i = 0; i < MAX_RATING_VALUE; i++) {
            if (i === stars) {
                ratingHTML += '<input type="radio"\
                    id="star'+ Book.id + '_' + (MAX_RATING_VALUE - i)
                    + '" name="rating' + Book.id
                    + '" checked="true"\
                    value="' + (MAX_RATING_VALUE - i) + '" />\
                    <label class="content__star-label" for="star'  + Book.id + '_' + (MAX_RATING_VALUE - i) + '"></label>';
            } else {
                ratingHTML += '<input type="radio"\
                    id="star' + Book.id + '_' + (MAX_RATING_VALUE - i)
                    + '" name="rating' + Book.id
                    + '" value="' + (MAX_RATING_VALUE - i) + '" />\
                    <label class="content__star-label" for="star'  + Book.id + '_' + (MAX_RATING_VALUE - i) + '"></label>';
            }
        }

        var endingHTML = '</div></div>';

        window.document.querySelector('.content__container').innerHTML += bookHTML + ratingHTML + endingHTML;
    }

    function displayLibrary() {
        clearLibrary();

        for (var i = 0; i < libraryController.getLibrary().length; i++) {
            createBookHTML(libraryController.getLibrary()[i]);
        }

        getRating();
    }

    function displaySearch() {
        var searchQuery = window.document.querySelector('.search-panel__search-input').value;
        var result = libraryController.searchBook(searchQuery);

        clearLibrary();

        for (var i = 0; i < result.length; i++) {
            createBookHTML(result[i]);
        }

        for (var i = 0; i < libraryController.getNotifications().length; i++) {
            if (libraryController.getNotifications()[i].tag === 'search') {
                createSearchNotificationHTML(libraryController.getNotifications()[i]);
            }
        }

        getRating();
    }

    function getRating() {
        var selector, elem;

        for (var i = 1; i < libraryController.getLibrary().length + 1; i++) {
            for (var j = 1; j < library.maxRatingValue + 1; j++) {
                selector = '#star' + i + '_' + j;
                elem = window.document.querySelector(selector);

                if (elem) {
                    elem.addEventListener('click', updateRating);
                }
            }
        }
    }

    function displayMostPopular() {
        var result = libraryController.getMostPopular();

        clearLibrary();

        for (var i = 0; i < result.length; i++) {
            createBookHTML(result[i]);
        }

        for (var i = 0; i < libraryController.getNotifications().length; i++) {
            if (libraryController.getNotifications()[i].tag === 'filter') {
                createFilterNotificationHTML(libraryController.getNotifications()[i]);
            }
        }

        getRating();
    }

    function addBook() {
        libraryController.addBook();
        clearLibrary();
        clearNotifications();

        var result = libraryController.getLibrary();

        for (var i = 0; i < result.length; i++) {
            createBookHTML(result[i]);
        }

        var notificationsResult = libraryController.getNotifications();

        for (var i = 0; i < notificationsResult.length; i++) {
            createAddNotificationHTML(notificationsResult[i])
        }

        getRating();
    }

    /* Notifications Section */

    function clearNotifications() {
        window.document.querySelector('.sidebar__history').innerHTML = '';
    }

    function displayNotifications() {
       clearNotifications();

        for (var i = 0; i < libraryController.getNotifications().length; i++) {
            switch (libraryController.getNotifications()[i].tag) {
                case 'add':
                    createAddNotificationHTML(libraryController.getNotifications()[i]);
                    break;
                case 'filter':
                    createFilterNotificationHTML(libraryController.getNotifications()[i]);
                    break;
                case 'search':
                    createSearchNotificationHTML(libraryController.getNotifications()[i]);
                    break;
                case 'rating':
                    createRatingNotificationHTML(libraryController.getNotifications()[i]);
                    break;
                default:
                    break;
            }
        }
    }

    function createAddNotificationHTML(Notification) {
        var notificationHTML = '<div class="history__entry">\
            <span class="history__clock-icon">\
            <i class="fa fa-clock-o" aria-hidden="true"></i>\
            </span>\
            <span class="history__text">\
                You added <a href="#" class="history__link">'+ Notification.title + '</a>\
                by <a href="#" class="history__link">' + Notification.author + '</a>\
                to your <a href="#" class="history__link">' + Notification.filter + '</a>.\
            </span>\
            <div class="history__time">\
            ' + libraryController.timeSince(Notification.time)
            + '</div></div>';

        window.document.querySelector('.sidebar__history').innerHTML += notificationHTML;
    }

    function createFilterNotificationHTML(Notification) {
        var notificationHTML = '<div class="history__entry">\
            <span class="history__clock-icon">\
            <i class="fa fa-clock-o" aria-hidden="true"></i>\
            </span>\
            <span class="history__text">\
                You filtered <a href="#" class="history__link">'+ Notification.filter + '</a>\
            </span>\
            <div class="history__time">\
            ' + libraryController.timeSince(Notification.time)
            + '</div></div>';

        window.document.querySelector('.sidebar__history').innerHTML += notificationHTML;
    }

    function createSearchNotificationHTML(Notification) {
        var notificationHTML = '<div class="history__entry">\
            <span class="history__clock-icon">\
            <i class="fa fa-clock-o" aria-hidden="true"></i>\
            </span>\
            <span class="history__text">\
                You searched for <a href="#" class="history__link">'+ Notification.search + '</a>\
            </span>\
            <div class="history__time">\
            ' + libraryController.timeSince(Notification.time)
            + '</div></div>';

        window.document.querySelector('.sidebar__history').innerHTML += notificationHTML;
    }

    function createRatingNotificationHTML(Notification) {
        var notificationHTML = '<div class="history__entry">\
            <span class="history__clock-icon">\
            <i class="fa fa-clock-o" aria-hidden="true"></i>\
            </span>\
            <span class="history__text">\
                You rated <a href="#" class="history__link">'+ Notification.title + '</a>\
                by <a href="#" class="history__link">' + Notification.author + '</a>\
                with <a href="#" class="history__link">' + Notification.rating + '</a>.\
            </span>\
            <div class="history__time">\
            ' + libraryController.timeSince(Notification.time)
            + '</div></div>';

        window.document.querySelector('.sidebar__history').innerHTML += notificationHTML;
    }

    function updateRating() {
        var currentRating = Number(this.value);
        var libraryIdOfClickedBook = parseInt(this.id.substring(4, 6)) - 1;

        libraryController.updateRating(currentRating, libraryIdOfClickedBook);
    }

    return {
        initialize: initialize,
        clearLibrary: clearLibrary,
        createBookHTML: createBookHTML,
        displayLibrary: displayLibrary,
        displaySearch: displaySearch,
        getRating: getRating,
        displayMostPopular: displayMostPopular,
        addBook: addBook,
        displayNotifications: displayNotifications,
        clearNotifications: clearNotifications,
        createAddNotificationHTML: createAddNotificationHTML,
        createFilterNotificationHTML: createFilterNotificationHTML,
        createSearchNotificationHTML: createSearchNotificationHTML,
        createRatingNotificationHTML: createRatingNotificationHTML
    }
})(libraryController);