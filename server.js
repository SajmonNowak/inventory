const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/customers/api', (req, res) => {
  const customers = [
      {name: "henrike"},
      {name: "tom"},
      {name: "john"}
  ] 
  
    res.json(customers);
});