// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp


function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

	closeNav();

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct0, slct1, slct2) {
	console.log(products);
	chosenProducts = [];
	var s0 = document.getElementById(slct0);
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s0.value, s1.value);
	console.log(s0.value);
	console.log(optionArray);
	console.log(s1.value);

	var emp = "Sry, no such product exits. "
	var empMethod = "Please go back to the previous section."

	if(optionArray.length === 0){
		var sp = document.createElement('p');
		sp.appendChild(document.createTextNode(emp));
		s2.appendChild(sp);

		var sp_1 = document.createElement('p');
		sp_1.appendChild(document.createTextNode(empMethod));
		s2.appendChild(sp_1);
	}else{

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	var price;
	var productDetail;
	var imgSrc;
	var space = ' ';
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		for (let k = 0; k<products.length; k++){
			if(products[k].name===productName){
				price = products[k].price;
				imgSrc = "./imgs/" + productName + ".png";
			}
		}
		productDetail = productName + '  ' + price + "$";
		checkbox.value = productDetail;
		s2.appendChild(checkbox);

		var sp = document.createElement('p');
		sp.appendChild(document.createTextNode(space));
		s2.appendChild(sp);

		var img = document.createElement('img');
		img.src = imgSrc;
		img.alt = productName;
		s2.appendChild(img);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productDetail;
		label.id = "productDetails";
		label.appendChild(document.createTextNode(productDetail));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));   
		chosenProducts.push(productName);
	}}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
	console.log(chosenProducts);
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}
