import { Link } from "react-router-dom";
const MenuCategories = ({ categoryList }) => {
  let categoryCards = categoryList.map((category) => (
    <Link
      to={`/menu-item-details/${category.idCategory}`}
      key={category.idCategory}
    >
      <div className="border border-green-400 rounded-lg p-3   ">
        <img src={category.strCategoryThumb} loading="lazy" alt={category.strCategory} />
        <h1 className="text-center uppercase mt-2 font-semibold md:text-lg">
          {category.strCategory}
        </h1>
      </div>
    </Link>
  ));
  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5">
      {categoryCards}
    </div>
  );
};

export default MenuCategories;
