const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/index');
});

router.get('/index', (req, res) => {
   burger.selectAll((data) => {
       
       res.render('index', { burgers: data});
   });
});

router.post('/', (req, res) => {
   burger.insertOne(req.body.burger, () => {
       res.redirect('/index');
   });
});

router.post('/:id', (req, res) => {
   burger.updateOne(req.params.id, () => {
       res.redirect('/index')
   });
});

module.exports = router;

