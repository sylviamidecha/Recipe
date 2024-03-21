document.addEventListener("DOMContentLoaded", function() {
function saveRecipe(recipe) {
    let savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    savedRecipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(savedRecipes));
}

// Function to display recipes
function displayRecipes() {
    let recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = `<h2>${recipe.name}</h2>
    <img src=${recipe.image}" alt="${recipe.name}" class="recipeImage">
    <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
    <p>Instructions: ${recipe.instructions}</p>
`; // Clear previous recipes

    let savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    savedRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipeCard");
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>Ingredients: ${recipe.ingredients}</p>
            <p>Instructions: ${recipe.instructions}</p>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}


// Event listener for form submission
document.getElementById("recipe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let recipeName = document.getElementById("recipe-name").value;
    let ingredients = document.getElementById("ingredients").value;
    let instructions = document.getElementById("instructions").value;
    
    if (recipeName === '' || ingredients === '' || instructions === '') {
        document.getElementById('error-message').style.display = 'block';
        return;
    }
    
    let recipe = {
        name: recipeName,
        ingredients: ingredients,
        instructions: instructions
    };
    
    // Save the recipe to local storage
    saveRecipe(recipe);
    
    // Redirect to recipe page
    window.location.href = "recipe.html";
});
});