import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMealCategories } from "../api/api";
import CategoryItem from "./CategoryItem";
import Loader from "../components/Loader";
import axios from "axios";
import MenusByCategory from "./MenusByCategory";

const MenuItemDetails = () => {
  const { itemId, itemName } = useParams();
  const [categories, setCategories] = useState([]);
  const [menusByCategory, setMenusByCategory] = useState([]);

  const FilterByCategoryAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${itemName}`;

  async function fetchMenusByCategory() {
    try {
      const response = await axios.get(FilterByCategoryAPI);
      return setMenusByCategory(response.data.meals);
    } catch (error) {
      return console.log("Error fetching meal categories: ", error.message);
    }
  }

  useEffect(() => {
    fetchMealCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) =>
        console.log("Error fetching meal categories: ", error.message)
      );
    fetchMenusByCategory();
  }, []);

  const filteredMenuItem = categories.filter(
    (category) => category.idCategory === itemId
  );

  let filteredData =
    filteredMenuItem.length > 0 ? (
      filteredMenuItem.map((category) => (
        <CategoryItem
          key={category.idCategory}
          categoryImage={category.strCategoryThumb}
          categoryHeading={category.strCategory}
          categoryParagraph={category.strCategoryDescription}
        />
      ))
    ) : (
      <Loader />
    );

  return (
    <div className="bg-slate-700 text-white  min-h-max  ">
      <Link
        to="/"
        className="bg-blue-600 text-white p-3 rounded-lg inline-block m-5"
      >
        Back to Categories
      </Link>
      <div>{filteredData}</div>

      {menusByCategory && (
        <MenusByCategory
          menusByCategory={menusByCategory}
          itemName={itemName}
        />
      )}
    </div>
  );
};

export default MenuItemDetails;
