import { useState } from "react";
import { getCategoriesList } from "../api";

export function categoriesContext(token) {
  const [categoriesList, setCategoriesList] = useState([]);
  async function getCategories() {
    try {
      if (token) {
        const response = await getCategoriesList(token);
        setCategoriesList(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    categoriesList,
    getCategories
  }
}