const port = 4000;

const express = require('express');
//const cors = require('cors');

const connection = require('./connection');
const headerChecker = require('./middlewares/header-checker');

connection.connect((err, db) => {
  if(err) return console.error(err);

  const app = express();
  //app.use(cors());
  app.use(headerChecker);

  app.get('/products', (req, res) => {
    const products = db.collection('products');
    products.find().toArray((err, docs) => {
      if(err) return console.err(err);
      docs = docs.map((doc) => {
        doc.id = doc._id;
        delete doc._id;
        return doc;
      });
      res.json(docs);
    });
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});