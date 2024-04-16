import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMealCategories } from "../api/api";
import CategoryItem from "./CategoryItem";
import Loader from "../components/Loader";

const MenuItemDetails = () => {
  const { itemId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchMealCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) =>
        console.log("Error fetching meal categories: ", error.message)
      );
  }, []);

  const filteredMenuItem = categories.filter(
    (category) => category.idCategory === itemId
  );

  let filteredData =
    filteredMenuItem.length > 0 ? (
      filteredMenuItem.map((category) => (
        <CategoryItem
          key={category.idCategory}
          categoryId={category.idCategory}
          categoryImage={category.strCategoryThumb}
          categoryHeading={category.strCategory}
          categoryParagraph={category.strCategoryDescription}
        />
      ))
    ) : (
      <Loader />
    );

  return (
    <div className="bg-slate-700 text-white min-h-dvh  md:min-h-max  ">
      <Link to="/" className="bg-blue-600 text-white p-3 rounded-lg inline-block m-5">
        Back to Categories
      </Link>
      <div>{filteredData}</div>
    </div>
  );
};

export default MenuItemDetails;
