import { useContext } from "react";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import { CategoryContext } from "../RecipeApp";
const MenuCategories = () => {
  const categoryList = useContext(CategoryContext);

  let categoryCards = categoryList.map((category) => (
    <Link
      to={`/menu-item-details/${category.idCategory}/${category.strCategory}`}
      key={category.idCategory}
    >
      <CategoryItem
        categoryImage={category.strCategoryThumb}
        categoryHeading={category.strCategory}
      />
    </Link>
  ));
  return (
    <div className="text-center">
      <h1 className="m-6  text-2xl md:text-3xl font-semibold border-green-400 pb-2   border-b-4 inline-block">
        Choose your Category
      </h1>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5">
        {categoryCards}
      </div>
    </div>
  );
};

export default MenuCategories;
