import { getCategoriesList } from "../api";
import { getObjectItem } from "../util/storage";

export async function categoriesList() {
  const { token } = getObjectItem();
  let categoriesList;

  if (token) {
    categoriesList = await getCategoriesList(token);
  }
  return categoriesList;
}
