import axios from "axios"

export const getSectionsDetail = async (children) => {
  try {
    const data = await axios.get(
      `https://yap-cms.herokuapp.com/api/pages/${children}/sections`
    );
    return data.data;
  } catch (error) {
    return [];
  }
};

export const getMenuHeader = async () => {
  try {
    const data = await axios.get(
      'https://yap-cms.herokuapp.com/api/menus/header'
    );
    return data.data;
  } catch (error) {
    return [];
  }
};

export const getText = async () => {
  try {
    const data = await axios.get(
      'https://yap-cms.herokuapp.com/api/texts'
    );
    return data.data;
  } catch (error) {
    return [];
  }
};

export const getTheme = async () => {
  try {
    const data = await axios.get(
      'https://yap-cms.herokuapp.com/api/themes'
    );
    return data.data;
  } catch (error) {
    return [];
  }
};

export const getLocation = async () => {
  try {
    const data = await axios.get(
      'https://yap-cms.herokuapp.com/api/locations'
    );
    return data.data;
  } catch (error) {
    return [];
  }
};