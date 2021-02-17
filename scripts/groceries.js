// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetable: true,
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true
	},
	{
		name: "banana",
		fruit: true,
		vegetarian: false,
		glutenFree: true,
		price: 0.99,
		organic: true
	},
	{
		name: "bread",
		flourMade: true,
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: true
	},
	{
		name: "salmon",
		meat: true,
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: false
	},
	{
		name: "pork",
		meat: true,
		vegetarian: false,
		glutenFree: true,
		price: 8.00,
		organic: false
	},
	{
		name: "noodle",
		flourMade: true,
		vegetarian: true,
		glutenFree: false,
		price: 1.82,
		organic: false
	},
	{
		name: "ginger",
		vegetable: true,
		vegetarian: true,
		glutenFree: true,
		price: 0.94,
		organic: true
	},
	{
		name: "shrimp",
		meat: true,
		vegetarian: false,
		glutenFree: true,
		price: 12.00,
		organic: false
	},
	{
		name: "apple juice",
		juice: true,
		vegetarian: true,
		glutenFree: true,
		price: 5.00,
		organic: false
	},
	{
		name: "cookie",
		snacks: true,
		vegetarian: true,
		glutenFree: false,
		price: 4.5,
		organic: false
	},
	{
		name: "chocolate",
		snacks: true,
		vegetarian: true,
		glutenFree: true,
		price: 3.20,
		organic: true
	}



];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, res, restriction) {
	let product_names = [];
	let product_fitter = []
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction.indexOf("Vegetarian") != -1) && (prods[i].vegetarian == true)){
			product_fitter.push(prods[i]);
		}
		else if ((restriction.indexOf("GlutenFree") != -1) && (prods[i].glutenFree == true)){
			product_fitter.push(prods[i]);
		}
		else if (restriction == "None"){
			product_fitter.push(prods[i]);
		}
		else if((restriction.indexOf("Organic") != -1)&&(prods[i].organic == true)){
			product_fitter.push(prods[i]);
		}
	}

	for (let i = 0; i<product_fitter.length; i++){
		if((res.indexOf("Vegetable") != -1) && (product_fitter[i].vegetable == true)){
			product_names.push(product_fitter[i].name);
		}
		else if((res.indexOf("Fruit") != -1) && (product_fitter[i].fruit == true)){
			product_names.push(product_fitter[i].name);
		}
		else if((res.indexOf("Flour-made") != -1) && (product_fitter[i].flourMade == true)){
			product_names.push(product_fitter[i].name);
		}
		else if((res.indexOf("Juice") != -1) && (product_fitter[i].juice == true)){
			product_names.push(product_fitter[i].name);
		}
		else if((res.indexOf("Snacks") != -1) && (product_fitter[i].snacks == true)){
			product_names.push(product_fitter[i].name);
		}
	}
	product_names.sort(function(a, b) {
		var priceA, priceB;
		for(let i = 0; i<products.length; i++){
			if(products[i].name===a){
				priceA = products[i].price;
			}else if(products[i].name === b){
				priceB = products[i].price;
			}
		}
		if (priceA < priceB) return 1;
		if (priceA > priceB) return -1;
		return 0;
	});
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	chosenWithoutPrice = [];
	var prod;
	console.log(chosenProducts);
	for(let i = 0; i<chosenProducts.length; i++){
		prod = chosenProducts[i].split(" ")[0];
		chosenWithoutPrice.push(prod);
	}
	console.log(chosenWithoutPrice);
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenWithoutPrice.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}