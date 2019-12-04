const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const News = require('../model/news');

router.get('/', (req, res, next) => {
  News
    .find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({
          message: 'No entries found'
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    })
});

router.post('/', (req, res, next) => {
  const {
    category,
    country,
    description,
    id,
    language,
    name,
    url
  } = req.body
  const product = new News({
    _id: new mongoose.Types.ObjectId(),
    category,
    country,
    description,
    id,
    language,
    name,
    url,
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Add next news',
        news: result,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
});

router.get('/:newsId', (req, res, next) => {
  News.findById(req.params.newsId)
    .exec()
    .then(doc => {
      console.log('From database', doc);
      if (doc) {
        res.status(200).json({doc});
      } else {
        res.status(404).json({message: 'No valid entry found for provided ID'});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
});

router.patch('/:newsId', (req, res, next) => {
  const updateOps = {};
  for(const ops of req.body) {   // we need pass request with body like this [{"propName": "url", "value": "onliner.by"}]
    updateOps[ops.propName] = ops.value;
  }
  News
    .update({_id: req.params.newsId}, {$set: updateOps})
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    })
});

router.delete('/:newsId', (req, res, next) => {
  News
    .remove({_id: req.params.newsId})
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error:err
      })
    });
});

module.exports = router;
