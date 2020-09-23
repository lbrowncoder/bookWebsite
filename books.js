document.querySelector("displayBooks").appendChild(titleElement);

let authorElement = document.createElement("h2");
let authorText = document.createTextNode(item.Author);
authorElement.appendChild(authorText);
document.querySelector("#displayBooks").appendChild(authorElement);

let spanElement = document.createElement("span");
let priceText = document.createTextNode(item.Price);
authorElement.appendChild(PriceText);
document.querySelector("#displayBooks").appendChild(priceElement);

let nameElement = document.createElement("name");
let nameText = document.createTextNode(item.Name);
authorElement.appendChild(nameText);
document.querySelector("#displayBooks").appendChild(nameElement);

let descriptionElement = document.createElement("Description");
let descriptionText = document.createTextNode(item.Description);
authorElement.appendChild(descriptionText);
document.querySelector("#displayBooks").appendChild(descriptionElement);

let imgElement = document.createElement("img");
let imgText = document.createTextNode(img.author);
authorElement.appendChild(imgText);
document.querySelector("#displayBooks").appendChild(imgElement);
imgElement.height = 350;
imgElement.width = 350;

document.querySelector("#displayBooks").appendChild(imgElement)
  
let mybookshop = [
    {
    Author: "Saeed Jones",
    Name: "How We Fight for Our Lives",
    Price: "£12.99",
    Description: "Jones's bestselling memoir is a personal account of growing up in the South as a young gay man who's attempting to find himself while battling rocky relationships with family, friends, and lovers.",
    /*img scr = ".howWeFght.jpg";*/
    },
    {
    Author: "Jesmyn Ward",
    Name: "Salvage the Bones",
    Price: "£9.99",
    Description: "A 2011 National Book Award Winner, Salvage the Bones chronicles a 12-day period in which a poor Mississippi family faces the looming threat of a hurricane. With no mother, a drunken father, a pregnant 14-year-old, and wayward brothers, they have little access to helpful resources—except for love.",
    /*img.scr = "bones.jpg"*/
},
    {
    Author: "Maya Angelou",
    Name: "I Know Why the Caged Bird Sings",
    Price: "£11.99",
    Description: "Written by a legendary writer, civil rights activist, and one of Oprah's greatest friends, I Know Why the Caged Bird Sings is an poetic memoir that captures Angelou's childhood struggles and the freedoms of her adulthood, which allowed her to find strength amidst despair.",
    /*img.scr = "bird.jpg"*/    
    },
    {
    Author: "Akwaeke Emezi",
    Name: "Freshwater",
    Price: "8.99",
    Description: "In this debut for Emezi, we meet Ada, a young Nigerian woman who's born with multiple personalities (or spirits). As the story goes on, we hear from each, as they drive Ada towards reckless behavior as she grows up. But once she moves to America and endures a traumatic event, the spirits threaten to takeover.",
    /*img.scr = "water.jpg"*/    
    },
]
/*for (let i = 0; i < mybookshop.length; i++){
    let document,createElement("h2");
    document.createTextNode(mybookshop[i].Name);*/