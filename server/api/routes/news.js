const express = require('express');
const router = express.Router();
const mockNews = require('../../../mocks/news')

router.get('/', (req, res, next) => {
  res.status(200).json(mockNews);
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Add next news',
    news: req.body,
  });
});

router.get('/:newsId', (req, res, next) => {
  const newsWithId = mockNews.sources.filter(news => news.id === req.params.newsId);
  res.status(200).json({
    sources: newsWithId
  });
});

router.patch('/:newsId', (req, res, next) => {
  res.status(200).json({
    message: `Patch news with id: ${req.params.newsId}`,
  });
});

router.delete('/:newsId', (req, res, next) => {
  res.status(200).json({
    message: `Delete news with id: ${req.params.newsId}`,
  });
});

module.exports = router;
