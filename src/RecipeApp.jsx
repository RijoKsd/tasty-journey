import { useState, useEffect } from "react";
import { fetchMealCategories } from "./api/api";
import MenuCategories from "./pages/MenuCategories";
import Loader from "./components/Loader";

const RecipeApp = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMealCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) =>
        console.log("Error fetching meal categories: ", error.message)
      )
      .finally(() => setIsLoading(false));

      
  }, []);

 
  return (
    <div>
      {isLoading ? (
       < Loader/>
      ) : categories.length > 0 ? (
        <MenuCategories categoryList={categories} />
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default RecipeApp;
