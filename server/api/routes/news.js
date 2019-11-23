const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /news'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST requests to /news'
  });
});

router.get('/:newsId', (req, res, next) => {
  const id = req.params.newsId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID'
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

router.patch('/:newsId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated news'
  });
});

router.delete('/:newsId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted news'
  });
});

module.exports = router;
