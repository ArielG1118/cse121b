/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Ariel Galera';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/arielgalera.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile picture of ${fullName}`);


/* Step 5 - Array */
let favFoods = ['Chicken Adobo', 'Pizza', 'Biyrani', 'Cake'];
foodElement.innerHTML = favFoods.join(', ');
let newFavoriteFood = "Carbonara";
favFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;