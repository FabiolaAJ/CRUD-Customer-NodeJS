const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      res.json(err);
     }else{
       res.json(customers)
     }
  
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      if (err) {
        res.json(err);
      }else{
        res.json(customer)
      }
    })
  })
};

controller.update = (req, res) => {
  const  id  = req.body.id;
  const newCustomer = req.body;

  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
    if (err) {
      res.json(err);
    }else{
      res.json(rows);
    }
  });
  });
};


controller.delete = (req, res) => {
  const { id } = req.body.id;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      if (err) {
        res.json(err);
      }else{
        res.json(rows);
      }
    });
  });
}

module.exports = controller;
