let recipes = [
  {
    id: 1,
    recipeName: "chapati",
    recipeImage: "../assets/images/strawberry-cake.jpg",
    recipeIngredients: [
      "400g graham crackers",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
  {
    id: 2,
    recipeName: "matoke",
    recipeImage: "../assets/images/strawberry-cake.jpg",
    recipeIngredients: [
      "400g graham crackers",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
  {
    id: 3,
    recipeName: "rice",
    recipeImage: "../assets/images/strawberry-cake.jpg",
    recipeIngredients: [
      "2 cups of rice",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
];

let recipeContainer = document.getElementById("recipe-display-container");
let recipeDetailContainer = document.querySelector(".recipe-title > h1");
let recipeTitleSection = document.getElementById("recipe-section-title");
let recipeDetailModal = document.getElementById("myModal");
let recipeDetailModalClose = document.getElementById("modal-close");
recipeTitleSection.textContent = "Recipe of the week";

function displayRecipes() {
  recipes.map((recipe) => {
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("card");
    recipeCard.innerHTML = `
      <img src="${recipe.recipeImage}" clStrawberry Cream Cheesecakeass="card-img-top"
              alt="${recipe.recipeName}">
      <div class="card-body">
        <h5 class="card-title">${recipe.recipeName}</h5>
        <button>Read More</button>
      </div>
    `;

    function selectRecipe() {
      function openModal() {
        let recipeModalInfo = document.querySelector(".modal-info");
        recipeDetailModal.style.display = "block";
        let recipeDetails = "";
        recipeDetails += `
            <div class="image-container">
              <img src="${recipe.recipeImage}" />
            </div>
            <div class="recipe-information">
              <h5>${recipe.recipeName}</h5>
              <div class="ingredients-section">
                <h2>Ingredients</h2>
                <ul>
            `;
        recipe.recipeIngredients.forEach((ingredient) => {
          recipeDetails += `
                  <li>${ingredient}</li>
          `;
        });

        recipeDetails += ` 
                </ul>
              </div>
              <div class="preparation-section">
               <h2>Preparation Instruction</h2>
               <ol>
        `;
        recipe.recipePreparation.forEach((preparation) => {
          recipeDetails += `<li>${preparation}</li>`;
        });

        recipeDetails += `
               </ol>
              </div>
            </div>
        `;

        recipeDetails += `
            <div class="modify-buttons" id="modify-buttons">
              <button type="btn button" class="delete-button" id="delete-button">Delete</button>&nbsp;
              <button type="btn button" class="edit-button" data-bs-toggle="modal"
                  data-bs-target="#updateRecipeForm" id="edit-button">Edit</button>
            </div>
        `;

        recipeModalInfo.innerHTML = recipeDetails;
      }

      function closeModal() {
        recipeDetailModal.style.display = "none";
      }

      recipeCard.addEventListener("click", openModal);
      recipeDetailModalClose.addEventListener("click", closeModal);
    }
    selectRecipe();
    recipeContainer.appendChild(recipeCard);
  });
}

displayRecipes();
