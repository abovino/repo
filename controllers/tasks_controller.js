var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/:person_id/tasks/create', function (req, res) {
  models.Task.create({
    task: req.body.task,
    person_id: req.params.person_id
  }).then(function() {
    res.redirect('/');
  });
});

router.delete('/:person_id/delete/:id', function (req, res) {
  console.log("STUFF: " + req.params.id);
  console.log("MORE STUFF: " + req.params.person_id);
  models.Task.destroy({
    where: {
      id: req.params.id,
      person_id: req.params.person_id
    }
  }).then(function() {
    res.redirect('/');
  })
})

module.exports = router;
