// Sample data for recipes
let recipes = [
    {
      name: "Pasta Carbonara",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon", "Garlic"],
      instructions: "Cook spaghetti. Fry bacon and garlic. Mix eggs and cheese. Combine everything."
    },
    {
      name: "Chocolate Cake",
      ingredients: ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Butter"],
      instructions: "Mix dry ingredients. Add wet ingredients. Bake at 350°F for 30 minutes."
    }
  ];
  
  // Display recipes
  function displayRecipes(filteredRecipes = recipes) {
    const recipeList = document.getElementById("recipes");
    recipeList.innerHTML = "";
  
    filteredRecipes.forEach(recipe => {
      const recipeCard = document.createElement("div");
      recipeCard.className = "recipe-card";
  
      recipeCard.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      `;
  
      recipeList.appendChild(recipeCard);
    });
  }
  
  // Add new recipe
  document.getElementById("add-recipe-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("recipe-name").value;
    const ingredients = document.getElementById("recipe-ingredients").value.split(",").map(item => item.trim());
    const instructions = document.getElementById("recipe-instructions").value;
  
    const newRecipe = {
      name,
      ingredients,
      instructions
    };
  
    recipes.push(newRecipe);
    displayRecipes();
  
    // Clear form
    document.getElementById("add-recipe-form").reset();
  });
  
  // Search recipes
  document.getElementById("search-btn").addEventListener("click", function () {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );
    displayRecipes(filteredRecipes);
  });
  
  // Initial display
  displayRecipes();