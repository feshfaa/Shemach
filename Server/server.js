var soap = require("soap");
var app = require("express")();
var fs = require("fs");
var xml = fs.readFileSync("service.wsdl", "utf8");
const cors = require("cors");
app.use(cors());

var port = 5001;

var serviceObject = {
  ShemachService: {
    ShemachServiceSoapPort: {
      AddShemach: (args) => {
        console.log("AddShemach Function Started");
        return `id: ${args.id} fullName: ${args.name} FamilyNumber: ${args.familyNumber}`;
      },
      GetShemach: (args) => {
        console.log("GetShemach Function Started");
        return `id: ${args.id} fullName: ${args.name} FamilyNumber: ${args.familyNumber}`;
      },
      AddProduct: (args) => {
        console.log("AddProduct Function Started");
        return `${args.Quantity}Kg ${args.ProductType} `;
      },
      GetProduct: (args) => {
        console.log("GetProduct Function Started");
        return `${args.Quantity}Kg ${args.ProductType} `;
      },
      AddUser: (args) => {
        console.log("AddUser Function Started");
        return `${args.UserType} Username: ${args.Username}`;
      },
      GetUser: (args) => {
        console.log("GetUser Function Started");
        return `${args.UserType} Username: ${args.Username}`;
      },
      GetQuota: (args) => {
        console.log("GetQuota Function Started");
        return `${args.QuoataFamily} Family members, ${args.QuotaType} ${args.Quantity} ${args.Price}birr`;
      },
    },
  },
};

app.listen(port, function () {
  console.log("Listening on port " + port);
  var wsdl_path = "/book";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log(
    "Check http://localhost:" +
      port +
      wsdl_path +
      "?wsdl to see if the service is working"
  );
});
