//articles.js
const Article = require('../models/articles.js');

exports.create = (request, response) => {
  const article = Object.assign({}, request.body);
  Article.create(article)
  .then(result => response.status(201).json(result))
  .catch((err) => console.log("article.create error", err));
};