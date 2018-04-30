'use strict'

const showBookTemplate = require('../templates/books.handlebars')

const getBookSuccess = function (data) {
  const showBookHTML = showBookTemplate({books: data.books})
  $('.content').html(showBookHTML)
}

const clearBooks = function () {
  $('.content').empty()
}

module.exports = {
  getBookSuccess,
  clearBooks
}
