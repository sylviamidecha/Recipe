const recipes = [
    { 
        id: 1,
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "bacon", "parmesan cheese", "black pepper"],
        instructions: "1. Cook spaghetti according to package instructions. Meanwhile, cook bacon in a skillet until crispy. Remove bacon and chop it into small pieces. <br> 2. In a bowl, whisk together eggs, parmesan cheese, and black pepper. <br> 3. Drain spaghetti, reserving some pasta water. Add hot spaghetti to the egg mixture and toss quickly. The heat from the pasta will cook the eggs. Add reserved pasta water if needed to create a creamy sauce. <br> 4. Add chopped bacon and toss again. Serve hot, garnished with additional parmesan cheese and black pepper.",
        image: "images/spagetti.jpg"
    },
    { 
        id: 1,
        name: "Chicken Stir-Fry",
        ingredients: ["chicken breast", "vegetables", "soy sauce", "sesame oil", "garlic"],
        instructions: "1. Cut chicken breast into bite-sized pieces. Chop vegetables of your choice. <br> 2. Heat sesame oil in a wok or large skillet over medium-high heat. Add minced garlic and stir-fry for a few seconds. <br> 3. Add chicken pieces and cook until browned and cooked through. <br> 4. Add vegetables and stir-fry until tender-crisp. <br> 5. Season with soy sauce and stir to combine. Serve hot with rice or noodles.",
        image:"images/chicken-stir.jpg"
    },
    { 
        id: 1,
        name: "Chocolate Chip Cookies",
        ingredients: ["flour", "butter", "sugar", "chocolate chips", "vanilla extract"],
        instructions: "1. Preheat oven to 350°F (175°C). Line baking sheets with parchment paper. <br> 2. In a large mixing bowl, cream together butter and sugar until light and fluffy. Beat in eggs one at a time, then stir in vanilla extract. <br> 3. Gradually add flour to the creamed mixture and mix well. Fold in chocolate chips. <br> 4. Drop dough by rounded tablespoonfuls onto prepared baking sheets. <br> 5. Bake in preheated oven for 8 to 10 minutes, or until edges are lightly golden. Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack to cool completely.",
        image:"images/chocolate-chip.jpg",
    }, { 
        id: 1,
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "bacon", "parmesan cheese", "black pepper"],
        instructions: "1. Cook spaghetti according to package instructions. Meanwhile, cook bacon in a skillet until crispy. Remove bacon and chop it into small pieces. <br> 2. In a bowl, whisk together eggs, parmesan cheese, and black pepper. <br> 3. Drain spaghetti, reserving some pasta water. Add hot spaghetti to the egg mixture and toss quickly. The heat from the pasta will cook the eggs. Add reserved pasta water if needed to create a creamy sauce. <br> 4. Add chopped bacon and toss again. Serve hot, garnished with additional parmesan cheese and black pepper.",
        image:"images/spagetti.jpg",
    },
    { 
        id: 1,
        name: "Chicken Stir-Fry",
        ingredients: ["chicken breast", "vegetables", "soy sauce", "sesame oil", "garlic"],
        instructions: "1. Cut chicken breast into bite-sized pieces. Chop vegetables of your choice. <br> 2. Heat sesame oil in a wok or large skillet over medium-high heat. Add minced garlic and stir-fry for a few seconds. <br> 3. Add chicken pieces and cook until browned and cooked through. <br> 4. Add vegetables and stir-fry until tender-crisp. <br> 5. Season with soy sauce and stir to combine. Serve hot with rice or noodles.",
        image:"images/chicken-stir.jpg",
    },
    { 
        id: 1,
        name: "Chocolate Chip Cookies",
        ingredients: ["flour", "butter", "sugar", "chocolate chips", "vanilla extract"],
        instructions: "1. Preheat oven to 350°F (175°C). Line baking sheets with parchment paper. <br> 2. In a large mixing bowl, cream together butter and sugar until light and fluffy. Beat in eggs one at a time, then stir in vanilla extract. <br> 3. Gradually add flour to the creamed mixture and mix well. Fold in chocolate chips. <br> 4. Drop dough by rounded tablespoonfuls onto prepared baking sheets. <br> 5. Bake in preheated oven for 8 to 10 minutes, or until edges are lightly golden. Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack to cool completely.",
        image:"images/chocolate-chip.jpg",
    },
    {
        id: 1,
        name: "Classic Margherita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "fresh mozzarella cheese", "fresh basil leaves", "olive oil"],
        instructions: "1. Preheat your oven to the highest setting (usually around 475°F or 245°C). If using a pizza stone, place it in the oven while preheating. <br> 2. Stretch out the pizza dough into a circle. <br> 3. Spread tomato sauce over the dough, leaving a border around the edges. <br> 4. Tear the fresh mozzarella into pieces and distribute evenly over the sauce. <br> 5. Drizzle with olive oil and sprinkle with salt. <br> 6. Transfer the pizza to the preheated oven and bake for about 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned. <br> 7. Remove from the oven, top with fresh basil leaves, slice, and serve.",
        image:"images/Margherita.jpg",
    },
    {
        id: 1,
        name: "Vegetable Lasagna",
        ingredients: ["lasagna noodles", "tomato sauce", "ricotta cheese", "mozzarella cheese", "parmesan cheese", "spinach", "zucchini", "bell peppers"],
        instructions: "1. Preheat oven to 375°F (190°C). Grease a 9x13-inch baking dish. <br> 2. Cook lasagna noodles according to package instructions, then drain and set aside. <br> 3. In a bowl, mix together ricotta cheese, mozzarella cheese, and parmesan cheese. <br> 4. Spread a thin layer of tomato sauce on the bottom of the prepared baking dish. <br> 5. Layer cooked lasagna noodles, ricotta cheese mixture, spinach, zucchini, and bell peppers. Repeat layers until all ingredients are used, ending with a layer of tomato sauce on top. <br> 6. Cover with foil and bake for 45 minutes. Remove foil and bake for an additional 15 minutes, or until cheese is bubbly and golden. <br> 7. Let cool for a few minutes before slicing and serving.",
        image:"images/chicken-stew.jpg",
    },
    {
        id: 1,
        name: "Beef Tacos",
        ingredients: ["ground beef", "taco seasoning", "tortillas", "shredded lettuce", "diced tomatoes", "shredded cheese", "sour cream", "salsa"],
        instructions: "1. In a skillet over medium heat, cook ground beef until browned. Drain excess fat. <br> 2. Add taco seasoning and water according to package instructions. Simmer for a few minutes until the mixture thickens. <br> 3. Warm tortillas in a separate skillet or microwave. <br> 4. Assemble tacos by spooning beef mixture onto tortillas and topping with shredded lettuce, diced tomatoes, shredded cheese, sour cream, and salsa. <br> 5. Serve immediately.",
        image:"images/chicken-stew.jpg",
        }
    
];

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");

function displayRecipes(recipesToShow) {
    recipeContainer.innerHTML = ""; // Clear previous recipes

    recipesToShow.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipeCard");
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}" class="recipeImage">
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
            <p>Instructions: ${recipe.instructions}</p>
            <div class="recipeButtons">
                <button class="editButton" onclick="editRecipe(${recipe.id})">Edit</button>
                <button class="deleteButton" onclick="deleteRecipe(${recipe.id})">Delete</button>
            </div>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

function deleteRecipe(recipeId) {
    const index = recipes.findIndex(recipe => recipe.id === recipeId);
    if (index !== -1) {
        recipes.splice(index, 1);
        displayRecipes(recipes);
    }
}

function editRecipe(recipeId) {
    console.log("Editing recipe with ID:", recipeId);
}

displayRecipes(recipes);

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
});