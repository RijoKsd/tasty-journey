const CategoryItem = ({
  categoryImage,
  categoryHeading,
  categoryParagraph,
}) => {
  return categoryParagraph ? (
    <div className=" grid md:grid-cols-2 place-items-center p-3 ">
      <div>
        <img src={categoryImage} alt={categoryHeading} className="w-full" />
        <h1 className="text-center uppercase mt-2 font-semibold text-4xl mb-5 md:mb-0">
          {categoryHeading}
        </h1>
      </div>
      <p className="leading-7">{categoryParagraph}</p>
    </div>
  ) : (
    <div className="border border-green-400 rounded-lg p-3  ">
      <img
        src={categoryImage}
        loading="lazy"
        alt={categoryHeading}
        className=" duration-100 ease-in hover:scale-105"
      />
      <h1 className="text-center uppercase mt-2 font-semibold text-xs md:text-lg">
        {categoryHeading}
      </h1>
    </div>
  );
};

export default CategoryItem;
