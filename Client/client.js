var soap = require("soap");
var url = "http://localhost:5001/book?wsdl";

soap.createClient(url, function (err, client) {
  if (err) {
    throw err;
  }

  //postting or registering shemach
  var args = {
    id: 1,
    name:"Abeba Bela",
    familyNumber: 4
  };

  client.AddShemach(args, function (err, res) {
    if (err) throw err;
    console.log(res);
  });

  //getting shemach by id
  var resGetArgs = {
    id: "1",//search id
    name:"Abebe Bela",//setting name from database
    familyNumber: 4//setting familyNumber from database
  };

  client.GetShemach(resGetArgs, function (err, res) {
    if (err) throw err;
    console.log(res);
  });

  //Registering Product
  var argsProduct = {
    ProductType: "Suger",
    Quantity: 3,
    Price: 40
  };

  client.AddProduct(argsProduct, function (err, res) {
    if (err) throw err;
    console.log(res);
  });

  //Getting User by
  var resArgsUser = {
    ProductType: "Suger",
    Quantity: 3
  };

  client.GetProduct(resArgsUser, function (err, res) {
    if (err) throw err;
    console.log(res);
  });

  //Registering User
  var argsUser = {
    UserType: "Admin",
    Username:"Admin12",
    Password:"****"
  };

  client.AddUser(argsUser, function (err, res) {
    if (err) throw err;
    console.log(res);
  });

  //Geting User by username
  var argsUser = {
    UserType: "Admin",
    Username:"Admin12",
    Password:"****"
  };

  client.GetUser(argsUser, function (err, res) {
    if (err) throw err;
    console.log(res);
  });

  //Geting Quota by QuotaType
  var argsQuota = {
    QuoataFamily: 3,
    QuotaType: "Suger",
    Quantity: 2,
    Price:100
  };

  client.GetQuota(argsQuota, function (err, res) {
    if (err) throw err;
    console.log(res);
  });

});
