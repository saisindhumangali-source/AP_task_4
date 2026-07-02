const products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        rating: 4.8,
        image: "images/laptop.jpg"
    },
    {
        name: "Smartphone",
        category: "Electronics",
        price: 30000,
        rating: 4.5,
        image: "images/phone.jpg"
    },
    {
        name: "Running Shoes",
        category: "Fashion",
        price: 2500,
        rating: 4.3,
        image: "images/shoes.jpg"
    },
    {
        name: "Backpack",
        category: "Fashion",
        price: 1200,
        rating: 4.1,
        image: "images/bag.jpg"
    },
    {
        name: "Java Programming",
        category: "Books",
        price: 650,
        rating: 4.9,
        image: "images/book.jpg"
    },
    {
        name: "Headphones",
        category: "Electronics",
        price: 3500,
        rating: 4.6,
        image: "images/headphones.jpg"
    }
];

const productContainer = document.getElementById("productContainer");

displayProducts(products);
const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let searchText = search.value.toLowerCase();

    let filteredProducts = products.filter(function(product){

        return product.name.toLowerCase().includes(searchText);

    });

    displayProducts(filteredProducts);

});
const category = document.getElementById("category");

category.addEventListener("change", function () {

    let selectedCategory = category.value;

    if (selectedCategory === "All") {
        displayProducts(products);
        return;
    }

    let filteredProducts = products.filter(function (product) {

        return product.category === selectedCategory;

    });

    displayProducts(filteredProducts);

});
const sort = document.getElementById("sort");

sort.addEventListener("change", function () {

    let sortedProducts = [...products];

    if (sort.value === "low") {

        sortedProducts.sort(function(a, b){
            return a.price - b.price;
        });

    }
    else if (sort.value === "high") {

        sortedProducts.sort(function(a, b){
            return b.price - a.price;
        });

    }
    else if (sort.value === "rating") {

        sortedProducts.sort(function(a, b){
            return b.rating - a.rating;
        });

    }

    displayProducts(sortedProducts);

});

function displayProducts(productList){

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h2>${product.name}</h2>

            <p>Category: ${product.category}</p>

            <p class="price">₹${product.price}</p>

            <p>⭐ ${product.rating}</p>
        `;

        productContainer.appendChild(card);

    });

}