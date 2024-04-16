import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
const MenuCategories = ({ categoryList }) => {
  let categoryCards = categoryList.map((category) => (
    <Link
      to={`/menu-item-details/${category.idCategory}`}
      key={category.idCategory}
    >
     
      <CategoryItem
       categoryId={category.idCategory}
       categoryImage={category.strCategoryThumb}
       categoryHeading={category.strCategory}
        />
    </Link>
  ));
  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5">
      {categoryCards}
    </div>
  );
};

export default MenuCategories;
