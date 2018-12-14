import React from "react";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map((recipe, i) => {
        return (
          <div key={i} style={{ marginBottom: "2rem" }} className="col-md-4">
            <div className="recipes__box">
              <img
                className="recipe__box-image"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipe__title" style={{ marginTop: "2rem" }}>
                  {recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p className="recipe__subtitle">
                  Publisher: <span>{recipe.pusblisher}</span>
                </p>
              </div>
              <button className="recipe_buttons">View recipe</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
