//articles.js
const Article = require('../models/articles.js');

exports.create = (request, response) => {
  const article = Object.assign({}, request.body);
  Article.create(article)
  .then(result => response.status(201).json(result))
  .catch((err) => console.log("article.create error", err));
};

exports.get = (request, response) => {
  Article.find()
  .then(result => response.status(200).json(result))
  .catch((err) => console.log("article.get error", err));
};