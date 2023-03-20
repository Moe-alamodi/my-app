import React, { useEffect, useState } from "react";
import "./DashboardView.css";

const DashboardView = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, sethttpError] = useState(null);

  useEffect(() => {
    async function fetchRacipes() {
      console.log("fetching");
      try {
        const response = await fetch(
          "https://forkify-api.herokuapp.com/api/search?q=pizza"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        const loadedPizza = [];
        data.recipes.map((item) => {
          return loadedPizza.push({
            id: item.recipe_id,
            title: item.title,
            rank: item.social_rank,
            publisher: item.publisher,
            publisher_url: item.publisher_url,
            image_url: item.image_url,
          });
        });

        setRecipes(loadedPizza);
      } catch (error) {
        setIsLoading(false);
        sethttpError(error.message);
      }
      setIsLoading(false);
    }
    fetchRacipes();
  }, []);
  let content = isLoading ? (
    <p>spinner</p>
  ) : (
    <div className="recipes__container">
      <ul className="recipes">
        {recipes.map((recipe) => {
          return (
            <li className="recipe" key={recipe.id}>
              <img src={recipe.image_url} alt="" className="recipe__img" />
              <p className="recipe__name">{recipe.title}</p>
              <span className="recipe__details">
                This recipe was carefully designed and tested by{" "}
                <span className="recipe__details__publisher">
                  {recipe.publisher}.{" "}
                </span>
                Please check out directions at their website.
              </span>
              <a href={recipe.publisher_url} className="button">
                Direction
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
  if (httpError)
    content = <p style={{ textAlign: "center", color: "red" }}>{httpError}</p>;
  return (
    <div className="dashbord">
      <h1 className="dashbord__title">delicious Pizzafy recipes</h1>
      {content}
    </div>
  );
};

export default DashboardView;
