import axios from "axios"

export const getSectionsDetail = async (children) => {
  try {
    const data = await axios.get(
      `http://127.0.0.1:8000/api/pages/${children}/sections`
    );
    return data.data;
  } catch (error) {
    return [];
  }
};

export const getMenuHeader = async () => {
  try {
    const data = await axios.get(
      'http://127.0.0.1:8000/api/menus/header'
    );
    return data.data;
  } catch (error) {
    return [];
  }
};