let mybookshop = [
    {
    author: "Saeed Jones",
    name: "How We Fight for Our Lives",
    price: "£12.99",
    description: "Jones's bestselling memoir is a personal account of growing up in the South as a young gay man who's attempting to find himself while battling rocky relationships with family, friends, and lovers.",
    photo: "./images",
    },
    {
    author: "Jesmyn Ward",
    name: "Salvage the Bones",
    price: "£9.99",
    description: "A 2011 National Book Award Winner, Salvage the Bones chronicles a 12-day period in which a poor Mississippi family faces the looming threat of a hurricane. With no mother, a drunken father, a pregnant 14-year-old, and wayward brothers, they have little access to helpful resources—except for love.",
    photo: "./images/bones.jpg",
},
    {
    author: "Maya Angelou",
    name: "I Know Why the Caged Bird Sings",
    price: "£11.99",
    description: "Written by a legendary writer, civil rights activist, and one of Oprah's greatest friends, I Know Why the Caged Bird Sings is an poetic memoir that captures Angelou's childhood struggles and the freedoms of her adulthood, which allowed her to find strength amidst despair.",
    photo: "./images/bird.jpg",    
    },
    {
    author: "Akwaeke Emezi",
    name: "Freshwater",
    price: "8.99",
    description: "In this debut for Emezi, we meet Ada, a young Nigerian woman who's born with multiple personalities (or spirits). As the story goes on, we hear from each, as they drive Ada towards reckless behavior as she grows up. But once she moves to America and endures a traumatic event, the spirits threaten to takeover.",
    photo: "./images/water.jpg",
    },
];

for (let i = 0; i < mybookshop.length; i++){

    let bookDiv = document.createElement("div"); // Create entire div for each book

    // book name
    let nameEl = document.createElement("h2");
    let bookname = document.createTextNode(mybookshop[i].name);
    nameEl.appendChild(bookname);

    // book author
    let authorEl = document.createElement("p");
    let bookauthor = document.createTextNode(`Author: ${mybookshop[i].author}`);
    authorEl.appendChild(bookauthor);

    // price
    let priceEl = document.createElement("p");
    let bookprice = document.createTextNode(`Price: ${mybookshop[i].price}`);
    priceEl.appendChild(bookprice);
    console.log(bookprice);

     // description
    let descriptionEl = document.createElement("p");
    let bookdescription = document.createTextNode(`${mybookshop[i].description}`);
    descriptionEl.appendChild(bookdescription);

    // image
    let imageEl = document.createElement("img");
    let bookphoto = document.getElementById(`${mybookshop[i].photo}`);
    imageEl.appendChild(bookphoto);
    imageEl.height = 250;
    imageEl.width = 250;
    console.log(imageEl),




    // appending each part of book to book div (order depends on order here)
    bookDiv.appendChild(nameEl);
    bookDiv.appendChild(authorEl); 
    bookDiv.appendChild(priceEl);
    bookDiv.appendChild(bookdescription);
    bookDiv.appendChild(imageEl);

    // appends the div to the entire document
    document.getElementById("books").appendChild(bookDiv);
}  
