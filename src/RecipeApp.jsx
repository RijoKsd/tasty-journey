import { useState, useEffect } from "react";
import { fetchMealCategories } from "./api/api";
import MenuCategories from "./pages/MenuCategories";

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

  const  Loader= ()=> {
    return (
      <div className="bg-slate-900 text-white text-5xl h-screen grid place-items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  };
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
