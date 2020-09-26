let mybookshop = [
    {
    author: "Saeed Jones",
    name: "How We Fight for Our Lives",
    price: "£12.99",
    description: "Jones's bestselling memoir is a personal account of growing up in the South as a young gay man who's attempting to find himself while battling rocky relationships with family, friends, and lovers.",
    photo: "./images/howWeFight.jpg",
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
    price: "£8.99",
    description: "In this debut for Emezi, we meet Ada, a young Nigerian woman who's born with multiple personalities (or spirits). As the story goes on, we hear from each, as they drive Ada towards reckless behavior as she grows up. But once she moves to America and endures a traumatic event, the spirits threaten to takeover.",
    photo: "./images/water.jpg",
    },
    {
    author: "Chimamanda Ngozi Adiche",
    name: "We Should All Be Feminists",
    price: "£7.99",
    description: "Adapted from her TEDx Talk of the same name, Adiche uses personal experiences and understanding of sexual politics to define what feminism means in the 21st century.",
    photo: "./images/all.jpg",    
    },
    {
    author: "Marlon James",
    name: "Black Leopard, Red Wolf",
    price: "£18.99",
    description: "Already being called one of the best books of the year, James' epic fantasy honors African mythology and history. In it, a hunter named Tracker must find a mysterious missing boy with the help of a rag-tag group of mercenaries. The first of a planned trilogy, some are calling it the 'African Game of Thrones' And Black Panther star Michael B. Jordan just earned the film rights for the book through his production company, Outlier Society.",
    photo: "./images/wolf.jpg",    
    },
    {
    author: "Helen Oyeyemi",
    name: "Gingerbread",
    price: "£13.99",
    description: "In a re-imagining of the classic German fairy tale Hansel and Gretel, a woman named Harriet narrates her origin story to her daughter Perdita. She makes a mysterious gingerbread that's incredibly popular in Harriet's magical hometown of Druhástrana. And it's especially loved by her childhood best friend: Gretel.",
    photo: "./images/ginger.jpg",
    },
];

for (let i = 0; i < mybookshop.length; i++){

    
    let bookDiv = document.createElement("div"); // Create entire div for each book
    bookDiv.className = "container";
    let bookTextContainer = document.createElement("div");

    function btnFunction() {
        let btn = document.createElement("button");

    }

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
    imageEl.className = 'bookImage'; 
    imageEl.src = (`${mybookshop[i].photo}`);
    imageEl.height = 200;
    imageEl.width = 200;
    console.log(imageEl),



    // appending each part of book to book div (order depends on order here)
    bookTextContainer.appendChild(nameEl);
    bookTextContainer.appendChild(authorEl); 
    bookTextContainer.appendChild(priceEl);
    bookTextContainer.appendChild(bookdescription);


    bookDiv.appendChild(imageEl);
    bookDiv.appendChild(bookTextContainer);
    
  

    // appends the div to the entire document
    document.getElementById("books").appendChild(bookDiv);
    }