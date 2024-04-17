import { useState, useEffect, createContext } from "react";
import { fetchMealCategories } from "./api/api";
import MenuCategories from "./pages/MenuCategories";
import Loader from "./components/Loader";

export const CategoryContext = createContext();

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
        <Loader />
      ) : categories.length > 0 ? (
        <CategoryContext.Provider value={categories}>
          <MenuCategories />
        </CategoryContext.Provider>
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default RecipeApp;
