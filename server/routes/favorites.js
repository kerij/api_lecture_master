var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

router.get('/', function (req, res) {
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      res.sendStatus(500);
    }

    client.query('SELECT * FROM pet_favorites', function(err, result){
      done();

      if (err) {
        res.sendStatus(500);
      }
      res.send(result.rows);
      console.log(result.rows);
    });
  });
});

router.post('/', function(req, res){
  var pet = req.body;

  pg.connect(connectionString, function(err, client, done){
    if (err) {
      res.sendStatus(500);
    }

    client.query('INSERT INTO pet_favorites(pet_name, img_url, description)'
                + 'VALUES ($1, $2, $3)',
                [pet.pet_name, pet.img_url, pet.description],
                function (err, result) {
                  done();

                  if (err) {
                    console.log(err);
                    res.sendStatus(500);
                  } else {res.sendStatus(201);
                  }


                });
  });
});


module.exports = router;
