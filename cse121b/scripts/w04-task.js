/* LESSON 3 - Programming Tasks */
let photoElement = document.querySelector('#photo');
/* Profile Object  */
/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Ariel Galera",
    photo: {
        src: "images/arielgalera.png",
        alt: "My profile Picture"
    },
    favoriteFoods: [
        "Chicken Adobo",
        "Pizza",
        "Biryani",
        "Cake"
    ], 

    hobbies: ["Cooking", "Singing", "Eating", "Basketball"],
    placesLived: [
        { place: "Cebu City, Philippines", length: "6 years" },
        { place: "Quezon City, Philippines", length: "6 years" },
        { place: "Sorsogon City, Philippines", length: "4 years" },
        { place: "La Union, Philippines", length: "8 years" },
        { place: "San Juan, Philippines", length: "2 years" }
    ]
};


/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    let dl = document.querySelector("#places-lived");
    dl.appendChild(dt);
    dl.appendChild(dd);
});

