import CategoryItem from "./CategoryItem";

const MenusByCategory = ({ menusByCategory, itemName }) => {
  console.log(menusByCategory);
  let categoryData = menusByCategory.map((menu) => (
    <CategoryItem
      key={menu.idMeal}
      categoryImage={menu.strMealThumb}
      categoryHeading={menu.strMeal}
      //   categoryParagraph={menu.strCategoryDescription}
    />
  ));
  return (
    <div className="bg-white text-black  ">
      <div className="pt-3 text-center">
        <h1 className="m-6  text-2xl md:text-3xl font-semibold border-green-400 pb-2   border-b-4 inline-block">
          {itemName} Menu
        </h1>
      </div>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5 ">
        {categoryData && categoryData.length > 0 ? (
          categoryData
        ) : (
          <p >No data found</p>
        )}
      </div>
    </div>
  );
};

export default MenusByCategory;
