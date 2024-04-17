import axios from "axios";

const API = "https://www.themealdb.com/api/json/v1/1/categories.php";

export async function fetchMealCategories() {
  const response = await axios.get(API);
  return response.data.categories;
}
