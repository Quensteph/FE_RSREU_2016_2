var library = (function (Book, Notification) {
  'use strict';

  var COVERS_FOLDER_PATH = 'assets/img/covers/';
  var MAX_RATING_VALUE = 5;

  var LibraryDB = [
    new Book(1, 'Jewels of Nizam', 'Geeta Devi', COVERS_FOLDER_PATH + 'geeta-devi_jewels-of-nizam.png', 2),
    new Book(2, 'Cakes & Bakes', 'Sanjeev Capoor', COVERS_FOLDER_PATH + 'sanjeev-capoor_cakes-&-bakes.png', 1),
    new Book(3, 'Jamie\'s Kitchen', 'Jamie Oliver', COVERS_FOLDER_PATH + 'jamie-oliver_jamies-kitchen.png', 0),
    new Book(4, 'Inexpensive Family Meals', 'Simon Holst', COVERS_FOLDER_PATH + 'simon-hoist_inexpensive-family-meals.png', 0),
    new Book(5, 'Paleo Slow Cooking', 'Chrissy Gower', COVERS_FOLDER_PATH + 'chrissy-gower_paleo-slow-cooking.png', 0),
    new Book(6, 'Cook Like an Italian', 'Tobie Puttock', COVERS_FOLDER_PATH + 'tobie-puttock_cook-like-an-italian.png', 0),
    new Book(7, 'Suneeta Vaswani', 'Geeta Devi', COVERS_FOLDER_PATH + 'geeta-devi_suneeta-vaswani.png', 0),
    new Book(8, 'Jamie Does', 'Jamie Oliver', COVERS_FOLDER_PATH + 'jamie-oliver_jamie-does.png', 0),
    new Book(9, 'Jamie\'s Italy', 'Jamie Oliver', COVERS_FOLDER_PATH + 'jamie-oliver_jamies-italy.png', 0),
    new Book(10, 'Vegetables Cookbook', 'Matthew Biggs', COVERS_FOLDER_PATH + 'matthew-biggs_vegetables-cookbook.png', 0)
  ];

  var NotificationDB = [
    new Notification(1, 'Jamie\'s Italy', 'Jamie Oliver', 'Library', null, null, new Date(2015, 9, 29, 0, 4), 'add'),
    new Notification(2, 'Vegetables Cookbook', 'Matthew Biggs', 'Library', null, null, new Date(2016, 10, 29, 7, 37), 'add')
  ];

  return {
    maxRatingValue: MAX_RATING_VALUE,
    coversFolder: COVERS_FOLDER_PATH,
    LibraryDB: LibraryDB,
    NotificationDB: NotificationDB
  }
})(Book, Notification);