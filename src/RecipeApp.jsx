import { useState, useEffect } from "react";
import { fetchMealCategories } from "./api/api";

const RecipeApp = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMealCategories()
      .then((data) => {
        setCategories(data);
        
      })
      .catch((error) =>
        console.log("Error fetching meal categories: ", error.message)
      )
        .finally(() => setLoading(false));
      
  }, []);

  return <div>
    { loading ? <p>Loading...</p> :
      categories.map((category) => (
            <div key={category.idCategory}>
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <p>{category.strCategoryDescription}</p>
            </div>
        ))  
    }
  </div>;
};

export default RecipeApp;
