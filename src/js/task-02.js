const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach((ingredient, index, array) => {
  const liIngredient = document.createElement('li');
  liIngredient.classList.add('item');
  liIngredient.textContent = ingredients[index];
  const ulIngredients = document.querySelector('ul');
  ulIngredients.appendChild(liIngredient);
});


