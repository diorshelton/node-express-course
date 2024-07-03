const { products } = require("./data");
const express = require("express");
const app = express();

app.use(express.static("./public"));

console.log("Express Tutorial;");

app.get("/api/v1/test", (req, res) => {
	res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
	res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
	const idToFind = parseInt(req.params.productID);
	const product = products.find((p) => p.id === idToFind);
	if (product === undefined) {
		res.json({ message: "That product was not found" });
	} else {
		res.json(product);
	}
});

app.get("/api/v1/query", (req, res) => {
	const { search, limit, maxprice } = req.query;
	console.log(req.query);
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
  if (maxprice) {
    let amount = Number(maxprice)
    sortedProducts = sortedProducts.filter( (product) => {
      return product.price < amount
    }) 
  }
	res.send(sortedProducts);
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
	console.log("server is listening on port 3000");
});
